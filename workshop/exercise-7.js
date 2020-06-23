// Exercise 7
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};
function createRecommendations(obj) {
  const allKeys = Object.keys(obj);
  const newArr = allKeys.map(function (key) {
    return `With ${key} it is best to have ${obj[key]}.`;
  });
  return newArr;
}
function printRecommendations(arr) {
  arr.forEach(function (string) {
    console.log(string);
  });
}
printRecommendations(createRecommendations(foodPairings));

// let foodPairings = {
//   burgers: 'beer',
//   fish: 'white wine',
//   beef: 'red wine',
//   strawberries: 'cream',
// };

// const createRecommendations = (arr) => {
//   arr.map(function makeRec(obj) {
//     return `With ${Object.keys(obj)}, it is best to have ${Object.values(obj)}`;
//   })
// }
// console.log(createRecommendations(foodPairings));
//   // let makeRec = (obj) => {
//   //   `With ${Object.keys(obj)}, it is best to have ${Object.values(obj)}`;
//   // }
//   // return arr.map(makeRec(arr));
//   // }

//   // const sortList = (arr) => {
//   //   let alphOrder = [...arr].sort();
//   //   alphOrder.map((currentItem, index) => {
//   //     console.log(`${currentItem} (${arr.indexOf(currentItem)+1})`);
//   //   });
//   // };

// //   return Object.keys(obj);
// //    return Object.values(obj);
// //    console.log
// //  }

//  console.log(createRecommendations(foodPairings));

// // printRecommendations function

// // function call (done)
// printRecommendations(createRecommendations(foodPairings));
