'use strict';

const arr = [255678, 1255, 4567, 2546, 856112, 456810, 2563];
let num

const isNumber = function(num) {    
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function() {
  do { 
      num = +prompt("Введите число").trim(); 
  }
  while (!isNumber(num)) 
}

const myInt = function () { 

  for (let i = 0; i < 7; i++){
    if (String(arr[i]).split('')[0] === "2" || String(arr[i]).split('')[0] === "4"){
      console.log(arr[i]);
    }
  }
}

const primeNumber = function(){
  let count = 0;
    for (let i = 1; i < 100; i++){
      count = 0; 
      for (let j = 1; j <= i; j++){
          if (i % j === 0){
              count++; 
          }
      }
      if (count === 2) console.log(i + ": Делители этого числа: 1 и " + i); 
    }
}

asking();
console.log ("num", num);
myInt();
primeNumber();



