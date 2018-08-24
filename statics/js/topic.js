var popup_index = 0;

$(document).ready(function () {
	//弹出一个iframe层
	$("#applications").click(function () {
		var index = layer.open({
				type: 2, //iframe 层
				title: '议题申报',
				maxmin: true,
				shadeClose: true, //点击遮罩关闭层
				area: ['800px', '520px'],
				//content: '/layer?user='+user
				content: '/issues'
			});
	});

	//弹出一个iframe层
	$("#applications_continue").click(function () {
		var index = layer.open({
				type: 2, //iframe 层
				title: '议题申报',
				maxmin: true,
				shadeClose: true, //点击遮罩关闭层
				area: ['800px', '520px'],
				//content: '/layer?user='+user
				content: '/issues'
			});
	});

	$('#id_applications_confirm').on('click', function () {
		var topic_name = $("#id_input_topic_name").val();
		var topic_brief = $("#id_input_topic_brief").val();
		var topic_date = $('#id_select_topic_date option:selected').text(); //选中的文本
		console.log("topic_name:" + topic_name);
		console.log("topic_brief: " + topic_brief);
		console.log("topic_date: " + topic_date);

		var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
		parent.layer.close(index); //再执行关闭
	});

});
