import React, { ChangeEvent, FormEvent, useState } from "react";
import { createPost } from "../services/PostServices";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface FormData {
  title: string;
  description: string;
  author: string;
}

const Upload: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    author: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await createPost(formData);
      console.log(response);

      toast.success("Post created successfully! 🎉");

      setFormData({
        title: "",
        description: "",
        author: "",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      toast.error("Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='py-14 px-4 md:px-8'>
      <div className='max-w-2xl mx-auto bg-zinc-500 rounded-lg shadow-md p-6'>
        <h2 className='text-3xl tracking-tight font-bold text-gray-100 mb-6 text-center'>
          Upload a Post
        </h2>
        <form className='space-y-6' onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label
              htmlFor='title'
              className='block text-xl font-medium text-gray-100'>
              Title:
            </label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title}
              onChange={handleChange}
              placeholder='Enter Post Title'
              className='w-full rounded-md p-3 bg-zinc-700 outline-none text-white'
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor='description'
              className='block text-xl font-medium text-gray-100'>
              Description:
            </label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder='Enter Post Description'
              className='w-full rounded-md p-3 bg-zinc-700 outline-none text-white'></textarea>
          </div>

          {/* Author */}
          <div>
            <label
              htmlFor='author'
              className='block text-xl font-medium text-gray-100'>
              Author:
            </label>
            <input
              type='text'
              id='author'
              name='author'
              value={formData.author}
              onChange={handleChange}
              placeholder='Enter Author Name'
              className='w-full rounded-md p-3 bg-zinc-700 outline-none text-white'
            />
          </div>

          {/* Buttons */}
          <div className='flex justify-between'>
            <button
              type='submit'
              disabled={loading}
              className='bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors'>
              {loading ? "Uploading..." : "Upload Post"}
            </button>
            <Link
              to={"/my_posts"}
              className='bg-red-500 text-white font-medium py-2 px-4 rounded-md hover:bg-red-700 transition-colors'>
              See All Posts
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Upload;
