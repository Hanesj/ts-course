console.log('TS');

let userName: string;
let lastName = 'Dooly';
let age: number;
userName = 'Hejsan';

const add = (a: number, b = 10) => {
	return a + b;
};

console.log(add(10));
export {};
