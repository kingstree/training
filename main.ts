
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hi! I'm " + this.name);
    };
    return Person;
}());
var person = new Person('Sam');
person.greet();