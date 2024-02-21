//1. What is the output of the following code block ?
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

//2. What is the output of the following code block ?
// console.log(1 < 2 < 3);
// console.log(3 > 2 == 1);

//3. Write program to find the sum of positive numbers. But if the user enters a negative numbers, the loop ends, if the negative number entered is not added to sum

// let sum = 0;
// let num;
// for (;;) {
//   num = parseFloat(prompt("Enter a number"));
//   if (num < 0 || isNaN(num)) {
//     break;
//   }
//   sum += num;
// }
// console.log("sum:", sum);

// let sum = 0;
// while (true) {
//   let num = parseInt(prompt("Enter num"));
//   if (num < 0 || isNaN(num)) {
//     break;
//   }
//   sum += num;
// }

// let number=0;
// while(number>=0){
// sum+=number
// let number = parseInt(prompt("Enter num"));
// }
// console.log("sum:", sum);

//4. What is the output of the following code block ?
// console.log(null == undefined); // Js convert both  same type to null. Loose equality operator.
// console.log(typeof null); // Outputs: "object"
// console.log(typeof undefined); // Outputs: "undefined"
// console.log(typeof []); // Outputs: "object"

// console.log(null === undefined); //strick equality operator.

//console.log(isNaN(2 + null)); //In JavaScript, when you perform arithmetic operations with null, it coerces null to 0

// console.log(2 + null);
//console.log(isNaN(2 + undefined)); //When performing arithmetic operations with undefined, it results in NaN because undefined cannot be coerced into a number
// console.log(2 + undefined);

// null ? console.log("true") : console.log("false"); //n JavaScript, null is treated as falsy

//5. What is the output of the following code block ?

// var hash = "";
// var count = 1;
// var n = 3;
// for (var x = 1; x <= 7; x++) {
//   while (hash.length != count)
//    hash += "#";
//   hash += "\n";
//   count += n;
//   n++;
//   console.log("count:", count);
//   console.log("n:", n);
//   console.log("x:", x);
//   console.log(hash.length);
//   console.log("hash:", hash);
// }
// console.log(hash);

//6. What is the output of the following code block ?
// let firstName = null;
// let lastName = null;
// let nickName = "coderBond";
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

//7. What is the output of the following code block ?
// function onZoom(x) {
//   console.log("Zoom active for", x);
// }
// function startClass(x, y, z) {
//   console.log(" Class starts at", x);
//   y(z);
// }
// startClass("20:00", onZoom, "FS");

//8. What is the output of the following code block ?

// console.log(
//   (function f(n) {
//     return n > 1 ? n * f(n - 1) : n;
//   })(5)
// );

// immediate function
// (function f(n, m) {
//   console.log(n * m);
// })(5, 4);

// const a = function () {};
// a();

// Not not operator
// console.log(!!!0);
// console.log(!![]);
// console.log(!!{});
// console.log(!!"");
// console.log(!!2);
//9. What is the output of the following code block ?

// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1;
//     var y = 2;
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

//10. What is the output of the following code block ?

// let a = [10, 20, 30];
// a[10] = 100;
// console.log(a[6]);
// let b = [undefined];
// b[2] = 1;
// console.log(b);
// console.log(b.map((e) => 99));
// console.log(b);

//11. What is the output of the following code block ?

// function orderPizza(type, ingredients, callback) {
//   console.log("Pizza ordered...");
//   console.log("Pizza is for preparation");
//   setTimeout(function () {
//     let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is
// $10`;
//     callback(msg);
//   }, 3000);
// }
// orderPizza("Vegeterian", "Cheese", function (message) {
//   console.log("callback:", message);
// });

//12. What is the output of the following code block ?
// class Employee {
//   constructor(id, name ) {
//     this.id = id;
//     this.name = name;
//   }
//   detail() {
//     console.log(this.id + " " + this.name);
//   }
// }
// let e1 = new Employee(10, "Qadir Adamson");
// let e2 = new Employee("Victor Hug");
// let e3 = new Employee(12);
// e1.detail();
// e2.detail();
// e3.detail();

//13. What is the output of the following code block ?
class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
  eat() {
    return `${this.name} is eating`;
  }
  sound() {
    return `${this.name} is says`;
  }
}
class Cat extends Animal {
  constructor(name, weight) {
    super(name, weight);
  }
  sound() {
    return `${super.sound()}  Meow!`;
  }
  eat() {
    return `${super.eat()}  Fish!`;
  }
}
let felix = new Cat("felix", 5);
console.log(felix.sound());
console.log(felix.eat());

class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
  eat() {
    return `${this.name} is eating`;
  }
  sound() {
    return `${this.name} is says`;
  }
}
//    class Cat extends Animal {
//     constructor(name, weight) {
//     super(name, weight);
//     }
//     sound(){
//     return `${this.soundFromAnimal()} Meow!`;
//     }
//     soundFromAnimal() {
//        return `${this.name} is says`;
//     }
//    }
//    let felix=new Cat("felix",5)
//    console.log(felix.sound())

// class Animal {
//   constructor(name) {
//       this.name = name;
//   }

//   speak() {
//       console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//       console.log(`${this.name} barks.`);
//   }
// }

// let dog = new Dog('Buddy');
// dog.speak(); // Output: Buddy barks.

// const prompt = require("prompt-sync")();
// let sum = 0;

// let number = 0;
// while (number >= 0) {
//   sum += number;
//   number = parseInt(prompt("Enter a number: ")); // prompt verisi default olarak stringtir o sebeple numbera cevirmek gerekir.
// }
// console.log(`The sum is ${sum}.`);
