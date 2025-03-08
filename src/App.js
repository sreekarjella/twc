import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './home/Home';
import Header from './header/Header';
import Architecture from './pages/architecture/Architecture';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <title>TWC</title>
        </Helmet>
        {/* <Header /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <Home/>
      </div>
    </Router>
  );
}

export default App;
