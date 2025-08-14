const process = (val) => {
    if (typeof val === 'object' &&
        !!val &&
        'log' in val &&
        typeof val.log === 'function') {
        val.log();
    }
};
export {};
//# sourceMappingURL=unknown-type.js.map