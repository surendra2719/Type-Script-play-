var data=[
    {"":"surendra"},
    {"":"surendra"},  
]
// data.forEach(element => {
//     console.log(element);
//     var des=element;
//  for (const key in des) {
//      if (des.hasOwnProperty(key)) {
//          if(key!==""){
//          console.log("InsideIf",key+"-___"+des[key])
//          }
//          console.log("OutsideIf",key+"-___"+des[key])
//      }
//  }
    
// });
function vlidate(data) {
    data.forEach(element => {
        console.log(element);
        var des=element;
     for (const key in des) {
         if (des.hasOwnProperty(key)) {
             if(key!==""){
             console.log("InsideIf",key+"-___"+des[key])
             }
             console.log("OutsideIf",key+"-___"+des[key])
         }
     }
        
    });
}
vlidate(data)
