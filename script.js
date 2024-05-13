//variables -primitive types
let userFirstName = "lasha"; //string
let userAge = 18; //number
let userStatus = true; //boolean true = 1; false = 0
let x = null; //null
let y; //undefined

console.log(typeof x);

// operators
let number1 = 5;
let number2 = 10;
let sum = number1 + number2;

console.log(sum);

//
let a = 10;
// a = a + 8;
a += 8;

console.log(a);

//
let z = true;
console.log(!z);

// logical operators
console.log(true && false); //false
console.log(true && true); //true
console.log(true && "Hello"); //'hello'
console.log(false && "hello"); //false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); // false

//false values:
//false, "", null, undefined, 0, NaN

console.log(" " && "hello"); //""
console.log(undefined && "hello"); //undefined

//type conversion
//explicit
let item1 = (10).toString();

console.log(item1);
console.log(typeof item1);
console.log(item1.length);

//
let item2 = String(true);

console.log(typeof item2);
console.log(item2.length);

//
let item3 = Number("15");

console.log(typeof item3);

//
let item4 = Number(" ");

console.log(typeof item4);
console.log(item4);

// implicit
let item5 = 15;
let item6 = "10";
let sumItem = item5 + item6;

console.log(sumItem);
console.log(typeof sumItem);

// condiotional statemnt

let numberNew = 15;

if (numberNew > 25) {
  console.log("hello");
} else if (numberNew == 20) {
  console.log("hello2");
} else if (numberNew > 10) {
  console.log("hello3");
} else if (numberNew > 5) {
  console.log("hello4");
} else {
  console.log("error");
}

// ternary operator ?

// if (newNumber < 10) {
//     console.log('hello');
// } else if (newNumber > 15) {
//     console.log('hello2');
// } else if (newNumber > 100) {
//     console.log('hello3');
// }else {
//     console.log('error');
// }

let newNumber = 5;
let result =
  newNumber > 10
    ? "hello"
    : newNumber > 15
    ? "hello2"
    : newNumber < 100
    ? "hello3"
    : "error";
console.log(result);
