import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, MessageSquare } from 'lucide-react';

export default function Contact() {
    return (
        <div className="contact-page">
            <header className="page-header container">
                <h1>Get in Touch</h1>
                <p className="text-xl text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    Have questions about our analytics engine, pricing, or implementations? We're here to help.
                </p>
            </header>

            <section className="section container">
                <div className="grid-2 align-start gap-12">
                    {/* Contact Details & Socials */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                        <div className="flex-col gap-6 text-muted mb-12">
                            <div className="flex items-center gap-4">
                                <div style={{ background: 'var(--color-bg-surface)', padding: '1rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)' }}>
                                    <Mail color="var(--color-primary)" />
                                </div>
                                <div>
                                    <p className="font-bold text-main" style={{ color: 'var(--color-primary)' }}>Email Support</p>
                                    <p>support@trackwise.io</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div style={{ background: 'var(--color-bg-surface)', padding: '1rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)' }}>
                                    <Phone color="var(--color-primary)" />
                                </div>
                                <div>
                                    <p className="font-bold text-main" style={{ color: 'var(--color-primary)' }}>Phone</p>
                                    <p>+1 (800) 555-0199</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div style={{ background: 'var(--color-bg-surface)', padding: '1rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)' }}>
                                    <MapPin color="var(--color-primary)" />
                                </div>
                                <div>
                                    <p className="font-bold text-main" style={{ color: 'var(--color-primary)' }}>Office Locations</p>
                                    <p>New York, San Francisco, London</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-4">Connect with us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="flex justify-center items-center" style={{ width: 48, height: 48, background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                                <Twitter />
                            </a>
                            <a href="#" className="flex justify-center items-center" style={{ width: 48, height: 48, background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                                <Linkedin />
                            </a>
                            <a href="#" className="flex justify-center items-center" style={{ width: 48, height: 48, background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                                <MessageSquare />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card" style={{ padding: '3rem' }}>
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="flex-col gap-2">
                                <label className="font-medium">Full Name</label>
                                <input type="text" placeholder="Jane Doe" style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg-main)' }} />
                            </div>
                            <div className="flex-col gap-2">
                                <label className="font-medium">Email Address</label>
                                <input type="email" placeholder="jane@company.com" style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg-main)' }} />
                            </div>
                            <div className="flex-col gap-2">
                                <label className="font-medium">Message Details</label>
                                <textarea rows="5" placeholder="How can we help?" style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg-main)', resize: 'vertical' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary text-lg" style={{ padding: '1rem', width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section bg-surface text-center container">
                <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
                <div className="grid-2 text-left gap-8">
                    {[
                        { q: "How secure is my connected bank data?", a: "TrackWise is SOC-2 compliant and uses banking-grade 256-bit encryption. We have read-only access to your transactions and never store your credentials." },
                        { q: "What does 'Relational Exporting' mean?", a: "Instead of just lists, we show you the connections between your vendors and categories so you can spot cross-platform spending behaviors." },
                        { q: "Can I cancel my Free Trial at any time?", a: "Absolutely. Zero commitment required. You can export all your generated data before closing your account completely free." },
                        { q: "Does TrackWise integrate with accounting software?", a: "Yes, our exported reports are designed to drop directly into QuickBooks, Xero, and other major accounting tools without manual formatting." }
                    ].map((faq, i) => (
                        <div key={i} className="card">
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><div style={{ width: 8, height: 8, background: 'var(--color-accent)', borderRadius: '50%' }}></div> {faq.q}</h4>
                            <p className="text-muted">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
