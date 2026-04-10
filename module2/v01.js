// const obj = {
//   nextLevel: { courseId: "level2" },
//   //   "Programming Hero": { courseId: "level1" },
//   true: { courseId: "level1" },
// };

// console.log(obj["true"]);

// obj[course2] = { courseId: "level2" };
// obj[course1] = { courseId: "level1" };

// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };

// const obj = {};
// obj[course2] = { courseId: "level2" };
// obj[course1] = { courseId: "level1" };

// console.log(obj);

const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

// const map = new Map();

// map.set(course1, { courseId: "level1" }); // if commented map.has will show false
// map.set(course2, { courseId: "level2" });
// map.clear();
// map.delete(course1);
// console.log(map.has(course1));
// console.log(map);

// map.forEach((value, key) => console.log("Key: ", key, "value: ", value));
// map.forEach((value, key) => (key.name = "Shohoj Shorol Simple " + key.name));
// console.log(map);

// console.log(map.keys()); // gives an iterator
// console.log(map.values()); // gives an iterator
// console.log([...map.keys()]);
// console.log([...map.values()]);

// for (const key of map.keys()) {
//   console.log(key);
// }

// for (const key of map.keys()) {
//   key.name = "Shohoj Shorol Simple " + key.name;
// }
// console.log(map);

// console.log(map.entries());

// const courses = [
//   ["Programming Hero", "Level1"],
//   ["Next Level Web Development", "Level2"],
// ];

const courses = [
  [course1, "Level1"],
  [course2, "Level2"],
];

const map = new Map(courses);

console.log(map);
