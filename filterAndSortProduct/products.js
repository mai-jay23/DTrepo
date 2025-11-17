const products = [
  {
    name: "Bluetooth Earbuds",
    supplierPrice: 3.5, // USD
    shippingCost: 1.2, // per unit
    moq: 100, // minimum order quantity
    marketPrice: 9.99, // average sell price
    demandScore: 85, // 0–100
    category: "Electronics",
  },
  {
    name: "Stainless Water Bottle",
    supplierPrice: 2.8,
    shippingCost: 0.9,
    moq: 50,
    marketPrice: 7.5,
    demandScore: 78,
    category: "Kitchenware",
  },
  {
    name: "Phone Case",
    supplierPrice: 0.6,
    shippingCost: 0.3,
    moq: 300,
    marketPrice: 3.0,
    demandScore: 92,
    category: "Accessories",
  },
  {
    name: "LED Desk Lamp",
    supplierPrice: 5.2,
    shippingCost: 2.0,
    moq: 40,
    marketPrice: 15,
    demandScore: 70,
    category: "Home",
  },
  {
    name: "Laptop Stand",
    supplierPrice: 4.0,
    shippingCost: 1.5,
    moq: 60,
    marketPrice: 13,
    demandScore: 88,
    category: "Office",
  },
];

const sortedByProfit = products.sort((a, b) => {
  const profitA = a.marketPrice - (a.supplierPrice + a.shippingCost);
  const profitB = b.marketPrice - (b.supplierPrice + b.shippingCost);
  return profitB - profitA;
});
console.log(sortedByProfit);

const highDemand = products.filter((p) => p.demandScore > 80);
console.log(highDemand);
