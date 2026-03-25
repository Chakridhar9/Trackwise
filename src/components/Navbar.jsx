import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Features', path: '/features' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar container">
            <div className="nav-content">
                <Link to="/" className="logo">
                    <Activity className="logo-icon" size={28} />
                    TrackWise
                </Link>
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="flex gap-4 items-center">
                    <Link to="/login" className="btn btn-secondary text-sm">Log In</Link>
                    <Link to="/signup" className="btn btn-primary text-sm">Get Started</Link>
                </div>
            </div>
        </nav>
    );
}
