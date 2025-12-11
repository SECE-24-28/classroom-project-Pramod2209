// //Implicit Type Conversion
// console.log("1" + 2 + true + '@' + 98.7 + false + null);
// console.log("10" - 2);
// console.log("15" * "2");
// console.log("15" / 3);
// console.log(18 % "4");
// console.log(true - 1);

// //Explicit Type Conversion
// console.log(Number("123"));
// console.log(Number("abc"));
// console.log(String(123));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("hi"));


/*let a=10;
console.log(a);
let b=20;
console.log(b);
let c=a+b;
console.log(c);
let d=c*2;
console.log(d);
let e=d/5;
console.log(e);
let f=e-3;
console.log(f);
let g=f%4;
console.log(g);
let h=g**2;
console.log(h);*/

/*
let age=25;
age=30;
console.log(age);
*/


/* var age1=24;
var age1=25;
age1=26;
console.log(age1); */

/* console.log(x);
var x=10; */


/* function example(){
    if(1){
        var count=10;//var is accesssible outside the block but the let is not
    }
    console.log(count);
}
example(); */
/* greet();
function greet(){
    console.log("Hello World!");
}*/
// greet(); // This will cause an error if uncommented because greet is not defined yet

/* const greet = function() {
    console.log("Hello World!");
}
greet();//function expression called after its definition */

/* const greetnamed = function greet() {
    console.log("Hello from named function expression!");
};
greetnamed(); */

/* function process(callback) {
    console.log("Processing...");
    callback();
}

function done() {
    console.log("Task Completed!");
}
process(done); */

/* //arrow function
const greetArrow=(name)=>{
    return "Hello "+name;
};
console.log(greetArrow("NaveenKumar"));
console.log(greetArrow("Alice"));  */

/* const fruits=['apple','banana','cherry'];
const newength=fruits.push('orange')
console.log(fruits)
console.log(newength); */

/* const fruits=['apple','banana','cherry'];
const newength=fruits.unshift('orange')
console.log(fruits)
console.log(newength); */

/* const fruits=['apple','banana','cherry'];
const newength=fruits.pop('orange')
console.log(fruits)
console.log(newength); */

/* let fruits=['apple','banana','cherry','date','fig'];
let sliced=fruits.slice(1,4);
console.log(sliced);
console.log(fruits);

let lastTwo=fruits.slice(-2);
console.log(lastTwo); */
/* 
let fruits=['apple','banana','cherry','date','fig'];
console.log(fruits.includes('banana'));
console.log(fruits.includes('grape'));//returns boolean value */

/* let numbers=[1,4,7,12,15];

let found=numbers.find((num)=>num>10);
console.log(found); */

/* let nums=[3,5,7,8,10];
let filtered=nums.filter((num)=>num%2===0);
console.log(filtered);
 */

/* let nums = [1, 2, 3, 4]
let doubled = nums.map(n => n*2);
console.log(nums);
console.log(doubled); */

// let names = ["Raj", "Abi", "Mahesh", "Kumar"]
// let greaterThanfour = names.find(n => n.length > 4);
// console.log(greaterThanfour);

// let nums = [1, 2, 3, 4];
// let doubled = nums.map(n => n*2);
// console.log(nums);
// console.log(doubled);

// let price = [200, 350]
// let plus100 = price.map(n => n+100)
// console.log(price)
// console.log(plus100)

// let persons = ['Kumar', "Vijay", "Sasi"]
// let mr = persons.map(n => 'Mr.' + n)
// console.log(mr);

// let numbers = [1, 4, 7, 12, 15];
// let found = numbers.filter(num => num > 10); // return all the elements which are greater than 10
// console.log(found);

// let marks = [50, 70, 40, 80, 90, 95]
// let gt80 = marks.filter(n => n > 80);
// console.log(gt80);

// //Object
// let person = {
//     "id": 1,
//     "name": "Alice",
//     "email": "alice@gmail.com",
//     "age": 18
// };
// console.log("ID: " + person.id);
// console.log("Name: " + person.name);
// console.log("Email: " + person.email);
// console.log("Age: " + person["age"]);

// //Array of Objects
// let person = [
//     {"id": 1, "name": "Alice", "age": 18, "grade" : "A"},
//     {"id": 2, "name": "Bob", "age": 18, "grade": "B"},
//     {"id": 3, "name": "Charlie", "age": 18, "grade": "C"}
// ];
// console.log(person);
// let names = person.map(n => n.name);
// console.log(names);

// let students = [
//     { "name" : "Alice", "marks" : 45},
//     { "name" : "Bob" , "marks" : 80},
//     { "name" : "Charlie" , "marks" : 80}
// ];
// let fm = students.filter(m => m.marks > 50).map(m => m.name);
// console.log(fm);

// //Loop
// let person = {
//     "id": 1,
//     "name": "Alice",
//     "email": "alice@gmail.com",
//     "age": 18
// };
// for(let key in person)  //for in loop
//     console.log(key, " : ", person[key]);

// let fruits = [ 'cherry', 'apple', 'banana', 'orange', 'grape' ]
// for(let f of fruits) //for of loop
//     console.log(f);

// let fruits = [ 'cherry', 'apple', 'banana', 'orange', 'grape' ]
// fruits.forEach(n => {
//     console.log("Hello " + n);
// });

// let nums = [10, 20, 30];
// let total = nums.reduce((sum, cur) => sum + cur, 0);
// console.log(nums);
// console.log(total);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [4, 5, 6];
const arr = arr1.concat(arr2);
console.log(arr);
const combined = [...arr1, ...arr2, ...arr3];
console.log(combined);