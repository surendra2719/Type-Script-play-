class DemoObject{
empName:String;
empId:number
constructor(name:String,code:number){
    this.empName=name,
    this.empId=code
}
}
let obj= new DemoObject("surendra",1234)
console.log("-------object--------",obj);
