import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import MyNavbar from './components/navbar/MyNavbar';
import About from './components/about/About';
import Education from './components/education/Education';
import Review from './components/review/Review';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/study" element={<Education />} />
        <Route path= "/" element={<Home />} />
        <Route path= "/review" element={<Review />} />
      </Routes>
      <Footer />
      
    </div>
    </Router>
  );
}

export default App;
