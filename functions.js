function stringLength(value) {
    return value.replace(" ", "").length;
}
var count = stringLength("test 1");
console.log(count);
function count_both(value2, spaces) {
    if (spaces) {
        return value2.length;
    }
    else {
        return value2.replace(" ", "").length;
    }
}
var bothCount = count_both("test 1", true);
console.log(bothCount);
