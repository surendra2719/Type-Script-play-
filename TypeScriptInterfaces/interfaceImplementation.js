var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = name;
        this.empId = code;
    }
    Employee.prototype.getSalary = function (empId) {
        return 40000;
    };
    return Employee;
}());
var result = new Employee('surendra', 1);
console.log("-----implement result-------------", result);
