var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
var previousDate = new Date();
previousDate.setDate( today.getDate() - 7 );
var previousFormat = previousDate.getFullYear()+'-'+(previousDate.getMonth()+1)+'-'+previousDate.getDate()
console.log(date);
console.log(previousFormat);
let sevenDaysBefore = moment().subtract(7, 'days').format('YYYY-MM-DD');
let today = moment().format('YYYY-MM-DD');
