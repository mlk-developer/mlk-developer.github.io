function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

var mode = readCookie("mode");

mode === "FALSE" ? jour() : nuit();


$("#title, p, h3, a, h5, img, li, h4").css({
    "opacity": 0,
    "marginLeft": "-=100"
})

$("img, h6, table, button, h1").css({
    "opacity": 0
})


$("h1").animate({
    opacity: 1
}, 1000, function () {
    $("h3, p, a, h5, img, li, h4, button").animate(
        {
            opacity: "1.0",
            marginLeft: "+=100",
        }, 500, function () {
            $("table").animate({
                opacity: 1
            }, 1000)
        }
    );

    $("h6").animate(
        {
            opacity: "1.0",
        }, 800);
});

//mode nuit bouton
$("#btnLight").click(function () {

    $("body").css('background', '#eaeaea');
    $("p, h1, h3, table, li, h4").css('color', '#606060')

    $("#btnDark").show();
    $("#btnLight").hide();
    document.cookie = "mode=FALSE";
})
//mode jour bouton
$("#btnDark").click(function () {
    $("body").css('background', '#262b33');

    $("p,h1,h3, table, li, h4").css('color', 'rgb(200,200,200)')
    $("#btnDark").hide();
    $("#btnLight").css({
        'background': "white",
        'color': "black"
    });
    $("#btnLight").show();
    document.cookie = "mode=TRUE";
})

$("#alternanceInfo").on("click", function () {

    var content =
        "&diams; Rythme: 2 semaines en entreprise / 1 semaine à l'école"
        + "<br><br>" +
        "&diams; Durée du contrat: 1 ans"

    $("#infosALternance").html(content).css("display", "block").on("click", function () {
        $("#infosALternance").hide()
    })
});

//Récupération des données en ajax
// $.get("data_expertise.php", function (data) {
//
//     $("#langages").html(data);
//
// });

function nuit() {
    $("body").css('background', '#262b33');

    $("p,h1,h3, table, li, h4").css('color', 'rgb(200,200,200)')
    $("#btnDark").hide();
    $("#btnLight").css({
        'background': "white",
        'color': "black"
    });
    $("#btnLight").show();
    document.cookie = "mode=TRUE";
}

function jour() {
    $("body").css('background', '#eaeaea');
    $("p, h1, h3, table, li, h4").css('color', '#606060')

    $("#btnDark").show();
    $("#btnLight").hide();
    document.cookie = "mode=FALSE";
}

//

$(".exp_img").hover(
    function () {
        $(this).css({
            transform: "scale(1.05)"
        });
    },
    function () {
        $(this).css({
             transform: "scale(1)"
        });
    }
)