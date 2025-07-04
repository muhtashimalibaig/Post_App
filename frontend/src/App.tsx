import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Upload from "./Components/Upload";
import GetAllPosts from "./Components/GetAllPosts";
import UpdatdPosts from "./Components/UpdatdPosts";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='upload_post' element={<Upload />} />
            <Route path='my_posts' element={<GetAllPosts />} />
            <Route path='update_posts/:id' element={<UpdatdPosts />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
