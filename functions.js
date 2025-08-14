var add = function (a, b) {
    return a + b;
};
var log = function (msg) {
    console.log(msg);
};
var logAndThrow = function (errMsg) {
    console.log(errMsg);
    throw new Error(errMsg);
};
function perfomJob(cb) {
    cb('Done');
}
perfomJob(log);
var user1 = {
    name: 'Hej',
    age: 28,
    greet: function () {
        console.log('Hello!');
        return this.name;
    },
};
user1.greet();
