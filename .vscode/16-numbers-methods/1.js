// console.log(isNaN("hello" * 1)); //true
// console.log(isNaN("100em")); //true
// console.log(isNaN("100rem")); //true
// console.log(Number.isNaN("100em")); //false
// console.log(typeof NaN); //number

// //2.rounding
// console.log(0.1 * 0.2); //0.020000000000000004
// console.log((0.1 * 0.2).toFixed(2)); //0.02
// console.log(typeof (0.1 * 0.2).toFixed(2)); //string
// console.log(+(0.1 * 0.2).toFixed(2));
// console.log(Number((0.1 * 0.2).toFixed(2)));

// //3.Fix number
// let number1 = 12.26000000000033;
// let number2 = 0.6378399;
// let number3 = 1.84222;

// console.log(number1.toFixed(2));
// console.log(Number(number2.toFixed(1)));
// console.log(+number3.toFixed(4));

//Not: toFixed() methodu bize string deger döndürür. dikkatli olmak lazim ve bu degeri
// tekrar integer yapmak icin +, Number veya parseInt ... kullanilir

// Validate Email. Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

// The string must contain exactly one "@" character.
// The string must contain at least one "." character.
// The "." and the "@" must be in the appropriate places.
// e.g. "." cannot be the last character.
// e.g. "." cannot be directly before or after "@"
// e.g. there cannot be consecutive "." characters
// e.g. "@" must have at least one character in front of it.
// e.g. "j@example.com" is valid while "@example.com" is invalid.
// e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.
// e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid.

const validateEmail = (email) => {
  const atIndex = email.indexOf("@");
  const dotIndex = email.indexOf(".");
  if (dotIndex === email.length - 1) {
    return false;
  }
  if (atIndex === 0) {
    return false;
  }
  if (email.includes("..")) {
    return false;
  }
  if (
    atIndex > dotIndex ||
    atIndex === dotIndex - 1 ||
    atIndex === dotIndex + 1
  ) {
    return false;
  }

  return true;
};
console.log(validateEmail("j@example.com"));
console.log(validateEmail("@example.com"));
console.log(validateEmail("john..smith@email.com"));
console.log(validateEmail("john.@email.com"));
console.log(validateEmail("john@.email.com"));
