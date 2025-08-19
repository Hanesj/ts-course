"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileSource = {
    type: 'file',
    path: 'some/path/',
};
const dbSource = {
    connectionUrl: 'some-url',
    type: 'db',
};
const loadData = (source) => {
    if ('path' in source) {
        // source.path
    }
    if ('connectionUrl' in source) {
        // source.connectionUrl
    }
    if (source.type === 'file') {
    }
};
//# sourceMappingURL=guards.js.map