var array: Array<number> = [1, 2, 3, 3, 45, 5, 6, 7, 8]
for (let i = 0; i < array.length; i++) {
    console.log('array for loop======', i);

}

// ============================for of loop =====================================================
var array1: Array<string> = ['surendra', "kumar"]
for (var arr of array1) {
    console.log('for of------', arr);

}

// ============================fro in loop ======================================================
var array2: Array<String> = ['type', 'script']
for(var arr in array2){
    // console.log('for in ----',arr);
    console.log('for in array------',array2[arr].length);
    
    
}
// ==============================================================================================