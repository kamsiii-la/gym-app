import { useState } from "react";
import '../css/Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="foods-logo">
                <h3>NoLimitsFitness</h3>
            </div>

            <button
                className="hamburger-menu"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>

            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                <li><a href="#programs" className="nav-link" onClick={() => setIsMenuOpen(false)}>Programs</a></li>
                <li><a href="#plans" className="nav-link" onClick={() => setIsMenuOpen(false)}>Plans</a></li>
                <li><a href="#contacts" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contacts</a></li>
                <li><a href="#testimonial" className="nav-link" onClick={() => setIsMenuOpen(false)}>Testimonial</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
