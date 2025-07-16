import { Router } from "express";
import itemModel from "../model/item.js";

let router= Router()
router.get('/', async(req,res)=>{
    let blog= await itemModel.find()
    return res.json({blog})
})

router.post('/create', async (req,res)=>{
        let {title, content}=req.body
            if(!title || !content) {
                return res.status(400).json({
                    "message":"Empty fields"
                })
            }
    try {
        let newPost=itemModel.create({
             title,
             content
        })
        return res.status(200).json(newPost)
    } catch (err) {
        console.error('ERROR:', err)
        return res.status(400).json({'error': err.message})
    }
})

router.patch('/update/:id',async (res,req)=>{
    let {id}=req.params
    let {title, content}= req.body
    if(!id|| !title || !content){
        return res.status(400).json({message: 'all field needed'})
    }
    try{
        let updateBlog= awaititemModel.findByIdAndUpdate(id, {title,content})
        res.status(200).json({updateBlog})
    }catch(err){
        console.error('Error:',err)
        return res.status(400).json({'Error': err.message})
    }
    
})

router.delete('/delete/:id', async (req,res)=>{
    let {id}=req.params
    let deleteBlog=await itemModel.findByIdAndDelete(id)
    res.status(200).json({deleteBlog})
})

export default router