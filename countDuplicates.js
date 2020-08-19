const countDuplicates = (arr) => {
  let result = {};  // serve as a hash table that keeps track of the array and count values

  // runtime analysis -  O(n)
  for (let i = 0; i < arr.length; i++) {
    // this checks if the word exists in the object then increment the value by one
    if (result[arr[i]]) {
      result[arr[i]] += 1;
    } else {
      // for a new word, that does not exist in the object this will be case, the value will be 1
      result[arr[i]] = 1;
    }
  }

  // This ignores the values that are 1 and delete those word(s)
  for (let key in result) {
    // O(n)
    if (Number(result[key]) <= 1) {
      delete result[key];
    }
  }
  return result;
};

const arr = [
  "car",
  "bike",
  "car",
  "bike",
  "shoe",
  "books",
  "pens",
  "bike",
  "televisions",
  "car",
  "televisions",
];

console.log(countDuplicates(arr));  // { car: 3, bike: 3, televisions: 2 }
