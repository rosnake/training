$(document).ready(function(){
    $('#admin_member_add').on('click', function(){
        var member_id=prompt("请输入新的工号.");
        if(member_id === "" || member_id === null)
        {
             layer.msg("您未输入有效的工号，已为您取消操作。", {icon: 2});
             return;
        }
        var user_name=prompt("请输入姓名.");
        if(user_name === "" || user_name === null)
        {
             layer.msg("您未输入有效的姓名，已为您取消操作。", {icon: 2});
             return;
        }
        var user_role=prompt("请输入角色.");
        if ("admin" !== user_role || "organizer" !== user_role || "normal" !== user_role )
        {
            layer.msg("您角色输入，有误只能输入[admin、organizer、normal]，已为您取消操作。", {icon: 2});
            return;
        }
        console.log("member_id: "+member_id);
        console.log("user_name: "+user_name);
        console.log("user_role: "+user_role);
        ret = confirm("是否新增【"+user_name+"】?");
         if (ret===true)
        {
            alert("新增成功");
        }
        else
        {
            alert("取消新增");
        }
        window.location.reload();
    });

    $('#admin_member_del').on('click', function(){
        var member_id = $('#admin_member_table_body input[name="select_id"]:checked ').val();
        if((typeof member_id) === 'undefined')
        {
            layer.msg("当前未选择任何项目");
            console.log("current not select any id");
            return;
        }
        console.log("member_id: "+member_id);
        console.log("click admin member delete");
        //获取每一个<编辑>按钮的 下标（从0开始 所以需要+1 = 按钮在表格的所在行数）
        var ttr = $("input:checked").parents('tr');
        //console.log(ttr);

        /*当前行使用find方法找到每一个td列
         each方法为每一个td设置function
         */
         var user_name = "";
        ttr.find("td").each(function () {
            /*过滤 td中的元素
             checkbox 、 button、text 不需要执行append
             注意 return 为 跳出当前 each
             return false 为 跳出整个 each
             */

            if($(this).attr('id') === "user_id")
            {
                var user_id = $(this).text();
                console.log("user_id:"+ user_id);
            }

            if($(this).attr('id') === "user_name")
            {
                user_name = $(this).text();
                console.log("user_name:"+ user_name);
            }

            if($(this).attr('id') === "user_role")
            {
                var user_role = $(this).text();
                console.log("user_role:"+ user_role);
            }
        });

         ret = confirm("是否删除【"+user_name+"】?");
         if (ret === true)
        {
            alert("删除成功");
        }
        else
        {
            alert("删除取消");
        }
        window.location.reload();
    });

     $('#admin_member_mod').on('click', function(){
        var member_id = $('#admin_member_table_body input[name="select_id"]:checked ').val();
        if((typeof member_id) === 'undefined')
        {
            layer.msg("当前未选择任何项目");
            console.log("current not select any id");
            return;
        }
        console.log("member_id: "+member_id);
        console.log("click admin member delete");
        //获取每一个<编辑>按钮的 下标（从0开始 所以需要+1 = 按钮在表格的所在行数）
        var ttr = $("input:checked").parents('tr');
        //console.log(ttr);

        /*当前行使用find方法找到每一个td列
         each方法为每一个td设置function
         */
         var user_name = "";
         var user_id = "";
         var user_role = "";
        ttr.find("td").each(function () {
            /*过滤 td中的元素
             checkbox 、 button、text 不需要执行append
             注意 return 为 跳出当前 each
             return false 为 跳出整个 each
             */

            if($(this).attr('id') === "user_id")
            {
                user_id = $(this).text();
                console.log("user_id:"+ user_id);
            }

            if($(this).attr('id') === "user_name")
            {
                user_name = $(this).text();
                console.log("user_name:"+ user_name);
            }

            if($(this).attr('id') === "user_role")
            {
                user_role = $(this).text();
                console.log("user_role:"+ user_role);
            }
        });

        member_id=prompt("请输入新的工号,当前工号【"+user_id+"】");
        if(member_id === "" || member_id === null)
        {
             layer.msg("您未输入有效的工号，已为您取消操作。", {icon: 2});
             return;
        }
        user_name=prompt("请输入新的用户名,当前用户名【"+user_name+"】");
        if(user_name === "" || user_name === null)
        {
             layer.msg("您未输入有效的姓名，已为您取消操作。", {icon: 2});
             return;
        }
        user_role=prompt("请输入新的角色,当前角色【"+user_role+"】");
        if ("admin" !== user_role || "organizer" !== user_role || "normal" !== user_role )
        {
            layer.msg("您角色输入，有误只能输入[admin、organizer、normal]，已为您取消操作。", {icon: 2});
            return;
        }

        console.log("member_id: "+member_id);
        console.log("user_name: "+user_name);
        console.log("user_name: "+user_name);
         ret = confirm("是否修改【"+user_name+"】?");
         if (ret === true)
        {
            alert("修改成功");
        }
        else
        {
            alert("取消修改");
        }
        window.location.reload();
     });
     /*----------------------------------*/
    $('#admin_deduct_add').on('click', function(){
        var deduct_id=prompt("请输入新的扣分项目编号.");
        if(deduct_id === "" || deduct_id === null)
        {
             layer.msg("您未输入有效的项目编号，已为您取消操作。", {icon: 2});
             return;
        }
        var deduct_name=prompt("请输入扣分项目.");
        if(deduct_name === "" || deduct_name === null)
        {
             layer.msg("您未输入有效的项目名称，已为您取消操作。", {icon: 2});
             return;
        }
        var deduct_points=prompt("请输入扣分值.");
        if(deduct_name === "" || deduct_name === null)
        {
             layer.msg("您未输入有效的扣分值，已为您取消操作。", {icon: 2});
             return;
        }
        console.log("deduct_id: "+deduct_id);
        console.log("deduct_name: "+deduct_name);
        console.log("deduct_points: "+deduct_points);
        ret = confirm("是否新增【"+deduct_name+"】?");
         if (ret===true)
        {
            alert("新增成功");
        }
        else
        {
            alert("取消新增");
        }
        window.location.reload();
    });

    $('#admin_deduct_del').on('click', function(){
        var deduct_id = $('#admin_member_table_body input[name="select_id"]:checked ').val();
        if((typeof deduct_id) === 'undefined')
        {
            layer.msg("当前未选择任何项目");
            console.log("current not select any id");
            return;
        }
        console.log("deduct_id: "+deduct_id);
        console.log("click admin deduct delete");
        //获取每一个<编辑>按钮的 下标（从0开始 所以需要+1 = 按钮在表格的所在行数）
        var ttr = $("input:checked").parents('tr');
        //console.log(ttr);

        /*当前行使用find方法找到每一个td列
         each方法为每一个td设置function
         */
         var deduct_name = "";
        ttr.find("td").each(function () {
            /*过滤 td中的元素
             checkbox 、 button、text 不需要执行append
             注意 return 为 跳出当前 each
             return false 为 跳出整个 each
             */

            if($(this).attr('id') === "deduct_id")
            {
                var deduct_id = $(this).text();
                console.log("deduct_id:"+ deduct_id);
            }

            if($(this).attr('id') === "deduct_name")
            {
                deduct_name = $(this).text();
                console.log("deduct_name:"+ deduct_name);
            }

            if($(this).attr('id') === "deduct_points")
            {
                var deduct_points = $(this).text();
                console.log("deduct_points:"+ deduct_points);
            }
        });

        //ret = confirm("是否删除【"+deduct_name+"】?");
        layer.confirm("是否删除【"+deduct_name+"】?", {
        btn: ['删除','取消'] //按钮
        }, function(){
        //这里放删除提交
            layer.msg("删除成功", {icon: 1});
        }, function(){
            layer.msg("删除【"+deduct_name+"】操作已为您取消", {icon: 0});
        });

        window.location.reload();
    });

     $('#admin_deduct_mod').on('click', function(){
        var deduct_id = $('#admin_member_table_body input[name="select_id"]:checked ').val();
        if((typeof deduct_id) === 'undefined')
        {
            layer.msg("当前未选择任何项目");
            console.log("current not select any id");
            return;
        }
        console.log("deduct_id: "+deduct_id);
        console.log("click admin member delete");
        //获取每一个<编辑>按钮的 下标（从0开始 所以需要+1 = 按钮在表格的所在行数）
        var ttr = $("input:checked").parents('tr');
        //console.log(ttr);

        /*当前行使用find方法找到每一个td列
         each方法为每一个td设置function
         */
         var deduct_id = "";
         var deduct_points = "";
         var deduct_name = "";
        ttr.find("td").each(function () {
            /*过滤 td中的元素
             checkbox 、 button、text 不需要执行append
             注意 return 为 跳出当前 each
             return false 为 跳出整个 each
             */

            if($(this).attr('id') === "deduct_id")
            {
                deduct_id = $(this).text();
                console.log("user_id:"+ deduct_id);
            }

            if($(this).attr('id') === "deduct_points")
            {
                deduct_points = $(this).text();
                console.log("deduct_points:"+ deduct_points);
            }

            if($(this).attr('id') === "deduct_name")
            {
                deduct_name = $(this).text();
                console.log("deduct_name:"+ deduct_name);
            }
        });

        deduct_points=prompt("请输入新的【"+deduct_name+"】扣分值,当前扣分值【"+deduct_points+"】");
        if(deduct_points === "")
        {
             layer.msg("您未输入有效的扣分值，已为您取消操作。", {icon: 2});
             return;
        }
        console.log("deduct_id: "+deduct_id);
        console.log("deduct_name: "+deduct_name);
        console.log("deduct_points: "+deduct_points);
         ret = confirm("是否修改【"+deduct_name+"】为【"+deduct_points+"】?");
         if (ret === true)
        {
            alert("修改成功");
        }
        else
        {
            alert("取消修改");
        }
        window.location.reload();
     });
     /*----------------------------------*/

     $('#admin_exchange_confirm').on('click', function(){
         var user_id = $('#admin_user_exchange_table_body input[name="select_id"]:checked ').val();
        if((typeof user_id) === 'undefined')
        {
            layer.msg("当前未选择任何项目");
            console.log("current not select any id");
            return;
        }
        console.log("user_id: "+user_id);
        //获取每一个<编辑>按钮的 下标（从0开始 所以需要+1 = 按钮在表格的所在行数）
        var ttr = $("input:checked").parents('tr');
        var user_name = "";
        var exchange_item = "";
        var user_id = "";
        ttr.find("td").each(function () {
            /*过滤 td中的元素
             checkbox 、 button、text 不需要执行append
             注意 return 为 跳出当前 each
             return false 为 跳出整个 each
             */

            if ($(this).attr('id') === "user_id") {
                user_id = $(this).text();
                console.log("user_id:" + user_id);
            }

            if ($(this).attr('id') === "exchange_item") {
                exchange_item = $(this).text();
                console.log("exchange_item:" + exchange_item);
            }

            if ($(this).attr('id') === "user_name") {
                user_name = $(this).text();
                console.log("user_name:" + user_name);
            }

        });


        layer.confirm("是否允许【"+user_name+"】兑换【"+exchange_item+"】?", {
        btn: ['确认','取消'] //按钮
        }, function(){
        //这里放兑换提交
            layer.msg("兑换成功", {icon: 1});
            setTimeout(function(){ window.location.reload(); }, 1000);
        }, function(){
            layer.msg("兑换【"+deduct_name+"】操作已为您取消", {icon: 0});
        });

     });

     $('#admin_exchange_cancel').on('click', function(){
        var user_id = $('#admin_user_exchange_table_body input[name="select_id"]:checked ').val();
            if((typeof user_id) === 'undefined')
            {
                layer.msg("当前未选择任何项目");
                console.log("current not select any id");
                return;
            }
            console.log("user_id: "+user_id);
            //获取每一个<编辑>按钮的 下标（从0开始 所以需要+1 = 按钮在表格的所在行数）
            var ttr = $("input:checked").parents('tr');
            var user_name = "";
            var exchange_item = "";
            var user_id = "";
            ttr.find("td").each(function () {
                /*过滤 td中的元素
                 checkbox 、 button、text 不需要执行append
                 注意 return 为 跳出当前 each
                 return false 为 跳出整个 each
                 */

                if ($(this).attr('id') === "user_id") {
                    user_id = $(this).text();
                    console.log("user_id:" + user_id);
                }

                if ($(this).attr('id') === "exchange_item") {
                    exchange_item = $(this).text();
                    console.log("exchange_item:" + exchange_item);
                }

                if ($(this).attr('id') === "user_name") {
                    user_name = $(this).text();
                    console.log("user_name:" + user_name);
                }

            });


            layer.confirm("是否驳回【"+user_name+"】兑换【"+exchange_item+"】的申请?", {
            btn: ['确认','取消'] //按钮
            }, function(){
            //这里放驳回提交
                layer.msg("驳回成功", {icon: 1});
                setTimeout(function(){ window.location.reload(); }, 1000);
            }, function(){
                layer.msg("兑换【"+deduct_name+"】操作已为您取消", {icon: 0});
            });
         });
     /*积分规则处理*/

    $('#admin_exchange_add').on('click', function(){
        $('#admin_popup_background').show();
        $("#admin_exchange_popup_sub_title").text("新增规则");
    });

    $('#admin_popup_close_button').on('click', function(){
        var rule_id = $("#admin_exchange_popup_rule_id").val();
        var rule_name = $("#admin_exchange_popup_rule_name").val();
        var need_points = $("#admin_exchange_popup_rule_points").val();
        var points_range = $("#admin_exchange_popup_rule_range").val();

        console.log("rule_id: "+rule_id);
        console.log("rule_name: "+rule_name);
        console.log("need_points: "+need_points);
        console.log("points_range: "+points_range);
        setTimeout(function(){ window.location.reload(); }, 1000);
        $('#admin_popup_background').hide();
    });


    $('#admin_exchange_del').on('click', function(){
        var deduct_id = $('#admin_exchange_table_body input[name="select_id"]:checked ').val();
        if((typeof deduct_id) === 'undefined')
        {
            layer.msg("当前未选择任何项目");
            console.log("current not select any id");
            return;
        }
        console.log("deduct_id: "+deduct_id);
        console.log("click admin deduct delete");
        //获取每一个<编辑>按钮的 下标（从0开始 所以需要+1 = 按钮在表格的所在行数）
        var ttr = $("input:checked").parents('tr');
        //console.log(ttr);

        /*当前行使用find方法找到每一个td列
         each方法为每一个td设置function
         */
         var deduct_name = "";
        ttr.find("td").each(function () {
            /*过滤 td中的元素
             checkbox 、 button、text 不需要执行append
             注意 return 为 跳出当前 each
             return false 为 跳出整个 each
             */

            if($(this).attr('id') === "deduct_id")
            {
                var deduct_id = $(this).text();
                console.log("deduct_id:"+ deduct_id);
            }

            if($(this).attr('id') === "deduct_name")
            {
                deduct_name = $(this).text();
                console.log("deduct_name:"+ deduct_name);
            }

            if($(this).attr('id') === "deduct_points")
            {
                var deduct_points = $(this).text();
                console.log("deduct_points:"+ deduct_points);
            }
        });

        //ret = confirm("是否删除【"+deduct_name+"】?");
        layer.confirm("是否删除【"+deduct_name+"】?", {
        btn: ['删除','取消'] //按钮
        }, function(){
        //这里放删除提交
            layer.msg("删除成功", {icon: 1});
            setTimeout(function(){ window.location.reload(); }, 1000);

        }, function(){
            layer.msg("删除【"+deduct_name+"】操作已为您取消", {icon: 0});
        });

    });

     $('#admin_exchange_mod').on('click', function(){
        var rule_id = $('#admin_exchange_table_body input[name="select_id"]:checked ').val();
        if((typeof rule_id) === 'undefined')
        {
            layer.msg("当前未选择任何项目");
            console.log("current not select any id");
            return;
        }
        console.log("rule_id: "+rule_id);
        console.log("click admin member delete");
        //获取每一个<编辑>按钮的 下标（从0开始 所以需要+1 = 按钮在表格的所在行数）
        var ttr = $("input:checked").parents('tr');
        //console.log(ttr);

        /*当前行使用find方法找到每一个td列
         each方法为每一个td设置function
         */
         var rule_id = "";
         var need_points = "";
         var rule_name = "";
         var points_range="";
        ttr.find("td").each(function () {
            /*过滤 td中的元素
             checkbox 、 button、text 不需要执行append
             注意 return 为 跳出当前 each
             return false 为 跳出整个 each
             */

            if($(this).attr('id') === "rule_id")
            {
                rule_id = $(this).text();
                console.log("rule_id:"+ rule_id);
            }

            if($(this).attr('id') === "rule_name")
            {
                rule_name = $(this).text();
                console.log("rule_name:"+ rule_name);
            }

            if($(this).attr('id') === "need_points")
            {
                need_points = $(this).text();
                console.log("need_points:"+ need_points);
            }

            if($(this).attr('id') === "points_range")
            {
                points_range = $(this).text();
                console.log("need_points:"+ points_range);
            }
        });

        $("#admin_exchange_popup_rule_id").val(rule_id);
        $("#admin_exchange_popup_rule_name").val(rule_name);
        $("#admin_exchange_popup_rule_points").val(need_points);
        $("#admin_exchange_popup_rule_range").val(points_range);
        $("#admin_exchange_popup_rule_id").attr("readonly",true);
        $("#admin_exchange_popup_rule_name").attr("readonly",true);
        $('#admin_popup_background').show();
        $("#admin_exchange_popup_sub_title").text("修改规则");

     });

      $('#admin_user_topic_add').on('click', function(){
            var index = layer.open({
            type: 2, //iframe 层
            title: '增加议题',
            maxmin: true,
            shadeClose: true, //点击遮罩关闭层
            area : ['800px' , '520px'],
            //content: '/layer?user='+user
            content: '/admin/issues'
            });
      });

      $('#admin_user_topic_del').on('click', function(){
           var issues_object = $('input[name="select_id"]:checked ');
           var issues_id = issues_object.val();
            if((typeof issues_id) === 'undefined')
            {
                layer.msg("当前未选择任何项目");
                console.log("current not select any id");
                return;
            }
            var admin_topic_username = issues_object.parents('div').children('#id_admin_topic_user_name').html();
            var admin_topic_title = issues_object.parents('div').children('.topic_details').children('#id_admin_topic_title').html();

            console.log("issues_id: "+issues_id);
            console.log("admin_topic_title: "+admin_topic_title);
            console.log("admin_topic_username: "+admin_topic_username);
            console.log("click admin topics delete");
      });

        $('#admin_user_topic_mod').on('click', function(){
            var issues_object = $('input[name="select_id"]:checked ');
           var issues_id = issues_object.val();
            if((typeof issues_id) === 'undefined')
            {
                layer.msg("当前未选择任何项目");
                console.log("current not select any id");
                return;
            }
            var admin_topic_username = issues_object.parents('div').children('#id_admin_topic_user_name').html();
            var admin_topic_title = issues_object.parents('div').children('.topic_details').children('#id_admin_topic_title').html();

            console.log("issues_id: "+issues_id);
            console.log("admin_topic_title: "+admin_topic_title);
            console.log("admin_topic_username: "+admin_topic_username);
            console.log("click admin topics modify");
      });

     $('#id_admin_add_issues_confirm').on('click', function(){

        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        parent.layer.close(index); //再执行关闭
        });

});