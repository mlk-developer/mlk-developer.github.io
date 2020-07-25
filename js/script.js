$("#title, p, h3, a, h5, img").css({
    "opacity": 0,
    "marginLeft": "-=100"
})

$("img, h6").css({
    "opacity": 0
})



$("#title").animate({
    marginLeft: "+=100",
    opacity: 1,
}, 1000, function () {
    $("h3, p, a, h5, img").animate(
        {
            opacity: "1.0",
            marginLeft: "+=100",
        }, 500
    );

    $("h6").animate(
        {
            opacity: "1.0",
        }, 800);
});

$("#btnDark").click(function () {
    $("body").css('background', 'rgb(0,0,0)');
    $("body").css('background-image', 'url("")');

    $("p,h1,h3").css('color', 'rgb(200,200,200)')
    $("#btnDark").hide();
    $("#btnLight").css({
        'background': "white",
        'color': "black"
    });
    $("#btnLight").show();

})

$("#btnLight").click(function () {
    $("body").css('background', '#eaeaea');

    $("p, h1, h3").css('color', '#797979')

    $("#btnDark").show();
    $("#btnLight").hide();

})
