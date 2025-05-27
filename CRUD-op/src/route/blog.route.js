import express from 'express';
import {
  createBlog,
  postBlog,
  updateBlog,
  deleteBlog
} from '../controllers/blogController.js';
import { postBlog } from '../controller/blog.controller.js';

const router = express.Router();

 router.get('/',createBlog)
 router.post('/create',postBlog)
 router.patch('/update', updateBlog)
 router.delete('/delete',deleteBlog)

export default router;