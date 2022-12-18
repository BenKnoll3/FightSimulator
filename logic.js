let hei1, hei2;
let bui1, bui2;
let pow1, pow2;
let chi1, chi2;
let sub1, sub2;
const hdc = heightdrop-content;

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

function faceOff() {
    if (hei1 + bui1 + pow1 + chi1 + sub1 > hei2 + bui2 + pow2 + chi2 + sub2){
        alert("fighter 1 wins!");
    } else {
        alert("fighter 2 wins!");
    }
}
