'use client';

import { useState, useEffect } from 'react';
import ProductImport from './ProductImport';

interface Product {
  id: string;
  name: string;
  category: string[];
  subCategory: string[];
  description: string;
  images: string[];
  specs: Record<string, any>;
  features: string[];
  awardImages: string[];
  technologies: string[];
  downloads: string[];
  thumb?: string;
  link?: any;
}

const ProductManager = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataSource, setDataSource] = useState<'json' | 'supabase'>('json');

  useEffect(() => {
    fetchProducts();
  }, [dataSource]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      if (dataSource === 'json') {
        // Load from existing JSON files
        const response = await fetch('/api/en/product-data.json');
        const data = await response.json();
        // Ensure we have an array
        setProducts(Array.isArray(data.data) ? data.data : []);
      } else {
        // Load from Supabase
        const response = await fetch('/api/cms/products');
        const data = await response.json();
        // Ensure we have an array
        setProducts(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = async (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        if (dataSource === 'supabase') {
          await fetch(`/api/cms/products/${productId}`, {
            method: 'DELETE',
          });
        } else {
          // For JSON data, we can't delete directly - this would require file modification
          alert('Cannot delete products from JSON data source. Switch to Supabase to enable deletion.');
          return;
        }
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleSave = async (productData: Product) => {
    try {
      if (dataSource === 'supabase') {
        const method = editingProduct ? 'PUT' : 'POST';
        const url = editingProduct 
          ? `/api/cms/products/${editingProduct.id}`
          : '/api/cms/products';

        await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData),
        });
      } else {
        // For JSON data, we can't save directly - this would require file modification
        alert('Cannot save products to JSON data source. Switch to Supabase to enable editing.');
        return;
      }

      setShowForm(false);
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  // Remove duplicates and ensure unique keys
  const getUniqueProducts = (products: Product[]) => {
    // Ensure products is an array
    if (!Array.isArray(products)) {
      console.warn('Products is not an array:', products);
      return [];
    }
    
    const seen = new Set();
    return products.filter(product => {
      if (seen.has(product.id)) {
        return false;
      }
      seen.add(product.id);
      return true;
    });
  };

  // Ensure products is always an array
  const safeProducts = Array.isArray(products) ? products : [];
  const uniqueProducts = getUniqueProducts(safeProducts);
  const filteredProducts = uniqueProducts.filter(product =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="cms-loading">Loading products...</div>;
  }

  return (
    <div className="product-manager">
      <div className="product-header">
        <h2>Product Management</h2>
        <div className="product-actions">
          <div className="data-source-selector">
            <label>
              <input
                type="radio"
                name="dataSource"
                value="json"
                checked={dataSource === 'json'}
                onChange={(e) => setDataSource(e.target.value as 'json' | 'supabase')}
              />
              JSON Files (Read-only)
            </label>
            <label>
              <input
                type="radio"
                name="dataSource"
                value="supabase"
                checked={dataSource === 'supabase'}
                onChange={(e) => setDataSource(e.target.value as 'json' | 'supabase')}
              />
              Supabase Database
            </label>
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="product-search"
          />
          <button 
            className="btn-secondary"
            onClick={() => setShowImportModal(true)}
          >
            Import Products
          </button>
          {dataSource === 'supabase' && (
            <button 
              className="btn-primary"
              onClick={() => setShowForm(true)}
            >
              Add New Product
            </button>
          )}
        </div>
      </div>

      <div className="data-source-info">
        {dataSource === 'json' ? (
          <div className="info-box">
            <strong>📁 JSON Data Source:</strong> Viewing existing website products from JSON files. 
            To edit products, switch to Supabase database and import your data.
            {safeProducts.length !== uniqueProducts.length && (
              <div className="duplicate-warning">
                ⚠️ Found {safeProducts.length - uniqueProducts.length} duplicate products (removed for display)
              </div>
            )}
          </div>
        ) : (
          <div className="info-box">
            <strong>🗄️ Supabase Database:</strong> Managing products in the database. 
            You can add, edit, and delete products here.
            {safeProducts.length !== uniqueProducts.length && (
              <div className="duplicate-warning">
                ⚠️ Found {safeProducts.length - uniqueProducts.length} duplicate products (removed for display)
              </div>
            )}
          </div>
        )}
      </div>

      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <div key={`${product.id}-${index}`} className="product-card">
            <div className="product-image">
              {product.thumb && (
                <img src={product.thumb} alt={product.name || product.id} />
              )}
            </div>
            <div className="product-info">
              <h3>{product.name || product.id}</h3>
              <p className="product-id">ID: {product.id}</p>
              <p className="product-category">
                Category: {product.category?.join(', ') || 'N/A'}
              </p>
              <p className="product-description">
                {product.description || 'No description available'}
              </p>
            </div>
            <div className="product-actions">
              {dataSource === 'supabase' && (
                <>
                  <button 
                    className="btn-secondary"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </>
              )}
              {dataSource === 'json' && (
                <span className="read-only-badge">Read-only</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <h3>No products found</h3>
          <p>
            {dataSource === 'json' 
              ? 'No products found in JSON files.' 
              : 'No products found in Supabase database. Import some products to get started!'
            }
          </p>
          {dataSource === 'supabase' && (
            <button 
              className="btn-primary"
              onClick={() => setShowImportModal(true)}
            >
              Import Products
            </button>
          )}
        </div>
      )}

      {showForm && dataSource === 'supabase' && (
        <ProductForm
          product={editingProduct}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
        />
      )}

      {showImportModal && (
        <ProductImport
          onClose={() => setShowImportModal(false)}
          onImportSuccess={() => {
            setShowImportModal(false);
            if (dataSource === 'supabase') {
              fetchProducts();
            } else {
              setDataSource('supabase');
            }
          }}
        />
      )}

      <style jsx>{`
        .product-manager {
          padding: 1rem;
        }

        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .product-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .data-source-selector {
          display: flex;
          gap: 1rem;
          margin-right: 1rem;
        }

        .data-source-selector label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .data-source-info {
          margin-bottom: 1rem;
        }

        .info-box {
          background: #e3f2fd;
          border: 1px solid #2196f3;
          border-radius: 4px;
          padding: 1rem;
          color: #1976d2;
        }

        .duplicate-warning {
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 4px;
          padding: 0.5rem;
          margin-top: 0.5rem;
          color: #856404;
          font-size: 0.9rem;
        }

        .product-search {
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          width: 300px;
        }

        .btn-primary, .btn-secondary, .btn-danger {
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

        .btn-primary:hover {
          background: #0056b3;
        }

        .btn-secondary:hover {
          background: #545b62;
        }

        .btn-danger:hover {
          background: #c82333;
        }

        .product-list {
          display: grid;
          gap: 1rem;
        }

        .product-card {
          display: flex;
          background: #f8f9fa;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 1rem;
          gap: 1rem;
        }

        .product-image {
          width: 100px;
          height: 100px;
          flex-shrink: 0;
          background: #f0f0f0;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }

        .product-info {
          flex: 1;
        }

        .product-info h3 {
          margin: 0 0 0.5rem 0;
          color: #333;
        }

        .product-id {
          font-family: monospace;
          color: #666;
          margin: 0 0 0.25rem 0;
        }

        .product-category {
          color: #666;
          margin: 0 0 0.5rem 0;
        }

        .product-description {
          color: #666;
          margin: 0;
        }

        .product-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .read-only-badge {
          background: #ffc107;
          color: #856404;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          text-align: center;
        }

        .no-products {
          text-align: center;
          padding: 3rem;
          background: #f8f9fa;
          border-radius: 8px;
          border: 2px dashed #dee2e6;
        }

        .no-products h3 {
          color: #6c757d;
          margin-bottom: 1rem;
        }

        .no-products p {
          color: #6c757d;
          margin-bottom: 1rem;
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

const ProductForm = ({ product, onSave, onCancel }: {
  product: Product | null;
  onSave: (product: Product) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState<Product>({
    id: product?.id || '',
    name: product?.name || '',
    category: product?.category || [],
    subCategory: product?.subCategory || [],
    description: product?.description || '',
    images: product?.images || [],
    specs: product?.specs || {},
    features: product?.features || [],
    awardImages: product?.awardImages || [],
    technologies: product?.technologies || [],
    downloads: product?.downloads || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="product-form-overlay">
      <div className="product-form">
        <h3>{product ? 'Edit Product' : 'Add New Product'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product ID:</label>
            <input
              type="text"
              value={formData.id}
              onChange={(e) => setFormData({...formData, id: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Product Name:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
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
            <label>Categories (comma-separated):</label>
            <input
              type="text"
              value={formData.category.join(', ')}
              onChange={(e) => setFormData({
                ...formData, 
                category: e.target.value.split(',').map(c => c.trim()).filter(c => c)
              })}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              {product ? 'Update' : 'Create'} Product
            </button>
            <button type="button" className="btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .product-form-overlay {
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

        .product-form {
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

export default ProductManager;
