// let myName:void=undefined
// console.log("void------",myName);
function addKeyValue(myName, code) {
    console.log("Old values" + myName + "----------" + code);
}
function updatedValue(myName, code) {
    console.log("Old values" + myName + "----------" + code);
}
var result = addKeyValue;
result("surendra", 1234);
console.log("");
result = updatedValue;
result('SURENDRA', 2345);
