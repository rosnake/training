#!/usr/bin/env Python
# coding=utf-8

from handlers.base import BaseHandler
from admins.decorator import admin_get_auth
from admins.decorator import admin_post_auth


#  继承 base.py 中的类 BaseHandler

class AdminHandler(BaseHandler):
    """
    该类只提供跳转到管理页面
    """
    @admin_get_auth("/admin", False)
    def get(self):
        # 用户渲染表格模板的数据接口
        # 后续该接口需要从数据库读取
        user_name = self.get_current_user()
        if user_name is not None:
            self.render("handlers/admin.html", user_name=user_name, controller=self.render_controller,
                        language_mapping=self.language_mapping)

    @admin_post_auth(False)
    def post(self):
        pass


