//Coding Challenge 2a
let productName = "Red Flower";
let costPerUnit = 11.20;
let basePrice = 15.34;
let discountRate = 0.12;
let salesTaxRate = 0.09;
let fixedMonthlyCosts = 1500;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("productName:", redFlower);
console.log("discountedPriceBeforeTax:", 13.50);
console.log("finalPriceWithTax:", 14.72);
console.log("profitPerUnit:", 3.52);
console.log("breakEvenUnits:", 427);
console.log("perUnitProfitability:", true)