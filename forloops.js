var array = [1, 2, 3, 3, 45, 5, 6, 7, 8];
for (var i = 0; i < array.length; i++) {
    console.log('array for loop======', i);
}
// ============================for of loop =====================================================
var array1 = ['surendra', "kumar"];
for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
    var arr = array1_1[_i];
    console.log('for of------', arr);
}
// ============================fro in loop ======================================================
var array2 = ['type', 'script'];
for (var arr in array2) {
    // console.log('for in ----',arr);
    console.log('for in array------', array2[arr].length);
}
// ==============================================================================================
