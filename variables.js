var a = 10;
let b = "JavaScript";
const c = true;
let obj = { name: "Alice", age: 20 };
let arr = [1, 2, 3, 4];

console.log("Number:", a);
console.log("String:", b);
console.log("Boolean:", c);
console.log("Object:", obj);
console.log("Array:", arr);

if (true) {
    var x = "Var Scope";
    let y = "Let Scope";
    const z = "Const Scope";
    console.log(x, y, z);
}

console.log(x);