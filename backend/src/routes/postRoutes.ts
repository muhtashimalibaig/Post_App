import express, { RequestHandler } from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePosts,
} from "../controller/postController";
const router = express.Router();

router.post("/create", createPost);
router.get("/getPost", getPosts);
router.get("/:id", getPostById as unknown as RequestHandler);
router.put("/update/:id", updatePosts as RequestHandler);
router.delete("/:id", deletePost as unknown as RequestHandler);

export default router;
