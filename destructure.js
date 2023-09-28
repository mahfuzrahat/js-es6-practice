const person = { name: 'Tom jack', age: 17, phone: '01717112211', job: 'Engineer', fName: 'Korim', address: 'Dhaka', friends: ['abul', 'kabul', 'rahim' ]};


const {age, fName, address, home} = person;


// const name = person.name;
// const phone = person.phone;

// console.log(address, age, fName,  home);
// console.log(age, fName, address);
// console.log(age, fName, address);
// console.log(age, fName, address);


const friends = ["Sakib", "Rakib", "Juyel", "Arman", "Salman",];
const [myFriend, ...restFriends] = friends;
console.log(restFriends);