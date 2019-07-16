function Greet(gree) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return gree + "  " + names.join('royal') + '!';
}
Greet('surendra', 'kumar', 'autonom8');
console.log('greet', this.names);
