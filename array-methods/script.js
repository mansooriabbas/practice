// const scores = [87, 92, 78, 65, 89, 73, 91, 84, 79, 95];

// const filteredScores = scores.filter((score) => {
//   return score > 80;
// });

// console.log(filteredScores);

// const users = [
//   {
//     name: "Emma",
//     premium: false,
//   },
//   {
//     name: "Charles",
//     premium: true,
//   },
//   {
//     name: "Tony",
//     premium: true,
//   },
//   {
//     name: "Deborah",
//     premium: false,
//   },
// ];

// const premiumUsers = users.filter((user) => {
//   return user.premium;
// });

// console.log(premiumUsers);

// const prices = [25, 150, 300, 75, 500, 80, 250, 120, 400, 90];

// const salePrices = prices.map((price) => {
//     return price / 2
// })

// console.log(salePrices);

// const products = [
//     { name: "Chair", price: 50 },
//     { name: "Table", price: 20 },
//     { name: "Lamp", price: 30 },
//     { name: "Bookshelf", price: 80 },
//     { name: "Mirror", price: 40 }
//   ];

//   const saleProducts = products.map((product) => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price / 2}
//     }else{
//         return product
//     }
//   })

//   console.log(saleProducts, products);

// const scores = [25, 10, 30, 75, 50, 8, 20, 120, 40, 90];

// const result = scores.reduce((acc, curr) => {
//   if(curr > 50){
//     acc++
//   }
//   return acc
// }, 0)

// console.log(result);

// const scores = [
//   {
//     player: "Emma",
//     score: 20,
//   },
//   {
//     player: "Charles",
//     score: 65,
//   },
//   {
//     player: "Tony",
//     score: 50,
//   },
//   {
//     player: "Tony",
//     score: 25,
//   },
// ];

// const tonyTotal = scores.reduce((acc, curr) => {
// if(curr.player === "Tony"){
//   acc += curr.score
// }
// return acc
// },0)
// console.log(tonyTotal);

// const scores = [25, 10, 30, 75, 50, 8, 20, 120, 40, 90];

// const findScore = scores.find((score) => {
//   // if(score > 50){
//   //   return score
//   // }

//   return score > 50
// })

// console.log(findScore);

// const names = ["Charlie", "Steve", "Tom", "Brandy"];

// names.sort() // this method is destructive and changes the array, so you cant create a new variable
// names.reverse()
// console.log(names);

// const scores = [30, 10, 20, 60, 70, 5];
// scores.sort((a, b) => {
//   return b - a
// })
// scores.reverse()
// console.log(scores);

// const players = [
//   {
//     player: "Emma",
//     score: 20,
//   },
//   {
//     player: "Charles",
//     score: 65,
//   },
//   {
//     player: "Tony",
//     score: 50,
//   },
//   {
//     player: "Tony",
//     score: 25,
//   },
// ];

// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (b.score > a.score) {
//     return 1;
//   }else{
//     return 0
//   }
// });

// players.sort((a, b) => {
//   return b.score - a.score
// })

// console.log(players);

const products = [
  {
    name: "chair",
    price: 20,
  },
  {
    name: "lamp",
    price: 65,
  },
  {
    name: "desk",
    price: 50,
  },
  {
    name: "sofa",
    price: 25,
  },
];
//method chaining
const promos = products
.filter(product => product.price > 20)
.map(product => `The ${product.name} is ${product.price / 2} pounds`)

console.log(promos);