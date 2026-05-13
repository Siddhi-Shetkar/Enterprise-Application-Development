// Function Declaration
function greet(name) {
    return "Hello " + name;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

console.log(greet("Siddhi"));
console.log("Sum:", add(5, 3));
console.log("Product:", multiply(5, 3));