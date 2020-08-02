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


$("#title, p, h3, a, h5, img, li").css({
    "opacity": 0,
    "marginLeft": "-=100"
})

$("img, h6, table").css({
    "opacity": 0
})


$("#title").animate({
    marginLeft: "+=100",
    opacity: 1,
}, 1000, function () {
    $("h3, p, a, h5, img, li").animate(
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
    $("p, h1, h3, table, li").css('color', '#797979')

    $("#btnDark").show();
    $("#btnLight").hide();
    document.cookie = "mode=FALSE";
})
//mode jour bouton
$("#btnDark").click(function () {
    $("body").css('background', '#2f3640');

    $("p,h1,h3, table, li").css('color', 'rgb(200,200,200)')
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
    $("body").css('background', '#2f3640');

    $("p,h1,h3, table, li").css('color', 'rgb(200,200,200)')
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
    $("p, h1, h3, table, li").css('color', '#797979')

    $("#btnDark").show();
    $("#btnLight").hide();
    document.cookie = "mode=FALSE";
}

const expertise = {
    0: {
        "subject":
            "&diams; PHP procédural / PHP orienté objet " + "<br>" + "&diams; Utilisation de Laravel pour réaliser un CRUD (autodidacte)",
        "description":
            "-Gestion d'un BACK-OFFICE de A à Z" + "<br>" +
            "-Utilisation d'API stripe" + "<br>" +
            "-Création d'une API" + "<br>"
    },
    1: {
        "subject":
            "&diams; JS" + "<br>" +
            "&diams; jQuery",
        "description":
            "-Script permettant d'avoir un front dynamique avec AJAX et DOM" + "<br>"
    },
    2: {
        "subject":
            "&diams; HTML / CSS (Bootstrap)",
        "description":
            "-Conception de pages de A à Z" + "<br>" +
            "-Utilisation de templates"
    },
    3: {
        "subject":
            "&diams; SQL",
        "description":
            "-Conception de bases de données" + "<br>" +
            "-Communication avec la base de données avec le langage SQL depuis MySQL ou Oracle " +
            "(PostgreSQL est un SGBD qui sera vu au cours de la 3e année)"
    },
    4: {
        "subject":
            "&diams; C",
        "description":
            "-Construction de programmes basiques" + "<br>" +
            "-Utilisation de tableaux / pointeurs / prototypes / fonctions / structures" + "<br>" +
            "-Maitrise des chaines de caractères et des systèmes de fichiers " + "<br>" +
            "-Utilisation de la librairie GTK pour une interface graphique" + "<br>" +
            "-Utilisation de la librairie MySQL pour communiquer avec la base de données" + "<br>" +
            "-Création d'un robot en C++ avec l'implémentation SOIL"
    },
    5: {
        "subject":
            "&diams; Shell",
        "description":
            "-Construction de programmes basiques" + "<br>" +
            "-Utilisation de fonctions, de tableaux ..."
    },
    6: {
        "subject":
            "&diams; Python",
        "description":
            "-Construction de programmes basiques"
    },
    7: {
        "subject":
            "&diams; Java orienté objet",
        "description":
            "-Construction de programmes basiques"
    },
}
//
for (var i in expertise) {
    var content = "<tr>" +
        "<td>" + expertise[i]['subject'] + "</td>" +
        "<td>" + expertise[i]['description'] + "</td>" +
        "</tr>";

    $("#langages").append(content)
}
