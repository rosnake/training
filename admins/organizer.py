#!/usr/bin/env Python
# coding=utf-8

import tornado.escape
import methods.readdb as mrd
from handlers.base import BaseHandler
from methods.utils import UserDataUtils
from methods.utils import UserAuthUtils
import logging  # 引入logging模块
# logging.basicConfig函数对日志的输出格式及方式做相关配置
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(funcName)s-%(filename)s[line:%(lineno)d] - %(levelname)s: %(message)s')


# 继承 base.py 中的类 BaseHandler
class AdminOrganizerHandler(BaseHandler):
    """
    用户首页处理，显示一些客户不需要登陆也可查看的信息
    """
    def get(self):
        usernames = mrd.select_columns(table="users",column="username")
        one_user = usernames[0][0]
        # print ("one user name:%s" % one_user)
        username = self.get_current_user()
        controller = UserDataUtils.get_render_controller()
        controller["index"] = True
        controller["authorized"] = False
        controller["login"] = False

        if username is not None:
            controller["authorized"] = True
            print("################"+username)

        organizer_tables = UserDataUtils.get_organizer_tables()
        persons = UserDataUtils.get_user_info_tables()
        self.render("admin/organizer.html",
                    persons = persons,
                    controller = controller,
                    username=username,
                    organizer_tables=organizer_tables,
                    )

    def post(self):
        username = self.get_argument("username")
        password = self.get_argument("password")
        user_infos = mrd.select_table(table="users",column="*",condition="username",value=username)
        if user_infos:
            db_pwd = user_infos[0][2]
            if db_pwd == password:
                print("username:%s pwd:%s db_pwd %s" % (username, password, db_pwd))
                self.set_current_user(username)    # 将当前用户名写入 cookie，方法见下面
                self.write(username)
            else:
                print("username:%s pwd:%s " % (username, password))
                self.write("-1")
        else:
            self.write("-1")
