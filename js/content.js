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
    var content =
        "<tr>" +
        "<td>" + expertise[i]['subject'] + "</td>" +
        "<td>" + expertise[i]['description'] + "</td>" +
        "</tr>";

    $("#langages").append(content)
}

//content expérience qotid
const p_qotid = "<span class='quote'>Première expérience professionnelle, dans le domaine du développement, dans lequel j'ai pu utilisé pour la " +
    "première fois le framework angular, nous travaillions dans une plateforme différente de d'habitude.</span>" + "<br><br><hr>" +
    "&diams; Ajout de fonctionnalité dans le back-end" + "<br><br>" +
    "-Interaction avec la bdd afin d'afficher d'une manière précise le résultat des différentes requêtes (PHP/angular)" + "<br>" +
    "-Import de fichier avec angular" + "<br>" +
    "-Gestion des différents fichiers avec PHP pour un export/import d'un fichier en format CSV (file_get_contents(), fputcsv(), fgetcsv() ...)" + "<br>"

$("#p_qotid").append(p_qotid).addClass("text-justify");

//

//content expérience pa2
const p_pa2 = "<span class=' text-justify quote'>Grand projet scolaire permettant de valider son année. Réalisé en groupe de 3," +
    "nous avons travaillé sur une durée de 4 mois pour développer un site de conciergerie. Développé en PHP/JS, C, Java jusqu'à la mise" +
    " en place d'une infrastructure réseau sur Eve-Ng. Nous devions rédiger un cahier des charges, une charte graphique," +
    " créer un logo ... De plus, nous avions un rendez-vous avec notre directeur pédagogique tous les mois environ pour " +
    "faire un point sur l'avancée de notre projet. Enfin, ce projet était organisé grâce à plusieurs outils (trello, organigramme des " +
    "tâches, diagramme de Gantt, matrice RACI ...)" +
    " qu'on avait vu" +
    " dans une matière appelée \"introduction à la gestion de projet\" permettant d'organiser au mieux notre projet." +
    "</span>" + "<br><hr>" +
    "&diams; Back-end <br><br>" +


    "-Conception d'une base de données à partir de 0" + "<br>" +
    "-Gestion des services" + "<br>" +
    "-Gestion des abonnements/paiements via l'API stripe" + "<br>" +
    "-Gestion des utilisateurs" + "<br>" +
    "-Gestion des catégories" + "<br>" +
    "-Gestion des prestataires" + "<br><hr>" +

    "&diams; Front-end <br><br>" +
    "-Création d'un planning de réservation" + "<br>" +
    "-Création d'un monde 3D en webGL avec la bibliothèque Three JS, afin de montrer un des services de" +
    " l'entreprise aux clients" + "<br>" +
    "-Possibilité d'acheter tout type de produit (selon si le produit a une durée ou non par exemple)" + "<br>" +
    "-Possibilité de consulter leur(s) facture(s) et leur devis" + "<br>" +
    "-Possibilité de modifier leur profil" + "<br><hr>" +


    "&diams; Ergonomie <br><br>" +

    "-Création d'un site multilingue anglais/français" +"<br>" +
    "-Export d'un contrat de travail pour un prestataire en format PDF" + "<br>" +
    "-Export d'une facture/devis en format PDF également"


$("#p_pa2").append(p_pa2).addClass("text-justify");

const p_stamford = "<span class=' text-justify quote'>" +
    "Première expérience dans le monde professionnel à l'étranger. J'ai choisi de faire un stage en Angleterre pour optimiser mon anglais, " +
    "en apprendre plus sur la culture anglaise, voyager, en apprendre un peu plus sur les PC. J'ai beaucoup aimé ce stage, car il consistait " +
    ", le plus souvent, à intéragir avec les clients (ils étaient tous très sympa), à réparer des ordinateurs, vendre des produits etc ..." +
    " Ce stage m'a permis de découvrir un millième du monde de travail en Angleterre et j'espère un jour vivre en Angleterre pour sa culture," +
    " la moralité/civilité des anglais, l'ambiance de travail etc ..." +
    "</span>" + "<br><hr>" +
    "-Interagir avec les clients" +"<br>"+
    "-Assemblage/désassemblage d’ordinateurs" +"<br>"+
    "-Installation et mise à jour des OS" +"<br>"+
    "-Effectuer des nettoyages du système" +"<br>"+
    "-Service à la clientèle et vérification des stocks" +"<br>"

$("#p_stamford").append(p_stamford).addClass("text-justify");


const p_pa1 = "<span class=' text-justify quote'>" +
    "Premier grand projet informatique. Tout est un peu comme le projet n°2, nous devions rédiger un cahier des charges, " +
    "le travail était en groupe de 3. Sauf que cette fois-ci c'était un projet exclusivement en WEB (front et back). De plus, nous" +
    " devions héberger notre site web dans un domaine public."+
    "</span>" + "<br><hr>" +

    "&diams; Back-end <br><br>" +


    "-Conception d'une base de données à partir de 0" + "<br>" +
    "-Gestion des leçons de conduite" + "<br>" +
    "-Gestion des énoncés de quiz" + "<br>" +
    "-Gestion des utilisateurs (clients, formateurs)" + "<br>" +
    "-Possibilité d'exporter un tableau de données en format CSV" + "<br>" +
    "-Gestion des résultats du code (résultat envoyé par mail si jamais un examen est passé)" + "<br><hr>" +

    "&diams; Front-end <br><br>" +
    "-Création d'un canvas" + "<br>" +
    "-Possibilité de télécharger une leçon en format PDF" + "<br>" +
    "-Possibilité d'effectuer un examen" + "<br>" +
    "-Possibilité de s'entraîner avec un quiz" + "<br><hr>" +


    "&diams; Serveur <br><br>" +

    "-Configuration de A à Z d'un vps OVH" +"<br>" +
    "-Configuration d'un certificat SSL" +"<br>" +
    "-Installation du serveur HTTP apache 2" +"<br>" +
    "-Installation du SGBD MySQL" +"<br>" +
    "-Installation de la librairie 'php-gd' afin d'afficher dynamiquement un captcha dans le formulaire d'inscription" +"<br>"




$("#p_pa1").append(p_pa1).addClass("text-justify");

