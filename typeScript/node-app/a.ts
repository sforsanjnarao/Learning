/*
Write a function that greets a user given their first name. 
Argument - firstName
Logs - Hello {firstName}
Doesn’t return anything
*/
function helloWorld(name:string){
    console.log(`hello ${name}`)
}
helloWorld('sanjana')


function funSum(a:number,b:number){
    let sum:number=a+b
    console.log(sum)
    return sum
}
funSum(sum1(2),sum2(3))

function sum1(a:number){
    return a
}
function sum2(b:number){
    return b
}

//Problem 2 - Sum function
/**Write a function that calculates the sum of two functions */
function sum(a:number,b:number):number{
    return a+b
}
console.log(sum(2,3))

//the number before the return denotes that, the return statment only return number
//and if not the TS throw an error

/**Problem 3 
  Return true or false based on if a user is 18+ */

// function isLegal(a:number):boolean{
//     if(a>18){
//         return true
//     }else{
//         return false
//     }
// }


/**
 * Problem 4 - 
Create a function that takes another function as input, and runs it after 1 second.
 */
function lala(a:string):string{
    return a
}
function delayedCall(lala:Function){
    setTimeout(() => {
        return lala
    }, 1000);
}
delayedCall(()=>lala('sanjana'))


// const greet=(name:string)=>`hello, ${name}`

// interface User{
//     firstName:string;
//     lastName:string;
//     email:string;
//     age:number;
// }
// function isLegalObj(user:User){
//     if(user.age>18) return true
//     else return false;
// }

interface ToDo{
    task:string;
    taskStatus:boolean
}

interface User {
    name:string
    age:number
    address?:{   //question mark shows it's an optional feild
        city:string;
        country:string;
        pincode:number
    }

}
let user:User={
    name:"sanjana",
    age:20,
    address:{
        city:'ranchi',
        country:'india',
        pincode:496001
    }
}
function isLegal(user:User):boolean{
    return user.age<18
}
console.log(isLegal(user)) //this is giving me false wao without using any condition


//one interface can use another interface