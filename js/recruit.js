/******************************welcome****************/
$(document).ready(function(){
    $('.joint-welcome .blue').animate({width:'100%'},500).animate({top:0,height:'100%'},500,function () {
        $('.joint-welcome').animate({opacity:0})
    }).animate({opacity:0},500).animate({width:0,height:0,left:-10000},function () {
        $('.joint-welcome').remove()
    })
});
/***********************scroll******************/
$('header li a').click(function () {
    $(this).addClass('on').parent().siblings().children().removeClass('on');
    var tops=$('body>div').eq($(this).parent().index()).offset().top;
    $('html,body').animate({ scrollTop: tops-100}, 500);
});
/************************逐个显示*****************/
$(document).scroll(function () {
    var addtop = $(window).scrollTop() + $(window).height();
    function scrolls(classname) {
        var divtop = $('.'+classname+'').offset().top;
        if (addtop > divtop) {
            console.log(1);
            $('.'+classname+' h2,.'+classname+' h1,.'+classname+' p,.'+classname+' a').animate({opacity: 1}, 500, function () {
                $('.'+classname+' ul,.'+classname+'>div,.'+classname+' a img').animate({opacity: 1}, 500, function () {
                    $('.'+classname+' li:eq(0),.'+classname+'>div>div,,.'+classname+' a p').animate({opacity: 1}, 500, function () {
                        $('.'+classname+' li:eq(1),.'+classname+'>div>div p').animate({opacity: 1}, 500, function () {
                            $('.'+classname+' li:eq(2),.'+classname+'>div>div a').animate({opacity: 1}, 500, function () {
                                $('.'+classname+' li:eq(3)').animate({opacity: 1}, 500,function () {
                                    $('.'+classname+' li:eq(4)').animate({opacity: 1}, 500,function () {

                                    });
                                });
                            });
                        });
                    });
               });
            });
        }
    }

    scrolls('whoweare');
    scrolls('ourvision');
    scrolls('ourteam');
    scrolls('workingwithus');
});


