const moment = require("moment");
 console.log(moment);
 
 console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
 console.log(moment().format('dddd'));
 console.log(moment().format("MMMM Do YY"));

 let date1 = moment(`2020-01-01`);
 let date2 = moment(`2020-14-01`);
 console.log(date1.isValid());
 console.log(date2.isValid());
 console.log(moment().add(7, 'd'));
 console.log(moment().add(7, 'M'));
 console.log(moment().add(7, 'y'));
 console.log(moment().subtract(7, 'd'));
 console.log(moment().subtract(7, 'M'));
 console.log(moment().subtract(7, 'y'));

 let a = moment([2014,11,11]);
 let b = moment([2015,09,11]);
 console.log(b.diff(a, "days"));

let c = moment([2014,11,27]);
let d = moment([2015,09,16]);
console.log(d.diff(c, "days"));

console.log(moment(`2020-01-01`).isAfter(`2018-01-01`));
console.log(moment(`2010-01-01`).isAfter(`2018-01-01`));

console.log(moment(`2019`).isLeapYear());
console.log(moment(`2020`).isLeapYear());


const lodash = require("lodash");
console.log(lodash.drop([1,2,3]));
console.log(lodash.fromPairs([['a', 1], ['b', 2]]));
console.log(lodash.initial([1, 2, 3]));
console.log(lodash.sortedUniq([1, 1, 2]));
console.log(lodash.take([1, 2, 3]));


console.log(lodash.size([1, 2, 3]));
console.log(lodash.countBy([6.1, 4.2, 6.3], Math.floor));
function duplicate(n) {
    return [n, n];
  }
   
console.log(lodash.flatMap([1, 2], duplicate));
console.log(lodash.shuffle([1, 2, 3, 4]));
console.log(lodash.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'));
