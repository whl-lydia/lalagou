var swiper1 = new Swiper('.swiper1', {
        pagination: '.swiper-pagination',//自动生成小圆点
        paginationClickable: true,//点击小圆点功能
        spaceBetween: 0,//图片之间的间隙
        centeredSlides: true,//图片居中（false 居左）
        autoplay:2500,//播放的时间
        autoplayDisableOnInteraction: true,//从点击后开始循环
        loop:true,//是否循环
//      effect:'fade'//淡入淡出
    });
var flag = true;
        //点击一级菜单时，二级菜单出现
        $('.menu1').click(function(){
            flag = true;
            if($(this).prev().css('display')=='block'){
                $('.menu2').slideUp();
            }else{
                $('.menu2').slideUp();
                $(this).prev().slideDown();
            }
            //点击其它的地方二级菜单隐藏
            if (flag) {
                flag = false;
                $('.content').one('click',addConTentClick);
            }
            return false;
        })
        function addConTentClick(){
            $('.menu2').slideUp();
            return false;
        }
        //回到顶部
        $(document).scroll(function(){
            if ($('body').scrollTop() >= 100) {
                $(".TOtop").show();
            } else{
                $('.TOtop').hide();
            }
        });
    $('.TOtop').click(function(){
        $('body').animate({
            scrollTop:'0'
        },500)
    })