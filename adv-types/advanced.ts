type DataStore = {
	[key: string]: number | boolean;
};

let someObj: Record<string, boolean | number>;

let store: DataStore = {};

store.id = 3;
store.isOpen = true;

let roles = ['admin', 'user', 'guest'] as const;

const dataEntries: Record<string, number> = {
	e1: 0.2,
	e2: 3,
	e3: 0.54,
};
const dataEntries2 = {
	e1: 0.2,
	e2: 3,
	e3: 0.54,
} satisfies Record<string, number>;

//dataEntries.e5;
//dataEntries2.e4;
