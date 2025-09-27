# TOTO CMS (Content Management System)

A comprehensive content management system for the TOTO website that allows editing of banners, products, categories, locations, awards, and technology content.

## Features

### ✅ Completed Features

1. **Dashboard** - Main CMS interface with navigation
2. **Product Management** - Full CRUD operations for products
3. **Banner Management** - Create, edit, delete, and manage homepage banners
4. **API Endpoints** - RESTful APIs for all CMS operations

### 🚧 Coming Soon

1. **Category Management** - Organize products into categories
2. **Location Management** - Manage store locations and contact info
3. **Award Management** - Manage awards and recognition content
4. **Technology Management** - Manage technology features and specs
5. **Content Management** - Edit general website content

## Access

The CMS is accessible at: `/cms`

## API Endpoints

### Products
- `GET /api/cms/products` - List all products
- `POST /api/cms/products` - Create new product
- `GET /api/cms/products/[id]` - Get specific product
- `PUT /api/cms/products/[id]` - Update product
- `DELETE /api/cms/products/[id]` - Delete product

### Banners
- `GET /api/cms/banners` - List all banners
- `POST /api/cms/banners` - Create new banner
- `GET /api/cms/banners/[id]` - Get specific banner
- `PUT /api/cms/banners/[id]` - Update banner
- `DELETE /api/cms/banners/[id]` - Delete banner

## File Structure

```
src/app/cms/
├── page.tsx                    # Main CMS dashboard
├── components/
│   ├── ProductManager.tsx      # Product management interface
│   └── BannerManager.tsx       # Banner management interface
└── api/cms/
    ├── products/
    │   ├── route.ts            # Products API endpoints
    │   └── [id]/route.ts       # Individual product operations
    └── banners/
        ├── route.ts            # Banners API endpoints
        └── [id]/route.ts       # Individual banner operations
```

## Data Storage

- **Products**: Stored in `public/api/en/product/*.json` files
- **Banners**: Stored in `public/api/cms-banners.json`

## Usage

1. Navigate to `/cms` in your browser
2. Use the sidebar to navigate between different content sections
3. Click "Add New" buttons to create new content
4. Use Edit/Delete buttons to modify existing content
5. Changes are saved immediately to the file system

## Technical Details

- Built with Next.js 14 and React
- Uses file system for data persistence
- Responsive design with modern UI components
- TypeScript for type safety
- RESTful API design

## Future Enhancements

- User authentication and authorization
- Image upload functionality
- Content versioning
- Bulk operations
- Search and filtering
- Content preview
- Multi-language support
