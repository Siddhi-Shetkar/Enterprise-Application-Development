let streetFoods = [
    { name: "Pani Puri", price: 30, city: "Mumbai" },
    { name: "Dosa", price: 50, city: "Chennai" },
    { name: "Chole Bhature", price: 60, city: "Delhi" }
];

console.log("Indian Street Foods:");

streetFoods.forEach(function(food) {
    console.log("Name:", food.name);
    console.log("Price:", food.price);
    console.log("City:", food.city);
    console.log("----------------");
});

// Update price
streetFoods[1].price = 55;
console.log("Updated Price of Dosa:", streetFoods[1].price);