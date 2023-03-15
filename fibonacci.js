// Fibonacci sequence
// Problem - Give a number 'n', find the first 'n' elements of the Fibonacci sequence
// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the
// two preceding ones.
// The first two numbers in the sequence are 0 and 1.
// fibonacci(2) = [0,1]
// fibonacci (3) = [0,1,1]
// fibonacci (7) = [0,1,1,2,3,5,8]

const fibonacci = (n) => {
  const arr = [];
  if (n <= 2) {
    for (i = 0; i < n; i++) {
      arr.push(i);
    }
  } else {
    arr.push(0, 1);
    for (i = 1; i < n - 1; i++) {
      arr.push(arr[i] + arr[i - 1]);
    }
  }
  return arr;
};

console.log(fibonacci(3));
