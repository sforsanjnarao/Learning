const fs= require('node:fs')
console.log('1.start')
const a=10;
const b=20;

setImmediate(()=>{
    console.log('2. its an fast function')
})

fs.readFile('./files.txt', 'utf8', (err,data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('3. file got read');
    console.log('Data:', data);
  });
setTimeout(()=>{
    console.log("4. timeout")
},0)

function sum(a,b){
    return a+b;
}
console.log('5.', sum(a,b))


