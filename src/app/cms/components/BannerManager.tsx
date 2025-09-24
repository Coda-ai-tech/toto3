'use client';

import { useState, useEffect } from 'react';

interface Banner {
  id: string;
  title: string;
  description: string;
  image_url: string;
  link_url: string;
  link_type: string;
  is_active: boolean;
  sort_order: number;
  start_date?: string;
  end_date?: string;
  created_at: string;
  updated_at: string;
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
      setBanners(data || []);
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
          <div key={banner.id} className="banner-card">
            <div className="banner-image">
              {banner.image_url && (
                <img src={banner.image_url} alt={banner.title} />
              )}
            </div>
            <div className="banner-info">
              <h3>{banner.title}</h3>
              <p className="banner-description">{banner.description}</p>
              <p className="banner-link">Link: {banner.link_url || 'No link'}</p>
              <span className={`status ${banner.is_active ? 'active' : 'inactive'}`}>
                {banner.is_active ? 'Active' : 'Inactive'}
              </span>
            </div>
            <div className="banner-actions">
              <button 
                className="btn-secondary"
                onClick={() => handleEdit(banner)}
              >
                Edit
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

      {banners.length === 0 && (
        <div className="no-banners">
          <h3>No banners found</h3>
          <p>Create your first banner to get started.</p>
        </div>
      )}

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

        .banner-header h2 {
          margin: 0;
          color: #333;
        }

        .btn-primary, .btn-secondary, .btn-danger {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s;
          font-weight: 500;
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

        .btn-primary:hover {
          background: #0056b3;
        }

        .btn-secondary:hover {
          background: #545b62;
        }

        .btn-danger:hover {
          background: #c82333;
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

        .banner-image {
          width: 120px;
          height: 80px;
          flex-shrink: 0;
        }

        .banner-image img {
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

        .banner-description {
          color: #666;
          margin: 0 0 0.5rem 0;
        }

        .banner-link {
          color: #666;
          margin: 0 0 0.5rem 0;
          font-size: 0.9rem;
        }

        .status {
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .status.active {
          background: #e8f5e8;
          color: #2e7d32;
        }

        .status.inactive {
          background: #ffebee;
          color: #c62828;
        }

        .banner-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .no-banners {
          text-align: center;
          padding: 3rem;
          color: #666;
        }

        .no-banners h3 {
          margin: 0 0 1rem 0;
          color: #333;
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
    image_url: banner?.image_url || '',
    link_url: banner?.link_url || '',
    link_type: banner?.link_type || 'routeLink',
    is_active: banner?.is_active ?? true,
    sort_order: banner?.sort_order || 0,
    start_date: banner?.start_date || '',
    end_date: banner?.end_date || '',
    created_at: banner?.created_at || '',
    updated_at: banner?.updated_at || '',
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
            <label>Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={3}
            />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({...formData, image_url: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Link URL</label>
            <input
              type="url"
              value={formData.link_url}
              onChange={(e) => setFormData({...formData, link_url: e.target.value})}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Sort Order</label>
              <input
                type="number"
                value={formData.sort_order}
                onChange={(e) => setFormData({...formData, sort_order: parseInt(e.target.value) || 0})}
              />
            </div>

            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                />
                Active
              </label>
            </div>
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

        .banner-form h3 {
          margin: 0 0 2rem 0;
          color: #333;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
          color: #333;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 0.9rem;
        }

        .form-group textarea {
          resize: vertical;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #e0e0e0;
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default BannerManager;
