// 메인 슬라이더
function slide(){
    $(".slider").stop().animate({marginLeft : '-100%'}, function(){
        $(".slider li:first").appendTo(".slider");
        $(".slider").css({marginLeft : 0});
    });
}
setInterval (slide, 3000);

// 굽뉴스 마우스 오버 효과
$(".news_wrap > div").hover(function(){
    $(this).children(".news_pic").stop().fadeIn();
}, function(){
    $(this).children(".news_pic").stop().fadeOut();
});



// 굽튜브 애니메이션
function slideTube(){
    $(".tube_img ul").stop().animate({marginLeft : '-33%'}, 1000, function(){
        $(".tube_img ul li:first").appendTo(".tube_img ul");
        $(".tube_img ul").css({marginLeft : 0});
    });
}
setInterval (slideTube, 3000);

