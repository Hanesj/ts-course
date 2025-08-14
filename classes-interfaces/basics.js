"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    role;
    constructor(user) {
        this.name = user.name;
        this.role = user.role;
    }
}
const user1 = new User({ name: 'Hej', role: 'admin' });
console.log(user1);
// public shortcut for att initialisera properties av objekt,
// public properties kan anvandas med punknotation till exempel <User>.name
// #private kan bara hamtas via klassmetod
class Area {
    h;
    w;
    #area;
    area2;
    constructor(h, w) {
        this.h = h;
        this.w = w;
        this.#area = h * w;
        this.area2 = h * w;
    }
    get() {
        return this.#area;
    }
    getPrivate() {
        return this.area2;
    }
}
const m = new Area(10, 5);
const n = new Area(3, 3);
console.log(m.get());
console.log(n.getPrivate());
//# sourceMappingURL=basics.js.map