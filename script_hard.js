 'use strict';
// Загадывание случайного числа от 1 до 100
let week = ['пн', 'вт', 'ср', 'чт', 'пт', "сб", 'вс']

const date = new Date();
// console.log(week[ date.getDay() > 0 ? date.getDay()-1 : 6]) 

for (let key in week)  {
    if (key > 4 && key != (date.getDay() > 0 ? date.getDay()-1 : 6)) 
      console.log("%c" + week[key], "font-style: italic;");
    else if (key > 4 && key == (date.getDay() > 0 ? date.getDay()-1 : 6)) 
      console.log("%c" + week[key], "font-weight: bold;");
    else if (key === (date.getDay() > 0 ? date.getDay()-1 : 6))
      console.log("%c" + week[key], "font-weight: bold;"); 
    else 
      console.log(week[key]);
};

