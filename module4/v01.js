// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function call so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.

const datCache = new Map();

const expensiveTask = (id) => {
  console.log("Ran the expensive Task for: ", id);

  return {
    id: id,
    data: `Some data for id:${id}`,
    timestamp: new Date().getTime(),
  };
};

const getData = (id) => {
  if (datCache.has(id)) {
    console.log("Cache HIT for id: ", id);
    return datCache.get(id);
  }

  console.log("Cache MISS for id: ", id);
  const data = expensiveTask(id);

  datCache.set(id, data);

  return data;
};

console.log(datCache);
console.log(getData(123));
console.log(getData(123));
console.log(datCache);
