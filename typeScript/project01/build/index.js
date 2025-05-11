"use strict";
function ageCul(user1, user2) {
    return user1.age + user2.age;
}
let total = ageCul({ name: 'sanjana', age: 20 }, { name: 'yash', age: 22 });
console.log(total);
