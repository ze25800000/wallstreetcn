$('.t1').click(function () {
    $(this).addClass('on');
    $('.t2').removeClass('on');
    $('.newest').css('display', 'block');
    $('.hottest').css('display', 'none');
});
$('.t2').click(function () {
    $(this).addClass('on');
    $('.t1').removeClass('on');
    $('.newest').css('display', 'none');
    $('.hottest').css('display', 'block');

});
/*****************information*****************/
function change(element) {
    var Lis = $('.'+element+' .head-title li');
    var hContent = $('.' + element + ' .h-content');
   /* for (var i=0;i<Lis.length;i++) {
     (function (index) {
     Lis[index].onclick = function () {
     for (var i = 0; i < Lis.length; i++) {
     Lis[i].className = i == index ? 'on' : '';
     hContent[i].style.display = i == index ? 'block' : 'none';
     }
     };
     /!* $('.'+element+' .head-title li:eq('+i+')').click(function () {
     for (var i=0;i<Lis.length;i++) {
     if (i == index) {
     $('.'+element+' .head-title li:eq('+i+')').addClass('on');
     $('.' + element + ' .h-content:eq(' + i + ')').css('display', 'block');
     console.log(this)
     }else {
     $('.'+element+' .head-title li:eq('+i+')').removeClass('on');
     $('.' + element + ' .h-content:eq(' + i + ')').css('display', 'none');
     }
     }
     })*!/
     })(i)
     }*/
    Lis.click(function () {
       $(this).addClass('on').siblings().removeClass('on');
   })
}
change('information');
change('actual');
change('market');
change('business');