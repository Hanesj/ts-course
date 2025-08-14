"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// argument? ? innebar att parameter inte maste finnas
const genError = (msg) => {
    throw new Error(msg);
};
genError('Error occurred');
// ?? kollar om det ar undefined eller null, sa '' ar true med den
// || blir false
let input = '';
const inputProvided = input ?? false;
