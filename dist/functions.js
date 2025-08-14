"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => {
    return a + b;
};
const log = (msg) => {
    console.log(msg);
};
const logAndThrow = (errMsg) => {
    console.log(errMsg);
    throw new Error(errMsg);
};
function perfomJob(cb) {
    cb('Done');
}
perfomJob(log);
let user1 = {
    name: 'Hej',
    age: 28,
    greet() {
        console.log('Hello!');
        return this.name;
    },
};
user1.greet();
