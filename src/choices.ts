enum Role {
	Admin, // 0
	User, // 1
	Guest, // 2
}

enum Role2 {
	Admin = 'Admin',
	User = 'User',
	Guest = 'Guest',
}

let userRole: Role2 = Role2.Admin;
// variable maste ha ett specifikt varde
let userRole2: 'admin' = 'admin';
// gar ej: let userRole3: 'guest' = 'admin';

// Maste matcha en av de specificerade
let userRole3: 'admin' | 'user' | 'guest' = 'admin';

let possibleResults: [1 | -1, 1 | -1];

possibleResults = [1, 1];

possibleResults = [-1, 1];

console.log(userRole);

type Choice = 1 | 2 | 3;
type User = {
	name: string;
	age: number;
	title: string;
	choice: Choice;
};

const user1 = {
	name: 'Test',
	age: 20,
	title: 'OpSec',
	choice: 2,
};
console.log(user1);
const find = (user: User) => {};

