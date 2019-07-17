var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var job = /** @class */ (function (_super) {
    __extends(job, _super);
    function job(code, name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.code = code;
        return _this;
    }
    job.prototype.display = function () {
        console.log("Name---" + this.name + "    " + 'EmpCode ---- ' + this.code);
    };
    return job;
}(Person));
var newemp = new job(1234, 'surendra');
newemp.display();
console.log('employee', newemp);
