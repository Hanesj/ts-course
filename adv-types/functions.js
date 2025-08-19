"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLength(val) {
    if (typeof val === 'string') {
        const numWords = val.split(' ').length;
        return `${numWords} words`;
    }
    return val.length;
}
const words = getLength('Does it work?');
const w2 = getLength(['Fish', 'Steak']);
console.log(words);
console.log(w2);
//# sourceMappingURL=functions.js.map