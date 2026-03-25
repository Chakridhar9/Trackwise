import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <Link to="/" className="logo mb-4" style={{ color: 'white' }}>
                            <Activity className="logo-icon" size={28} />
                            TrackWise
                        </Link>
                        <p className="text-sm mt-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            Relational Expense Analytics Platform. <br />
                            Track smarter, analyze better, grow financially.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="GitHub"><Github size={20} /></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Product</h4>
                        <ul>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/dashboard">Interactive Dashboards</Link></li>
                            <li><Link to="/pricing">Pricing Plans</Link></li>
                            <li><Link to="#">Integrations</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="#">Careers</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms of Service</Link></li>
                            <li><Link to="#">Security</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} TrackWise. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
