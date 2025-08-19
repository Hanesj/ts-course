type FileSource = { type: 'file'; path: string };

const fileSource: FileSource = {
	type: 'file',
	path: 'some/path/',
};

type DBSource = { type: 'db'; connectionUrl: string };
const dbSource: DBSource = {
	connectionUrl: 'some-url',
	type: 'db',
};

type Source = FileSource | DBSource;

const loadData = (source: Source) => {
	if ('path' in source) {
		// source.path
	}
	if ('connectionUrl' in source) {
		// source.connectionUrl
	}

	if (source.type === 'file') {
	}
};
