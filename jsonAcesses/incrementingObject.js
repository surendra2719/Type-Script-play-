var object={
    age:24,
    
}

// object[age]++
// console.log(object[age]);
for (const key in object) {
    for (let index = 0; index < 10; index++) {
        console.log(object[key]+index);
    }
   
    
}