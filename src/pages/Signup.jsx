import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity } from 'lucide-react';

export default function Signup() {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Simulate successful signup and navigate to dashboard
        navigate('/dashboard');
    };

    return (
        <div className="signup-page flex justify-center items-center" style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: 'var(--color-bg-main)' }}>
            <div className="card" style={{ maxWidth: '400px', width: '100%', padding: '3rem 2rem', textAlign: 'center' }}>
                <Link to="/" className="logo justify-center mb-6">
                    <Activity className="logo-icon" size={32} />
                    TrackWise
                </Link>
                <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
                <p className="text-muted mb-8">Start your free 14-day trial today.</p>

                <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                    <div className="flex-col gap-2">
                        <label className="font-medium text-sm">Full Name</label>
                        <input type="text" required placeholder="Jane Doe" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', width: '100%' }} />
                    </div>
                    <div className="flex-col gap-2">
                        <label className="font-medium text-sm">Email Address</label>
                        <input type="email" required placeholder="name@company.com" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', width: '100%' }} />
                    </div>
                    <div className="flex-col gap-2">
                        <label className="font-medium text-sm">Password</label>
                        <input type="password" required placeholder="••••••••" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', width: '100%' }} />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2" style={{ padding: '0.75rem', width: '100%' }}>Create Account</button>
                </form>

                <p className="text-muted mt-6 text-sm">
                    By signing up, you agree to our <a href="#" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Terms of Service</a> and <a href="#" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Privacy Policy</a>.
                </p>
                <p className="text-muted mt-8 text-sm">
                    Already have an account? <Link to="/login" className="font-bold" style={{ color: 'var(--color-primary)' }}>Log In</Link>
                </p>
            </div>
        </div>
    );
}
