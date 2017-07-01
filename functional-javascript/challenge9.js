function duckCount() {
    var ducks = Array.from(arguments);
    return ducks.filter(function (duck) {
        return Object.prototype.hasOwnProperty.call(duck, 'quack');
    }).length
}

module.exports = duckCount
