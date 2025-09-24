import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// GET /api/cms/banners
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('banners')
      .select('*')
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching banners:', error);
      return NextResponse.json({ error: 'Failed to fetch banners' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching banners:', error);
    return NextResponse.json({ error: 'Failed to fetch banners' }, { status: 500 });
  }
}

// POST /api/cms/banners
export async function POST(request: NextRequest) {
  try {
    const bannerData = await request.json();
    
    const { data, error } = await supabaseAdmin
      .from('banners')
      .insert([bannerData])
      .select()
      .single();

    if (error) {
      console.error('Error creating banner:', error);
      return NextResponse.json({ error: 'Failed to create banner' }, { status: 500 });
    }

    return NextResponse.json({ 
      message: 'Banner created successfully',
      data
    });
  } catch (error) {
    console.error('Error creating banner:', error);
    return NextResponse.json({ error: 'Failed to create banner' }, { status: 500 });
  }
}
