// let sum = 10;
// function sumTo() {
//   for (let i = 0; i < sum; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// sumTo();
// console.log(sumTo(10));

var a = 3800;
var b = 0;
var c = 0;
var result = 0;
function aTen(c) {
  for (let i = 0; i < c; i++) {
    b = a * 0.1; // 각 해 10% 연봉 인상값
    a = a + b; // 10% 인상한 연봉
    result = a + b;
  }
  return result;
}
