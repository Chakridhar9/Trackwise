import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity } from 'lucide-react';

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login by navigating directly to the dashboard
        navigate('/dashboard');
    };

    return (
        <div className="login-page flex justify-center items-center" style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: 'var(--color-bg-main)' }}>
            <div className="card" style={{ maxWidth: '400px', width: '100%', padding: '3rem 2rem', textAlign: 'center' }}>
                <Link to="/" className="logo justify-center mb-6">
                    <Activity className="logo-icon" size={32} />
                    TrackWise
                </Link>
                <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
                <p className="text-muted mb-8">Sign in to your TrackWise account.</p>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                    <div className="flex-col gap-2">
                        <label className="font-medium text-sm">Email Address</label>
                        <input type="email" required placeholder="name@company.com" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', width: '100%' }} />
                    </div>
                    <div className="flex-col gap-2">
                        <div className="flex justify-between">
                            <label className="font-medium text-sm">Password</label>
                            <a href="#" className="text-sm" style={{ color: 'var(--color-primary)' }}>Forgot password?</a>
                        </div>
                        <input type="password" required placeholder="••••••••" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', width: '100%' }} />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2" style={{ padding: '0.75rem', width: '100%' }}>Sign In</button>
                </form>

                <p className="text-muted mt-8 text-sm">
                    Don't have an account? <Link to="/signup" className="font-bold" style={{ color: 'var(--color-primary)' }}>Start Free Trial</Link>
                </p>
            </div>
        </div>
    );
}
