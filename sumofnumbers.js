function sumFor(numArray) {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}
function sumWhile(numArray) {
    var sum = 0;
    var i = 0;
    while (i < numArray.length) {
        sum += numArray[i];
        i++;
    }
    return sum;
}
function sumRecursion(numArray) {
    if (numArray.length === 0) {
        return 0;
    }
    return numArray[0] + sumRecursion(numArray.slice(1));
}
function sumFunctional(numArray) {
    var sum = 0;
    numArray.forEach(function (element) {
        sum += element;
    });
    return sum;
}
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumFunctional([1, 2, 3, 4]));
