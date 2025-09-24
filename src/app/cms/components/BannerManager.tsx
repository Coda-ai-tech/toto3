'use client';

import { useState, useEffect } from 'react';

interface Banner {
  id: string;
  title: string;
  description: string;
  image: {
    desktop: string;
    mobile: string;
  };
  link?: {
    type: string;
    href: string;
  };
  isActive: boolean;
  order: number;
}

const BannerManager = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await fetch('/api/cms/banners');
      const data = await response.json();
      setBanners(data);
    } catch (error) {
      console.error('Error fetching banners:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
    setShowForm(true);
  };

  const handleDelete = async (bannerId: string) => {
    if (confirm('Are you sure you want to delete this banner?')) {
      try {
        await fetch(`/api/cms/banners/${bannerId}`, {
          method: 'DELETE',
        });
        fetchBanners();
      } catch (error) {
        console.error('Error deleting banner:', error);
      }
    }
  };

  const handleSave = async (bannerData: Banner) => {
    try {
      const method = editingBanner ? 'PUT' : 'POST';
      const url = editingBanner 
        ? `/api/cms/banners/${editingBanner.id}`
        : '/api/cms/banners';

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bannerData),
      });

      setShowForm(false);
      setEditingBanner(null);
      fetchBanners();
    } catch (error) {
      console.error('Error saving banner:', error);
    }
  };

  const toggleActive = async (banner: Banner) => {
    const updatedBanner = { ...banner, isActive: !banner.isActive };
    await handleSave(updatedBanner);
  };

  if (loading) {
    return <div className="cms-loading">Loading banners...</div>;
  }

  return (
    <div className="banner-manager">
      <div className="banner-header">
        <h2>Banner Management</h2>
        <button 
          className="btn-primary"
          onClick={() => setShowForm(true)}
        >
          Add New Banner
        </button>
      </div>

      <div className="banner-list">
        {banners.map((banner) => (
          <div key={banner.id} className={`banner-card ${!banner.isActive ? 'inactive' : ''}`}>
            <div className="banner-preview">
              <img src={banner.image.desktop} alt={banner.title} />
            </div>
            <div className="banner-info">
              <h3>{banner.title}</h3>
              <p>{banner.description}</p>
              <div className="banner-meta">
                <span className={`status ${banner.isActive ? 'active' : 'inactive'}`}>
                  {banner.isActive ? 'Active' : 'Inactive'}
                </span>
                <span className="order">Order: {banner.order}</span>
              </div>
            </div>
            <div className="banner-actions">
              <button 
                className="btn-secondary"
                onClick={() => handleEdit(banner)}
              >
                Edit
              </button>
              <button 
                className={banner.isActive ? 'btn-warning' : 'btn-success'}
                onClick={() => toggleActive(banner)}
              >
                {banner.isActive ? 'Deactivate' : 'Activate'}
              </button>
              <button 
                className="btn-danger"
                onClick={() => handleDelete(banner.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <BannerForm
          banner={editingBanner}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingBanner(null);
          }}
        />
      )}

      <style jsx>{`
        .banner-manager {
          padding: 1rem;
        }

        .banner-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .btn-primary, .btn-secondary, .btn-danger, .btn-warning, .btn-success {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary {
          background: #007bff;
          color: white;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-danger {
          background: #dc3545;
          color: white;
        }

        .btn-warning {
          background: #ffc107;
          color: #212529;
        }

        .btn-success {
          background: #28a745;
          color: white;
        }

        .btn-primary:hover {
          background: #0056b3;
        }

        .btn-secondary:hover {
          background: #545b62;
        }

        .btn-danger:hover {
          background: #c82333;
        }

        .btn-warning:hover {
          background: #e0a800;
        }

        .btn-success:hover {
          background: #218838;
        }

        .banner-list {
          display: grid;
          gap: 1rem;
        }

        .banner-card {
          display: flex;
          background: #f8f9fa;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 1rem;
          gap: 1rem;
        }

        .banner-card.inactive {
          opacity: 0.6;
        }

        .banner-preview {
          width: 200px;
          height: 120px;
          flex-shrink: 0;
        }

        .banner-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }

        .banner-info {
          flex: 1;
        }

        .banner-info h3 {
          margin: 0 0 0.5rem 0;
          color: #333;
        }

        .banner-info p {
          color: #666;
          margin: 0 0 1rem 0;
        }

        .banner-meta {
          display: flex;
          gap: 1rem;
        }

        .status {
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.875rem;
          font-weight: bold;
        }

        .status.active {
          background: #d4edda;
          color: #155724;
        }

        .status.inactive {
          background: #f8d7da;
          color: #721c24;
        }

        .order {
          color: #666;
          font-size: 0.875rem;
        }

        .banner-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .cms-loading {
          text-align: center;
          padding: 2rem;
          color: #666;
        }
      `}</style>
    </div>
  );
};

const BannerForm = ({ banner, onSave, onCancel }: {
  banner: Banner | null;
  onSave: (banner: Banner) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState<Banner>({
    id: banner?.id || '',
    title: banner?.title || '',
    description: banner?.description || '',
    image: {
      desktop: banner?.image?.desktop || '',
      mobile: banner?.image?.mobile || '',
    },
    link: banner?.link || undefined,
    isActive: banner?.isActive ?? true,
    order: banner?.order || 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="banner-form-overlay">
      <div className="banner-form">
        <h3>{banner ? 'Edit Banner' : 'Add New Banner'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Banner ID:</label>
            <input
              type="text"
              value={formData.id}
              onChange={(e) => setFormData({...formData, id: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={3}
            />
          </div>

          <div className="form-group">
            <label>Desktop Image URL:</label>
            <input
              type="url"
              value={formData.image.desktop}
              onChange={(e) => setFormData({
                ...formData, 
                image: {...formData.image, desktop: e.target.value}
              })}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Image URL:</label>
            <input
              type="url"
              value={formData.image.mobile}
              onChange={(e) => setFormData({
                ...formData, 
                image: {...formData.image, mobile: e.target.value}
              })}
            />
          </div>

          <div className="form-group">
            <label>Link URL (optional):</label>
            <input
              type="url"
              value={formData.link?.href || ''}
              onChange={(e) => setFormData({
                ...formData, 
                link: e.target.value ? { type: 'routeLink', href: e.target.value } : undefined
              })}
            />
          </div>

          <div className="form-group">
            <label>Order:</label>
            <input
              type="number"
              value={formData.order}
              onChange={(e) => setFormData({...formData, order: parseInt(e.target.value) || 0})}
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
              />
              Active
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              {banner ? 'Update' : 'Create'} Banner
            </button>
            <button type="button" className="btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .banner-form-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .banner-form {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          width: 90%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default BannerManager;
