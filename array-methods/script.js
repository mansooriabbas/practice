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

const prices = [25, 150, 300, 75, 500, 80, 250, 120, 400, 90];

// const salePrices = prices.map((price) => {
//     return price / 2
// })

// console.log(salePrices);

const products = [
    { name: "Chair", price: 50 },
    { name: "Table", price: 20 },
    { name: "Lamp", price: 30 },
    { name: "Bookshelf", price: 80 },
    { name: "Mirror", price: 40 }
  ];

  const saleProducts = products.map((product) => {
    if(product.price > 30){
        return {name: product.name, price: product.price / 2}
    }else{
        return product
    }
  })

  console.log(saleProducts, products);