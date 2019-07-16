var Emp = /** @class */ (function () {
    function Emp(name, number) {
        var _this = this;
        this.dispaly = function () { return console.log(_this.empName + "      " + _this.empNo); };
        this.empName = name;
        this.empNo = number;
    }
    return Emp;
}());
var employee = new Emp('surendra', 12345);
employee.dispaly();
