import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Animate menu slide-in/out
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <nav className='bg-zinc-800 px-6 py-4 relative z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-white text-3xl font-bold tracking-tight'>
          BlogApp
        </Link>

        {/* Desktop Nav */}
        <ul className='hidden md:flex space-x-8'>
          <li>
            <Link
              to='/home/123'
              className='text-white text-lg hover:text-red-400'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='text-white text-lg hover:text-red-400'>
              About
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className='text-white text-lg hover:text-red-400'>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to='/my_posts'
              className='text-white text-lg hover:text-red-400'>
              My Posts
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle Icon */}
        <div
          ref={iconRef}
          className='md:hidden text-white z-[60] cursor-pointer'
          onClick={toggleMenu}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className='fixed top-0 right-0 h-full w-3/4 bg-zinc-900 md:hidden z-50 px-6 pt-24'
        style={{ display: menuOpen ? "block" : "none" }}>
        <ul className='flex flex-col space-y-6'>
          <li>
            <Link
              to='/home/123'
              onClick={toggleMenu}
              className='text-white text-xl hover:text-red-400'>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              onClick={toggleMenu}
              className='text-white text-xl hover:text-red-400'>
              About
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              onClick={toggleMenu}
              className='text-white text-xl hover:text-red-400'>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to='/my_posts'
              onClick={toggleMenu}
              className='text-white text-xl hover:text-red-400'>
              My Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
