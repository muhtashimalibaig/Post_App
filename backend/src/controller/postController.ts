import { Request, RequestHandler, Response } from "express";
import Post from "../models/postModel";
import { Types } from "mongoose";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, description, author, createdAt } = req.body;
    const newPost = await Post.create({
      title,
      description,
      author,
      createdAt,
    });
    res.status(201).json({
      success: true,
      message: "Post Created Successfully",
      data: newPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create post",
      error: error,
    });
  }
};

export const getPosts = async (req: Request, res: Response): Promise<any> => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch posts. Please try again later.",
    });
  }
};

export const updatePosts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, author } = req.body;
  try {
    const post = await Post.findOneAndUpdate(
      { _id: id },
      { title, description, author },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "Post Not Fond" });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the post" });
  }
};

export const getPostById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      res.status(404).json({
        success: false,
        message: "Post not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the post",
    });
  }
};
export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: post,
    });
  } catch (error) {
    console.error("Error deleting post:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the post",
    });
  }
};
