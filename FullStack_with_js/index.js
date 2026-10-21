console.log(a);
var a = 5; // var is global keyword

//issue
for(var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);}
console.log(i); // i is accessible here because var is function scoped, not block scoped

const b = 10; // const is block scoped
console.log(b); // b is accessible here

//if console.log(b) is placed outside the block, it will throw an error because b is not accessible outside the block where it is defined.
//console.log(b); // b is not accessible here
const b = 10;

console.log(a);
const a =5;
let b = 6;

 /* primitve data types
 * 1. number
 * 2. string
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. symbol
 * 7. bigint
 * 
 * secondary data types
 * 1. object
 * 2. array
 * 3. function
 */

let a = 5;
console.log(a, typeof a);
a = "hello";
console.log(a, typeof a);
a = true;
console.log(a, typeof a);
a = null;
console.log(a, typeof a);
a = undefined;
console.log(a, typeof a);
a = Symbol("hello");
console.log(a, typeof a);
a = 10n;
console.log(a, typeof a); 


let a = 5;
if(a === "5") {
    console.log(true);
}

var myObj = {
    name: "John",
    age: 30,
    city: "New York",
    show: showName
};
myObj.show();
function showName() {
    console.log(this.name);
}

const arr = [1, 2, 3, 4, 5]; //const do not allow to reassign the variable, but it allows to change the values of the array.
arr.push(6);
arr[1]= 7;
console.log(arr);
arr.pop();
console.log(arr);

let arr = [1, "GLA University", true, null, undefined]; // array can hold different data types
console.log(arr);

arr.unshift(45); // adds an element at the beginning of the array
console.log(arr);

arr.splice(1,3); // removes elements from the array starting from index 1, removes 3 elements
console.log(arr);



