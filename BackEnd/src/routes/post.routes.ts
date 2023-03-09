import { Router } from "express";
import { posts } from "../controllers/post.controller";
const router=Router();

router.route('/').get(posts);

export default router;