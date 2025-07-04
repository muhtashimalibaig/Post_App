import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-zinc-600 rounded-lg shadow-md p-6">
        <h2 className="text-4xl font-bold text-gray-100 text-center">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-xl mb-1 font-medium text-gray-100">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-zinc-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xl mb-1 font-medium text-gray-100">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-zinc-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xl mb-1 font-medium text-gray-100">
              Message:
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-zinc-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
