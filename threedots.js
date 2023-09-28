const ages = [12, 17, 20, 36];
const ages2 = [ 18, 45, 22];
const ages3 = [ 25, 29, 26, 30];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;

const allMoney = [650, 450, 250, 850, 950]
const maximum = Math.max(...allMoney);
console.log(maximum);