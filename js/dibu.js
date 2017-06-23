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
