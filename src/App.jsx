
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Pilars from './components/Pilars/Pilars';
import Products from './components/Products/Products';
import Partners from './components/Partners/Partners';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  

  return (
      <BrowserRouter>
        <Navbar />
        <Header />
        <About />
        <Pilars />
        <Products />
        <Partners />
        <Contact />
        <Footer />
      </BrowserRouter>
  )
}

export default App
