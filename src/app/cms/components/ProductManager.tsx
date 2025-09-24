'use client';

import { useState, useEffect } from 'react';

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
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/cms/products');
      const data = await response.json();
      setProducts(data);
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

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="product-search"
          />
          <button 
            className="btn-primary"
            onClick={() => setShowForm(true)}
          >
            Add New Product
          </button>
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
              <p className="product-description">{product.description}</p>
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

      <style jsx>{`
        .product-manager {
          padding: 1rem;
        }

        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .product-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
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
