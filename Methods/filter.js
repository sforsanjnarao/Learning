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

//basic
const above30=users.filter((e)=>e.age>=30)
.map((e)=> `${e.firstName + " " + e.lastName}`)
console.log(above30)


const below30=users.filter((e)=>e.age<30)
.map((e)=> `${e.firstName + " " + e.lastName}`)
console.log(below30)

const At30=users.filter((e)=>e.age==30)
.map((e)=> `${e.firstName + " " + e.lastName}`)
console.log(At30)


//intermediate
const startA=users.filter((e)=>e.firstName[0]=="A" || e.firstName[0]=="a"  )
.map((e)=>`${e.firstName}`)
console.log(startA)

const evenAge=users.filter((e)=>e.age%2===0)
.map((e)=>`${e.firstName}`)
console.log(evenAge)


const above30andStartWithC=users.filter((e)=> ((e.age>=30) && (e.lastName[0]=="c" || e.lastName[0]=="C")))
.map((e)=> `${e.firstName + " " + e.lastName}`)
console.log(above30andStartWithC)

