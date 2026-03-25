import React from 'react';
import { Network, Database, Lock, Eye, Download, Layers } from 'lucide-react';

export default function Features() {
    const featureList = [
        {
            title: "Relational Expense Mapping",
            desc: "Unlike traditional expense trackers that list transactions individually, TrackWise visually maps relationships between your expenses, vendors, and business categories.",
            icon: <Network size={48} color="var(--color-accent)" />
        },
        {
            title: "Pattern Detection",
            desc: "Our AI-driven analytics automatically scan your spending behavior to detect hidden recurring charges, subscription price hikes, and seasonal spend patterns.",
            icon: <Eye size={48} color="var(--color-primary)" />
        },
        {
            title: "Predictive Spending Insights",
            desc: "Forecast your future expenses based on historical data. TrackWise anticipates your budget needs so you are never caught off guard.",
            icon: <Layers size={48} color="var(--color-accent)" />
        },
        {
            title: "Multi-Account Management",
            desc: "Link multiple bank accounts, credit cards, and digital wallets. View your entire financial ecosystem in one unified, clean dashboard.",
            icon: <Database size={48} color="var(--color-primary)" />
        },
        {
            title: "Exportable Reports",
            desc: "Download investor-ready CSV and PDF reports with one click. Perfect for tax season, business meetings, or personal archiving.",
            icon: <Download size={48} color="var(--color-accent)" />
        },
        {
            title: "Data Security & Privacy",
            desc: "We prioritize your privacy above all else. With SOC-2 compliance, AES-256 encryption, and read-only bank connections, your data is locked down.",
            icon: <Lock size={48} color="var(--color-primary)" />
        }
    ];

    return (
        <div className="features-page">
            <header className="page-header container">
                <h1>Platform Features</h1>
                <p className="text-xl text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    Discover the powerful tools underneath the hood of TrackWise. Engineered for accuracy, speed, and actionable insights.
                </p>
            </header>

            <section className="section container">
                <div className="grid-2">
                    {featureList.map((feature, idx) => (
                        <div key={idx} className="card flex gap-6 items-start" style={{ textAlign: 'left' }}>
                            <div style={{ padding: '1.5rem', background: 'var(--color-bg-main)', borderRadius: 'var(--radius-md)' }}>
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted text-lg leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Infographics Section */}
            <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
                <div className="container text-center">
                    <h2 className="text-4xl font-bold mb-12" style={{ color: 'white' }}>Visualize the Relational Difference</h2>
                    <div className="grid-2" style={{ background: 'var(--color-bg-surface)', padding: '3rem', borderRadius: 'var(--radius-md)' }}>
                        <div>
                            <h4 className="text-xl font-bold mb-4 text-primary" style={{ color: 'var(--color-primary)' }}>Traditional Tracking</h4>
                            <ul className="text-muted text-left flex-col gap-2" style={{ listStyle: 'disc', paddingLeft: '2rem' }}>
                                <li>Linear lists of transactions.</li>
                                <li>Manual categorization.</li>
                                <li>Hard to see the bigger picture.</li>
                                <li>No vendor connection mapping.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-4 text-primary" style={{ color: 'var(--color-primary)' }}>TrackWise Relational</h4>
                            <ul className="text-muted text-left flex-col gap-2" style={{ listStyle: 'disc', paddingLeft: '2rem' }}>
                                <li>Interactive visual nodes linking vendors.</li>
                                <li>Automated intelligent tagging.</li>
                                <li>Holistic view of your financial health.</li>
                                <li>Cross-account spend correlation.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
