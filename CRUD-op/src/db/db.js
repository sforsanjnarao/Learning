import mongoose from "mongoose";    
const connectDB=()=>{
    new mongoose.connect('mongodb://localhost:27017/crud-op')
    .then(()=>console.log('dataBase connected..'))
    .catch((err)=>console.error('ERROR:',err))
}

export default connectDB