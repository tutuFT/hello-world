// 修改下拉菜单父级data值避免bug
$('.list li').mousemove(function(){
    $('.list').attr('data-page',$(this).attr('data-page'));
})

// 页面切换方法
$('nav li').click(function () {
    modifyPage( $(this).attr('data-page') );
})
$(document).on('click','.Click',function(){
    modifyPage( $(this).attr('data-page'),$(this).html() );
})
function modifyPage(p,t){
    setTimeout(function(){
        let page = p || '/indexWra';
        if(location.hash.slice(1) != '' ){
            $('header .wrapper').empty().load(`page${page}.html`);
            setTimeout(function(){
                if($('.js-title').length){
                    $('.js-title').html(t);
                }
            },10);
        }
    },10)
}

// 需要立即执行的内容
$(function(){
    // 判断当前页面地址的尾端,获取应加载的页面名称
    modifyPage( location.hash.slice(1) || '/' );
})