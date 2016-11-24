/*****************information*****************/
function change(element) {
    var Lis = $('.'+element+' .head-title li');
    var hContent = $('.' + element + ' .h-content');
    var bluebar = $('.' + element + ' .bluebar');
    Lis.click(function () {
        var num = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        bluebar.animate({left:$(this).width()*num});
        console.log(bluebar.offset().left)
        hContent.eq($(this).index()).addClass('changetab').siblings().removeClass('changetab');
   })
}
change('information');
change('actual');
change('market');
change('business');
/*********************search*************************/
(function () {
    var input = $('.header-right input');
    $('.search').toggle(function () {
        input.animate({width: 280, left: -260});
    },function () {
        input.animate({width: 0, left: 0});
    });
    input.focus(function () {
        $(this).css({borderBottom:'1px solid #959798'})
    });
    input.blur(function () {
        $(this).css({borderBottom:'1px solid #666'})
    });
})();
/***********sign in/on**************model*****************/
var model = $('.model');
var modelcantainer = $('model-container');
$('.signin').click(function () {
    model.css({display: 'block'}).animate({opacity: 1},300);
});
$('.signup').click(function () {
    model.animate({});

});
model.click(function () {
    $(this).css({display:'none',opacity: 0})
});


/******************artical*********************/
$('.content .left .title h2').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('.est').eq($(this).index()).addClass('on').siblings().removeClass('on');
});
/*******************actual time********************/
function time() {
    var timer = new Date();
    var week = { '1': '星期一', '2': '星期二', '3': '星期三', '4': '星期四', '5': '星期五', '6': '星期六', '0': '星期日' };
    var actualTime = timer.toLocaleString().replace(/\//g, '-').replace(/[上|下]午\d{1,2}:/, timer.getHours() + ':');
    var calendarTime = timer.toLocaleDateString().replace(/\//g, '-')+' '+week[timer.getDay()];
    $('.actual .fixed').html('<div class="fixed"><i class="iconfont icon-shijian"></i>' + actualTime + '</div>');
    $('.calendar .c-time').html('<span><i class="iconfont icon-shijian"></i>'+calendarTime+'</span><span>据下次数据公布时间还有:<em>1小时4分17秒</em></span>')
}
setInterval(time, 1000);
/***********************notice垂直轮播图****************************/
function verticalscroll(container,time) {
    var lists = $(container);
    var firstLi = $(container+' p:last');
    lists.prepend(firstLi.clone(true));
    var lis = lists.children();
    lists.css({marginTop: -45 * (lis.length-1)});
    var index = lis.length;
    var sid = setInterval(function () {
        index--;
        if (index<0) {
            lists.css({marginTop: -45 * (lis.length-1)});
            index = lis.length-1;
        }
        lists.animate({marginTop:-index*45},1000)
    }, time);
}
verticalscroll('.left .scroll-box-list',2200);
verticalscroll('.right .scroll-box-list',3500);

/**************************************************************/
(function () {
    var html = '';
    for (var i = 0; i < indexdata.newest.length; i++) {
        var newest = indexdata.newest[i];
        html += '<li><a href="#"><div class="img"><img src="' + newest.titlepic + '" /></div><div><h3>' + newest.title + '</h3><p>' + newest.content + '</p></div></a><div class="author"><a href="#"><img src="' + newest.editorpic + '"/><span>' + newest.editor + '</span></a><em class="iconfont icon-shijian"> ' + newest.time + '</em></div></li>';
    }
    $('.newest').html(html);
})();
    function sort(container) {
        var html = '';
        for (var i=0;i<indexdata.hottest[container].length;i++) {
            var hot = indexdata.hottest[container][i];
            html+='<li><i>'+(i+1)+'</i><a href="#">'+hot.title+'</a><p><span class="iconfont icon-luntanzhongxin"></span>'+hot.discuss+'<i>|</i><em class="iconfont icon-yanjing"></em>'+hot.quantity+'</p></li>';
        }
        $('.' + container + ' ul').html(html);
    }
    sort('daysort');
    sort('weeksort');
(function () {
    var html = '';
    for (var i=0;i<indexdata.community.length;i++) {
        var community = indexdata.community[i];
        html += '<li><a href="#"><div class="img"><img src="'+community.pic+'"/></div><p>'+community.title+'</p></a><span><em class="iconfont icon-luntanzhongxin"></em> '+community.num+'</span></li>';
    }
    $('.middle ul').html(html);
})();
(function () {
    var html = '';
    for (var i=0;i<indexdata.author.length;i++) {
        var author = indexdata.author[i];
        html += '<li><div class="people clearfix"><a href="#"><img src="'+author.pic+'"/><span>'+author.name+'</span></a><i>'+author.fans+'</i></div><a class="content" href="#">'+author.artical+'</a><div class="follow">+关注</div></li>';
    }
    $('.right ul').html(html);
})();
(function () {
    var html = '';
    for (var i=0;i<indexdata.banner.length;i++) {
        var banner = indexdata.banner[i];
        html += '<li><a href=""><div class="transi"></div><img class="first" src="'+banner.pic+'"/><span>'+banner.title+'</span></a></li>';
    }
    $('.banner ul').html(html);
})();
