import blogModel from "../model/blog.model";
export const createBlog=(req,res)=>{
    const getBlog=blogModel.find()
    res.status(200).json(getBlog) //200 scessful response
}
export const postBlog=(req,res)=>{
    const {title,content}=req.body
    const postBlog=blogModel.create({
        title,content
    })
    res.status(200).json({postBlog}) 
}

export const updateBlog=(req,res)=>{
    const {id}=req.param
    const {title,content}=req.body
    const Update=blogModel.findByIdAndUpdate(id,{title,content})
    res.status(201).json({Update})
}


export const deleteBlog=(req,res)=>{
    const {id}=req.param
    const {title,content}=req.body
    const delet=blogModel.findByIdAndDelete(id,{title,content})
    res.status(201).json({delet})
}
