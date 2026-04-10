// const set = new Set();
// // set don't contain any duplicate element
// set.add("apple");
// set.add("banana");
// set.add("mango");
// set.add("apple");
// // console.log(set);
// console.log(set.size);

// const rejaur = { userName: "Rejaur" };
// const aswad = { userName: "Aswad" };
// const arham = { userName: "Arham" };

// const set = new Set();
// set.add(rejaur);
// set.add(aswad);
// set.add(arham);
// set.add(rejaur);
// console.log(set);

// const fruits = ["apple", "banana", "mango", "banana"];

// const set = new Set(fruits);

// const test = set.forEach((value) => console.log(value));
// console.log(test);
// console.log(set);

// const fruits = ["apple", "banana", "mango", "banana"];

// const set = new Set(fruits);

// const test = Array.from(set);
// test.push("tomato");
// console.log(test);

// const fruits = ["apple", "banana", "mango", "banana"];

// const set = new Set(fruits);

// // console.log(set.has("tomato"));
// console.log(set.delete("tomato"));
// console.log(set);

// const fruits = ["apple", "banana", "mango", "banana"];
// // Brute force

// const removeDuplicateFruitArr = (fruits) => {
//   const newFruits = [];
//   fruits.forEach((fruit) => {
//     if (!newFruits.includes(fruit)) {
//       newFruits.push(fruit);
//     }
//   });
//   return newFruits;
// };

// console.log(removeDuplicateFruitArr(fruits));

// // Set implementation

// const removeDuplicateFruitSet = (fruits) => {
//   const newFruitsSet = new Set(fruits);
//   return Array.from(newFruitsSet);
// };

// console.log(removeDuplicateFruitSet(fruits));

// data setup

function generateSimData(size) {
  const itemPool = [
    "Apple",
    "Mango",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Cherry",
    "Blueberry",
    "Apple",
    "Orange",
  ];

  const generatedData = [];
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * itemPool.length);
    generatedData.push(itemPool[randomIndex]);
  }

  return generatedData;
}

const hugeDataSet = generateSimData(800000);

console.log("Data size", hugeDataSet.length);

// Brute Force

const arrStartTime = performance.now();

const removeDupArr = (arr) => {
  const newArr = [];

  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
};
console.log(removeDupArr(hugeDataSet));

const arrEndTime = performance.now();

console.log(`Array Implementation took ${arrEndTime - arrStartTime}ms`);

// Set implementation

const setStartTime = performance.now();

const removeDupSet = (arr) => {
  const set = new Set(arr);

  return Array.from(set);
};

console.log(removeDupSet(hugeDataSet));

const setEndTime = performance.now();

console.log(`Set Implementation took ${setEndTime - setStartTime}ms`);
