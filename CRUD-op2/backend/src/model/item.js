import mongoose from "mongoose";

const schema=mongoose.Schema({
    name:{
        type: String,
        require: true
    }
})


const itemModel=mongoose.model("item", schema)

export default itemModel;