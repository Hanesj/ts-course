// argument? ? innebar att parameter inte maste finnas
const genError = (msg?: string) => {
	throw new Error(msg);
};

genError('Error occurred');

type User = {
	name: string;
	age: number;
	role?: 'Admin' | 'User';
};

// ?? kollar om det ar undefined eller null, sa '' ar true med den
// || blir false

let input = '';

const inputProvided = input ?? false;
