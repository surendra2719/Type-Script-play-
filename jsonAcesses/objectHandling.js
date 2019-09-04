var newObject = {}
var finalObject = {}
var array = ['surendra', 'kumar', 'firstname', 'lastName']
for (let index = 0; index < 4; index++) {
    console.log('array', array[index]);
    newObject[array[index] + [index]] = `SS`
}
// newObject.surendra='SS'
// console.log('new object',newObject);
var length = Object.keys(newObject)[0].length - 1
// console.log('length',length);
console.log(Object.keys(newObject)[0].substr(0, length));
Object.keys(newObject).forEach(element => {
    console.log(element.substr(0, element.length - 1));
    var datas = element.substr(0, element.length - 1)
    console.log("Data", datas);
    finalObject[datas] = 'ss'
});
console.log('final object', finalObject);