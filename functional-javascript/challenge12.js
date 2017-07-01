module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (acc, val) {
        var res = fn(val);
        acc.push(res);

        return acc;
    }, []);
}