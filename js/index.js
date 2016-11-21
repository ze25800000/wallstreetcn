/*****************information*****************/
function change(element) {
    var Lis = $('.'+element+' .head-title li');
    var hContent = $('.' + element + ' .h-content');
    Lis.click(function () {
       $(this).addClass('on').siblings().removeClass('on');
        hContent.eq($(this).index()).addClass('changetab').siblings().removeClass('changetab');
   })
}
change('information');
change('actual');
change('market');
change('business');
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
/***************************************************/