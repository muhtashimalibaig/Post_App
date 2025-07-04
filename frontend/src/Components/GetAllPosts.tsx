import React, { useEffect, useState } from 'react';
import { getPost } from '../services/PostServices';
import { Link } from 'react-router-dom';
import { EllipsisVertical } from 'lucide-react';
import PostFeatures from './PostFetaures';
import { deletePost } from '../services/PostServices';

const formatDate = (date: string | Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

const GetAllPosts: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [activePostId, setActivePostId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const data = await getPost();
        setPosts(data.data); // Assuming `data.data` contains the list of posts
      } catch (error) {
        setError('Failed to fetch posts. Please try again.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts(); // Call fetchPosts when the component mounts
  }, []);

  // Function to handle deletion of a post from the state
  const handleDeletePost = async (id: string) => {
    try {
      // Call the API to delete the post
      await deletePost(id); 

      // Remove the post from the state instantly
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post');
    }
  };

  const togglePostFeatures = (postId: string) => {
    setActivePostId((prevId) => (prevId === postId ? null : postId));
  };

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="mx-auto bg-zinc-500 rounded-lg shadow-md p-6">
        <h2 className="text-3xl tracking-tight font-bold text-green-400 mb-6 text-center">
          All Posts
        </h2>

        {loading && <p className="text-blue-500 text-center">Loading posts...</p>}

        {error && <p className="text-red-500 text-center">{error}</p>}

        {posts.length === 0 && !loading && !error && (
          <p className="text-gray-100 text-center">No posts available.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
          {posts.map((post) => (
            <div key={post._id} className="bg-zinc-700 p-6 rounded-md shadow-lg relative">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-100">{post.title}</h3>
                <button
                  onClick={() => togglePostFeatures(post._id)}
                  className="rounded-full p-2 hover:bg-zinc-600"
                >
                  <EllipsisVertical color="white" />
                </button>
              </div>
              <p className="text-gray-300">{post.description}</p>
              <p className="text-gray-400 mt-2">
                Author: <span className="text-white font-bold ms-2">{post.author}</span>
              </p>
              <p className="text-gray-400 mt-2">
                Created At: <span className="text-white">{formatDate(post.createdAt)}</span>
              </p>

              {/* Conditionally render PostFetaures */}
              {activePostId === post._id && (
                <PostFeatures
                  id={post._id}
                  title={post.title}
                  description={post.title}
                  author={post.author}
                  onDelete={handleDeletePost} // Pass the handleDeletePost function as prop
                />
              )}
            </div>
          )).reverse()}
        </div>

        <div className="text-center mt-10">
          <Link
            to={'/upload_post'}
            className="bg-blue-500 px-10 py-2 font-bold text-xl text-white rounded-3xl hover:bg-blue-700 transition-all"
          >
            Create More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetAllPosts;
