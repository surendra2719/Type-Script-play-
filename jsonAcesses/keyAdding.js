var arrays =[
    {
       "name":"surendra"
    },
    {
        "name":"surendra"
     },
     {
        "name":"surendra"
     }
]
for (let index = 0; index < arrays.length; index++) {
// console.log(arrays[index]);
    
}
// console.log(arrays);
var keys=[
    {
        "key":''
    },
    {
        "key":''
    },
    {
        "key":''
    }
]
for (let index = 0; index < keys.length; index++) {
    const element = keys[index].key+index;
    // console.log(element)
    keys[index].key=element
    
}

var obk={}
obk=keys[0]
var object={}
object=arrays[0]
var final={...object,...obk}
var arrayssss=[]
arrayssss.push(final)
console.log(arrayssss);
