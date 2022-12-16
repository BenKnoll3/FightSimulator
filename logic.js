let wre1, wre2;
let str1, str2;
let gra1, gra2;
let car1, car2;
const hdc = heightdrop-content;



function showDrop(p1) {
    document.getElementById(p1).classList.toggle("show");
}

function hideDrop(p1) {
    document.getElementById(p1).classList.toggle("hide");
}

function setBeginner(skill, headId) {

    document.getElementById(headId).innerHTML = "Beginner";
    if (skill === 1){
        wre1 = 1;
    } else if (skill === 2){
        str1 = 1;
    } else if (skill === 3){
        gra1 = 1;
    } else if (skill === 4){
        wre2 = 1;
    } else if (skill === 5){
        str2 = 1;
    } else if (skill === 6){
        gra2 = 1;
    } 

}

function setIntermediate(skill, headId) {
    document.getElementById(headId).innerHTML = "Intermediate";
    if (skill === 1){
        wre1 = 2;
    } else if (skill === 2){
        str1 = 2;
    } else if (skill === 3){
        gra1 = 2;
    } else if (skill === 4){
        wre2 = 2;
    } else if (skill === 5){
        str2 = 2;
    } else if (skill === 6){
        gra2 = 2;
    } 
}

function setExpert(skill, headId) {
    document.getElementById(headId).innerHTML = "Expert";
    if (skill === 1){
        wre1 = 3;
    } else if (skill === 2){
        str1 = 3;
    } else if (skill === 3){
        gra1 = 3;
    } else if (skill === 4){
        wre2 = 3;
    } else if (skill === 5){
        str2 = 3;
    } else if (skill === 6){
        gra2 = 3;
    } 
}

function faceOff() {
    if (wre1 + str1 + gra1 > wre2 + str2 + gra2){
        alert("fighter 1 wins!");
    } else {
        alert("fighter 2 wins!");
    }

    
}
