	// 加载内容
	$(function() {
	    $.each(list.result, function(i, item) {
	        createDiv(i, list.result[i]);
	    })
	});
	//添加内容
	function createDiv(i, list) {
	    var li = $('<li>\
				<a href="#"><img src="' + list.img + '" /></a>\
				<div class="jieshao">\
					<span>' + list.td + '</span>\
					<p>' + list.ms + '</p>\
				</div>\
				<div class="jiage">\
					<div class="jiage_left"><p>' + list.price + '</p></div>\
					<div class="jiage_right">' + list.time + '</div>\
				</div>\
			</li>')
	    $('.ms').append(li);
	}
