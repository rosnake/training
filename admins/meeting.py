#!/usr/bin/env Python
# coding=utf-8

import tornado.escape
from handlers.base import BaseHandler
from methods.utils import UserDataUtils
from methods.utils import UserAuthUtils
from methods.controller import PageController
from methods.toolkits import DateToolKits
from methods.debug import *
from orm.meeting import MeetingModule
from orm.topics import TopicsModule
import json


# 继承 base.py 中的类 BaseHandler
class AdminMeetingHandler(BaseHandler):
    """
    用户首页处理，显示一些客户不需要登陆也可查看的信息
    """
    def get(self):
        page_controller = PageController()
        render_controller = page_controller.get_render_controller()
        if self.session["authorized"] is None or self.session["authorized"] is False:
            self.redirect("/login?next=/admin/meeting")
            return

        render_controller["index"] = False
        render_controller["authorized"] = self.session["authorized"]
        render_controller["login"] = False
        render_controller["admin"] = self.session["admin"]
        render_controller["organizer"] = self.session["organizer"]

        username = self.get_current_user()
        if username is not None:
            meeting_tables = self.__get_meeting_table()
            topics_tables = self.__get_all_no_finish_topics()
            self.render("admin/meeting.html",
                        meeting_tables=meeting_tables,
                        controller=render_controller,
                        topics_tables=topics_tables,
                        username=username,
                        )

    def post(self):
        response = {"status": True, "data": "", "message": "failed"}
        date_kits = DateToolKits()

        operation = self.get_argument("operation")
        topic_id = self.get_argument("topic_id")
        user_name = self.get_argument("user_name")
        meeting_room = self.get_argument("meeting_room")
        meeting_date = self.get_argument("meeting_date")

        if operation == "modify":
            ret = self.__modify_meeting_info_by_id(topic_id, user_name, meeting_room, meeting_date)
            if ret is True:
                response["status"] = True
                response["message"] = "修改成功！"
                response["data"] = date_kits.get_now_day_str()
                self.write(json.dumps(response))
            else:
                response["status"] = False
                response["message"] = "修改失败！"
                response["data"] = date_kits.get_now_day_str()
                self.write(json.dumps(response))

            return

    def __get_meeting_table(self):
        meeting_modules = MeetingModule.get_all_meeting()
        meeting_table = []

        if meeting_modules:
            for x in meeting_modules:
                tmp = {"meeting_id": x.id, "topic_id": x.topic_id, "topic_title": x.topic_title,
                       "current_meeting": x.current_meeting, "user_name": x.user_name,
                       "meeting_room": x.meeting_room, "meeting_date": x.meeting_date}

                meeting_table.append(tmp)

        return meeting_table

    def __get_all_no_finish_topics(self):
        topics_module = TopicsModule.get_all_topics()
        if topics_module is None:
            return None

        topics_tables = []
        for topics in topics_module:
            if topics.finish is False:
                tmp = {
                    "topic_id": topics.id, "name": topics.username, "image": topics.image, "title": topics.title,
                    "current": topics.current, "finish": topics.finish,  "time": topics.datetime,
                    "description": topics.brief
                       }
                topics_tables.append(tmp)

        return topics_tables

    def __modify_meeting_info_by_id(self, meeting_id, user_name, meeting_room, meeting_date):
        return UserDataUtils.modify_meeting_info_by_id(meeting_id, user_name, meeting_room, meeting_date)
