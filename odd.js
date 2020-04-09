function isOdd(num) {
  evenOrOdd = 0
  if ((num % 3) === 0) {
    evenOrOdd = true
  }
  else {
    evenOrOdd = false
  }
  return evenOrOdd;
};

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));