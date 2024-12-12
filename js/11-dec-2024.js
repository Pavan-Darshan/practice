
//  function my(){
    
//       document.getElementById("names").innerHTML=document.getElementById("names").innerText+ " Darshan";
//    }
//   { 
//     let m="darshan";
// //     let x="pavan";
//   }
//   let m="Pavan";
//     // console.log(x);
//     {
//         let m=10;
//     }
//     {
//         let m=15;
//     }
//     {
//         let m=178;
//     }
    
// console.log(m)

// let y=2+6+"8";
// console.log(y);
// let exp=2**3;
// console.log(exp)


// let a= 100 * 10 / 3; /* same precedence  so they are computed from left to right*/
// console.log(a);

// // nullish coalescing assignment
// let e=12,h=18;f=null;
// console.log( "variable e value is :",e??=h)
// console.log( "variable f value is :",f??=h)

let x;       // Now x is undefined
x = 5;      
x = "John"; 
console.log(x)

const car = {type:"Fiat", 
    model:"500", 
    color:"white"};
console.log(car.type);

// const per={};
const person=new  Object();
person.fname="pavan";
person.lname="Darshan";
person.age=20;

console.log(person["lname"]);
const emp=person;
console.log(emp);
emp.age=28;
console.log(person);
const person1 = {
    name: "Pavan",
    age: 28,
    city: "India"
  };
  
  // Create an Array
  const myArray = Object.values(person1);
  
  // Display the Array
  document.getElementById("demo").innerHTML = person1;

