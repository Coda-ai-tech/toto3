import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const BANNERS_FILE = path.join(process.cwd(), 'public/api/cms-banners.json');

// GET /api/cms/banners
export async function GET() {
  try {
    if (!fs.existsSync(BANNERS_FILE)) {
      return NextResponse.json([]);
    }

    const content = fs.readFileSync(BANNERS_FILE, 'utf8');
    const banners = JSON.parse(content);
    return NextResponse.json(banners);
  } catch (error) {
    console.error('Error fetching banners:', error);
    return NextResponse.json({ error: 'Failed to fetch banners' }, { status: 500 });
  }
}

// POST /api/cms/banners
export async function POST(request: NextRequest) {
  try {
    const bannerData = await request.json();
    
    let banners = [];
    if (fs.existsSync(BANNERS_FILE)) {
      const content = fs.readFileSync(BANNERS_FILE, 'utf8');
      banners = JSON.parse(content);
    }

    const newBanner = {
      id: bannerData.id || `banner_${Date.now()}`,
      title: bannerData.title,
      description: bannerData.description,
      image: bannerData.image,
      link: bannerData.link,
      isActive: bannerData.isActive ?? true,
      order: bannerData.order || 0,
      createdAt: new Date().toISOString(),
    };

    banners.push(newBanner);
    fs.writeFileSync(BANNERS_FILE, JSON.stringify(banners, null, 2));

    return NextResponse.json({ success: true, id: newBanner.id });
  } catch (error) {
    console.error('Error creating banner:', error);
    return NextResponse.json({ error: 'Failed to create banner' }, { status: 500 });
  }
}
