import { Router } from "express";
import itemModel from "../model/item.js";

const router= Router()
router.get('/', async(req,res)=>{
    const blog= await itemModel.find()
    return res.json({blog})
})

router.post('/create', async (req,res)=>{
        const {title, content}=req.body
        if(!title || !content) console.log('empty field')
    try {
        const newPost=itemModel.create({
             title,
             content
        })
        return res.status(200).json(newPost)
    } catch (err) {
        console.error('ERROR:', err)
        return res.status(400).json({'error': err.message})
    }
})

router.patch('/update',)

router.delete('/delete,')

export default router