import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/navbar/Navbar';
import Home from './Components/Homepage/Home';
import Media from './Components/Media/Media';
import ScrollToTop from './Components/scrollToTop/scrollToTop';
import Member from './Components/Members/Member2023-24/Members.jsx';
import Footer from './Components/Footer/footer'
import Members2223 from './Components/Members/Members2022-23/Members.jsx'
import Members2122 from './Components/Members/Members2021-22/Members.jsx'
import Members2021 from './Components/Members/Members2020-21/Members.jsx'
import Members2020 from './Components/Members/Members2019-20/Members.jsx'
import Accordion from './Components/aboutUs/accordion/Accordion.jsx';
import About from './Components/aboutUs/About.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/member/*" element={<Member />} />
        <Route path="/member/members2022-23/*" element={<Members2223 />} />
        <Route path="/member/members2021-22/*" element={<Members2122 />} />
        <Route path="/member/members2020-21/*" element={<Members2021 />} />
        <Route path="/member/members2019-20/*" element={<Members2020 />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1 style={{height: "100vh"}} >404: Page Not Found</h1>} /> 
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}