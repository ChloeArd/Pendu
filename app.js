let find = 0;
let end = false;
let missing = 0;
let div1 = document.createElement("div");


let guessWord = ["TARTIFLETTE", "SALADE", "ABRICOT", "ARTICHAUT", "TOMATE", "YAOURT", "CREVETTE", "HAMBURGER", "FRAISE", "CAROTTE", "COURGETTE", "CHOCOLAT", "HARICOT", "GLACE", "VIANDE", "POULET", "CHIPS", "FARINE", "OEUF", "GRENADINE", "KIWI", "TACOS", "PAIN", "RADIS", "LASAGNE", "SPECULOS", "BONBON", "MASCARPONE", "GRUYERE", "POMME" ];
//Mot aléatoire choisi par l'ordinateur dans le tableau.
let findWord = guessWord[Math.floor(Math.random() * guessWord.length)];
console.log(findWord);

//Récupérer la valeur de chaque bouton.
/**
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
*/

for (let i = 0; i < findWord.length; i++) {
    var td=document.createElement("TD");
    td.id = i;
    td.innerHTML = "_";
    document.getElementById("wordTrait").appendChild(td);
}


//Quand on clicique sur un boutton de tel lettre, cette lettre apparait dans l'encadrement.Mainteneant faut créée des conditions
document.getElementById("A").addEventListener("click", function() {
    if(findWord.includes("A")){
        document.getElementById("wordTrait").innerHTML += "A";
        document.getElementById("A").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("A").style.backgroundColor = "grey";
        missing++;
        console.log(missing);
    }
});
document.getElementById("B").addEventListener("click", function() {
    if(findWord.includes("B")){
        document.getElementById("wordTrait").innerHTML += "B";
        document.getElementById("B").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("B").style.backgroundColor = "grey";
    }
});
document.getElementById("C").addEventListener("click", function() {
    if(findWord.includes("C")){
        document.getElementById("wordTrait").innerHTML += "C";
        document.getElementById("C").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("C").style.backgroundColor = "grey";
    }
});
document.getElementById("D").addEventListener("click", function() {
    if(findWord.includes("D")){
        document.getElementById("wordTrait").innerHTML += "D";
        document.getElementById("D").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("D").style.backgroundColor = "grey";
    }
});
document.getElementById("E").addEventListener("click", function() {
    if(findWord.includes("E")){
        document.getElementById("wordTrait").innerHTML += "E";
        document.getElementById("E").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("E").style.backgroundColor = "grey";
    }
});
document.getElementById("F").addEventListener("click", function() {
    if(findWord.includes("F")){
        document.getElementById("wordTrait").innerHTML += "F";
        document.getElementById("F").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("F").style.backgroundColor = "grey";
    }
});
document.getElementById("G").addEventListener("click", function() {
    if(findWord.includes("G")){
        document.getElementById("wordTrait").innerHTML += "G";
        document.getElementById("G").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("G").style.backgroundColor = "grey";
    }
});
document.getElementById("H").addEventListener("click", function() {
    if(findWord.includes("H")){
        document.getElementById("wordTrait").innerHTML += "H";
        document.getElementById("H").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("H").style.backgroundColor = "grey";
    }
});
document.getElementById("I").addEventListener("click", function() {
    if(findWord.includes("I")){
        document.getElementById("wordTrait").innerHTML += "I";
        document.getElementById("I").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("I").style.backgroundColor = "grey";
    }
});
document.getElementById("J").addEventListener("click", function() {
    if(findWord.includes("J")){
        document.getElementById("wordTrait").innerHTML += "J";
        document.getElementById("J").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("J").style.backgroundColor = "grey";
    }
});
document.getElementById("K").addEventListener("click", function() {
    if(findWord.includes("K")){
        document.getElementById("wordTrait").innerHTML += "K";
        document.getElementById("K").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("K").style.backgroundColor = "grey";
    }
});
document.getElementById("L").addEventListener("click", function() {
    if(findWord.includes("L")){
        document.getElementById("wordTrait").innerHTML += "L";
        document.getElementById("L").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("L").style.backgroundColor = "grey";
    }
});
document.getElementById("M").addEventListener("click", function() {
    if(findWord.includes("M")){
        document.getElementById("wordTrait").innerHTML += "M";
        document.getElementById("M").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("M").style.backgroundColor = "grey";
    }
});
document.getElementById("N").addEventListener("click", function() {
    if(findWord.includes("N")){
        document.getElementById("wordTrait").innerHTML += "N";
        document.getElementById("N").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("N").style.backgroundColor = "grey";
    }
});
document.getElementById("O").addEventListener("click", function() {
    if(findWord.includes("O")){
        document.getElementById("wordTrait").innerHTML += "O";
        document.getElementById("O").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("O").style.backgroundColor = "grey";
    }
});
document.getElementById("P").addEventListener("click", function() {
    if(findWord.includes("P")){
        document.getElementById("wordTrait").innerHTML += "P";
        document.getElementById("P").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("P").style.backgroundColor = "grey";
    }
});
document.getElementById("Q").addEventListener("click", function() {
    if(findWord.includes("Q")){
        document.getElementById("wordTrait").innerHTML += "Q";
        document.getElementById("Q").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("Q").style.backgroundColor = "grey";
    }
});
document.getElementById("R").addEventListener("click", function() {
    if(findWord.includes("R")){
        document.getElementById("wordTrait").innerHTML += "R";
        document.getElementById("R").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("R").style.backgroundColor = "grey";
    }
});
document.getElementById("S").addEventListener("click", function() {
    if(findWord.includes("S")){
        document.getElementById("wordTrait").innerHTML += "S";
        document.getElementById("S").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("S").style.backgroundColor = "grey";
    }
});
document.getElementById("T").addEventListener("click", function() {
    if(findWord.includes("T")){
        document.getElementById("wordTrait").innerHTML += "T";
        document.getElementById("T").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("T").style.backgroundColor = "grey";
    }
});
document.getElementById("U").addEventListener("click", function() {
    if(findWord.includes("U")){
        document.getElementById("wordTrait").innerHTML += "U";
        document.getElementById("U").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("U").style.backgroundColor = "grey";
    }
});
document.getElementById("V").addEventListener("click", function() {
    if(findWord.includes("V")){
        document.getElementById("wordTrait").innerHTML += "V";
        document.getElementById("V").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("V").style.backgroundColor = "grey";
    }
});
document.getElementById("W").addEventListener("click", function() {
    if(findWord.includes("W")){
        document.getElementById("wordTrait").innerHTML += "W";
        document.getElementById("W").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("W").style.backgroundColor = "grey";
    }
});
document.getElementById("X").addEventListener("click", function() {
    if(findWord.includes("X")){
        document.getElementById("wordTrait").innerHTML += "X";
        document.getElementById("X").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("X").style.backgroundColor = "grey";
    }
});
document.getElementById("Y").addEventListener("click", function() {
    if(findWord.includes("Y")){
        document.getElementById("wordTrait").innerHTML += "Y";
        document.getElementById("Y").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("Y").style.backgroundColor = "grey";
    }
});
document.getElementById("Z").addEventListener("click", function() {
    if(findWord.includes("Z")){
        document.getElementById("wordTrait").innerHTML += "Z";
        document.getElementById("Z").style.backgroundColor = "grey";
    }
    else {
        document.getElementById("Z").style.backgroundColor = "grey";
    }
});


function choose() {
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
       console.log(missing);
   }
}

choose();

document.getElementById("newPart").onclick = function (){
    location.reload();
};