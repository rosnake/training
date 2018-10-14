#!/usr/bin/env Python
# coding=utf-8

from handlers.base import BaseHandler
from orm.issues_info import IssuesInfoModule
from methods.toolkits import DateToolKits
import json
from methods.debug import *
from handlers.decorator import handles_get_auth
from handlers.decorator import handles_post_auth
from orm.operation_history import OperationHistoryModule


#继承 base.py 中的类 BaseHandler
class ApplicationsHandler(BaseHandler):
    """
    用户议题申报处理
    """
    @handles_get_auth("/applications")
    def get(self):
        user_name = self.get_current_user()
        # 先判断是否完善其他信息，如果没有完善，跳转到信息完善页面
        if user_name is not None:
            user_topic = self.__get_all_current_user_topics(user_name)
            self.render("applications.html",
                        controller=self.render_controller,
                        user_name=user_name,
                        user_topic=user_topic,
                        language_mapping=self.language_mapping,
                        )

    @handles_post_auth
    def post(self):
        response = {"status": True, "data": "", "message": "failed"}
        date_kits = DateToolKits()
        response["data"] = date_kits.get_now_day_str()

        operation = self.get_argument("operation")
        topic_name = self.get_argument("topic_name")
        topic_brief = self.get_argument("topic_brief")
        topic_date = self.get_argument("topic_date")
        user_name = self.get_current_user()

        if operation == "apply_issues":
            ret = self.__add_topics(user_name, topic_name, topic_brief, topic_date)
            if ret is True:
                response["status"] = True
                response["message"] = "新增成功！"
                response["data"] = date_kits.get_now_day_str()
                opt="apply a issues, title: " + topic_name
                self.__record_operation_history(user_name, opt)
                self.write(json.dumps(response))
                return
            else:
                response["status"] = False
                response["message"] = "当前议题已存在"
                response["data"] = date_kits.get_now_day_str()
                self.write(json.dumps(response))
                return

    def __get_all_current_user_topics(self, user_name):
        issues_module = self.db.query(IssuesInfoModule).filter(IssuesInfoModule.user_name == user_name).all()
        if issues_module is None:
            return None

        issues_tables = []
        for issues in issues_module:
            tmp = {
                "issues_id": issues.id, "keynote_user_name": issues.user_name, "issues_image": issues.issues_image,
                "issues_title": issues.issues_title, "keynote_chinese_name": issues.chinese_name,
                "current": issues.current, "finish": issues.finish,  "date_time": issues.date_time,
                "issues_brief": issues.issues_brief, "issues_score": issues.issues_score,
                "issues_meeting_room": issues.issues_meeting_room,
                "issues_evaluate_finish": issues.issues_evaluate_finish, "voluntary_apply": issues.voluntary_apply
                   }
            issues_tables.append(tmp)

        return issues_tables

    def __add_topics(self, topic_user, topic_name, topic_brief, topic_date):
        rule = self.db.query(IssuesInfoModule).filter(IssuesInfoModule.issues_title == topic_name).first()
        if rule is not None:
            logging.error("current topics is exit")
            return False

        topic_module = IssuesInfoModule()
        topic_module.user_name = topic_user
        topic_module.chinese_name = "unknown"
        topic_module.issues_title = topic_name
        topic_module.issues_brief = topic_brief
        topic_module.date_time = topic_date
        topic_module.current = False
        topic_module.finish = False
        topic_module.issues_image = "null"
        topic_module.voluntary_apply = True
        topic_module.is_system_user = True

        self.db.add(topic_module)
        self.db.commit()
        return True

    def __record_operation_history(self, impact_user, operation):
        # 记录操作历史
        history = OperationHistoryModule()
        history.operation_user_name = self.session["user_name"]
        history.operation_details = operation
        history.impact_user_name = impact_user

        self.db.add(history)
        self.db.commit()
