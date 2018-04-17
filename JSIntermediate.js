function starString(n) {
    let z = "";
    for (let i = 0; i < n; i++) {
        z += "*";

    }
    return z;
}
console.log(starString(8));

// function drawStars(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         let z = [];
//         for (let m = 0; m < arr[i]; m++) {
//             z.push("*")

//         }
//         console.log(z.join(" "));
//     }
// }
// drawStars([4, 6, 1, 3, 5, 7, 25]);

function drawStars(arr) {
    const z = [];
    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === 'number') {
            z.push(starString(arr[i]))
        } else if (typeof arr[i] === 'string') {
            var b = "";
            for (let m = 0; m < arr[i].length; m++) {
                b += arr[i][0].toLowerCase();
            }
            z.push(b);
        }

    }
    console.log(z.join(" "));
}
drawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);