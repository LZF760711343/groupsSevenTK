/**
 * Created by Administrator on 2016/11/20 0020.
 */
//    设置分页器的效果
var mySwiper1 = new Swiper('.syiper-container-odd', {
    autoplay: 6000,
    pagination: '.swiper-pagination',
    autoplayStopOnLast : true,
    resistanceRatio : 0
});
//加载完加载图片执行方法
function gourl() {
//        两秒后使加载页和进度条隐藏
    setTimeout(function () {
        $('.img').css({'display': 'none'});
        $('.progress').css('display', 'none');
    }, 2000);
//        每0.02秒增加进度条的长度
    setInterval(function () {
        $('.progress').width(($('.progress').width() / screen.width + 0.01) * screen.width);
    }, 20);
}