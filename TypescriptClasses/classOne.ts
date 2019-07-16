class Demo{
    empName:String;
    empId:number
    constructor(name:string,code:number){
        this.empName=name,
        this.empId=code
    }
    getSalary(empId:number):number{
        return 20000;

    }
}
// ----------------------class with constructor--------------------
class DemoOne{
    empName:String;
    empId:number
}
// ----------------------class without constructor-----------------