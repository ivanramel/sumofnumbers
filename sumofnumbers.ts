function sumFor(numArray: number[]): number {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
}

function sumWhile(numArray: number[]): number {
  let sum = 0;
  let i = 0;
  while (i < numArray.length) {
    sum += numArray[i];
    i++;
  }
  return sum;
}

function sumRecursion(numArray: number[]): number {
  if (numArray.length === 0) {
    return 0;
  }
  return numArray[0] + sumRecursion(numArray.slice(1));
}

function sumFunctional(numArray: number[]): number {
  let sum = 0;
  numArray.forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumFunctional([1, 2, 3, 4]));
