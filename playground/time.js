var moment = require('moment');

//Jan 1st 1970 00:00:00 am

// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'year').subtract(4, 'months');
// console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createAt = 1234;
var date = moment(createAt);
console.log(date.format('h:mm a'));
