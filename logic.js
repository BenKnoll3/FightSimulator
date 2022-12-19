let hei1, hei2;
let bui1, bui2;
let pow1, pow2;
let chi1, chi2;
let sub1, sub2;
let name11;

/*name1 = document.getElementById('f1name').value;
name2 = document.getElementById('f2name').value;
*/

function showDrop(p1) {
    document.getElementById(p1).classList.toggle("show");
}

function hideDrop(p1) {
    document.getElementById(p1).classList.toggle("hide");
}

function setPlayer1(points, headId, trait, traitNumber) {
    document.getElementById(headId).innerHTML = trait;
    if (traitNumber === 1){
        hei1 = points;
    } else if (traitNumber === 2){
        bui1 = points;
    } else if (traitNumber === 3){
        pow1 = points;
    } else if (traitNumber === 4){
        chi1 = points;
    } else if (traitNumber === 5){
        sub1 = points;
    }
}
function setPlayer2(points, headId, trait, traitNumber) {
    document.getElementById(headId).innerHTML = trait;
    if (traitNumber === 1){
        hei2 = points;
    } else if (traitNumber === 2){
        bui2 = points;
    } else if (traitNumber === 3){
        pow2 = points;
    } else if (traitNumber === 4){
        chi2 = points;
    } else if (traitNumber === 5){
        sub2 = points;
    }
    //alert(hei2 + ""+bui2 + ""+pow2 + ""+chi2 + ""+sub2 + "");
}
function randomInt() {
    return Math.floor(Math.random() * 12);
}
function faceOff() {
    let flag = true;
    let f1rounds = 0;
    let f2rounds = 0;
    let i = 1;

    let n1 = document.getElementById('f1name').value;
    let n2 = document.getElementById('f2name').value;

    while (flag === true && i < 6) {
        if (randomInt() < pow1 - chi2){
            return n1 + " wins by knockout in round " + i + "!!!";
        } else if (randomInt() < pow2 - chi1){
            return n2 + " wins by knockout in round " + i + "!!!";
        } else if (randomInt() < sub2 - bui1){
            return n2 + " wins by submission in round " + i + "!!!";
        } else if (randomInt() < sub1 - bui2){
            return n1 + " wins by submission in round " + i + "!!!";
        } else if (randomInt() < hei1){
            f1rounds = f1rounds + 1;
        } else {
            f2rounds = f2rounds + 1;
        }
        i = i + 1;
    }
    if (f1rounds > f2rounds){
        return n1 + " wins by decision with (" + f1rounds + " rounds to " + f2rounds + ")!!!";
    } 
    return n2 + " wins by decision with (" + f2rounds + " rounds to " + f1rounds + ")!!!";
}

function displayWinner(winner) {
    document.getElementById(winner).innerHTML = faceOff();
}