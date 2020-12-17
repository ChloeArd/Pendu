let find = 0;
let end = false;
let missing = 0;
let div1 = document.createElement("div");


let guessWord = ["TARTIFLETTE", "SALADE", "ABRICOT", "ARTICHAUT", "TOMATE", "YAOURT", "CREVETTE", "HAMBURGER", "FRAISE", "CAROTTE", "COURGETTE", "CHOCOLAT", "HARICOT", "GLACE", "VIANDE", "POULET", "CHIPS", "FARINE", "OEUF", "GRENADINE", "KIWI", "TACOS", "PAIN", "RADIS", "LASAGNE", "SPECULOS", "BONBON", "MASCARPONE", "GRUYERE", "POMME" ];
//Mot aléatoire choisi par l'ordinateur dans le tableau.
let findWord = guessWord[Math.floor(Math.random() * guessWord.length)];
console.log(findWord);

//Quand on clicique sur un boutton de tel lettre, cette lettre apparait dans l'encadrement.Mainteneant faut créée des conditions
function writeLetter(letter){
    document.getElementById(letter).addEventListener("click",function (){
        if(findWord.includes(letter)){
            document.getElementById("wordTrait").innerHTML += letter;
            document.getElementById(letter).style.backgroundColor = "grey";
        }
        else {
            document.getElementById(letter).style.backgroundColor = "grey";
        }
    })
}
writeLetter("A");
writeLetter("B");
writeLetter("C");
writeLetter("D");
writeLetter("E");
writeLetter("F");
writeLetter("G");
writeLetter("H");
writeLetter("I");
writeLetter("J");
writeLetter("K");
writeLetter("L");
writeLetter("M");
writeLetter("N");
writeLetter("O");
writeLetter("P");
writeLetter("Q");
writeLetter("R");
writeLetter("S");
writeLetter("T");
writeLetter("U");
writeLetter("V");
writeLetter("W");
writeLetter("X");
writeLetter("Y");
writeLetter("Z");

function choose(letter) {
    let trouve = false;
       if (trouve !== false) {
           missing++;
           if (missing < 8) {
               div1.innerHTML = "La lettre n'est pas contenue dans le mot !";
               div1.style.fontSize = "20px";
               end = false;
           }
           else if (missing === 8) {
               div1.innerHTML = "Tu as perdu, le mot était " + findWord + ".";
               div1.style.fontSize = "20px";
               for (var i = 0; i < findWord.length; i++) {
                   findWord[i].innerHTML = findWord[i];
               }
               end = true;
           }
           else {
               div1.innerHTML = "Tu as gagné, BRAVOOO !";
               div1.style.fontSize = "20px";
               end = true;
           }
           console.log(missing);
       }
}

document.getElementById("A").onclick = choose("A");


//Faire apparaitre les "_" a la place des lettres du mot.
for (let i = 0; i < findWord.length; i++) {
    var td = document.createElement("td");
    td.id = i;
    td.innerHTML = "_";
    document.getElementById("wordTrait").appendChild(td);
    if(findWord.includes("A")){

    }
}


document.getElementById("newPart").onclick = function (){
    location.reload();
};