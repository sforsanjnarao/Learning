import mongoose from "mongoose";

const schema= new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    content:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})


const itemModel=mongoose.model("item", schema)

export default itemModel;