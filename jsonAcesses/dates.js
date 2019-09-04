const now = new Date();
console.log(now.toDateString()); 
console.log(now.toTimeString()); 
console.log(now.toLocaleDateString()); 
console.log(now.toLocaleString()); 
console.log(now.toLocaleTimeString()); 
console.log(now.toUTCString()); 
console.log(now.getFullYear()); 
console.log(now.getMonth()+1);
console.log(now.getDay()+1);
//We are adding +1 beacuse in getMonth and getDay methods it will return values like in case of days 0 to 6 and in case of getMonth 0 to 11
