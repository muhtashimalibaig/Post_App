import React, { useEffect, useState } from "react";
import { getPost, deletePost } from "../services/PostServices";
import { Link } from "react-router-dom";
import { EllipsisVertical } from "lucide-react";
import PostFeatures from "./PostFetaures";

const formatDate = (date: string | Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

const RecentPosts: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [activePostId, setActivePostId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await getPost();
        const sortedPosts = data.data.sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setPosts(sortedPosts.slice(0, 3));
      } catch (error) {
        setError("Failed to fetch posts. Please try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = async (id: string) => {
    try {
      await deletePost(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post");
    }
  };

  const togglePostFeatures = (postId: string) => {
    setActivePostId((prevId) => (prevId === postId ? null : postId));
  };

  return (
    <section className='py-12 px-4 md:px-8 sm:py-0'>
      <div className='max-w-7xl mx-auto bg-zinc-800 rounded-xl shadow-md p-6 md:p-10'>
        <h2 className='text-3xl md:text-4xl tracking-tight font-bold text-white mb-10 text-center'>
          📌 Recent Posts
        </h2>

        {loading && (
          <p className='text-blue-400 text-center'>Loading posts...</p>
        )}
        {error && <p className='text-red-500 text-center'>{error}</p>}
        {!loading && !error && posts.length === 0 && (
          <p className='text-gray-300 text-center'>No posts available.</p>
        )}

        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => (
            <div
              key={post._id}
              className='bg-zinc-700 p-6 rounded-lg shadow-lg relative transition-transform hover:scale-[1.01]'>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-xl font-bold text-white'>{post.title}</h3>
                <button
                  onClick={() => togglePostFeatures(post._id)}
                  className='p-2 rounded-full hover:bg-zinc-600'>
                  <EllipsisVertical color='white' />
                </button>
              </div>
              <p className='text-gray-300'>{post.description}</p>
              <p className='text-gray-400 mt-3'>
                Author:{" "}
                <span className='text-white font-semibold'>{post.author}</span>
              </p>
              <p className='text-gray-400'>
                Date:{" "}
                <span className='text-white'>{formatDate(post.createdAt)}</span>
              </p>

              {activePostId === post._id && (
                <PostFeatures
                  id={post._id}
                  title={post.title}
                  description={post.description}
                  author={post.author}
                  onDelete={handleDeletePost}
                />
              )}
            </div>
          ))}
        </div>

        <div className='text-center mt-10'>
          <Link
            to='/my_posts'
            className='bg-red-500 px-8 py-3 font-semibold text-white rounded-full hover:bg-red-700 transition-colors'>
            🔍 View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
