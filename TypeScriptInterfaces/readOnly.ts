interface Demo {
    myName:String;
  readonly id:number
}
var result:Demo={
myName:"surendra",id:1234
}
// result.id=1234------here we can not replace the id because under readonly property it cant replace any values 
result.myName='Surendra'
console.log('---readOnly---',result);
