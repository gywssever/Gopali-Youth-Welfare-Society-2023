import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/navbar/Navbar';
import Home from './Components/Homepage/Home';
import Media from './Components/Media/Media';
import ScrollToTop from './Components/scrollToTop/scrollToTop';
import Member from './Components/Member/Members';
import Footer from './Components/Footer/footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/member" element={<Member />} />
      </Routes>
      <ScrollToTop />
      <Footer />
      {/* <MemberNav/> */}
    </>
  );
}