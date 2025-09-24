import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const BANNERS_FILE = path.join(process.cwd(), 'public/api/cms-banners.json');

// GET /api/cms/banners/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!fs.existsSync(BANNERS_FILE)) {
      return NextResponse.json({ error: 'Banner not found' }, { status: 404 });
    }

    const content = fs.readFileSync(BANNERS_FILE, 'utf8');
    const banners = JSON.parse(content);
    const banner = banners.find((b: any) => b.id === params.id);

    if (!banner) {
      return NextResponse.json({ error: 'Banner not found' }, { status: 404 });
    }

    return NextResponse.json(banner);
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
    
    if (!fs.existsSync(BANNERS_FILE)) {
      return NextResponse.json({ error: 'Banner not found' }, { status: 404 });
    }

    const content = fs.readFileSync(BANNERS_FILE, 'utf8');
    const banners = JSON.parse(content);
    const bannerIndex = banners.findIndex((b: any) => b.id === params.id);

    if (bannerIndex === -1) {
      return NextResponse.json({ error: 'Banner not found' }, { status: 404 });
    }

    banners[bannerIndex] = {
      ...banners[bannerIndex],
      ...bannerData,
      id: params.id, // Ensure ID doesn't change
      updatedAt: new Date().toISOString(),
    };

    fs.writeFileSync(BANNERS_FILE, JSON.stringify(banners, null, 2));

    return NextResponse.json({ success: true, id: params.id });
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
    if (!fs.existsSync(BANNERS_FILE)) {
      return NextResponse.json({ error: 'Banner not found' }, { status: 404 });
    }

    const content = fs.readFileSync(BANNERS_FILE, 'utf8');
    const banners = JSON.parse(content);
    const filteredBanners = banners.filter((b: any) => b.id !== params.id);

    if (banners.length === filteredBanners.length) {
      return NextResponse.json({ error: 'Banner not found' }, { status: 404 });
    }

    fs.writeFileSync(BANNERS_FILE, JSON.stringify(filteredBanners, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting banner:', error);
    return NextResponse.json({ error: 'Failed to delete banner' }, { status: 500 });
  }
}
