import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AchievementDetails from './pages/AchievementDetails';
import Product from './pages/Product';
import Solutions from './pages/Solutions';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar Section */}
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/achievements/:id" element={<AchievementDetails />} />

            {/* Solution-specific routes */}
            <Route path="/solutions/object-detection" element={<Solutions solution="object-detection" />} />
            <Route path="/solutions/security" element={<Solutions solution="security" />} />
            <Route path="/solutions/workforce" element={<Solutions solution="workforce" />} />
            <Route path="/solutions/vehicle" element={<Solutions solution="vehicle" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
