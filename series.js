// input : 'abcabc'
// output : true

// input : 'abababa'
// output : false

const series = (input) => {
  const arr = input.split("");
  let pairNumber;
  let totalPair = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
      pairNumber = i;
      break;
    }
  }
  const compareArr = arr.slice(0, pairNumber);
  for (let i = compareArr.length; i < arr.length; i++) {
    for (let j = 0; j < compareArr.length; j++) {
      if (arr[i] === compareArr[j]) {
        totalPair++;
        break;
      }
    }
  }

  const countNumber = totalPair / compareArr.length + 1;
  return Number.isInteger(countNumber)
    ? `Total Pairs: ${countNumber}, Pair series: ${compareArr.toString()}`
    : "Not a pair";
};

console.log(series("ababab"));
