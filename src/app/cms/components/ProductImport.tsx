'use client';

import { useState, useRef } from 'react';

interface ImportedProduct {
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
  brand?: string;
  modelNumber?: string;
  price?: string;
  availability?: string;
  condition?: string;
  material?: string[];
  color?: string[];
  size?: string;
  weight?: string;
  dimensions?: string;
  warranty?: string;
  countryOfOrigin?: string;
  gtin?: string;
  mpn?: string;
  sku?: string;
  tags?: string[];
  isNew?: boolean;
  isActive?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  relatedProducts?: string[];
  compatibleProducts?: string[];
  videos?: string[];
  remarks?: string;
}

interface ProductImportProps {
  onImportComplete?: () => void;
}

const ProductImport = ({ onImportComplete }: ProductImportProps) => {
  const [importedData, setImportedData] = useState<ImportedProduct[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [importStatus, setImportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successCount, setSuccessCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [errorDetails, setErrorDetails] = useState<Array<{ id: string; error: string }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pasteAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    setImportStatus('processing');

    try {
      const text = await file.text();
      await processData(text);
    } catch (error) {
      setImportStatus('error');
      setErrorMessage('Error reading file: ' + (error as Error).message);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaste = async (event: React.ClipboardEvent) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text');
    
    setIsProcessing(true);
    setImportStatus('processing');

    try {
      await processData(pastedText);
    } catch (error) {
      setImportStatus('error');
      setErrorMessage('Error processing pasted data: ' + (error as Error).message);
    } finally {
      setIsProcessing(false);
    }
  };

  const processData = async (text: string) => {
    try {
      // Parse tab-separated or comma-separated data
      const lines = text.split('\n').filter(line => line.trim());
      if (lines.length < 2) {
        throw new Error('No data found. Please ensure your file has a header row and at least one data row.');
      }

      const headers = lines[0].split('\t').map(h => h.trim().toLowerCase());
      const products: ImportedProduct[] = [];

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split('\t').map(v => v.trim());
        if (values.length === 0 || values.every(v => !v)) continue;

        const product: ImportedProduct = {
          id: '',
          name: '',
          category: [],
          subCategory: [],
          description: '',
          images: [],
          specs: {},
          features: [],
          awardImages: [],
          technologies: [],
          downloads: [],
          isNew: false,
          isActive: true,
        };

        // Map headers to product properties
        headers.forEach((header, index) => {
          const value = values[index] || '';
          
          switch (header) {
            case 'id':
            case 'product_id':
            case 'sku':
              product.id = value;
              break;
            case 'name':
            case 'title':
            case 'product_name':
              product.name = value;
              break;
            case 'description':
              product.description = value;
              break;
            case 'category':
              product.category = value ? value.split(',').map(c => c.trim()) : [];
              break;
            case 'subcategory':
            case 'sub_category':
              product.subCategory = value ? value.split(',').map(c => c.trim()) : [];
              break;
            case 'brand':
              product.brand = value;
              break;
            case 'model':
            case 'model_number':
              product.modelNumber = value;
              break;
            case 'price':
              product.price = value;
              break;
            case 'availability':
              product.availability = value;
              break;
            case 'condition':
              product.condition = value;
              break;
            case 'material':
              product.material = value ? value.split(',').map(m => m.trim()) : [];
              break;
            case 'color':
            case 'colour':
              product.color = value ? value.split(',').map(c => c.trim()) : [];
              break;
            case 'size':
              product.size = value;
              break;
            case 'weight':
              product.weight = value;
              break;
            case 'dimensions':
              product.dimensions = value;
              break;
            case 'warranty':
              product.warranty = value;
              break;
            case 'country_of_origin':
              product.countryOfOrigin = value;
              break;
            case 'gtin':
              product.gtin = value;
              break;
            case 'mpn':
              product.mpn = value;
              break;
            case 'tags':
              product.tags = value ? value.split(',').map(t => t.trim()) : [];
              break;
            case 'is_new':
            case 'new':
              product.isNew = value.toLowerCase() === 'true' || value === '1' || value.toLowerCase() === 'yes';
              break;
            case 'is_active':
            case 'active':
              product.isActive = value.toLowerCase() !== 'false' && value !== '0' && value.toLowerCase() !== 'no';
              break;
            case 'seo_title':
              product.seoTitle = value;
              break;
            case 'seo_description':
              product.seoDescription = value;
              break;
            case 'seo_keywords':
              product.seoKeywords = value;
              break;
            case 'features':
              product.features = value ? value.split(',').map(f => f.trim()) : [];
              break;
            case 'technologies':
              product.technologies = value ? value.split(',').map(t => t.trim()) : [];
              break;
            case 'images':
            case 'image_urls':
              product.images = value ? value.split(',').map(img => img.trim()) : [];
              break;
            case 'downloads':
            case 'download_urls':
              product.downloads = value ? value.split(',').map(d => d.trim()) : [];
              break;
            case 'videos':
            case 'video_urls':
              product.videos = value ? value.split(',').map(v => v.trim()) : [];
              break;
            case 'related_products':
              product.relatedProducts = value ? value.split(',').map(p => p.trim()) : [];
              break;
            case 'compatible_products':
              product.compatibleProducts = value ? value.split(',').map(p => p.trim()) : [];
              break;
            case 'remarks':
            case 'notes':
              product.remarks = value;
              break;
            default:
              // Handle custom specs
              if (value) {
                product.specs[header] = value;
              }
              break;
          }
        });

        // Validate required fields
        if (!product.id || !product.name) {
          console.warn(`Skipping row ${i + 1}: Missing required fields (id or name)`);
          continue;
        }

        products.push(product);
      }

      setImportedData(products);
      setImportStatus('success');
      setSuccessCount(products.length);
      setErrorCount(0);
    } catch (error) {
      setImportStatus('error');
      setErrorMessage('Error processing data: ' + (error as Error).message);
      setErrorCount(1);
    }
  };

  const handleImport = async () => {
    if (importedData.length === 0) return;

    setIsProcessing(true);
    setImportStatus('processing');

    try {
      const response = await fetch('/api/cms/products/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          products: importedData,
          operation: 'import'
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessCount(result.results.success);
        setErrorCount(result.results.errors);
        setErrorDetails(result.results.errorsList || []);
        setImportStatus('success');
        
        if (result.results.success > 0) {
          setImportedData([]);
          onImportComplete?.();
        }
      } else {
        setImportStatus('error');
        setErrorMessage(result.error || 'Import failed');
        setErrorCount(importedData.length);
      }
    } catch (error) {
      setImportStatus('error');
      setErrorMessage('Error importing products: ' + (error as Error).message);
      setErrorCount(importedData.length);
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadTemplate = () => {
    const template = [
      'id,name,description,category,subcategory,brand,model_number,price,availability,condition,material,color,size,weight,dimensions,warranty,country_of_origin,gtin,mpn,tags,is_new,is_active,seo_title,seo_description,seo_keywords,features,technologies,images,downloads,videos,related_products,compatible_products,remarks',
      'A100,Urinal Partition,Commercial urinal partition,Commercial,toilet-and-urinal;urinal-partition,TOTO,A100,299.99,in_stock,new,Stainless Steel,Silver,100 x 350 x 760mm,2.5kg,100 x 350 x 760mm,1 year,Japan,1234567890123,A100-001,urinal;partition;commercial,false,true,Urinal Partition - TOTO,Commercial urinal partition for public restrooms,urinal;partition;commercial,Stainless steel construction;Easy installation,Stainless Steel Technology,/assets/img/content/products/Commercial/toilet-and-urinal/A100/content-image.png,/assets/img/content/products/Commercial/toilet-and-urinal/A100/drawing.png,,A101;A102,,Commercial grade urinal partition'
    ].join('\n');

    const blob = new Blob([template], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'product-import-template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const resetImport = () => {
    setImportedData([]);
    setImportStatus('idle');
    setSuccessCount(0);
    setErrorCount(0);
    setErrorDetails([]);
    setErrorMessage('');
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (pasteAreaRef.current) pasteAreaRef.current.value = '';
  };

  return (
    <div className="product-import">
      <div className="import-header">
        <h2>Product Import</h2>
        <p>Import products from Excel/CSV files or paste data directly</p>
      </div>

      <div className="import-options">
        <div className="import-method">
          <h3>Method 1: Upload File</h3>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,.tsv,.txt,.xlsx,.xls"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <button 
            className="btn-primary"
            onClick={() => fileInputRef.current?.click()}
            disabled={isProcessing}
          >
            Choose File
          </button>
        </div>

        <div className="import-method">
          <h3>Method 2: Copy & Paste</h3>
          <p>Copy data from Excel/Google Sheets and paste below:</p>
          <textarea
            ref={pasteAreaRef}
            placeholder="Paste your data here (Ctrl+V or Cmd+V)..."
            onPaste={handlePaste}
            rows={6}
            className="paste-area"
          />
        </div>

        <div className="import-method">
          <h3>Method 3: Download Template</h3>
          <p>Download our template to see the expected format:</p>
          <button 
            className="btn-secondary"
            onClick={downloadTemplate}
          >
            Download Template
          </button>
        </div>
      </div>

      {importStatus === 'processing' && (
        <div className="import-status processing">
          <div className="spinner"></div>
          <p>Processing data...</p>
        </div>
      )}

      {importStatus === 'success' && (
        <div className="import-status success">
          <p>✅ Successfully processed {successCount} products</p>
          {errorCount > 0 && (
            <div>
              <p>⚠️ {errorCount} products had errors:</p>
              <ul className="error-list">
                {errorDetails.slice(0, 5).map((error, index) => (
                  <li key={index}>
                    <strong>{error.id}:</strong> {error.error}
                  </li>
                ))}
                {errorDetails.length > 5 && (
                  <li>... and {errorDetails.length - 5} more errors</li>
                )}
              </ul>
            </div>
          )}
          <button className="btn-secondary" onClick={resetImport}>
            Import More Products
          </button>
        </div>
      )}

      {importStatus === 'error' && (
        <div className="import-status error">
          <p>❌ Error: {errorMessage}</p>
          <button className="btn-secondary" onClick={resetImport}>
            Try Again
          </button>
        </div>
      )}

      {importedData.length > 0 && (
        <div className="import-preview">
          <h3>Preview ({importedData.length} products)</h3>
          <div className="preview-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {importedData.slice(0, 10).map((product, index) => (
                  <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category.join(', ')}</td>
                    <td>{product.brand || '-'}</td>
                    <td>{product.price || '-'}</td>
                    <td>
                      <span className={`status ${product.isActive ? 'active' : 'inactive'}`}>
                        {product.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {importedData.length > 10 && (
              <p className="preview-note">... and {importedData.length - 10} more products</p>
            )}
          </div>

          <div className="import-actions">
            <button 
              className="btn-primary"
              onClick={handleImport}
              disabled={isProcessing}
            >
              {isProcessing ? 'Importing...' : `Import ${importedData.length} Products`}
            </button>
            <button 
              className="btn-secondary"
              onClick={resetImport}
            >
              Clear Preview
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .product-import {
          padding: 1rem;
        }

        .import-header {
          margin-bottom: 2rem;
        }

        .import-header h2 {
          margin: 0 0 0.5rem 0;
          color: #333;
        }

        .import-header p {
          color: #666;
          margin: 0;
        }

        .import-options {
          display: grid;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .import-method {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }

        .import-method h3 {
          margin: 0 0 1rem 0;
          color: #333;
        }

        .import-method p {
          color: #666;
          margin: 0 0 1rem 0;
        }

        .paste-area {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.9rem;
          resize: vertical;
        }

        .btn-primary, .btn-secondary {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
        }

        .btn-primary {
          background: #007bff;
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background: #0056b3;
        }

        .btn-primary:disabled {
          background: #6c757d;
          cursor: not-allowed;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-secondary:hover {
          background: #545b62;
        }

        .import-status {
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 1rem;
          text-align: center;
        }

        .import-status.processing {
          background: #e3f2fd;
          color: #1976d2;
        }

        .import-status.success {
          background: #e8f5e8;
          color: #2e7d32;
        }

        .import-status.error {
          background: #ffebee;
          color: #c62828;
        }

        .error-list {
          text-align: left;
          margin: 0.5rem 0;
          padding-left: 1rem;
        }

        .error-list li {
          margin: 0.25rem 0;
          font-size: 0.9rem;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #f3f3f3;
          border-top: 2px solid #1976d2;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 0.5rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .import-preview {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }

        .import-preview h3 {
          margin: 0 0 1rem 0;
          color: #333;
        }

        .preview-table {
          overflow-x: auto;
          margin-bottom: 1rem;
        }

        .preview-table table {
          width: 100%;
          border-collapse: collapse;
          background: white;
        }

        .preview-table th,
        .preview-table td {
          padding: 0.75rem;
          text-align: left;
          border-bottom: 1px solid #e0e0e0;
        }

        .preview-table th {
          background: #f8f9fa;
          font-weight: 600;
          color: #333;
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

        .preview-note {
          text-align: center;
          color: #666;
          font-style: italic;
          margin: 0.5rem 0 0 0;
        }

        .import-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default ProductImport;
