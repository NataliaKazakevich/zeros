module.exports = function getZerosCount(number) {
let counter = 0;
let zerosCounter = 0;
for (let i = 5 ; i <= number; i*=5) {
  counter = Math.floor(number / i);
  zerosCounter += counter;
}
return zerosCounter;
}
