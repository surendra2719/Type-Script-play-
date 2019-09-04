const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce((accumulator, currentValue)=> {
    console.log('accumlator',accumulator);
    console.log('currentvalue',currentValue);
    
    
  return accumulator + currentValue;
});
// prints 25
console.log(sum);