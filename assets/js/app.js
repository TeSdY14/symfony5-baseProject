/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import $ from 'jquery';
global.$ = global.jQuery = $;
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
require('webpack-jquery-ui/autocomplete');

let dataCode = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
];
let listeNomVilles = [];
$(document).ready(function() {

    function result(listeNomVilles) {
        console.log('6');
        // $('.result').html(listeNomVilles);
    }

    function afficherVille(url, callback) {
        $.ajax({
            url: url
        }).then(function(data) {
            console.log('4');
            // let txtLines = data.split('\r\n');
            $.each(data /*txtLines*/, function( index, value ) {
                dataCode.push(value.nom + " (" + value.codesPostaux[0] + ")");
                // dataCode.push(value);
                listeNomVilles.push(value.nom + "<br>");
                // listeNomVilles.push(value + "<br>");
            });
            console.log('5');
            callback(listeNomVilles);
            console.log('7');
        });
    }
    afficherVille("https://geo.api.gouv.fr/communes", result);
    console.log('3');
    // afficherVille('http://symfony5-baseproject/build/listeNomVilleFr.txt', result)
    console.log('1');
    $("#autocomplete").autocomplete({source: dataCode});
    console.log('2');
});

// Récupération d'une variable TWIG
document.addEventListener('DOMContentLoaded', function() {
    let variablePourJs = document.querySelector('.js-variablePourJs');
    let seeVariable = variablePourJs.dataset.variableToPass;

    let objetPourJs = document.querySelector('.js-objetPourJs');
    let seeObjet = objetPourJs.dataset.objetToPass;
    // or with jQuery
    //var seeVariable = $('.js-variablePourJs').data('variableToPass');
    $('#testVariableToPass').html(seeVariable);
    $('#testObjetPourJs').html(seeObjet);
});

// rechercher une Valeur dans un objet en fonction de sa Clé  recursive for an in-depth search
function findVal(object, key) {
    let value;
    Object.keys(object).some(function(k) {
        if (k === key) {
            value = object[k];
            return true;
        }
        if (object[k] && typeof object[k] === 'object') {
            value = findVal(object[k], key);
            return value !== undefined;
        }
    });
    return value;
}

function findKey(object, value) {
    let key;
    Object.keys(object).some(function(k) {
        if (object[k] === value) {
            key = k;
            return true;
        }
        if (object[k] && typeof object[k] === 'object') {
            key = findKey(object[k], value);
            return key !== undefined;
        }
    });
    return key;
}

let objet =
    {
        '1one': 'Value1',
        '1two': 'Value2',
        '3SubObjet' : {
            '3one': 'SubYoYoYo',
            '3two': 'subYa Ya YA'
        },
        '4SubObjet' : {
            '4one': 'SubYoYoYo',
            '4two': 'subYa Ya YA',
            '5SubSubObjet' : {
                '5one': '5oneSubYoYoYo',
                '5two': '5oneSubYa Ya YA',
                '6SubSubObjet' : {
                    '6one': '6oneSubYoYoYo',
                    '6two': '6oneSubYa Ya YA'
                }
            }
        }
    };

console.log("résultat doit donner subYa Ya Ya : " + findVal(objet, "3two"));
console.log("résultat doit donner 1one : " + findKey(objet, 'Value1'));
console.log("résultat doit donner 3two : " + findKey(objet, 'subYa Ya YA'));
console.log("résultat doit donner 6two' : " + findKey(objet, '6oneSubYa Ya YA'));






