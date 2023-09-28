const firstName = "Justin";
const lastName = "TimberLake";
// Below line is ES5 code
// const fullName = firstName + " "+ lastName + " is a good boy";

// This line is ES6 code
const fullName2 = `${firstName} ${20+50+30} is a good boy`;
console.log(fullName2)


// This is ES5 multiple line string Code...
const multiline = "who are you?\n"
+ "where are you from?\n"
+ "come here soon";

// This is ES6 multiple line string Code...
const multiline2 = `who are you?
where are you from
come here soon`;

console.log(multiline2);