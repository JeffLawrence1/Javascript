function zero_negativity(arr) {
    let p;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            p = false;
        } else if (arr[i] >= 0) {
            p = true;
        }
    }
    return p;
}
console.log(zero_negativity([4, 5, -5]));

function is_even(num) {
    let p;
    if (num % 2 == 0) {
        p = true;
    } else if (num % 2 == 1) {
        p = false;
    }
    return p;
}
console.log(is_even(3));

function how_many_even(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            count += 1;
        } else {
            continue;
        }
    }
    return count;
}
console.log(how_many_even([1, 2, 3, 4, 5, 6]));

function create_dummy_array(n) {
    let p = [];
    for (let i = 0; i < n; i++) {
        p.push(Math.floor(Math.random() * 10));
    }
    return p;
}
console.log(create_dummy_array(4));

function random_choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(random_choice([3, 4, 5, 6, 7]));