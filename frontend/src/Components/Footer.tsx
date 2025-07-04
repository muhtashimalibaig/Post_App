import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-zinc-900 text-gray-200 py-10 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Top Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-gray-700 pb-10'>
          {/* About */}
          <div>
            <h4 className='text-xl font-bold text-white mb-4'>About Blog</h4>
            <p className='text-sm leading-relaxed text-gray-400'>
              A platform to share knowledge, insights, and inspiration on web
              development, design, and technology. Join our community and start
              your blogging journey today!
            </p>
          </div>

          {/* Quick Links */}
          <div className='sm:mx-auto'>
            <h4 className='text-xl font-bold text-white mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='/' className='hover:text-blue-400 transition-colors'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/about'
                  className='hover:text-blue-400 transition-colors'>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='hover:text-blue-400 transition-colors'>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='/privacy'
                  className='hover:text-blue-400 transition-colors'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className='text-xl font-bold text-white mb-4'>Follow Us</h4>
            <div className='flex items-center space-x-4'>
              <a
                href='#'
                aria-label='Facebook'
                className='p-2 border border-gray-500 rounded-full hover:bg-blue-600 transition-colors'>
                <Facebook size={20} />
              </a>
              <a
                href='#'
                aria-label='Twitter'
                className='p-2 border border-gray-500 rounded-full hover:bg-sky-500 transition-colors'>
                <Twitter size={20} />
              </a>
              <a
                href='#'
                aria-label='Instagram'
                className='p-2 border border-gray-500 rounded-full hover:bg-pink-500 transition-colors'>
                <Instagram size={20} />
              </a>
              <a
                href='#'
                aria-label='LinkedIn'
                className='p-2 border border-gray-500 rounded-full hover:bg-blue-900 transition-colors'>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='flex flex-col sm:flex-row justify-between items-center mt-6 text-xs text-gray-500 gap-2'>
          <p>&copy; 2024 Blog App. All rights reserved.</p>
          <a href='/terms' className='hover:text-blue-400 transition-colors'>
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
