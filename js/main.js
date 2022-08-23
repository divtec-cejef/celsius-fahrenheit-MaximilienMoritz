/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
    'use strict'; // Demande un interprétation stricte du code

    const temperature = Number(prompt(`Température en Celsius : `));

    //Check si la veleur entrée est un nombre
    if (isNaN(temperature)) {

        //Envoie un message d'erreur à l'utilisateur
        alert(`La valeur entrée n'es pas un nombre !`);

    } else {

        //Calcule et renvoie le résultat du calcul
        let farhenheit = temperature * 9 / 5 + 32;
        alert(` ${temperature}°C = ${farhenheit}°F `);
    }

}()); // Main IIFE

