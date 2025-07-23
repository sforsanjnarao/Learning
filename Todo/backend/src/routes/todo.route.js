import express from 'express'
import {getallTodo, deleteTodo, createTodo} from '../controller/todo.controller'
const router=express.Router()


router.get('/', getallTodo)
router.post('/create', createTodo)
router.delete('/delete/:id', deleteTodo)

export default router