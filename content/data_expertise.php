<?php

$expertise =
    array(
        0 => array
        (
            "subject" => "&diams; PHP natif / PHP orientée objet <br> 
                          &diams; Utilisation de Laravel pour réaliser un CRUD (autodidacte)
               ",
            "description" => "
                -Gestion d'un BACK-OFFICE<br>
                -Utilisation d'API stripe<br>
                -Création d'une API<br>
                -Communication avec la base de données<br>
            "
        ),
        1 => array
        (
            "subject" => "&diams; JS <br>
                          &diams; jQuery",
            "description" => "
                -Script permettant d'avoir un front dynamique avec AJAX et DOM<br>
            "
        ),
        2 => array
        (
            "subject" => "&diams; HTML / CSS (Bootstrap) ",
            "description" => "
                -Création de page designer depuis le début<br>
                -Utilisation de templates
            "
        ),
        4 => array
        (
            "subject" => "&diams; C",
            "description" => "
                -Construction de programmes basiques<br>
                -Utilisation de tableaux / pointeurs / prototypes / fonctions<br>
                -Utilisation de la librairie GTK pour une interface graphique<br>
                -Utilisation de la librairie MySQL pour communiquer avec la base de données<br>
                -Création d'un robot en C++ avec l'implémentation SOIL
            "
        ),
        5 => array
        (
            "subject" => "&diams; Shell",
            "description" => "
                -Construction de programmes basiques<br>
                -Utilisation de fonctions de tableaux ...
            "
        ),
        6 => array
        (
            "subject" => "&diams; Python",
            "description" => "
                -Construction de programmes basiques
            "
        ),
        7 => array
        (
            "subject" => "&diams; Java orienté objet",
            "description" => "
                -Construction de programmes basiques<br>
            "
        ),
    );

foreach ($expertise as $e) {
    echo "<tr>";
    echo "<td>" . $e["subject"] . "</td>";
    echo '<td>' . $e["description"] . '</td>';
    echo "</tr>";
}
