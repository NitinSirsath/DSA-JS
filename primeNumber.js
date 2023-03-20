// Find prime numbers between the given input size

// const primeNumber = (initialValue, endValue) => {
//   const arr = [];

//   if (initialValue <= 2) {
//     arr.push(2);
//   }
//   for (let i = initialValue; i <= endValue; i++) {
//     let flag = 0;
//     if (i % 2 === 0) {

//     } else {
//       for (let k = 2; k < i; k++) {
//         if (i % k === 0) {
//           flag = 1;
//         }
//         if (k === i - 1 && flag == 0) {
//           arr.push(i);
//         }
//       }
//     }
//   }
//   return arr;
// };

// console.log(primeNumber(4, 11));

// const prime = (n) => {
//   let isPrime = false;
//   if (n % 2 == 0) {
//     return 'not prime';
//   } else {
//     for (let i = 3; i < n; i++) {
//       if (n % i === 0) {
//         isPrime = false;
//         return 'not prime';
//       } else {
//         isPrime = true;
//         return 'prime';
//       }
//     }
//   }
//   return prime, n;
// };

// console.log(prime(23));

const primeFunc = (initialVal, endVal) => {
  for (let i = initialVal; i < endVal; i++) {
    let count = 0;
    for (let k = 2; k < i; k++) {
      if (i % k === 0) {
        count = 1;
      }
      if (k < i - 1 && count === 0) {
        return i;
      }
    }
  }
};

console.log(primeFunc(4, 9));
