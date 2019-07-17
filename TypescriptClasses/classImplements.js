var Employees = /** @class */ (function () {
    function Employees(name, code) {
        this.nameEmp = name,
            this.codeEmp = code;
    }
    Employees.prototype.displayedInformation = function () {
        console.log('Name--' + this.nameEmp + 'code-----' + this.codeEmp);
    };
    return Employees;
}());
var employed = new Employees('surendra', 1234);
employed.displayedInformation();
/**
 * creating object through IEmp interface
 */
var employeed = new Employees('SURENDRA', 5678);
employed.displayedInformation();
console.log('Iperson', employeed);
/**
 * creating object through IPerson interface
 */ 
