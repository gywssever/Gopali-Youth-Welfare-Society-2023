import './App.css';
import Navbar from './Components/navbar/Navbar';
import NavRoutes from './Routes';
import ScrollToTop from './Components/scrollToTop/scrollToTop';
import Footer from './Components/Footer/footer'

export default function App() {

  return (
    <>
      <Navbar />
      <NavRoutes />
      <ScrollToTop />
      <Footer />
    </>
  );
}