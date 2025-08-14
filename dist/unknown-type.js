"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process = (val) => {
    if (typeof val === 'object' &&
        !!val &&
        'log' in val &&
        typeof val.log === 'function') {
        val.log();
    }
};
