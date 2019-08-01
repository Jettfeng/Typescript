var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = this.lastName;
        this.fullName = firstName + " " + lastName;
    }
    return User;
}());
function gretter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: 'Yee',
    lastName: 'Huang'
};
console.log(gretter(user));
var user1 = new User('Yee', 'Huang');
