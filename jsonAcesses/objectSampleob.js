var form = {
    "firstName":"surendra",
    "middleName":"kumar",
    "lastName":"ganpisetti",
    "name":"surendra",
    "secondName":"kumar",
    "thirdName":"ganpisetti"
}
var sup={};
var keydat=Object.values(form)
// console.log(keydat.length);

for (const key in form) {
        // const element = form[key];
        // console.log(key+"-----"+form[key]);
        for (let index = 0; index < key.length; index++) {
              
                sup[key]=keydat[0]
        }
}
// console.log(sup);
// myObject = {  };
// var foo = 'surendra';
// var bar = 'kumar'

// for(i = 0; i < 2; i++){
//     myObject['propA' + i] = foo;
//     myObject['propB' + i] = bar;
// };
// console.log(myObject);
Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    
    // Get the size of an object
    var size = Object.size(form);
//     console.log(size);
