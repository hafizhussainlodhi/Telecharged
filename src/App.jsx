import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageOne from './pages/pageOne';
import PageFour from './pages/PageFour';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import PageTwo from './pages/pageTwo';
import PageThree from './pages/pageThree';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Yahan aap apne routes define karenge */}
        <Route path="/" element={<PageOne />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagefour" element={<PageFour />} />
        <Route path="/pagethree" element={<PageThree />} />

       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;