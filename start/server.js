// module.exports = exports = this
let log = require('logger')(module);
let db = require('db');
db.connect();

var User = require('./user');

function run() {
    var vasya = new User("Вася");
    var petya = new User("Петя");

    vasya.hello(petya);

    log(db.getPhrase("Run success"));
}
if (module.parent) {
    exports.run = run;
} else {
    run();
}