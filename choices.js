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
var userRole = Role2.Admin;
// variable maste ha ett specifikt varde
var userRole2 = 'admin';
// gar ej: let userRole3: 'guest' = 'admin';
// Maste matcha en av de specificerade
var userRole3 = 'admin';
var possibleResults;
possibleResults = [1, 1];
possibleResults = [-1, 1];
console.log(userRole);
var user1 = {
    name: 'Test',
    age: 20,
    title: 'OpSec',
    choice: 'stes',
};
console.log(user1);
var find = function (user) { };
