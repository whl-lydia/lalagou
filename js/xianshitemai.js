// 	$('.liebiao li').click(function(){
// 		$(this).addClass("set").siblings().removeClass("set");
// 		$('.ms').empty();
// 		var index = $(this).index();
// 		$.each(list.result[index], function(i,item) {
// 			// console.log(list.result[index]);
// 			// console.log(item.img);
// 			var li = $('<li>\
// 			<a href="#"><img src="'+item.img+'" /></a>\
// 			<div class="jieshao">\
// 				<span>'+item.td+'</span>\
// 				<p>'+item.ms+'</p>\
// 			</div>\
// 			<div class="jiage">\
// 				<div class="jiage_left"><p>'+item.price+'</p></div>\
// 				<div class="jiage_right">'+item.time+'</div>\
// 			</div>\
// 		</li>')
// 		$('.ms').append(li);
// 		});
// })
$('.liebiao .li1').click(function() {
    $(this).addClass("set").siblings().removeClass("set");
    $('.ms').empty();
    var index = $(this).index();
    adddiv(index);
})
//自动加载第一个数据
	adddiv(0);
function adddiv(index) {
    $.each(list.result[index], function(i, item) {
        // console.log(list.result[index]);
        // console.log(item.img);
        var li = $('<li>\
				<a href="#"><img src="' + item.img + '" /></a>\
				<div class="jieshao">\
					<span>' + item.td + '</span>\
					<p>' + item.ms + '</p>\
				</div>\
				<div class="jiage">\
					<div class="jiage_left"><p>' + item.price + '</p></div>\
					<div class="jiage_right">' + item.time + '</div>\
				</div>\
			</li>')
        $('.ms').append(li);
    });
}