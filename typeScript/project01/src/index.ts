interface User{
    name:string;
    age:number
}
function ageCul(user1:User, user2:User){
    return user1.age + user2.age
}

let total=ageCul({name:'sanjana',age:20},{name:'yash',age:22})
console.log(total)

