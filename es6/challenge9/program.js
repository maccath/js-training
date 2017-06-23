module.exports = function makeImportant(string, exclaim = string.length) {
    return string + '!'.repeat(exclaim);
};