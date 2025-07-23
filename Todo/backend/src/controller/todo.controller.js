import todoModel from "../models/todo.model"

export const createTodo=async (req,res)=>{
    const {task, checked}=req.body
    const createTask = await todoModel.create({
        task: task,
        checked: checked
    })

    return res.status(200).json({
        createTask
    })
}

export const getallTodo= async (req, res)=>{
    const getTodo=await todoModel.find()
    return res.status(200).json({
        getTodo
    })
}

export const deleteTodo= async(req, res)=>{
    const {id}= req.params
    const delTodo=await todoModel.findByIdAndDelete(id)
    return res.status(200).json({
        delTodo
    })
}
