// const startTime = performance.now();
// for (let index = 0; index <= 5000; index++) {
//   console.log(index);
// }
// const endTime = performance.now();
// console.log(`this code took ${endTime - startTime}`);

// console.time("task");
// for (let index = 0; index <= 5000; index++) {
//   console.log(index);
// }
// console.timeEnd("task");

const firstArray = [];
const secondArray = [];

for (let index = 0; index < 600000; index++) {
  if (index < 300000) {
    firstArray.push(index);
  }
  secondArray.push(index);
}
console.log("First Array:", firstArray.length);
console.log("Second Array:", secondArray.length);

console.time("map1");
const firstUsersList = firstArray.map((number) => ({ userId: number }));
console.timeEnd("map1");

console.time("map2");
const secondUsersList = secondArray.map((number) => ({ userId: number }));
console.timeEnd("map2");
