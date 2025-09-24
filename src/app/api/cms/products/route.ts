import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const PRODUCTS_DIR = path.join(process.cwd(), 'public/api/en/product');

// GET /api/cms/products
export async function GET() {
  try {
    const files = fs.readdirSync(PRODUCTS_DIR);
    const products = [];

    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(PRODUCTS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const productData = JSON.parse(content);
        
        if (productData.content && productData.content[0]) {
          const product = productData.content[0].content;
          products.push({
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
      }
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

// POST /api/cms/products
export async function POST(request: NextRequest) {
  try {
    const productData = await request.json();
    
    // Create product file
    const productFile = {
      meta: {
        title: productData.id,
        description: productData.description,
        keywords: "TOTO, product",
        ogImage: "/assets/img/og.jpg"
      },
      breadcrumb: [
        {
          label: "HOME",
          link: { type: "routeLink", href: "/en" }
        },
        {
          label: "PRODUCT",
          link: { type: "routeLink", href: "/en/product" }
        },
        {
          label: productData.id,
          link: { type: "routeLink", href: `/en/product/${productData.id}` }
        }
      ],
      content: [
        {
          id: null,
          modelNumber: productData.id,
          slug: productData.id,
          productName: productData.name,
          isNew: "false",
          module: "ProductDetails",
          moduleOption: null,
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
            videos: [],
            relatedProduct: [],
            compatibleProduct: [],
            remarks: ""
          }
        }
      ]
    };

    const filePath = path.join(PRODUCTS_DIR, `${productData.id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(productFile, null, 2));

    return NextResponse.json({ success: true, id: productData.id });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
