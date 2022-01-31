var Animal = /** @class */ (function () {
    function Animal(dob, weight, legs) {
        this.dob = dob;
        this.weight = weight;
        this.legs = weight;
    }
    Animal.prototype.Information = function () {
        return "Hello ";
    };
    return Animal;
}());
var a = new Animal("01/01/00", 90, 4);
console.log(a.dob);
