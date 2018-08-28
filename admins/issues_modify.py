#!/usr/bin/env Python
# coding=utf-8

import tornado.escape
import methods.readdb as mrd
from handlers.base import BaseHandler
from methods.utils import UserDataUtils
from methods.utils import UserAuthUtils


# 继承 base.py 中的类 BaseHandler

class AdminIssuesModifyHandler(BaseHandler):
    """
    该类处理的主要是登陆后显示的主页和基于主页的操作
    该类只有在登陆成功后才会显示主页页面，登陆失败，不显示该页面
    """
    def get(self):
        # 用户渲染表格模板的数据接口
        # 后续该接口需要从数据库读取
        controller = UserDataUtils.get_render_controller()
        controller["index"] = False
        controller["authorized"] = True
        controller["login"] = False
        issues_id = self.get_argument("issues_id")
        username = self.get_current_user()
        score_tables = UserDataUtils.get_user_score_tables()
        print("issues_id:"+issues_id)
        print(type(issues_id))
        issues_table = UserDataUtils.get_user_topics_by_id(issues_id)
        if issues_table is None:
            print("issues_table is None")
        role = UserAuthUtils.get_role_by_name(username)
        if role is None:
            role="normal"

        self.render("admin/issues_modify.html", controller=controller, issues_table=issues_table)

    def post(self):
        username = self.get_argument("username")
        password = self.get_argument("password")
        user_infos = mrd.select_table(table="users",column="*",condition="username",value=username)
        if user_infos:
            db_pwd = user_infos[0][2]
            if db_pwd == password:
                print("username:%s pwd:%s db_pwd %s" % (username, password, db_pwd))
                # 将当前用户名写入 cookie，方法见下面
                self.set_current_user(username)
                self.write(username)
            else:
                print("username:%s pwd:%s " % (username, password))
                self.write("-1")
        else:
            self.write("-1")
