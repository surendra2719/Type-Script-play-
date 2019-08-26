
function convertToArrayOfObjects() {
    var data = [
         ["firstname", "lastName", "mail"],
         ["surendra", "kumar", "surendrakumar@autonom8.com"],
         ["Demo", "Demo", "Demo@autonom8.com"],
    ]
    var keys = data.shift(),
        i = 0, k = 0,
        obj = null,
        output = [];

    for (i = 0; i < data.length; i++) {
        obj = {};

        for (k = 0; k < keys.length; k++) {
            obj[keys[k]] = data[i][k];
        }

        output.push(obj);
     
        
    }
console.log(output);

    return output;
    ;
    
}
convertToArrayOfObjects()