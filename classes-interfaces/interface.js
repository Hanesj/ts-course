"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user;
user = {
    email: 'Test@',
    password: '123',
    login() {
        console.log(this.email, ' Logged in');
    },
    logout() {
    },
    role: 'admin'
};
user.login();
class AuthenticatableUser {
    email;
    password;
    role;
    userName;
    _nickname;
    constructor(email, password, role, userName) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.userName = userName;
        if (this.email) {
            this._nickname = this.email.split('@')[0];
        }
        else {
            this._nickname = '';
        }
    }
    login() {
        console.log(this.email, ' just logged in ', this._nickname);
    }
    logout() { }
}
const authenticate = (user) => {
    user.login();
};
const u1 = new AuthenticatableUser('test123@@', '123', 'user', 'test');
u1.login();
//# sourceMappingURL=interface.js.map