interface DemoEmployee {
    empName: String;
    empId: number;
    getSalary:(number) => number
}
class Employee implements DemoEmployee {
    empName: String;
    empId: number;
    constructor(name: string, code: number) {
        this.empName = name
        this.empId = code
    }
    getSalary(empId: number): number {
        return 40000;

    }
}
let Emp = new Employee('surendra', 1)
console.log("-----implement result-------------", Emp);
