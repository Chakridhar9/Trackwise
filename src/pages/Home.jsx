import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, PieChart, TrendingUp, Layers, CheckCircle2, Shield, Activity } from 'lucide-react';

export default function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero section text-center" style={{ background: 'linear-gradient(180deg, var(--color-bg-surface) 0%, var(--color-bg-main) 100%)' }}>
                <div className="container">
                    <h1 className="text-5xl font-bold mb-6" style={{ maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
                        Track Smarter. Analyze Better. <span style={{ color: 'var(--color-accent)' }}>Grow Financially.</span>
                    </h1>
                    <p className="text-xl text-muted mb-8" style={{ maxWidth: '700px', margin: '0 auto 2rem auto' }}>
                        TrackWise transforms your raw expense data into meaningful financial insights using intelligent relational analytics.
                    </p>
                    <div className="flex justify-center gap-4 mb-12">
                        <Link to="/signup" className="btn btn-primary text-lg">
                            Get Started <ArrowRight size={20} className="ml-2" style={{ marginLeft: '0.5rem' }} />
                        </Link>
                        <Link to="/dashboard" className="btn btn-secondary text-lg">
                            View Demo
                        </Link>
                    </div>

                    {/* Dashboard Illustration Abstract */}
                    <div className="hero-illustration" style={{
                        background: 'var(--color-bg-surface)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-lg)',
                        padding: '2rem',
                        border: '1px solid var(--color-border)',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        position: 'relative'
                    }}>
                        <div className="flex justify-between items-center mb-6 border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
                            <div className="flex gap-2">
                                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }}></div>
                                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }}></div>
                                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }}></div>
                            </div>
                            <div className="text-muted font-medium">TrackWise Summary</div>
                        </div>
                        <div className="grid-3" style={{ textAlign: 'left' }}>
                            <div className="card" style={{ boxShadow: 'none', background: 'var(--color-bg-main)' }}>
                                <h4 className="text-muted mb-2">Total Expenses</h4>
                                <div className="text-4xl font-bold">$12,450</div>
                                <div className="text-sm mt-2" style={{ color: 'var(--color-danger)' }}>↑ 12% vs last month</div>
                            </div>
                            <div className="card" style={{ boxShadow: 'none', background: 'var(--color-bg-main)' }}>
                                <h4 className="text-muted mb-2">Savings Rate</h4>
                                <div className="text-4xl font-bold">24%</div>
                                <div className="text-sm mt-2" style={{ color: 'var(--color-accent)' }}>↑ 5% vs last month</div>
                            </div>
                            <div className="card" style={{ boxShadow: 'none', background: 'var(--color-bg-main)' }}>
                                <h4 className="text-muted mb-2">Active Categories</h4>
                                <div className="text-4xl font-bold">18</div>
                                <div className="text-sm mt-2 text-muted">Across 3 accounts</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="features section container" id="features">
                <h2 className="text-4xl font-bold text-center mb-4">Intelligent Expense Management</h2>
                <p className="text-xl text-center text-muted mb-12">Designed to bring clarity to your financial ecosystem.</p>

                <div className="grid-3">
                    {[
                        { icon: <Layers />, title: "Relational Analytics Engine", desc: "Connect transactions across multiple accounts and uncover hidden spending patterns." },
                        { icon: <Activity />, title: "Smart Expense Tracking", desc: "Automated categorization and real-time syncing for up-to-date accurate records." },
                        { icon: <BarChart2 />, title: "Interactive Dashboards", desc: "Visualize your financial health with customizable, dynamic charts and dashboards." },
                        { icon: <PieChart />, title: "Category & Vendor Insights", desc: "Deep dive into where your money goes with powerful categorical breakdowns." },
                        { icon: <TrendingUp />, title: "Real-Time Reports", desc: "Generate actionable financial reports instantly for business accounting or personal use." },
                        { icon: <Shield />, title: "Secure Data Management", desc: "Bank-level encryption ensures your financial data stays private and secure always." },
                    ].map((feature, idx) => (
                        <div key={idx} className="card">
                            <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
                                {React.cloneElement(feature.icon, { size: 36 })}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works section" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-light)' }}>
                <div className="container">
                    <h2 className="text-4xl font-bold text-center mb-12 text-light" style={{ color: 'white' }}>How TrackWise Works</h2>

                    <div className="grid-4 text-center relative">
                        {/* Steps */}
                        {[
                            { num: 1, title: "Add your expenses", desc: "Sync bank accounts or manually import data easily." },
                            { num: 2, title: "Categorize data", desc: "Our relational engine tags and connects your transactions." },
                            { num: 3, title: "Visualize insights", desc: "See your spending vividly through dynamic interactive charts." },
                            { num: 4, title: "Optimize spending", desc: "Take control with actionable recommendations." },
                        ].map((step, idx) => (
                            <div key={idx} className="flex-col items-center">
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-accent)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold',
                                    color: 'var(--color-primary)', marginBottom: '1.5rem', zIndex: 2, position: 'relative'
                                }}>
                                    {step.num}
                                </div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: 'white' }}>{step.title}</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Analytics Preview Section */}
            <section className="analytics-preview section container">
                <div className="flex items-center gap-12" style={{ flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <h2 className="text-4xl font-bold mb-6">See the complete picture</h2>
                        <p className="text-xl text-muted mb-6">
                            Stop looking at spreadsheets. Start exploring your data visually to understand your financial behavior deeply.
                        </p>
                        <ul className="flex-col gap-4">
                            {['Expense trends over time', 'Category breakdown pie chart', 'Vendor comparison graph', 'Monthly budget vs actual'].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg text-muted">
                                    <CheckCircle2 color="var(--color-accent)" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/features" className="btn btn-secondary mt-8">Explore All Features</Link>
                    </div>
                    <div style={{ flex: '1 1 500px' }}>
                        <div className="card flex items-center justify-center p-8" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', minHeight: '400px' }}>
                            <div className="text-center">
                                <BarChart2 size={80} color="var(--color-primary)" opacity={0.2} style={{ margin: '0 auto 1rem auto' }} />
                                <p className="font-medium text-muted">Interactive Analytics Dashboard Preview</p>
                                <p className="text-sm text-muted mt-2">Available in Demo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials section" style={{ background: 'var(--color-bg-surface)' }}>
                <div className="container">
                    <h2 className="text-4xl font-bold text-center mb-12">Trusted by Professionals</h2>
                    <div className="grid-3">
                        {[
                            { quote: "TrackWise transformed how I visualize my company's burn rate. The relational mapping is a game structural element for understanding cash flow.", author: "Sarah Jenkins", role: "Small Business Owner" },
                            { quote: "As an independent contractor, separating personal and professional expenses used to be a nightmare. Now it's completely automated.", author: "Mark DaSilva", role: "Freelancer" },
                            { quote: "I finally understand where my monthly budget is going. The category breakdown is visually stunning and incredibly accurate.", author: "Emily Chen", role: "Student" },
                        ].map((t, idx) => (
                            <div key={idx} className="card">
                                <div className="flex gap-2 mb-4" style={{ color: '#f59e0b' }}>
                                    {'★★★★★'}
                                </div>
                                <p className="italic text-muted mb-6">"{t.quote}"</p>
                                <div>
                                    <h4 className="font-bold">{t.author}</h4>
                                    <p className="text-sm text-muted">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta section text-center container" style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
                borderRadius: 'var(--radius-lg)', margin: '4rem auto', color: 'white', padding: '5rem 2rem'
            }}>
                <h2 className="text-4xl font-bold mb-6" style={{ color: 'white' }}>Take Control of Your Financial Data Today.</h2>
                <p className="text-xl mb-8" style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                    Join thousands of professionals already optimizing their financial health with TrackWise.
                </p>
                <Link to="/signup" className="btn btn-primary text-xl px-8 py-4">Start 14-Day Free Trial</Link>
            </section>
        </div>
    );
}
