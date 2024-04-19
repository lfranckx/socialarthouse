import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './routes/Homepage';
import ContactForm from './routes/ContactPage';
import BlogPosts from './components/BlogPosts';
import BlogPostItem from './routes/BlogPostItem';
import ThankYou from './routes/ThankYouPage';
import NotFoundPage from './components/NotFoundPage';
// import SideNav from './components/SideNav';
import PrivacyPolicy from './routes/PrivacyPolicy';


function App() {
  return (
    <>
      <div className="App">
          <Navbar />
          {/* <SideNav /> */}
          <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route exact path='/contact' element={<ContactForm/>} />
            <Route exact path='/thankyou' element={<ThankYou/>} />
            <Route exact path='/test'element={<BlogPosts/>} />
            <Route exact path='/:postId' element={<BlogPostItem/>} />
            <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route element={<NotFoundPage/>} />
          </Routes>
          <Footer />
      </div>
    </>
  );
}

export default App;