
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  

  return (
      <BrowserRouter>
        <Navbar />
        <Header />
      </BrowserRouter>
  )
}

export default App
