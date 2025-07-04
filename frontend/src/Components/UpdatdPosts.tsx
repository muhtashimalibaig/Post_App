import React, { useState } from "react";
import { updatePost } from "../services/PostServices"; // Ensure correct import path
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdatedPosts: React.FC = () => {
  const { id } = useParams();
  const location = useLocation(); // Access the passed state
  const { title, description, author } = location.state || {}; // Destructure the state
  const navigate = useNavigate();

  const [oldPost] = useState({
    title: title || "Old Title",
    description: description || "Old Description",
    author: author || "Old Author",
  });

  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    author: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) {
      alert("Invalid post ID.");
      return;
    }

    try {
      const updatedData = {
        title: newPost.title || oldPost.title,
        description: newPost.description || oldPost.description,
        author: newPost.author || oldPost.author,
      };

      await updatePost(id, updatedData);
      setTimeout(() => {
        navigate("/");
      }, 1000);
      alert("Post updated successfully!");

      setNewPost({ title: "", description: "", author: "" });
    } catch (error) {
      console.error("Failed to update post", error);
    }
  };

  return (
    <div className='py-12 px-6 sm:px-10'>
      <h1 className='text-white text-center text-4xl font-bold tracking-tight mb-8'>
        Update Post
      </h1>
      <div className='bg-zinc-700 p-10 rounded-lg shadow-lg'>
        <form className='space-y-6' onSubmit={handleSubmit}>
          {/* Edit Title */}
          <div>
            <label
              htmlFor='title'
              className='block text-sm font-semibold text-yellow-400'>
              Old Title:
            </label>
            <input
              type='text'
              value={oldPost.title}
              readOnly
              className='w-full p-3 mt-2 bg-zinc-600 text-white rounded-md border border-zinc-500 outline-none'
            />
            <label
              htmlFor='title'
              className='block text-sm font-semibold text-green-400 mt-4'>
              New Title:
            </label>
            <input
              id='title'
              type='text'
              placeholder='Enter new title'
              value={newPost.title}
              onChange={handleInputChange}
              className='w-full p-3 mt-2 bg-zinc-600 text-white rounded-md border border-zinc-500 outline-none'
            />
          </div>

          {/* Edit Description */}
          <div>
            <label
              htmlFor='description'
              className='block text-sm font-semibold text-yellow-400'>
              Old Description:
            </label>
            <textarea
              id='description'
              value={oldPost.description}
              readOnly
              rows={3}
              className='w-full p-3 mt-2 bg-zinc-600 text-white rounded-md border border-zinc-500 focus:outline-none'></textarea>
            <label
              htmlFor='description'
              className='block text-sm font-semibold text-green-400 mt-4'>
              New Description:
            </label>
            <textarea
              id='description'
              placeholder='Enter new description'
              value={newPost.description}
              onChange={handleInputChange}
              rows={3}
              className='w-full p-3 mt-2 bg-zinc-600 text-white rounded-md border border-zinc-500 outline-none'></textarea>
          </div>

          {/* Edit Author */}
          <div>
            <label
              htmlFor='author'
              className='block text-sm font-semibold text-yellow-400'>
              Old Author:
            </label>
            <input
              type='text'
              value={oldPost.author}
              readOnly
              className='w-full p-3 mt-2 bg-zinc-600 text-white rounded-md border border-zinc-500 focus:outline-none'
            />
            <label
              htmlFor='author'
              className='block text-sm font-semibold text-green-400 mt-4'>
              New Author:
            </label>
            <input
              id='author'
              type='text'
              placeholder='Enter new author'
              value={newPost.author}
              onChange={handleInputChange}
              className='w-full p-3 mt-2 bg-zinc-600 text-white rounded-md border border-zinc-500 outline-none'
            />
          </div>

          {/* Submit Button */}
          <div className='text-center mt-6'>
            <button
              type='submit'
              className='bg-green-500 text-white text-lg font-semibold py-2 px-6 rounded-md hover:bg-green-700 transition-all'>
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatedPosts;
