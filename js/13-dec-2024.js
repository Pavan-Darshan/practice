const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.pop());
console.log(fruit)

console.log(fruit.push("123"));
console.log(fruit);
delete fruit[fruit.length-1];
console.log(fruit);
fruit.push("123")
console.log(fruit);

fruit[3]="256";
console.log(fruit);
fruit.push("#",4);
fruit.push("(");
console.log(fruit);
console.log(fruit.length);
fruit.copyWithin(2,0,3);
console.log(fruit);
// ['Banana', 'Orange', 'Banana', 'Orange', 'Apple', '579', 4]

fruit.splice(2,2,"new");
console.log(fruit.splice(2,2,"new"));
console.log(fruit);
console.log(fruit.sort());
console.log(fruit.sort().reverse()); // sport and reverse

const num=[100,25,14,24,84,"fvj","adc",4,-10,0,6];
num.sort();
console.log(num.sort((a,b)=>{return a-b}));  //  number sorting

// function my(x){
//     return Math.min.apply(null,x)
// }
// console.log("min value  "+my(num));

// iteration
const nu=[4,5,7,1,2,45,64];

const num1=nu.map((x)=>{return x*100})
// function myfun(value){
//     return value*10;
// }

console.log(num1);

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// document.getElementById("map").innerHTML = numbers2;

// function myFunction(value) {
//   return value * 2;
// }
// console.log(numbers2);

const date=new Date("2024-11-13");
// date.setFullYear(2000)
console.log(date); //date object

console.log(Math.round(Math.random()*100)); //random and round

console.log(Boolean(null)); //  Boolean true or false     even 12>9 also work


let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    default :
      day = "Saturday";
  }
console.log(day);

// for (var i = 0; i < Infinity; i++) {
//     console.log(i+"\n");
//       if(i==100){
//         break;
//       }
// }







