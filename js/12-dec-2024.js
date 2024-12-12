const person1 = {
    name: "Pavan",
    age: 28,
    city: "India"
  };
  console.log(person1)
   const arry=Object.values(person1);//creating array and coping data from object to array
   console.log(arry);
   let x=3;
   

//    function my(){
//     let a=10;
//     if(true){
//          a=2;
//     }
//     else{
//         let a=12;
//     }
//     console.log(a)
//    }
//    my();


function Details(name,age){
    this.name=name;
    this.age=age;
    this.state="karanataka";
};


// my.contact=9696969696; property added for only my object not for constructor

// Details.prototype.pincode=571201;
// Details.prototype.pincode=function(pin){
//      this.pincode=pin;
// }
// my.pincode=521454;
const my=new Details("Pavan Darshan",28,Details.prototype.pincode=571201);

console.log("My Details: \n"+my.name+"\n"+my.age+" \n"+my.state+"\n"+my.contact+"\n"+my.pincode);
let str=`pavan\`'s "laptop"`;
console.log(str);

let text = "We are the so-called \"Vikings\\\" from the north.";
console.log(text.at(-2));
console.log(text[5]);
console.log(text.length);
console.log(text.slice(-13,-7));
console.log(str.repeat(2));
console.log(text);
console.log(text.replace(/ARE/i,"123"));

console.log(text.indexOf("the"));// return starting position of the given string----not found it return -1

let mes = "The rain in SPAIN stays mainly in the plain";
let count=mes.match(/ain/gi);
console.log(count.length+"  "+count)

console.log(text.includes("z"))

// Interpolation
let a=10,b=30;
console.log(`Total : ${a+b}`);

//number

let p = (0.2 * 10 + 0.1 * 10) / 10; // for accuracy
console.log(p);

console.log("apple"/100); // NaN

var big=9999999999999999;
console.log(big);
var big=999999999999999999n;
console.log(big);
var big=BigInt(999999991234454);
console.log(big);

var big=BigInt(20);
console.log(Number(big)/10);


console.log(Number.isInteger(99));
console.log(Number.isInteger(45.6));


console.log(typeof((1089).toString())); //tostring

let m=9.544;
console.log(m.toFixed())
console.log(m.toFixed(2))

console.log(parseInt("10 years"));
console.log(parseInt("years 10"));


// Arrays

const cars = [];
cars[0]= "Suzuki";
cars[1]= "Volvo";
cars[2]= "BMW";

console.log(cars);

const my1 = new Array("suzuki", "tata", "mahindra");
console.log(my1);
console.log(typeof my1);

let val="<ul>";
my1.forEach(myfunction)
val+="</ul>";

function myfunction(value){
val+="<li>" + value + "</li>";
}
document.getElementById("array").innerHTML=val;
