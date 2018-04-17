var _ = {
    map: function(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = callback(arr[i]);
        }
    },

    reduce: function(arr, callback, memo) {
        let x = 0;
        if (!memo) {
            memo = arr[0];
            x = 1;
        }
        for (let i = x; i < arr.length; i++) {
            memo = callback(arr[i], memo);
        }
        return memo;
    },

    find: function(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return arr[i];
            }
        }
    },

    filter: function(arr, callback) {
        var temp = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                temp.push(arr[i]);
            }
        }
        return temp;
    },
    reject: function(arr, callback) {
        var temp = [];
        for (let i = 0; i < arr.length; i++) {
            if (!callback(arr[i])) {
                temp.push(arr[i]);
            }
        }
        return temp;
    }
}

var arr = [4, 5, 6, 7, 8, 9, -10];
_.map(arr, function callback(x) { return x * 2 });
console.log(arr);
// console.log(_.reduce(arr, function callback(x, memo) { return x + memo; }));
// console.log(_.find(arr, function callback(x) { return x === 6; }));
var evens = _.filter(arr, function(num) { return num % 2 == 0; });
console.log(evens);
console.log(_.reject(arr, function callback(x) { return x > 8 }));