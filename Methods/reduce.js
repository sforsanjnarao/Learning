const users = [
    { firstName: "Harkirat", lastName: "Singh", age: 26 },      // Harkirat aka Kirat, IIT Roorkee grad
    { firstName: "Gaurav", lastName: "Chaudhary", age: 34 },    // Technical Guruji
    { firstName: "Ranjeet", lastName: "Kumar", age: 45 },       // Geeky Ranjit
    { firstName: "Shlok", lastName: "Srivastava", age: 28 },    // Tech Burner
    { firstName: "Ankur", lastName: "Shukla", age: 31 },        // Trakin Tech
    { firstName: "Ashish", lastName: "Chanchlani", age: 30 },   // Tech-related videos
    { firstName: "Hitesh", lastName: "Choudhary", age: 34 },    // Programming with Hitesh
    { firstName: "Ali", lastName: "Abdaal", age: 30 },          // (UK-based but Indian-origin, e-learning)
    { firstName: "Dilraj", lastName: "Rawat", age: 29 },        // Mr Indian Hacker, science/tech DIY
    { firstName: "Sara", lastName: "Dietschy", age: 33 }        // (not Indian; remove if strict)
  ];

//   let newArr= {}
// users.map((x)=>{
//     return x.firstName +" " + x.lastName
// }).reduce((acc, cur)=>{
//     if(cur >30) newArr.push()
//     return newArr
// },{})

// console.log(newArr)


const over30= users.reduce((acc, curr)=>{
    if(curr.age >30) acc.push(curr.firstName + " " + curr.lastName)
    return acc;
},[]);

console.log(over30)



const number=[1,2,3,4,5]

const sum= number.reduce((acc, cur)=>{
    return acc + cur
},0)
console.log(sum)


const names = ["Kirat", "Gaurav", "Ankur"];
 const oneString=names.reduce((acc, curr)=>{
    return acc + " " + curr
 },'hello')

 console.log(oneString)

const over30old=users.reduce((acc, curr)=>{
    if(curr.age>=30) acc++
    return acc
},0)

console.log(over30old)