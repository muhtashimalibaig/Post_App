import { Pencil, Trash } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export interface PostFeatureProp {
  id: string;
  title: string;
  description: string;
  author: string;
  onDelete: (id: string) => void; // Accept the delete function as a prop
}

const PostFeatures: React.FC<PostFeatureProp> = ({ id, title, description, author, onDelete }) => {
  const handleDelete = async () => {
    try {
      await onDelete(id); // Call the onDelete function passed as a prop to handle deletion
    } catch (error) {
      console.error('Error during deletion:', error);
      alert('Failed to delete post');
    }
  };

  return (
    <div
      className="absolute bg-zinc-200 w-32 p-2 rounded-md"
      style={{
        top: '35%',
        right: '10px',
        boxShadow: '-5px 5px 30px 0px #000'
      }}
    >
      <Link
        to={`/update_posts/${id}`}
        state={{ title, description, author }}
        className="flex items-center gap-2 hover:text-green-500 transition-all mb-3"
      >
        <Pencil color="darkGreen" />
        <span className="text-sm font-semibold">Edit</span>
      </Link>
      <button onClick={handleDelete} className="flex items-center gap-2 hover:text-red-500 transition-all">
        <Trash color="red" />
        <span className="text-sm font-semibold">Delete</span>
      </button>
    </div>
  );
};

export default PostFeatures;
