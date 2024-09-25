'use strict';

let intMy = 12;

const myString = function (title) { 
  if (typeof title !== "string"){
      console.log("Это не строка!");
  } else {
    console.log(title = title.trim());
    if (title.length > 30) {
      // сonsole.log(title.length);
      console.log(title.slice(0, 30) + "...");
    }
  }
}

myString(intMy);
myString(prompt("Введите строку: "));
