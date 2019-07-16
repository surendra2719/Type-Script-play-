interface keypair {
    (myName: string,
        code: number): void
}
// let myName:void=undefined
// console.log("void------",myName);
function addKeyValue(myName: String, code: number): void {
    console.log("Old values" + myName + "----------" + code);

}
function updatedValue(myName: String, code: number): void {
    console.log("Old values" + myName + "----------" + code);
}
let result: keypair = addKeyValue
result("surendra", 1234)
console.log("");
result = updatedValue
result('SURENDRA', 2345)