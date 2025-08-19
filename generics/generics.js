"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = ['Moomi', 'Toomi'];
let store = {};
store.name = 'asd';
store.isTrue = false;
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 's');
const mergeObj = (a, b) => {
    return { ...a, ...b };
};
const merged = mergeObj({ name: 'Srt' }, { role: 'admin' });
console.log(merged);
//# sourceMappingURL=generics.js.map