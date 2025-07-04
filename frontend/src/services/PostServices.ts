import axios from "axios";

const API_URL = "http://localhost:5001/api/posts";

export const createPost = async (postData: {
  title: string;
  description: string;
  author: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/create`, postData);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};
export const getPost = async () => {
  try {
    const response = await axios.get(`${API_URL}/getPost`);
    return response.data; // Return the response data (which should include the post)
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error; // Propagate the error to be handled by the calling component
  }
};
export const updatePost = async (
  id: string,
  updatedData: { title?: string; description?: string; author?: string }
) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};
export const getPostById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch the post.");
    }
    return await response.json(); // Return the post data
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const deletePost = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting post:", error); // Log the full error
  }
};

export const getPostByUserId = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user posts:", error);
    throw error;
  }
};
