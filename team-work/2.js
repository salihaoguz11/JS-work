// 1. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// function addUp(num) {
//     let sum = 0
//     for(let i =1; i<=num;i++){
//         sum+=i
//     }
//     return sum
// }

// console.log(addUp(3));

// 2. Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

// function kibrit(adım){
//     if(adım===1){
//         return 6;
//     }else {
//         return 5*adım+1
//     }
// }
// console.log(kibrit(3));

// 3.Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// function minMax(arr) {
//     return [Math.min(...arr), Math.max(...arr)]
// }

// console.log(minMax([1,5,8,89,3,2,-1]));

// 4.A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// function detectWord(letter) {
//     return letter.split("").filter(item=> item===item.toLowerCase()).join("")
// }
// console.log(detectWord("UcERTaTUIUIt"));

// 5.Create a function that takes two dates and returns the number of days between the first and second date.

// function getDays(date1, date2) {
//     return Math.abs((date1-date2)/(1000*60*60*24))
// }
// console.log(getDays(new Date("june 14, 2019"), new Date("june 20, 2068")));
