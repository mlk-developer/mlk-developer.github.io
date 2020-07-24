$("#title").css({
    "opacity": "0",
    "marginLeft": "-=100"
})
$("p").css({
    "opacity": "0",
    "marginLeft": "-=100"
})
$("h3").css({
    "opacity": "0",
    "marginLeft": "-=100"
})
$("a").css({
    "opacity": "0",
    "marginLeft": "-=100"
})
$("h5").css({
    "opacity": "0",
    "marginLeft": "-=100"
})

$("img").css({
    "opacity": 0
})
$("h6").css({
    "opacity": 0
})


$("#title").animate({
    marginLeft: "+=100",
    opacity: 1,
}, 1000, function () {
    $("h3").animate(
        {
            opacity: "1.0",
            marginLeft: "+=100",
        }, 500
    );
    $("p").animate(
        {
            opacity: "1.0",
            marginLeft: "+=100",
        }, 500, function () {
            $("img").animate({
                opacity: "1.0"
            }, 1000)
        }
    );
    $("a").animate(
        {
            opacity: "1.0",
            marginLeft: "+=100",
        }, 500);

    $("h5").animate(
        {
            opacity: "1.0",
            marginLeft: "+=100",
        }, 500);
        $("h6").animate(
        {
            opacity: "1.0",
            marginLeft: "+=100",
        }, 800);
});

$("#btnDark").click(function () {
    $("body").css('background', 'rgb(0,0,0)');

    $("p").css('color', 'rgba(200,200,200)')
    $("h1").css('color', 'rgba(200,200,200)')
    $("h3").css('color', 'rgba(200,200,200)')

})

$("#btnLight").click(function () {
    $("body").css('background', '#eaeaea');

    $("p").css('color', '#797979')
    $("h1").css('color', '#797979')
    $("h3").css('color', '#797979')

})
