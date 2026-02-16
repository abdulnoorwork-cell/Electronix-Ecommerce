import express from 'express'
import { addBlog, deleteBlog, getBlogs, singleBlog, updateBlog } from '../controllers/blog.controller.js';
const router = express.Router();

router.post('/add', addBlog);
router.get('/get-blogs', getBlogs);
router.delete('/delete/:blogId', deleteBlog);
router.get('/blog-detail/:blogId', singleBlog);
router.put('/update/:blogId',updateBlog);

export default router;