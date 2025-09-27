import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// GET /api/cms/banners/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabaseAdmin
      .from('banners')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      console.error('Error fetching banner:', error);
      return NextResponse.json({ error: 'Banner not found' }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching banner:', error);
    return NextResponse.json({ error: 'Failed to fetch banner' }, { status: 500 });
  }
}

// PUT /api/cms/banners/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const bannerData = await request.json();
    
    const { data, error } = await supabaseAdmin
      .from('banners')
      .update(bannerData)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating banner:', error);
      return NextResponse.json({ error: 'Failed to update banner' }, { status: 500 });
    }

    return NextResponse.json({ 
      message: 'Banner updated successfully',
      data
    });
  } catch (error) {
    console.error('Error updating banner:', error);
    return NextResponse.json({ error: 'Failed to update banner' }, { status: 500 });
  }
}

// DELETE /api/cms/banners/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await supabaseAdmin
      .from('banners')
      .delete()
      .eq('id', params.id);

    if (error) {
      console.error('Error deleting banner:', error);
      return NextResponse.json({ error: 'Failed to delete banner' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Banner deleted successfully' });
  } catch (error) {
    console.error('Error deleting banner:', error);
    return NextResponse.json({ error: 'Failed to delete banner' }, { status: 500 });
  }
}
