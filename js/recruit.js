(function ($) {
    var recruit = {
        sid:null,
        floor:$('body>div'),
        nav:$('header li a'),
        init:function () {
            this.welcome();
            this.navClick();
            this.windowScroll();
            this.carrousel();
        },
        welcome:function () {
            var joint = $('.joint-welcome');
            $('.joint-welcome .blue').animate({width:'100%'},500).animate({top:0,height:'100%'},500,function () {
                joint.animate({opacity: 0});
            }).animate({opacity:0},500).animate({width:0,height:0,left:-10000},function () {
                joint.remove();
            })
        },
        navClick:function () {
            var self = this;
            this.nav.click(function () {
                $(this).addClass('on').parent().siblings().children().removeClass('on');
                var tops=self.floor.eq($(this).parent().index()).offset().top;
                $('html,body').animate({ scrollTop: tops-100}, 500);
            });
        },
        windowScroll:function () {
            var self = this;
            $(window).scroll(function () {
                var sTop = $(this).scrollTop();
                self.floor.each(function () {
                    if (sTop > $(this).offset().top) {
                        self.nav.eq($(this).index()).addClass('on').parent().siblings().children().removeClass('on');
                    }
                    if ((sTop+500)>$(this).offset().top) {
                        self.appear($(this));
                        return;
                    }
                });
                if (sTop==0) {
                    self.nav.eq(0).addClass('on').parent().siblings().children().removeClass('on');
                }
            })
        },
        appear:function (data) {
            var self = this;
            data.children('section').animate({opacity:1},500,function () {
                //whoweare 4个图标
                $(this).parent().children().next().children('li:eq(0)').animate({opacity: 1}, 300, function () {
                    $(this).next().animate({opacity: 1}, 300, function () {
                        $(this).next().animate({opacity: 1}, 300, function () {
                            $(this).next().animate({opacity: 1}, 300)
                        })
                    })
                });
                //轮播图
                var x = 0;
                $(this).parent().children('.cover').animate({opacity: 1}, 300,function () {
                    if (x=0&&$('.cover').css('opacity')==1) {
                        self.sid=setInterval(play, 3000);
                        x++;
                    }
                });
                //people 左右插入
                $(this).parent().find('.left .frame:eq(0)').animate({left: 0}, 400, function () {
                    $(this).parent().next('li').children('.frame').animate({left: 0}, 400);
                });
                $(this).parent().find('.right .frame:eq(0)').animate({left: 0}, 500, function () {
                    $(this).parent().next('li').children('.frame').animate({left: 0}, 400);
                });
                //workingwithus
                $(this).parent().find('.lc1,.rc1').animate({opacity:1},400,function () {
                    $(this).parent().find('.lc2,.rc2').animate({opacity:1},450,function () {
                        $(this).parent().find('.lc3,.rc3').animate({opacity:1},500,function () {
                            $(this).parent().find('.lc4,.rc4').animate({opacity:1},550,function () {
                                $(this).parent().find('.lc5,.rc5').animate({opacity:1},600,function () {
                                    $(this).parent().find('.lc6,.rc6').animate({opacity: 1}, 600);
                                })
                            })
                        })
                    })
                })
            })
        },
        carrousel:function () {
            var right = $('.arrow-right');
            var left = $('.arrow-left');
            var ul = $('.cover ul');
            var index = 0;
            var self = this;
            right.click(function () {
                play();
            });
            left.click(function () {
                index--;
                if (index<0) {
                    ul.css({marginLeft: -(ul.children('li').length - 1) * 100 + '%'});
                    index = ul.children('li').length-1;
                }
                index = index == 5 ? 4 : index;
                ul.animate({marginLeft:-index*100+'%'})
            });
            function play() {
                index++;
                if (index>=ul.children('li').length) {
                    ul.css({marginLeft: 0});
                    index = 1;
                }
                ul.animate({marginLeft:-index*100+'%'})
            }
            $('.cover').hover(function () {
                clearInterval(self.sid);
            }, function () {
                self.sid=setInterval(play, 3000);
            });
        }
    };
    recruit.init();
})(jQuery);
