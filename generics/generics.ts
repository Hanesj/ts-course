let names: Array<string> = ['Moomi', 'Toomi'];

type DataStore<T> = {
	[key: string]: T;
};

let store: DataStore<string | boolean> = {};

store.name = 'asd';
store.isTrue = false;

function merge<T, S>(a: T, b: T | S) {
	return [a, b];
}

const ids = merge(1, 's');

const mergeObj = <T extends object, U extends object>(a: T, b: U) => {
	return { ...a, ...b };
};

const merged = mergeObj({ name: 'Srt' }, { role: 'admin' });
console.log(merged);

class User<T> {
	constructor(public id: T) {}
}
const u1 = new User(1);
