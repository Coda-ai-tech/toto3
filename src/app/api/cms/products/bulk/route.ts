import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// POST /api/cms/products/bulk - Bulk import products
export async function POST(request: NextRequest) {
  try {
    const { products, operation = 'import' } = await request.json();

    if (!Array.isArray(products)) {
      return NextResponse.json({ error: 'Products must be an array' }, { status: 400 });
    }

    let results = {
      success: 0,
      errors: 0,
      errorsList: [] as Array<{ id: string; error: string }>
    };

    if (operation === 'import') {
      // Bulk insert/update products
      const { data, error } = await supabaseAdmin
        .from('products')
        .upsert(products, { 
          onConflict: 'id',
          ignoreDuplicates: false 
        })
        .select();

      if (error) {
        console.error('Bulk import error:', error);
        return NextResponse.json({ 
          error: 'Failed to import products',
          details: error.message 
        }, { status: 500 });
      }

      results.success = data?.length || 0;
    } else if (operation === 'update') {
      // Update existing products
      for (const product of products) {
        try {
          const { error } = await supabaseAdmin
            .from('products')
            .update(product)
            .eq('id', product.id);

          if (error) {
            results.errors++;
            results.errorsList.push({
              id: product.id,
              error: error.message
            });
          } else {
            results.success++;
          }
        } catch (error) {
          results.errors++;
          results.errorsList.push({
            id: product.id,
            error: (error as Error).message
          });
        }
      }
    } else if (operation === 'delete') {
      // Delete products
      const productIds = products.map(p => p.id);
      const { error } = await supabaseAdmin
        .from('products')
        .delete()
        .in('id', productIds);

      if (error) {
        console.error('Bulk delete error:', error);
        return NextResponse.json({ 
          error: 'Failed to delete products',
          details: error.message 
        }, { status: 500 });
      }

      results.success = productIds.length;
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

    const { error } = await supabaseAdmin
      .from('products')
      .delete()
      .in('id', productIds);

    if (error) {
      console.error('Bulk delete error:', error);
      return NextResponse.json({ 
        error: 'Failed to delete products',
        details: error.message 
      }, { status: 500 });
    }

    return NextResponse.json({
      message: 'Bulk delete completed',
      deletedCount: productIds.length
    });

  } catch (error) {
    console.error('Error in bulk delete:', error);
    return NextResponse.json({ 
      error: 'Failed to perform bulk delete' 
    }, { status: 500 });
  }
}
