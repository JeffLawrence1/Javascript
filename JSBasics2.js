function magic_multiply(x, y) {
    // --- your code here ---
    if (x === 0 && y === 0) {
        return "All inputs 0";
    }
    if (x.constructor === Array) {
        for (let i = 0; i < x.length; i++) {
            x[i] = x[i] * y
        }
        return x;
    }
    if (y.constructor === String) {
        return "Error: Can not multiply by string";
    }
    if (x.constructor === String) {
        let newString = "";
        for (let i = 0; i < y; i++) {
            newString += x;
        }
        return newString;
    }
    return x * y;
}


let test1 = magic_multiply(5, 2);
console.log(test1);
// // => 10

let test2 = magic_multiply(0, 0);
console.log(test2);
// // => "All inputs 0"

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// // => [2, 4, 6]

let test4 = magic_multiply(7, "three");
console.log(test4);
// // => "Error: Can not multiply by string"

let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"