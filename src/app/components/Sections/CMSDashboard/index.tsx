'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductManager from '../../../cms/components/ProductManager';
import BannerManager from '../../../cms/components/BannerManager';

interface CMSDashboardProps {
  order: number;
  data: {
    content: {
      title: string;
      description: string;
    };
  };
}

const CMSDashboard = ({ order, data }: CMSDashboardProps) => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'banners', label: 'Banners', icon: '🖼️' },
    { id: 'products', label: 'Products', icon: '🛍️' },
    { id: 'categories', label: 'Categories', icon: '📁' },
    { id: 'locations', label: 'Locations', icon: '📍' },
    { id: 'awards', label: 'Awards', icon: '🏆' },
    { id: 'technology', label: 'Technology', icon: '🔬' },
    { id: 'content', label: 'Content', icon: '📝' },
  ];

  return (
    <section className={`cms-dashboard`}>
      <div className="cms-header">
        <h1>{data.content.title}</h1>
        <div className="cms-nav">
          <Link href="/en" className="cms-back-btn">
            ← Back to Website
          </Link>
        </div>
      </div>

      <div className="cms-layout">
        <nav className="cms-sidebar">
          <ul className="cms-menu">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`cms-menu-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <span className="cms-menu-icon">{item.icon}</span>
                  <span className="cms-menu-label">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="cms-content">
          {activeSection === 'dashboard' && (
            <div className="cms-dashboard-content">
              <h2>Welcome to TOTO CMS</h2>
              <p>{data.content.description}</p>
              <div className="cms-stats">
                <div className="cms-stat-card">
                  <h3>Products</h3>
                  <p>Manage product catalog</p>
                  <button onClick={() => setActiveSection('products')}>
                    Go to Products
                  </button>
                </div>
                <div className="cms-stat-card">
                  <h3>Banners</h3>
                  <p>Edit homepage banners</p>
                  <button onClick={() => setActiveSection('banners')}>
                    Go to Banners
                  </button>
                </div>
                <div className="cms-stat-card">
                  <h3>Categories</h3>
                  <p>Organize product categories</p>
                  <button onClick={() => setActiveSection('categories')}>
                    Go to Categories
                  </button>
                </div>
                <div className="cms-stat-card">
                  <h3>Locations</h3>
                  <p>Manage store locations</p>
                  <button onClick={() => setActiveSection('locations')}>
                    Go to Locations
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'banners' && <BannerManager />}
          {activeSection === 'products' && <ProductManager />}

          {activeSection === 'categories' && (
            <div className="cms-section">
              <h2>Category Management</h2>
              <p>Organize products into categories and subcategories</p>
              <div className="coming-soon">
                <h3>🚧 Coming Soon</h3>
                <p>Category management interface will be available soon.</p>
              </div>
            </div>
          )}

          {activeSection === 'locations' && (
            <div className="cms-section">
              <h2>Location Management</h2>
              <p>Manage store locations and contact information</p>
              <div className="coming-soon">
                <h3>🚧 Coming Soon</h3>
                <p>Location management interface will be available soon.</p>
              </div>
            </div>
          )}

          {activeSection === 'awards' && (
            <div className="cms-section">
              <h2>Award Management</h2>
              <p>Manage awards and recognition content</p>
              <div className="coming-soon">
                <h3>🚧 Coming Soon</h3>
                <p>Award management interface will be available soon.</p>
              </div>
            </div>
          )}

          {activeSection === 'technology' && (
            <div className="cms-section">
              <h2>Technology Management</h2>
              <p>Manage technology features and specifications</p>
              <div className="coming-soon">
                <h3>🚧 Coming Soon</h3>
                <p>Technology management interface will be available soon.</p>
              </div>
            </div>
          )}

          {activeSection === 'content' && (
            <div className="cms-section">
              <h2>Content Management</h2>
              <p>Edit general website content and pages</p>
              <div className="coming-soon">
                <h3>🚧 Coming Soon</h3>
                <p>Content management interface will be available soon.</p>
              </div>
            </div>
          )}
        </main>
      </div>

      <style jsx>{`
        .cms-dashboard {
          min-height: 100vh;
          background: #f5f5f5;
        }

        .cms-header {
          background: #fff;
          padding: 1rem 2rem;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cms-header h1 {
          margin: 0;
          color: #333;
        }

        .cms-back-btn {
          color: #007bff;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border: 1px solid #007bff;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .cms-back-btn:hover {
          background: #007bff;
          color: white;
        }

        .cms-layout {
          display: flex;
          min-height: calc(100vh - 80px);
        }

        .cms-sidebar {
          width: 250px;
          background: #fff;
          border-right: 1px solid #e0e0e0;
          padding: 1rem 0;
        }

        .cms-menu {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .cms-menu-item {
          width: 100%;
          padding: 1rem 1.5rem;
          border: none;
          background: none;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.2s;
        }

        .cms-menu-item:hover {
          background: #f8f9fa;
        }

        .cms-menu-item.active {
          background: #007bff;
          color: white;
        }

        .cms-menu-icon {
          font-size: 1.2rem;
        }

        .cms-content {
          flex: 1;
          padding: 2rem;
          background: #fff;
          margin: 1rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .cms-dashboard-content h2 {
          margin-bottom: 1rem;
          color: #333;
        }

        .cms-dashboard-content p {
          margin-bottom: 2rem;
          color: #666;
        }

        .cms-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .cms-stat-card {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }

        .cms-stat-card h3 {
          margin: 0 0 0.5rem 0;
          color: #333;
        }

        .cms-stat-card p {
          margin: 0 0 1rem 0;
          color: #666;
        }

        .cms-stat-card button {
          background: #007bff;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .cms-stat-card button:hover {
          background: #0056b3;
        }

        .cms-section h2 {
          margin-bottom: 1rem;
          color: #333;
        }

        .cms-section p {
          color: #666;
          margin-bottom: 2rem;
        }

        .coming-soon {
          text-align: center;
          padding: 3rem;
          background: #f8f9fa;
          border-radius: 8px;
          border: 2px dashed #dee2e6;
        }

        .coming-soon h3 {
          color: #6c757d;
          margin-bottom: 1rem;
        }

        .coming-soon p {
          color: #6c757d;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default CMSDashboard;
