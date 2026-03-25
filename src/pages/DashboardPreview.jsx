import React from 'react';
import {
    BarChart2, PieChart, Activity, DollarSign,
    TrendingDown, ShoppingBag, Settings, Menu, Home
} from 'lucide-react';

export default function DashboardPreview() {
    return (
        <div className="dashboard-layout">
            {/* Sidebar */}
            <aside className="dashboard-sidebar">
                <div className="logo mb-8" style={{ color: 'white' }}>
                    <Activity className="logo-icon" size={28} />
                    TrackWise
                </div>
                <nav className="sidebar-nav">
                    <a href="#" className="sidebar-link active"><Home size={20} /> Overview</a>
                    <a href="#" className="sidebar-link"><DollarSign size={20} /> Expenses</a>
                    <a href="#" className="sidebar-link"><ShoppingBag size={20} /> Categories</a>
                    <a href="#" className="sidebar-link"><BarChart2 size={20} /> Analytics</a>
                    <a href="#" className="sidebar-link"><PieChart size={20} /> Reports</a>
                    <a href="#" className="sidebar-link" style={{ marginTop: 'auto' }}><Settings size={20} /> Settings</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>Overview Dashboard</h1>
                        <p className="text-muted">Welcome back. Here's your financial summary for October 2026.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="btn btn-secondary text-sm">Download Report</button>
                        <div style={{ width: 40, height: 40, background: 'var(--color-primary)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>JD</div>
                    </div>
                </header>

                {/* Top Summary Cards */}
                <div className="grid-4 mb-8">
                    <div className="stat-card">
                        <div className="stat-info">
                            <h3>Total Expenses</h3>
                            <p>$12,450.00</p>
                        </div>
                        <div className="stat-icon bg-red-100 text-red-500" style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--color-danger)' }}>
                            <DollarSign size={24} />
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-info">
                            <h3>Monthly Spending</h3>
                            <p>$4,120.50</p>
                        </div>
                        <div className="stat-icon bg-blue-100 text-blue-500" style={{ background: 'rgba(44, 74, 107, 0.1)', color: 'var(--color-primary-light)' }}>
                            <TrendingDown size={24} />
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-info">
                            <h3>Top Category</h3>
                            <p>Software SaaS</p>
                        </div>
                        <div className="stat-icon bg-purple-100 text-purple-500" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7' }}>
                            <ShoppingBag size={24} />
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-info">
                            <h3>Savings Percentage</h3>
                            <p>24.5%</p>
                        </div>
                        <div className="stat-icon" style={{ background: 'rgba(0, 210, 133, 0.1)', color: 'var(--color-accent)' }}>
                            <Activity size={24} />
                        </div>
                    </div>
                </div>

                {/* Graph & Layout Split */}
                <div className="grid-2 gap-8 mb-8">
                    <div className="card" style={{ minHeight: '350px' }}>
                        <h3 className="font-bold mb-6">Monthly Spending Trends</h3>
                        <div className="flex items-end gap-2 h-48 mt-8 border-b border-l border-gray-200 pb-2 pl-2" style={{ borderColor: 'var(--color-border)' }}>
                            {/* Mock Bar Chart */}
                            {[40, 60, 30, 80, 50, 90, 70, 45, 65, 85, 55, 75].map((h, i) => (
                                <div key={i} style={{ flex: 1, backgroundColor: 'var(--color-primary)', height: `${h}%`, borderRadius: '4px 4px 0 0', opacity: i === 11 ? 1 : 0.6 }}></div>
                            ))}
                        </div>
                        <div className="flex justify-between text-xs text-muted mt-2 px-2">
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                        </div>
                    </div>

                    <div className="card" style={{ minHeight: '350px' }}>
                        <h3 className="font-bold mb-6">Spend by Category</h3>
                        <div className="flex justify-center items-center h-48 mt-8 relative">
                            {/* Mock Donut Chart via CSS borders */}
                            <div style={{
                                width: '180px', height: '180px', borderRadius: '50%',
                                background: 'conic-gradient(var(--color-primary) 0% 35%, var(--color-accent) 35% 65%, #a855f7 65% 85%, #f59e0b 85% 100%)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <div style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%' }}></div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 text-sm mt-6 flex-wrap">
                            <div className="flex items-center gap-2"><div style={{ width: 12, height: 12, background: 'var(--color-primary)', borderRadius: '50%' }}></div> Software</div>
                            <div className="flex items-center gap-2"><div style={{ width: 12, height: 12, background: 'var(--color-accent)', borderRadius: '50%' }}></div> Marketing</div>
                            <div className="flex items-center gap-2"><div style={{ width: 12, height: 12, background: '#a855f7', borderRadius: '50%' }}></div> Office</div>
                            <div className="flex items-center gap-2"><div style={{ width: 12, height: 12, background: '#f59e0b', borderRadius: '50%' }}></div> Travel</div>
                        </div>
                    </div>
                </div>

                {/* Transactions Table */}
                <div className="table-wrapper">
                    <div className="p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                        <h3 className="font-bold">Recent Transactions</h3>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Vendor</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { date: 'Oct 24, 2026', vendor: 'Amazon Web Services', category: 'Software SaaS', amount: '$420.50', status: 'Completed', color: 'bg-green-100 text-green-700' },
                                { date: 'Oct 23, 2026', vendor: 'Google Workspace', category: 'Software SaaS', amount: '$120.00', status: 'Completed', color: 'bg-green-100 text-green-700' },
                                { date: 'Oct 21, 2026', vendor: 'WeWork Office', category: 'Office Space', amount: '$1,200.00', status: 'Pending', color: 'bg-yellow-100 text-yellow-700' },
                                { date: 'Oct 19, 2026', vendor: 'Delta Airlines', category: 'Travel', amount: '$850.00', status: 'Completed', color: 'bg-green-100 text-green-700' },
                                { date: 'Oct 15, 2026', vendor: 'Facebook Ads', category: 'Marketing', amount: '$1,500.00', status: 'Completed', color: 'bg-green-100 text-green-700' }
                            ].map((tx, idx) => (
                                <tr key={idx}>
                                    <td className="text-muted">{tx.date}</td>
                                    <td className="font-medium">{tx.vendor}</td>
                                    <td className="text-muted">{tx.category}</td>
                                    <td className="font-bold">{tx.amount}</td>
                                    <td>
                                        <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: tx.status === 'Completed' ? 'rgba(0, 210, 133, 0.1)' : 'rgba(245, 158, 11, 0.1)', color: tx.status === 'Completed' ? 'var(--color-accent-hover)' : 'var(--color-warning)' }}>
                                            {tx.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
