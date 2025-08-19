function getLength(val: string): string;
function getLength(val: any[]): number;

function getLength(val: String | any[]) {
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
