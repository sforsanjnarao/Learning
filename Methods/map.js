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

const above30=users
.filter((e)=>e.age>=30)
.map((e)=>{
     return `${e.firstName + " "+e.lastName} is ${e.age} years old`
})

console.log(above30)