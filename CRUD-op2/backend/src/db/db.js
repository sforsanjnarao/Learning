import mongoose from "mongoose"

const mongoConnection=()=>{
    mongoose.connect(process.env.MONGOOSE_URI)
    .then(()=>{
        console.log('DB connected..')
    })
    .catch((err)=>{
        console.error('ERROR:',err)
    })
}
export default mongoConnection