interface Demo
{
    empName:String;
    empId:number;
    empCompany?:String //-----Here in interface object we can put ? marks it means that object containig inside values we can use or not its not a problem because it is under ? operator

}
let employeeOne:Demo={ 
   empName:"surendra",
   empId:1234,

}
console.log('----empOne',employeeOne);
console.log();
let employeeTwo:Demo={
    empName:"Royal",
    empId:5678,
    empCompany:"Autonom8"
 }
 console.log('----empOne',employeeTwo);
 