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
}

const ProductManager = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/cms/products');
      const data = await response.json();
      setProducts(data.data || data);
    } catch (error) {
      console.error('Error fetching products:', error);
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
        await fetch(`/api/cms/products/${productId}`, {
          method: 'DELETE',
        });
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleSave = async (productData: Product) => {
    try {
      const method = editingProduct ? 'PUT' : 'POST';
      const url = editingProduct 
        ? `/api/cms/products/${editingProduct.id}`
        : '/api/cms/products';

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });

      setShowForm(false);
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleBulkDelete = async (productIds: string[]) => {
    if (confirm(`Are you sure you want to delete ${productIds.length} products?`)) {
      try {
        await Promise.all(
          productIds.map(id => 
            fetch(`/api/cms/products/${id}`, { method: 'DELETE' })
          )
        );
        fetchProducts();
      } catch (error) {
        console.error('Error deleting products:', error);
      }
    }
  };

  const getUniqueCategories = () => {
    const categories = new Set<string>();
    products.forEach(product => {
      product.category.forEach(cat => categories.add(cat));
    });
    return Array.from(categories).sort();
  };

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                             product.category.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'id':
          return a.id.localeCompare(b.id);
        case 'category':
          return a.category[0]?.localeCompare(b.category[0] || '') || 0;
        default:
          return 0;
      }
    });

  if (loading) {
    return <div className="cms-loading">Loading products...</div>;
  }

  return (
    <div className="product-manager">
      <div className="product-header">
        <h2>Product Management</h2>
        <div className="product-actions">
          <div className="search-filters">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="product-search"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-filter"
            >
              <option value="all">All Categories</option>
              {getUniqueCategories().map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-filter"
            >
              <option value="name">Sort by Name</option>
              <option value="id">Sort by ID</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
          <div className="action-buttons">
            <button 
              className="btn-primary"
              onClick={() => setShowForm(true)}
            >
              Add New Product
            </button>
            <button 
              className="btn-secondary"
              onClick={() => setShowImport(true)}
            >
              Import Products
            </button>
          </div>
        </div>
      </div>

      <div className="product-stats">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{products.length}</p>
        </div>
        <div className="stat-card">
          <h3>Filtered Results</h3>
          <p>{filteredProducts.length}</p>
        </div>
        <div className="stat-card">
          <h3>Categories</h3>
          <p>{getUniqueCategories().length}</p>
        </div>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              {product.images[0] && (
                <img src={product.images[0]} alt={product.name} />
              )}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-id">ID: {product.id}</p>
              <p className="product-category">
                Category: {product.category.join(', ')}
              </p>
              {product.subCategory.length > 0 && (
                <p className="product-subcategory">
                  Subcategory: {product.subCategory.join(', ')}
                </p>
              )}
              <p className="product-description">{product.description}</p>
              {product.features.length > 0 && (
                <div className="product-features">
                  <strong>Features:</strong> {product.features.slice(0, 3).join(', ')}
                  {product.features.length > 3 && ` +${product.features.length - 3} more`}
                </div>
              )}
            </div>
            <div className="product-actions">
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
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <h3>No products found</h3>
          <p>Try adjusting your search criteria or add some products.</p>
        </div>
      )}

      {showForm && (
        <ProductForm
          product={editingProduct}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
        />
      )}

      {showImport && (
        <div className="import-modal">
          <div className="import-modal-content">
            <div className="import-modal-header">
              <h3>Import Products</h3>
              <button 
                className="close-btn"
                onClick={() => setShowImport(false)}
              >
                ×
              </button>
            </div>
            <ProductImport onImportComplete={() => {
              setShowImport(false);
              fetchProducts();
            }} />
          </div>
        </div>
      )}

      <style jsx>{`
        .product-manager {
          padding: 1rem;
        }

        .product-header {
          margin-bottom: 2rem;
        }

        .product-header h2 {
          margin: 0 0 1rem 0;
          color: #333;
        }

        .product-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .search-filters {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .product-search, .category-filter, .sort-filter {
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 0.9rem;
        }

        .product-search {
          width: 300px;
          min-width: 200px;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
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

        .product-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          text-align: center;
        }

        .stat-card h3 {
          margin: 0 0 0.5rem 0;
          color: #333;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-card p {
          margin: 0;
          font-size: 2rem;
          font-weight: bold;
          color: #007bff;
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
          transition: all 0.2s;
        }

        .product-card:hover {
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .product-image {
          width: 120px;
          height: 120px;
          flex-shrink: 0;
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
          font-size: 1.1rem;
        }

        .product-id {
          font-family: monospace;
          color: #666;
          margin: 0 0 0.25rem 0;
          font-size: 0.9rem;
        }

        .product-category, .product-subcategory {
          color: #666;
          margin: 0 0 0.25rem 0;
          font-size: 0.9rem;
        }

        .product-description {
          color: #666;
          margin: 0 0 0.5rem 0;
          font-size: 0.9rem;
        }

        .product-features {
          color: #666;
          font-size: 0.85rem;
          margin: 0;
        }

        .product-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-self: flex-start;
        }

        .no-products {
          text-align: center;
          padding: 3rem;
          color: #666;
        }

        .no-products h3 {
          margin: 0 0 1rem 0;
          color: #333;
        }

        .import-modal {
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

        .import-modal-content {
          background: white;
          border-radius: 8px;
          width: 90%;
          max-width: 1200px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .import-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #e0e0e0;
        }

        .import-modal-header h3 {
          margin: 0;
          color: #333;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          color: #333;
        }

        .cms-loading {
          text-align: center;
          padding: 2rem;
          color: #666;
        }

        @media (max-width: 768px) {
          .product-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .search-filters {
            flex-direction: column;
          }

          .product-search {
            width: 100%;
          }

          .product-card {
            flex-direction: column;
          }

          .product-image {
            width: 100%;
            height: 200px;
          }
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
          <div className="form-row">
            <div className="form-group">
              <label>Product ID *</label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({...formData, id: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Product Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={3}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Categories (comma-separated)</label>
              <input
                type="text"
                value={formData.category.join(', ')}
                onChange={(e) => setFormData({
                  ...formData, 
                  category: e.target.value.split(',').map(c => c.trim()).filter(c => c)
                })}
                placeholder="e.g., neorest, commercial"
              />
            </div>

            <div className="form-group">
              <label>Subcategories (comma-separated)</label>
              <input
                type="text"
                value={formData.subCategory.join(', ')}
                onChange={(e) => setFormData({
                  ...formData, 
                  subCategory: e.target.value.split(',').map(c => c.trim()).filter(c => c)
                })}
                placeholder="e.g., toilet-and-urinal, urinal-partition"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Features (comma-separated)</label>
            <input
              type="text"
              value={formData.features.join(', ')}
              onChange={(e) => setFormData({
                ...formData, 
                features: e.target.value.split(',').map(f => f.trim()).filter(f => f)
              })}
              placeholder="e.g., Stainless steel construction, Easy installation"
            />
          </div>

          <div className="form-group">
            <label>Images (comma-separated URLs)</label>
            <input
              type="text"
              value={formData.images.join(', ')}
              onChange={(e) => setFormData({
                ...formData, 
                images: e.target.value.split(',').map(img => img.trim()).filter(img => img)
              })}
              placeholder="e.g., /assets/img/product1.jpg, /assets/img/product2.jpg"
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
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .product-form h3 {
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

export default ProductManager;
