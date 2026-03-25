import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
    return (
        <div className="about-page">
            <header className="page-header container">
                <h1>About TrackWise</h1>
                <p className="text-xl text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    A next-generation financial analytics platform designed for individuals and businesses who want more from their financial data.
                </p>
            </header>

            <section className="section container">
                <div className="grid-2 align-center gap-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                        <p className="text-lg text-muted mb-4 leading-relaxed">
                            TrackWise began with a simple observation: modern businesses and individuals generate thousands of financial transactions, but the tools used to understand them are stuck in the past. Spreadsheets and rigid list views fail to tell the story behind the data.
                        </p>
                        <p className="text-lg text-muted leading-relaxed">
                            We decided to build an analytics engine focused on <strong style={{ color: 'var(--color-primary)' }}>intelligent data relationships</strong>. By mapping vendors, categories, and accounts conceptually, we provide insights that traditional linear trackers physically simply cannot see.
                        </p>
                    </div>
                    <div className="card text-center" style={{ background: 'var(--color-primary)', color: 'white', padding: '4rem 2rem' }}>
                        <div className="text-6xl font-bold mb-4" style={{ color: 'var(--color-accent)' }}>$5B+</div>
                        <p className="text-xl" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Transactions Analyzed</p>
                        <div className="text-6xl font-bold mt-8 mb-4" style={{ color: 'var(--color-accent)' }}>50k+</div>
                        <p className="text-xl" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Active Users</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--color-bg-surface)' }}>
                <div className="container text-center">
                    <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
                    <div className="grid-3">
                        <div className="card flex-col items-center">
                            <Target size={48} color="var(--color-accent)" className="mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                            <p className="text-muted">To democratize enterprise-grade financial analytics, giving everyone the clarity they need to make profound financial decisions.</p>
                        </div>
                        <div className="card flex-col items-center">
                            <Eye size={48} color="var(--color-primary)" className="mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                            <p className="text-muted">A world where financial data works for you, automatically predicting needs and optimizing your spending ecosystem in real-time.</p>
                        </div>
                        <div className="card flex-col items-center">
                            <Heart size={48} color="var(--color-error)" className="mb-4" style={{ color: '#ef4444' }} />
                            <h3 className="text-2xl font-bold mb-3">Our Values</h3>
                            <p className="text-muted">Transparency, Data Privacy, Continuous Innovation, and placing our users' financial well-being above all metrics.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
