// Sort

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

// fruits.sort();
// fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits);

// const sortedNumber = numbers.sort((a, b) => a - b);
// console.log(numbers);
// console.log(sortedNumber);

// Nested array flat
// const arr = [1, 2, 3, [4, 5]];

const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];

const flatArr = arr.flat(Infinity);

// const flatArr = arr.flat();

// console.log(flatArr);

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const filterTags = [...new Set(tagsFromPosts.flat())];

console.log(filterTags);

//Some
const currentUserRoles = ["user", "editor"];
const futureAccessRoles = ["admin", "manager"];

// Array.from()
