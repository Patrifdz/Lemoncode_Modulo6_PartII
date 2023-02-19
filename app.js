const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var message = "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";

var upMessage = () => document.getElementById("messageInput").value;
var downMessage = () => document.getElementById("messageOutput").value;

function findIndex (character, alphabet) {
    var index;
    for (i=0; i<alphabet.length;i++) {
        if (alphabet[i] === character) {
           return index = i;
        } else index = -1;
    }
};

//Opcionalmente, se podría usar en lugar de la función "findIndex", el método "indexOf", sustituyendo "findIndex(letter, alphabet) por alphabetA.indexOf(letter)".
function translateMessage (message, alphabetA, alphabetB, id) {
    var finalMessage = "";
    for (letter of message.toLowerCase()) {
        var index = findIndex(letter, alphabetA)
        if(index >-1) {
            finalMessage += alphabetB[index];
        } 
        else finalMessage += letter;
    }
    document.getElementById(id).value = finalMessage;
}

document.getElementById("encryptButton").addEventListener("click", () => translateMessage(upMessage(), plainAlphabet, encryptedAlphabet, "messageOutput"));
document.getElementById("decryptButton").addEventListener("click", () => translateMessage(downMessage(), encryptedAlphabet, plainAlphabet, "messageInput"));

//--------------GENERADOR ALEATORIO--------------//

function randomPick (n, min, max) {
    var range = max-min + 1;
    var number= [];
    if(n<=range) {
        while (number.length<n) {
           var numberRandom = Math.floor(Math.random()*range)+min;
            if(number.indexOf(numberRandom) === -1) {
                number.push(numberRandom);
            }
        } console.log(number)
    } else console.log(`No pueden generarse ${n} números diferentes en el rango solicitado de ${range} números`);
    }

randomPick(5, 10, 30);
randomPick(12, 50, 100);
randomPick(20, 5, 10);
randomPick(2, 7,8);