import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
    const plans = [
        {
            name: "Basic",
            price: "$0",
            desc: "Perfect for individuals tracking personal expenses.",
            features: [
                "Up to 2 connected accounts",
                "Basic expense categorization",
                "Standard reporting",
                "Community support"
            ],
            cta: "Get Started Free",
            isPopular: false
        },
        {
            name: "Pro",
            price: "$29",
            period: "/month",
            desc: "Ideal for freelancers and small businesses requiring analytics.",
            features: [
                "Up to 5 connected accounts",
                "Relational expense mapping",
                "Predictive spending insights",
                "Exportable PDF/CSV reports",
                "Priority email support"
            ],
            cta: "Start Free Trial",
            isPopular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            desc: "For growing teams needing advanced security and controls.",
            features: [
                "Unlimited connected accounts",
                "Custom dashboard views",
                "Multi-user roles & permissions",
                "API access",
                "24/7 dedicated support",
                "SOC-2 compliance & SSO"
            ],
            cta: "Contact Sales",
            isPopular: false
        }
    ];

    return (
        <div className="pricing-page">
            <header className="page-header container">
                <h1>Transparent Pricing, No Surprises</h1>
                <p className="text-xl text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    Choose the plan that fits your financial scale. Grow with confidence using TrackWise.
                </p>
            </header>

            <section className="section container">
                <div className="grid-3" style={{ alignItems: 'start' }}>
                    {plans.map((plan, idx) => (
                        <div key={idx} className="card relative" style={{
                            border: plan.isPopular ? '2px solid var(--color-accent)' : '1px solid var(--color-border)',
                            padding: '3rem 2rem', transform: plan.isPopular ? 'scale(1.05)' : 'none', zIndex: plan.isPopular ? 10 : 1
                        }}>
                            {plan.isPopular && (
                                <div style={{
                                    position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)',
                                    background: 'var(--color-accent)', color: 'var(--color-primary)', fontWeight: 'bold',
                                    padding: '0.25rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.875rem'
                                }}>
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-muted mb-6 h-12">{plan.desc}</p>
                            <div className="mb-6">
                                <span className="text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>{plan.price}</span>
                                {plan.period && <span className="text-muted">{plan.period}</span>}
                            </div>
                            <button className={`btn w-full mb-8 ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                                {plan.cta}
                            </button>
                            <ul className="flex-col gap-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex gap-3 text-muted">
                                        <Check color="var(--color-accent)" size={20} style={{ minWidth: '20px' }} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feature Comparison Table Snippet */}
            <section className="section bg-surface container" style={{ textAlign: 'center' }}>
                <h2 className="text-3xl font-bold mb-8">Compare Plan Features</h2>
                <div className="table-wrapper text-left inline-block w-full">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature Breakdown</th>
                                <th>Basic</th>
                                <th>Pro</th>
                                <th>Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-medium">Relational Mapping</td>
                                <td>—</td>
                                <td><Check color="var(--color-accent)" size={20} /></td>
                                <td><Check color="var(--color-accent)" size={20} /></td>
                            </tr>
                            <tr>
                                <td className="font-medium">Pattern Detection AI</td>
                                <td>—</td>
                                <td><Check color="var(--color-accent)" size={20} /></td>
                                <td><Check color="var(--color-accent)" size={20} /></td>
                            </tr>
                            <tr>
                                <td className="font-medium">Data Export History</td>
                                <td>3 months</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td className="font-medium">API Access</td>
                                <td>—</td>
                                <td>—</td>
                                <td><Check color="var(--color-accent)" size={20} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
