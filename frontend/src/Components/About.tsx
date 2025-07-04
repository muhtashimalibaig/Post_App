import React from 'react';
import Blog from '../assets/blog.jfif'
const About: React.FC = () => {
  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* About Image */}
          <div className="text-center md:text-left">
            <img
              src={Blog}
              alt="About Us"
              className="rounded-lg shadow-lg mx-auto md:mx-0"
            />
          </div>
          {/* About Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">About Our Blog</h2>
            <p className="text-lg leading-relaxed mb-6 text-zinc-300">
              Welcome to our blog! We share insightful articles, expert tips, and engaging stories on a variety of topics. 
              Our goal is to inspire, inform, and entertain readers like you. Whether you're here to learn something new 
              or simply enjoy a great read, you've come to the right place.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-zinc-300">
              We believe in creating a community of curious minds, so feel free to share your thoughts and ideas with us. 
              Together, let's explore the world of knowledge and creativity.
            </p>
            <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
