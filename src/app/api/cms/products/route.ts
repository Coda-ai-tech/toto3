import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// GET /api/cms/products
export async function GET() {
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
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
      return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

// POST /api/cms/products
export async function POST(request: NextRequest) {
  try {
    const productData = await request.json();
    
    // Insert product
    const { data: product, error: productError } = await supabaseAdmin
      .from('products')
      .insert([productData])
      .select()
      .single();

    if (productError) {
      console.error('Error creating product:', productError);
      return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }

    // Handle categories if provided
    if (productData.categories && productData.categories.length > 0) {
      const categoryInserts = productData.categories.map((categoryId: string) => ({
        product_id: product.id,
        category_id: categoryId
      }));

      const { error: categoryError } = await supabaseAdmin
        .from('product_categories')
        .insert(categoryInserts);

      if (categoryError) {
        console.error('Error linking categories:', categoryError);
        // Don't fail the request, just log the error
      }
    }

    return NextResponse.json({ 
      message: 'Product created successfully',
      data: product
    });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
