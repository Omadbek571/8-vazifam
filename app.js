// 1-SAVOL


// function isEmpty(obj) {
//     return Object.keys(obj).length === 0;
// }

// const obj1 = {};
// console.log(isEmpty(obj1));

// const obj2 = { a: 1, b: 2 };
// console.log(isEmpty(obj2));


// 2-SAVOL


// const salaries = { John: 100, Ann: 50, Pete: 110 };

// function calculateTotalSalary(salaries) {
//     let total = 0;
//     for (let person in salaries) {
//         total += salaries[person];
//     }
//     return total;
// }

// console.log(calculateTotalSalary(salaries));


// 3-SAVOL


// let menu = { width: 200, height: 300, title: "My menu" };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

// multiplyNumeric(menu);

// console.log(menu);


// 4-SAVOL


// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);


// 5-SAVOL


// function inputNumber() {
//     let numbers = [];
  
//     while (true) {
//       let input = prompt("Raqam kiriting, raqam bo'lmagan qiymat kiritilguncha.");
//       if (input === null || isNaN(input)) {
//         return numbers;
//       }
//       numbers.push(Number(input));
//     }
//   }

//   let result = inputNumber();
//   console.log(result);