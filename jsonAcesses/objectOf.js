// const myObj = {
//     clown: '🤡',
//     police: '👮',
//     santa: '🎅',
//     farmer: '👩‍🌾'
//   }
//   var newObject={}
  
//   for (let k of Object.keys(myObj)) {
//     // console.log(`Hey ${ myObj[k] }!`);
//     newObject[k]=`Hey ${ myObj[k] }!`
//   }
//   console.log("newObject",newObject);
var myFunc = a => {
    // console.log(a*a);
    return a * a;

    
  };
// console.log( myFunc(2));
// let arr = [1, 2, 3, 4, 5];

// arr.map(x => [x, x * 2]);
// [Array(2), Array(2), Array(2)]
// 0: (2)[1, 2]
// 1: (2)[2, 4]
// 2: (2)[3, 6]

// let claculatedArray =arr.map(v => [v, v * 2]);
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
// console.log('Flat array',claculatedArray);
  sort = (a, b)=> {
      console.log('a:',a+'  b'+b);
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }
  console.log(sort(12,6));
  