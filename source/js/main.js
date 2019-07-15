var $$ = mdui.JQ;

window.onscroll = window.onresize = function()
{
    let contentOffset = $$('main').offset().top;
    let scroll = $$('.mdui-appbar').offset().top;
    $$('#mdui-card-media').css('opacity',1-Math.min(scroll/contentOffset,1));
    if(scroll>=contentOffset)
        $$('.mdui-appbar').css({
            'background-color': 'rgba(0,0,0,.2)', //20%黑
        });
        // $$('.mdui-appbar').css({
        //     'background-color': 'rgba(255,255,255,.3)', //30%白
        // })
    else
        $$('.mdui-appbar').css({
            'background-color': 'rgba(0,0,0,.0)', //透明
        });
}