import React, { useEffect, useRef } from "react";
import RecentPosts from "./RecentPosts";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Home: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    if (headingRef.current && paraRef.current && buttonRef.current) {
      tl.from(headingRef.current, { y: -40, opacity: 0 })
        .from(paraRef.current, { y: 20, opacity: 0 }, "-=0.5")
        .from(buttonRef.current, { y: 30, opacity: 0 }, "-=0.5");
    }
  }, []);

  return (
    <>
      <section className='text-white py-20 px-4 md:px-0'>
        <div className='container mx-auto text-center max-w-3xl'>
          <h1
            ref={headingRef}
            className='text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight'>
            Welcome to <span className='text-red-500'>My Blog</span>
          </h1>
          <p
            ref={paraRef}
            className='text-md md:text-xl text-gray-300 mb-6 leading-relaxed'>
            Discover articles, tips, and insights on various topics to inspire
            your next project or broaden your knowledge.
          </p>

          {/* ✅ Make sure the button is not hidden and ref is correct */}
          <div className='inline-block'>
            <Link
              to='/upload_post'
              ref={buttonRef}
              className='font-semibold px-8 py-3 rounded-full transition-all bg-red-500 hover:bg-red-700 text-lg shadow-md inline-block'>
              ✍️ Make a New Post
            </Link>
          </div>
        </div>
      </section>

      <section>
        <RecentPosts />
      </section>
    </>
  );
};

export default Home;
