var data = {

    "name": "surendra",
    "job": "job"

}
// var pardata=data.name
// console.log("pardata",pardata);

// parse=JSON.stringify(pardata)
// console.log(JSON.parse(pardata),"swswsws");

// console.log("parsing",parse);

console.log("===data==", data);
for (var i in data) {
    data[i]


    parsefor = JSON.stringify(data[i])
    // console.log("parsefor", parsefor);

}

var dataKey = {
    "name": "ss",
    "job": "jjj"
}
var keys = []
for (var k in dataKey) keys.push(k);
// console.log("keys", keys);
parsefor1 = JSON.stringify(Object.assign({}, keys))
// console.log("parsefor1", parsefor1);

let user = {
   data:{ name: "John",
    age: 30
}
  };
  
  // loop over values
  for (let value of Object.keys(user.data)) {
    console.log("keys",value);
  
  }
  let user1 = {
    data:{ name: "John",
     age: 30
 }
   };
   var forin ;
  
   for (let value of Object.values(user.data)) {
  
   
console.log("value",value);

   }


