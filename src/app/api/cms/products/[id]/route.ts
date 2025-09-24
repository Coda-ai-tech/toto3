import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const PRODUCTS_DIR = path.join(process.cwd(), 'public/api/en/product');

// GET /api/cms/products/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = path.join(PRODUCTS_DIR, `${params.id}.json`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const productData = JSON.parse(content);
    
    if (productData.content && productData.content[0]) {
      const product = productData.content[0].content;
      return NextResponse.json({
        id: product.id,
        name: product.productName || product.id,
        category: product.category || [],
        subCategory: product.subCategory || [],
        description: product.description || '',
        images: product.images || [],
        specs: product.specs || {},
        features: product.features || [],
        awardImages: product.awardImages || [],
        technologies: product.technologies || [],
        downloads: product.downloads || [],
      });
    }

    return NextResponse.json({ error: 'Invalid product data' }, { status: 400 });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}

// PUT /api/cms/products/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productData = await request.json();
    
    const filePath = path.join(PRODUCTS_DIR, `${params.id}.json`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Read existing file to preserve meta and breadcrumb
    const existingContent = fs.readFileSync(filePath, 'utf8');
    const existingData = JSON.parse(existingContent);

    // Update the product data
    const updatedProductFile = {
      ...existingData,
      meta: {
        ...existingData.meta,
        title: productData.id,
        description: productData.description,
      },
      content: [
        {
          ...existingData.content[0],
          modelNumber: productData.id,
          slug: productData.id,
          productName: productData.name,
          content: {
            id: productData.id,
            category: productData.category,
            subCategory: productData.subCategory,
            description: productData.description,
            images: productData.images,
            features: productData.features,
            specs: productData.specs,
            awardImages: productData.awardImages,
            technologies: productData.technologies,
            downloads: productData.downloads,
            videos: productData.videos || [],
            relatedProduct: productData.relatedProduct || [],
            compatibleProduct: productData.compatibleProduct || [],
            remarks: productData.remarks || ""
          }
        }
      ]
    };

    fs.writeFileSync(filePath, JSON.stringify(updatedProductFile, null, 2));

    return NextResponse.json({ success: true, id: productData.id });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

// DELETE /api/cms/products/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = path.join(PRODUCTS_DIR, `${params.id}.json`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    fs.unlinkSync(filePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
