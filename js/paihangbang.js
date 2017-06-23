//单击每一个li
$('.liebiao li').click(function() {
    $(this).addClass("set").siblings().removeClass("set");
    $('.list').empty();
    var index = $(this).index();
    adddiv(index);
})
//默认加载第一个
adddiv(0);
//添加li到ms中
function adddiv(index) {
    $.each(list.result[index], function(i, item) {
        var li = $('<li>\
				<div class="img">\
					<img src="' + item.img + '" />\
				</div>\
				<div class="miaosu">\
					<a href="#">' + item.ms + '</a>\
				</div>\
				<span>' + item.price + '</span>\
			</li>')
        $('.list').append(li);
    });
}