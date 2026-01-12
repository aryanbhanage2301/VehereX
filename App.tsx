import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Compare from './pages/Compare';
import Brands from './pages/Brands';
import Accessories from './pages/Accessories';
import Guide from './pages/Guide';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import VehicleDetails from './pages/VehicleDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/vehicle/:id" element={<VehicleDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
