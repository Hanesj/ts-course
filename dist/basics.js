"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('TS');
let userName;
let lastName = 'Dooly';
let age;
userName = 'Hejsan';
const add = (a, b = 10) => {
    return a + b;
};
console.log(add(10));
