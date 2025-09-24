import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const PRODUCTS_DATA_PATH = path.join(process.cwd(), 'public', 'api', 'en', 'product-data.json');

// POST /api/cms/products/bulk - Bulk import products
export async function POST(request: NextRequest) {
  try {
    const { products, operation = 'import' } = await request.json();

    if (!Array.isArray(products)) {
      return NextResponse.json({ error: 'Products must be an array' }, { status: 400 });
    }

    const data = await fs.readFile(PRODUCTS_DATA_PATH, 'utf-8');
    const existingData = JSON.parse(data);
    const existingProducts = existingData.data || [];

    let results = {
      success: 0,
      errors: 0,
      errorsList: [] as Array<{ id: string; error: string }>
    };

    for (const product of products) {
      try {
        // Validate required fields
        if (!product.id || !product.name) {
          results.errors++;
          results.errorsList.push({
            id: product.id || 'unknown',
            error: 'Missing required fields (id or name)'
          });
          continue;
        }

        // Check if product already exists
        const existingIndex = existingProducts.findIndex((p: any) => p.id === product.id);
        
        if (operation === 'import') {
          if (existingIndex >= 0) {
            // Update existing product
            existingProducts[existingIndex] = {
              ...existingProducts[existingIndex],
              ...product,
              updatedAt: new Date().toISOString()
            };
          } else {
            // Add new product
            existingProducts.push({
              ...product,
              createdAt: new Date().toISOString()
            });
          }
          results.success++;
        } else if (operation === 'update') {
          if (existingIndex >= 0) {
            existingProducts[existingIndex] = {
              ...existingProducts[existingIndex],
              ...product,
              updatedAt: new Date().toISOString()
            };
            results.success++;
          } else {
            results.errors++;
            results.errorsList.push({
              id: product.id,
              error: 'Product not found for update'
            });
          }
        } else if (operation === 'delete') {
          if (existingIndex >= 0) {
            existingProducts.splice(existingIndex, 1);
            results.success++;
          } else {
            results.errors++;
            results.errorsList.push({
              id: product.id,
              error: 'Product not found for deletion'
            });
          }
        }
      } catch (error) {
        results.errors++;
        results.errorsList.push({
          id: product.id || 'unknown',
          error: (error as Error).message
        });
      }
    }

    // Save updated data
    if (operation !== 'delete' || results.success > 0) {
      await fs.writeFile(
        PRODUCTS_DATA_PATH, 
        JSON.stringify({ data: existingProducts }, null, 2)
      );
    }

    return NextResponse.json({
      message: `Bulk ${operation} completed`,
      results
    });

  } catch (error) {
    console.error('Error in bulk operation:', error);
    return NextResponse.json({ 
      error: 'Failed to perform bulk operation' 
    }, { status: 500 });
  }
}

// DELETE /api/cms/products/bulk - Bulk delete products
export async function DELETE(request: NextRequest) {
  try {
    const { productIds } = await request.json();

    if (!Array.isArray(productIds)) {
      return NextResponse.json({ error: 'Product IDs must be an array' }, { status: 400 });
    }

    const data = await fs.readFile(PRODUCTS_DATA_PATH, 'utf-8');
    const existingData = JSON.parse(data);
    const existingProducts = existingData.data || [];

    const initialLength = existingProducts.length;
    const filteredProducts = existingProducts.filter((p: any) => !productIds.includes(p.id));
    const deletedCount = initialLength - filteredProducts.length;

    await fs.writeFile(
      PRODUCTS_DATA_PATH, 
      JSON.stringify({ data: filteredProducts }, null, 2)
    );

    return NextResponse.json({
      message: 'Bulk delete completed',
      deletedCount,
      remainingCount: filteredProducts.length
    });

  } catch (error) {
    console.error('Error in bulk delete:', error);
    return NextResponse.json({ 
      error: 'Failed to perform bulk delete' 
    }, { status: 500 });
  }
}
