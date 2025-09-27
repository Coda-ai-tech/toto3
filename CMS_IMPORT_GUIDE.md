# TOTO CMS - Product Import Guide

## Overview

The TOTO CMS now includes advanced product import functionality that supports Excel/CSV files and copy-paste operations. This guide explains how to use the import features effectively.

## Import Methods

### 1. File Upload
- Supports `.csv`, `.tsv`, `.txt`, `.xlsx`, `.xls` files
- Click "Choose File" to select your file
- The system will automatically process the data

### 2. Copy & Paste
- Copy data directly from Excel or Google Sheets
- Paste into the text area using Ctrl+V (Cmd+V on Mac)
- Perfect for quick imports or testing

### 3. Template Download
- Download our CSV template to see the expected format
- Use as a starting point for your data preparation

## Supported Fields

### Required Fields
- `id` - Unique product identifier
- `name` - Product name/title

### Basic Product Information
- `description` - Product description
- `category` - Main category (comma-separated for multiple)
- `subcategory` - Subcategories (comma-separated for multiple)
- `brand` - Brand name
- `model_number` - Model number
- `price` - Product price
- `availability` - Stock status (in_stock, out_of_stock, etc.)
- `condition` - Product condition (new, used, refurbished)

### Physical Attributes
- `material` - Materials used (comma-separated)
- `color` - Product colors (comma-separated)
- `size` - Product size
- `weight` - Product weight
- `dimensions` - Product dimensions
- `warranty` - Warranty information
- `country_of_origin` - Manufacturing country

### Technical Information
- `gtin` - Global Trade Item Number
- `mpn` - Manufacturer Part Number
- `sku` - Stock Keeping Unit
- `tags` - Product tags (comma-separated)

### Status & SEO
- `is_new` - New product flag (true/false)
- `is_active` - Active status (true/false)
- `seo_title` - SEO title
- `seo_description` - SEO description
- `seo_keywords` - SEO keywords

### Content & Media
- `features` - Product features (comma-separated)
- `technologies` - Technologies used (comma-separated)
- `images` - Image URLs (comma-separated)
- `downloads` - Download URLs (comma-separated)
- `videos` - Video URLs (comma-separated)

### Relationships
- `related_products` - Related product IDs (comma-separated)
- `compatible_products` - Compatible product IDs (comma-separated)

### Additional
- `remarks` - Additional notes

## Data Format Examples

### Basic Product
```csv
id,name,description,category,subcategory,brand,price,availability
A100,Urinal Partition,Commercial urinal partition,Commercial,toilet-and-urinal,TOTO,299.99,in_stock
```

### Complete Product
```csv
id,name,description,category,subcategory,brand,model_number,price,availability,condition,material,color,size,weight,dimensions,warranty,country_of_origin,gtin,mpn,tags,is_new,is_active,seo_title,seo_description,seo_keywords,features,technologies,images,downloads,videos,related_products,compatible_products,remarks
A100,Urinal Partition,Commercial urinal partition,Commercial,toilet-and-urinal;urinal-partition,TOTO,A100,299.99,in_stock,new,Stainless Steel,Silver,100 x 350 x 760mm,2.5kg,100 x 350 x 760mm,1 year,Japan,1234567890123,A100-001,urinal;partition;commercial,false,true,Urinal Partition - TOTO,Commercial urinal partition for public restrooms,urinal;partition;commercial,Stainless steel construction;Easy installation,Stainless Steel Technology,/assets/img/content/products/Commercial/toilet-and-urinal/A100/content-image.png,/assets/img/content/products/Commercial/toilet-and-urinal/A100/drawing.png,,A101;A102,,Commercial grade urinal partition
```

## Import Process

1. **Prepare Your Data**
   - Ensure required fields (id, name) are present
   - Use comma-separated values for multi-value fields
   - Check data format and consistency

2. **Import Data**
   - Choose your preferred import method
   - Upload file or paste data
   - Review the preview before importing

3. **Review Results**
   - Check success/error counts
   - Review error details if any
   - Verify imported products in the product list

## Error Handling

The system provides detailed error reporting:
- **Missing Required Fields**: Products without id or name are skipped
- **Validation Errors**: Invalid data format or values
- **Duplicate Handling**: Existing products are updated, new ones are added
- **Error Details**: Specific error messages for each failed product

## Best Practices

1. **Data Preparation**
   - Use consistent naming conventions
   - Validate data before importing
   - Test with small batches first

2. **File Format**
   - Use UTF-8 encoding for special characters
   - Avoid special characters in field names
   - Use consistent separators (commas for CSV)

3. **Categories & Subcategories**
   - Use existing category names for consistency
   - Separate multiple values with commas
   - Use lowercase for better matching

4. **Images & Media**
   - Use absolute URLs or relative paths from public folder
   - Ensure images are accessible
   - Use appropriate file formats

## Troubleshooting

### Common Issues

1. **Import Fails**
   - Check file format and encoding
   - Ensure required fields are present
   - Verify data doesn't contain invalid characters

2. **Products Not Appearing**
   - Check if products were marked as inactive
   - Verify category assignments
   - Check for validation errors

3. **Images Not Loading**
   - Verify image URLs are correct
   - Check file permissions
   - Ensure images are in the correct directory

### Getting Help

- Check the error messages in the import results
- Review the preview data before importing
- Use the template as a reference for correct formatting

## API Endpoints

The import functionality uses these API endpoints:

- `POST /api/cms/products/bulk` - Bulk import/update products
- `DELETE /api/cms/products/bulk` - Bulk delete products
- `GET /api/cms/products` - List all products
- `POST /api/cms/products` - Create single product
- `PUT /api/cms/products/[id]` - Update single product
- `DELETE /api/cms/products/[id]` - Delete single product

## File Structure

```
src/app/cms/
├── components/
│   ├── ProductManager.tsx      # Main product management interface
│   └── ProductImport.tsx       # Import functionality
└── api/cms/products/
    ├── route.ts                # Single product operations
    ├── [id]/route.ts           # Individual product operations
    └── bulk/route.ts           # Bulk operations
```

## Future Enhancements

- Real-time validation during data entry
- Advanced mapping for different data sources
- Image upload and processing
- Data transformation rules
- Import history and rollback
- Scheduled imports
- Integration with external systems
