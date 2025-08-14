"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    firstName;
    lastName;
    _role = '';
    // protected kan nas fran subklasser men inte fran utanfor klassen
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName + this._role;
    }
    set role(role1) {
        this._role = role1;
    }
    static eid = 'USER';
    static greet() {
        console.log('Hello from static');
    }
}
const user1 = new User('Hej', 'Last');
console.log(user1.fullName);
user1.role = 'Admin';
console.log(user1.fullName);
console.log(User.eid);
User.greet();
class Employee extends User {
    title;
    constructor(title) {
        super('Super', ' class');
        this.title = title;
    }
    work() {
        console.log('working...');
    }
}
const e1 = new Employee('Cleaner');
e1.work();
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(target) {
    }
}
// abstract klasser kan inte instantieras
class SideElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
//# sourceMappingURL=advanced.js.map