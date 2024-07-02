import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div>
              <NavLink className="navbar-brand" to="/">Rosanna Quingco</NavLink>
              <br />
              <span className="navbar-text">
                Web Designer
              </span>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects" activeClassName="active">Projects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/experience" activeClassName="active">Experience</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.instagram.com/invites/contact/?igsh=1jyu4w79ole8p&utm_content=uxq19cb" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.facebook.com/angelrose.quingco?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.tiktok.com/@quingcoghel/video/7378017845361560837?_r=1&_t=8nWdhIZySHZ" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/rosanna1998" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
