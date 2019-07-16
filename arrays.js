var fruits = ['Apple', 'Orange', 'Banana'];
fruits.sort();
console.log(fruits); //output: [ 'Apple', 'Banana', 'Orange' ]
console.log(fruits.pop()); //output: Orange
fruits.push('Papaya', 'guva');
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya']
fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 
console.log(fruits.indexOf('guva')); //output: 2
