let hobbies = ['fishing', 'music'];

//hobbies.push(23)

hobbies.push('biking');

//let users: (string | number)[];
let users: Array<string | number>;
users = [12, 'ip'];
users.push('po');
users.push(20);
// Array med endast 2 nummer, tuple
let possibleResults: [number, number];
possibleResults = [1, -1];

// funker ej: possibleResults = [1, -1, 30];

// Satta varde direkt
let user = {
	name: 'Test',
	age: 20,
};
// Deklarera typ forst
let user2: {
	name: string;
	age: string | number;
	hobbies: string[];
	role: {
		description: string;
		yoe: number;
	};
} = {
	name: 'tjo',
	age: 30,
	hobbies: hobbies,
	role: { description: 'admin', yoe: 5 },
};

// Allt gar som inte ar null
let val: {} = 'some text';
val = {};
val = 30;
// gar ej: val = null;

// Record: objekttyp i detta fall string som key, number eller string som value
let data: Record<string, number | string>;

data = {
	k1: 2,
	k2: 'String',
};

export {};
