interface Demo1 {
    myName: String;
    empId: number;
}
interface Demo2 extends Demo1 {
    empCompany: String;
}
interface Demo3 extends Demo2 {
    empRole: String;
}
let employee:Demo3={
    myName:'surendra', empId:1234,empCompany:'Automnom8',empRole:"Developer"
}
console.log('-----employee in exttends examples',employee);
