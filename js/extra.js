
// Objects

const person={};

person.firstName = "Pavan";
person.lastName = "Darshan";
person.age = 28;
person.eyeColor = "black";


function PersonDetails(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.nationality="Indian";

       
}


const person1=new PersonDetails("Pavan","Darshan",28);
console.log(person1);

PersonDetails.prototype.fullnamme=function(){
    return this.firstName+" "+ this.lastName;
};
console.log(person1.fullnamme());



person.mob=123456;

console.log(Object.isExtensible(person));


Object.preventExtensions(person); // adding is prevented but we can delete


console.log(Object.isExtensible(person));


console.log(Object.seal(person));   // add and delete prevented
delete person.eyeColor;

console.log(Object.isSealed(person));

person.eyeColor="blue";


Object.freeze(person);  // prevents any changes to an object properties

person.eyeColor="yellow";


console.log(person);

console.log("------------------------------------------------------------------------------");

console.log(person1);
const person2=new PersonDetails("aaa","bbbb");
console.log(person2);

console.log(person2.fullnamme());

Object.assign(person2,person1); // target and source

console.log(person2);

for(let [key,value] of Object.entries(person2)){
     console.log(key + " : " + value);
}

let x=Object.keys(person2);
console.log(x);
 let y= Object.values(person2);
 console.log(y);


 // properties

//  person2.mob=69696969;

//  console.log(person2);

// Object.defineProperties(person2,"mob", {value:"123456"});
 
 console.log(person2);

 

// get set

console.log("-----------------get set------------------");

const personGet = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    },

    set first(x){
        this.first=x;

    },
    set last(x){
        this.lastName=x
    }
  };

  console.log(personGet);
  console.log(personGet.fullName);
  personGet.firstName="pavan";
  personGet.lastName="darshan"
  console.log(personGet);



console.log("---------------Functions--------------");


(function () { console.log("self invoking function"); }) (); //self  invoking

function sum(...x){  // rest parameter
    let s=0;
    for (const element of x) {
        s+=element;
    }
    return s;
}
console.log(sum(10,20,34,45,47,48,48,145));


// ----------------------- call   apply------------------

const m1={
    fullnames: function(city){
        return this.firstName+" "+ this.lastName+ " "+ city;
    }
};

const p1 = {
    firstName:"pavan",
    lastName: "darshan"
  };
  const p2 = {
    firstName:"call",
    lastName: "apply"
  };

  console.log(m1.fullnames.call(p1,"Benagaluru"));
  console.log(m1.fullnames.apply(p2,["Madikeri"]));


  const num=[12,24,54,78,4,1];
  console.log(Math.min.apply(null,num)); // array maximum value


  class car{
    constructor( brand){
            this.brand=brand;
    }
     static present(x){
        return " car name : "+ x.brand
    }
  }
  class model extends car{
    constructor(brand,model){
        super(brand);
        this.model=model;
    }
    show(){
        return car.present(obj)+ " "+"model : "+this.model
    }

  }

  const obj=new model("tata","hybrid");

  console.log(obj.show());
  
  
// -------------------callback---------------------

const arr=[10,20,-64,-1,0,65,6,-4];

const display=remove(arr,(x)=> x>=0);

function remove(number,callback){
    const temp=[];

    for (const element of number) {
        if(callback(element)){
                temp.push(element);
        }
    }
    return temp;
}

console.log(display);


setInterval(clock,1000);

function clock(){
    let date=new Date();
    document.getElementById("demo").innerHTML=
    date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    
}


// -----------------------Promises---------------

let myPromise= new Promise(function(resolve,rejected){
    if(5>12)
        resolve("success....");
    else
        rejected("failure");



});
myPromise.then(
    function(value){
        console.log(value);

},
function(error){
        console.log(error);
});





async function myPromiseName() {
    if (5>15) {
        return "small";
    }
    else
        return "big";
}


myPromiseName().then(
    function(value){
        console.log(value);

},
function(error){
        console.log(error);
});



async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
        setTimeout(function() {resolve("Await....");}, 3000);
      });
    document.getElementById("display").innerHTML = await myPromise;
  }
  
  myDisplay();

// document.getElementById( "image" ).src ="/images/flower_background.jpg";

document.getElementById("demo").style.color = "blue";

 
  const para=document.createElement("p");
  const tx=document.createTextNode("my new paragraph");
  para.appendChild(tx);

  const block=document.getElementById("div1");
  block.appendChild(para);

//   block.remove();
document.getElementById("demo1").innerHTML =
"Page location is " + window.location.href;