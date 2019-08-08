// var kvArray = [{key: 1, value: 10}, 
//     {key: 2, value: 20}, 
//     {key: 3, value: 30}];

// var reformattedArray = kvArray.map(obj =>{ 
// var payload = {}; 
// const mapping = [null,'rt', 'do', 'f1']; 
// const key = mapping[obj.key];
// payload[key] = obj.value;
// return payload;
// });
// console.log(reformattedArray);
// var result = "";

// for (var i = 0; i < 10; i++) {
//     result += i + " ";
// }

// console.log(result);
// var result1 = "";

// for (var i = 0; i < 10; i++) {
//     result1 += i + " ";
// }

var data = {
    "Name": "",
    "Age": ""

}
// console.log("-----key---", Object.keys(data));
var keys = Object.keys(data)
// console.log("keyssss", keys);

var data1 = {
    "name": "royal",
    "age": "25"
}
// console.log("-----Value---", Object.values(data1));
var values = Object.values(data1)
var json = {}
for (i = 0; i < keys.length; i++)
//     for (j = 0; j < values.length; j++)
        json[keys[i]] = values[i]
console.log("json", json);
