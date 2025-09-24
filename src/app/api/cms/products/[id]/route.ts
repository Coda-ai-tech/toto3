import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// GET /api/cms/products/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabaseAdmin
      .from('products')
      .select(`
        *,
        product_categories (
          category_id,
          categories (name, slug)
        )
      `)
      .eq('id', params.id)
      .single();

    if (error) {
      console.error('Error fetching product:', error);
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(data);
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
    
    // Update product
    const { data, error } = await supabaseAdmin
      .from('products')
      .update(productData)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating product:', error);
      return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
    }

    // Handle categories if provided
    if (productData.categories) {
      // Remove existing category links
      await supabaseAdmin
        .from('product_categories')
        .delete()
        .eq('product_id', params.id);

      // Add new category links
      if (productData.categories.length > 0) {
        const categoryInserts = productData.categories.map((categoryId: string) => ({
          product_id: params.id,
          category_id: categoryId
        }));

        const { error: categoryError } = await supabaseAdmin
          .from('product_categories')
          .insert(categoryInserts);

        if (categoryError) {
          console.error('Error linking categories:', categoryError);
        }
      }
    }

    return NextResponse.json({ 
      message: 'Product updated successfully',
      data
    });
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
    // Delete product (cascades to product_categories)
    const { error } = await supabaseAdmin
      .from('products')
      .delete()
      .eq('id', params.id);

    if (error) {
      console.error('Error deleting product:', error);
      return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
