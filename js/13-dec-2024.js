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

const set=new Set();

const set1=new Set(num);



set.add("a");
set.add("b");
set.add("1");
set.add("c");
set.add("1");
set.add(2);


console.log(set);

for(let x of set)
  console.log(x); // set 

for(let x of num1)
  console.log(x); //num1

console.log(set.has("1"));


const myIterator=set.values();

for(let x of myIterator)
  console.log(x); 

console.log(typeof myIterator);


for(let x of set.entries())
  console.log(x); 

console.log(set.size);
// set.clear();
// set.add(45)

console.log(set.delete("1"))
console.log(set);

const map= new Map([["apple",500],["Grape",500],["banana",400],["orange",150],["apple",500]]);
map.set("chicku",600);
console.log(map);

for(let x of map.entries()){
  console.log(x)
}


const items = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];




const result=Map.groupBy(items,({quantity})=>{return quantity>200?"ok":"low"});
console.log("ok products:");

for(let x of result.get("ok")){
  console.log(x.name+" "+x.quantity)
}
console.log("low products:");

for(let x of result.get("low")){
  console.log(x.name+" "+x.quantity)
}

console.log(result);
console.log(Boolean(1));




const person2 = {
  name: "Pavan",
  age: 28,
  city: "India"
};
console.log(person2.name);
let {name,age}=person2;

console.log(name);

let str1="Pavan Darshan";

let[a1,a2,,,a3]=str1;  //  String   Destructuring 
console.log(a3);

// array and string destructuring both are same method


const numb = [10, 20, 30, 40, 50, 60, 70];

let {[0]:p1, [1]:p2, [2]:p3, ...p4}=numb;

console.log(p4);

let point1=20,point2=40;
console.log(point1+" "+point2);

[point1,point2]=[point2,point1];
console.log(point1+" "+point2);

var text = "Visit Microsoft!";
console.log(text.replace(/microsoft/i, "W3Schools"));

var text = "Give 100%!"; 
console.log(text.match(/\d/g)); //regular expression for digit //o/p 1,0,0



// Try Catch Fianlly throw

try {
  console.log("hi");
  if(5<2) throw "Big";
  console.log("hiooooo");
  
  errorFunction("Welcome guest!");
  
} 
catch (error) {
 console.log(error);
  
}
finally{
  console.log("iam in finally block.....")
}
let nm = 1;
try {
  nm.toPrecision(500);
}
catch(err) {
  console.log(err.name);
}

bookPrice=20;
var bookPrice;

console.log(bookPrice+" "+p);
var p=10;


// strict mode

// "use strict";
// function my(){
//   x=8;
//   console.log("hiiiiii......."+x);
// }
// my();



/* this keyword*/
const person = {
  firstName: "Pavan",
  lastName: "Darshan",
  id: 1342,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());

let thisExample=this;
console.log(thisExample);
"use strict";
function myy(){
  return this;
}
myy();

const object1 = {
  firstName:"object1 first",
  lastName: "object1 last",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const object2 = {
  firstName:"object2 first",
  lastName: "object2 last",
}

let getFullName=object1.fullName.bind(object2);
console.log(getFullName());

class car{
  constructor(name,year){
    this.name=name;
    this.year=year;
  }

  cong(){
    return "Congrazzzzzz.....";
  }
  cong(){
    return "Im in second method of cong";
  }
  cong(){
    return "Im in third method of cong";
  }
  
}

const myCar1=new car("tata",2024);
const myCar2=new car("Mahindra",2004);


console.log(myCar1);
console.log(myCar2);
console.log(myCar1.cong());







  
  









