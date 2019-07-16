class Emp {
    empName: String;
    empNo: number;
    constructor(name: string, number: number){
    this.empName = name;
    this.empNo = number;

}   
dispaly=()=>console.log(this.empName+"      "+this.empNo);

}
let employee = new Emp('surendra',12345)
employee.dispaly();