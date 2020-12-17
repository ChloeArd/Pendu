let find = 0;
let end = false;
let missing = 0;
let div1 = document.createElement("div");


let guessWord = ["TARTIFLETTE", "SALADE", "TOMATE", "YAOURT", "CREVETTE", "HAMBURGER", "FRAISE", "CAROTTE", "COURGETTE", "CHOCOLAT", "HARICOT", "GLACE", "VIANDE", "POULET", "CHIPS", "FARINE", "OEUF", "GRENADINE", "KIWI", "TACOS", "PAIN", "RADIS", "LASAGNE", "SPECULOS", "BONBON", "MASCARPONE", "GRUYERE", "POMME" ];
//Mot aléatoire choisi par l'ordinateur dans le tableau.
let findWord = guessWord[Math.floor(Math.random() * guessWord.length)];
console.log(findWord);

//Récupérer la valeur de chaque bouton.
let A = document.getElementById("A").value = "A";
let B = document.getElementById("B").value = "B";
let C = document.getElementById("C").value = "C";
let D = document.getElementById("D").value = "D";
let E = document.getElementById("E").value = "E";
let F = document.getElementById("F").value = "F";
let G = document.getElementById("G").value = "G";
let H = document.getElementById("H").value = "H";
let I = document.getElementById("I").value = "I";
let J = document.getElementById("J").value = "J";
let K = document.getElementById("K").value = "K";
let L = document.getElementById("L").value = "L";
let M = document.getElementById("M").value = "M";
let N = document.getElementById("N").value = "N";
let O = document.getElementById("O").value = "O";
let P = document.getElementById("P").value = "P";
let Q = document.getElementById("Q").value = "Q";
let R = document.getElementById("R").value = "R";
let S = document.getElementById("S").value = "S";
let T = document.getElementById("T").value = "T";
let U = document.getElementById("U").value = "U";
let V = document.getElementById("V").value = "V";
let W = document.getElementById("W").value = "W";
let X = document.getElementById("X").value = "X";
let Y = document.getElementById("Y").value = "Y";
let Z = document.getElementById("Z").value = "Z";


function trouver(value) {
    if (findWord.charAt(A)) {

    }
}



function choose(element) {
    let trouve = false;

   if (trouve !== false) {
       missing++;
       if(missing < 8) {
           div1.innerHTML = "La lettre n'est pas contenue dans le mot !";
           div1.style.fontSize = "20px";
           end = false;
       }
       else if(missing === 8) {
            div1.innerHTML = "Tu as perdu, le mot était " + findWord + ".";
           div1.style.fontSize = "20px";
            en = true;
       }
       else {
           div1.innerHTML = "Tu as gagné, BRAVOOO !";
           div1.style.fontSize = "20px";
            end = true;
       }

   }
}

function trait(){
    for (let i = 0; i < findWord.length; i++){
        document.getElementById("wordTrait").innerHTML = "_" * i;
    }
}
trait();

choose();

document.getElementById("newPart").onclick = function (){
    location.reload();
};