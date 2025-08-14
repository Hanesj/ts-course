var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var Role2;
(function (Role2) {
    Role2["Admin"] = "Admin";
    Role2["User"] = "User";
    Role2["Guest"] = "Guest";
})(Role2 || (Role2 = {}));
let userRole = Role2.Admin;
// variable maste ha ett specifikt varde
let userRole2 = 'admin';
// gar ej: let userRole3: 'guest' = 'admin';
// Maste matcha en av de specificerade
let userRole3 = 'admin';
let possibleResults;
possibleResults = [1, 1];
possibleResults = [-1, 1];
console.log(userRole);
const user1 = {
    name: 'Test',
    age: 20,
    title: 'OpSec',
    choice: 2,
};
console.log(user1);
const find = (user) => { };
export {};
//# sourceMappingURL=choices.js.map