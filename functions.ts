const add = (a: number, b: number): number => {
	return a + b;
};

const log = (msg: string): void => {
	console.log(msg);
};

const logAndThrow = (errMsg: string): never => {
	console.log(errMsg);
	throw new Error(errMsg);
};

function perfomJob(cb: (m: string) => void) {
	cb('Done');
}

perfomJob(log);

type User = {
	name: string;
	age: number;
	greet: () => string;
};

let user1: User = {
	name: 'Hej',
	age: 28,
	greet() {
		console.log('Hello!');
		return this.name;
	},
};

user1.greet();

export {};
