#!/usr/bin/env Python
# coding=utf-8

#该文件用于通用数据接口

class UserDataUtils:

    user_score_tables = [
        {"name": "raoyuanqin", "late": -1, "retreat": 0, "absenteeism": 0, "un_present": 0, "total": 17.5},
        {"name": "chenmeijing", "late": -1, "retreat": 0, "absenteeism": 0, "un_present": 0, "total": 11},
        {"name": "chenxiaojie", "late": -1, "retreat": 0, "absenteeism": -1, "un_present": 0, "total": 9},
        {"name": "raoxiansheng", "late": -1, "retreat": -1, "absenteeism": 0, "un_present": 0, "total": 12},
    ]
    user_info_tables = [
        {
            "name": "chenhaha",
            "image": "images/chenhaha.jpg",
            "remnants": 11,
            "sub": -8,
            "add": 12,
            "description": "<p>这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯</p>"
        },
        {
            "name": "raohaha",
            "image": "images/raohaha.jpg",
            "remnants": 10,
            "sub": -9,
            "add": 15,
            "description": "<p>菩提本无树，明镜亦非台</p>"
        }
    ]
    user_table = [
        {"name": "raoyuanqin", "passwd": "123456"},
        {"name": "chenmeijing", "passwd": "123456"},
        {"name": "chenxiaojie", "passwd": "123456"},
        {"name": "raoxiansheng", "passwd": "123456"},
    ]
    render_controller = {"index": False, "login": False, "authorized": True, "admin": False, "organizer": False}
    organizer_tables = [
        {"organizer_id": 123456, "organizer_name": "raoyuanqin", "date": "2018-8-7"},
        {"organizer_id": 123457, "organizer_name": "chenmeijing", "date": "2018-8-9"},
    ]
    user_topics_tables = [
        {
            "topic_id": 12340,
            "name": "chenmeijing",
            "image": "images/chenhaha.jpg",
            "title": "读书分享",
            "current": True,
            "finish": False,
            "time": "2018-8-6",
            "description": "这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯"
        },
        {
            "topic_id": 12341,
            "name": "raoyuanqin",
            "image": "images/raohaha.jpg",
            "title": "读书分享2",
            "current": False,
            "finish": True,
            "time": "2018-7-26",
            "description": "菩提本无树，明镜亦非台"
        },
        {
            "topic_id": 12342,
            "name": "raoyuanqin",
            "image": "images/raohaha.jpg",
            "title": "读书分享3",
            "current": False,
            "finish": False,
            "time": "2018-7-29",
            "description": "菩提本无树，明镜亦非台"
        }
    ]

    deduct_tables = [
        {"deduct_id": 123450, "deduct_name": "迟到", "deduct_points": 1},
        {"deduct_id": 123451, "deduct_name": "早退", "deduct_points": 2},
        {"deduct_id": 123452, "deduct_name": "旷会", "deduct_points": 10},
        {"deduct_id": 123453, "deduct_name": "出差", "deduct_points": 1},
        {"deduct_id": 123454, "deduct_name": "家中有事", "deduct_points": 1},
    ]

    user_exchange_tables = [
        {"user_id": 123450, "user_name": "raopyuanqin", "user_points": 20, "exchange_item": "书籍",
         "apply_date": "2018-9-8"},
        {"user_id": 123451, "user_name": "raopyuan11", "user_points": 20, "exchange_item": "书籍",
         "apply_date": "2018-9-7"},
    ]

    exchange_rule_tables = [
        {"rule_id": 123450, "rule_name": "咖啡卷", "need_points": 6, "points_range": 16},
        {"rule_id": 123451, "rule_name": "书籍", "need_points": 10, "points_range": 20},
    ]

    point_tables = [
        {"user_id": 123450, "user_name": "raoyuanqin", "user_point": 6},
        {"user_id": 123451, "user_name": "chenmeijing", "user_point": 10},
    ]

    meeting_tables = [
        {"topic_id": 123450, "user_name": "raoyuanqin", "meeting_room": "A26", "meeting_date": "2018-08-27-18:45"},
        {"topic_id": 123451, "user_name": "chenmeijing", "meeting_room": "A26", "meeting_date": "2018-09-01-18:45"},
    ]
    exchange_presents_table = ["咖啡卷", "书籍", "电影票"]

    def __init__(self):
        pass

    @staticmethod
    def login_check(username, passwd):
        for user in UserDataUtils.user_table:
            if user["name"] == username and user["passwd"] == passwd:
                return True

        return False

    @staticmethod
    def get_meeting_tables():
        return UserDataUtils.meeting_tables

    @staticmethod
    def modify_meeting_info_by_id(meeting_id, user_name, meeting_room, meeting_date):
        strData = meeting_id.encode("ascii")
        meeting_id = int(strData)

        for i in range(len(UserDataUtils.meeting_tables)):
            if UserDataUtils.meeting_tables[i]["topic_id"] == meeting_id:
                UserDataUtils.meeting_tables[i]["user_name"] = user_name
                UserDataUtils.meeting_tables[i]["meeting_room"] = meeting_room
                UserDataUtils.meeting_tables[i]["meeting_date"] = meeting_date
                return True

        return False

    @staticmethod
    def get_point_tables():
        return UserDataUtils.point_tables

    @staticmethod
    def set_point_to_tables_by_id(user_id, user_point):
        strData = user_id.encode("ascii")
        user_id = int(strData)

        strData = user_point.encode("ascii")
        user_point = int(strData)
        for i in range(len(UserDataUtils.point_tables)):

            if UserDataUtils.point_tables[i]["user_id"] == user_id:
                UserDataUtils.point_tables[i]["user_point"] = user_point
                return True

        return False

    @staticmethod
    def get_deduct_tables():
        return UserDataUtils.deduct_tables

    @staticmethod
    def get_exchange_presents_table():
        return UserDataUtils.exchange_presents_table

    @staticmethod
    def get_organizer_tables():
        return UserDataUtils.organizer_tables

    @staticmethod
    def get_exchange_rule_tables():
        return UserDataUtils.exchange_rule_tables

    @staticmethod
    def get_user_exchange_tables():
        return UserDataUtils.user_exchange_tables

    @staticmethod
    def get_user_score_tables():
        return UserDataUtils.user_score_tables

    @staticmethod
    def get_user_info_tables():
        return UserDataUtils.user_info_tables

    @staticmethod
    def get_user_info_by_name(username):
        for user_info in UserDataUtils.user_info_tables:

            if user_info["name"] == username:
                return user_info

        return None

    @staticmethod
    def get_user_score_by_name(username):
        for user_score in UserDataUtils.user_score_tables:
            print("name:" + user_score["name"])
            if user_score["name"] == username:
                print("=====name:" + user_score["name"])
                return user_score

        return None

    @staticmethod
    def get_render_controller():
        return UserDataUtils.render_controller

    @staticmethod
    def get_user_topics_table():
        return UserDataUtils.user_topics_tables

    @staticmethod
    def get_user_topics_by_id(issues_id):
        strData = issues_id.encode("ascii")
        topic_id = int(strData)
        for user_topic in UserDataUtils.user_topics_tables:
            if user_topic["topic_id"] == topic_id:
                return user_topic

        return None


    @staticmethod
    def get_user_topics_by_name(username):
        for user_topic in UserDataUtils.user_topics_tables:

            if user_topic["name"] == username:
                return user_topic

        return None


class UserAuthUtils:
    user_infos = [
        {"id": "123450", "username": "raoyuanqin", "passwd": "123456", "role": "admin"},
        {"id": "123451", "username": "chenmeijing", "passwd": "123456", "role": "organizer"},
        {"id": "123452", "username": "chenxiaojie", "passwd": "123456", "role": "normal"},
        {"id": "123453", "username": "raoxiansheng", "passwd": "123456", "role": "normal"},
    ]

    def __init__(self):
        pass
    """
    用户验证，存在用户返回True，不存在返回False
    """
    @staticmethod
    def authenticate_user_by_name(username, passwd):
        for user_info in UserAuthUtils.user_infos:
            if user_info["username"] == username and  user_info["passwd"] == passwd:
                return True

        return False

    @staticmethod
    def get_role_by_name(username):
        for user_info in UserAuthUtils.user_infos:
            if user_info["username"] == username:
                return user_info["role"]

        return  None

    @staticmethod
    def get_user_info_tables():
        return UserAuthUtils.user_infos


class ControllerUtils:
    pass


