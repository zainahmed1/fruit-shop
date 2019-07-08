let total = 0;
let pocketMoney = 0;

let noOfApples = 0;
let costOfApple = 10;
let appleElem = document.querySelector(".noOfApples");

function plusApple() {
    pocketMoney = parseInt(document.querySelector("#haveMoney").value);
  if(pocketMoney <= total) {
        alert("not enough money for buy apple");
    }
 else if (pocketMoney >= 10) {
     noOfApples++;
     appleElem.value = noOfApples;
     total = total + costOfApple;
     document.querySelector('#totalbill').innerHTML = total;
    }
} 
function minusApple(){
    pocketMoney = parseInt(document.querySelector("#haveMoney").value);
    if (noOfApples > 0) {
        noOfApples--;
        appleElem .value = noOfApples;
        total = total - costOfApple;
        document.querySelector("#totalbill").innerHTML= total ;
     } 
     
}



let noOfOranges = 0;
let costOfOrange = 15;
let orangeElem = document.querySelector(".noOfOranges");

function plusOrange() {
    pocketMoney = parseInt(document.querySelector("#haveMoney").value);
  if(pocketMoney <= total) {
        alert("not enough money for buy orange");
    }
 else if (pocketMoney >= 15) {
     noOfOranges++;
     orangeElem.value = noOfOranges;
     total = total + costOfOrange;
     document.querySelector('#totalbill').innerHTML = total;
    }
} 
function minusOrange(){
    pocketMoney = parseInt(document.querySelector("#haveMoney").value);
if (noOfOranges > 0) {
    noOfOranges--;
    orangeElem .value = noOfOranges;
    total = total - costOfOrange;
    document.querySelector("#totalbill").innerHTML= total ;
 } 
}



let noOfBananas = 0;
let costOfBanana = 7;
let bananaElem = document.querySelector(".noOfBananas");

function plusBanana() {
    pocketMoney = parseInt(document.querySelector("#haveMoney").value);
  if(pocketMoney <= total) {
        alert("not enough money for buy banana");
    }
 else if (pocketMoney >= 7) {
     noOfBananas++;
     bananaElem.value = noOfBananas;
     total = total + costOfBanana;
     document.querySelector('#totalbill').innerHTML = total;
  }
} 
function minusBanana(){
    pocketMoney = parseInt(document.querySelector("#haveMoney").value);
if (noOfBananas > 0) {
    noOfBananas--;
    bananaElem .value = noOfBananas;
    total = total - costOfBanana;
    document.querySelector("#totalbill").innerHTML= total ;
 } 
}



