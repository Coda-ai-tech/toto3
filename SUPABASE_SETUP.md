# Supabase Database Setup for TOTO CMS

## Overview

This guide will help you set up a Supabase database for the TOTO CMS system. Supabase provides a PostgreSQL database with real-time features, authentication, and a great API.

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - **Name**: `toto-cms`
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose closest to your users
6. Click "Create new project"
7. Wait for the project to be created (2-3 minutes)

## Step 2: Get Your Project Credentials

1. Go to your project dashboard
2. Click on "Settings" (gear icon) in the sidebar
3. Click on "API" in the settings menu
4. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon public** key (starts with `eyJ...`)
   - **service_role** key (starts with `eyJ...`)

## Step 3: Update Environment Variables

1. Open `.env.local` in your project root
2. Replace the placeholder values with your actual Supabase credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Step 4: Set Up Database Schema

1. In your Supabase dashboard, go to "SQL Editor"
2. Click "New Query"
3. Copy the entire contents of `supabase-schema.sql` from your project
4. Paste it into the SQL editor
5. Click "Run" to execute the schema

This will create:
- ✅ All necessary tables (products, categories, banners, etc.)
- ✅ Proper relationships and foreign keys
- ✅ Indexes for better performance
- ✅ Row Level Security (RLS) policies
- ✅ Default categories and data
- ✅ Triggers for automatic timestamp updates

## Step 5: Verify Setup

1. Go to "Table Editor" in your Supabase dashboard
2. You should see these tables:
   - `categories`
   - `products`
   - `banners`
   - `technologies`
   - `awards`
   - `locations`
   - `content_pages`
   - `product_categories` (junction table)
   - `product_subcategories` (junction table)

3. Check that the `categories` table has some default data

## Step 6: Test the CMS

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/cms` in your browser
3. Try creating a product to test the database connection
4. Check the "Network" tab in browser dev tools to see API calls

## Database Schema Details

### Tables Created

1. **categories** - Product categories and subcategories
2. **products** - Main product data with all attributes
3. **banners** - Homepage banners and promotional content
4. **technologies** - Technology features and specifications
5. **awards** - Awards and recognition content
6. **locations** - Store locations and contact information
7. **content_pages** - General website content pages
8. **product_categories** - Many-to-many relationship between products and categories
9. **product_subcategories** - Many-to-many relationship between products and subcategories

### Key Features

- **UUID Primary Keys** for most tables
- **Array Fields** for multi-value data (materials, colors, features, etc.)
- **JSONB** for flexible content storage
- **Timestamps** with automatic updates
- **Row Level Security** for data protection
- **Foreign Key Relationships** for data integrity
- **Indexes** for optimal query performance

## Security

The database includes Row Level Security (RLS) policies:
- **Public read access** for all tables (for frontend display)
- **Authenticated user access** for CMS operations
- **Service role access** for API operations

## Troubleshooting

### Common Issues

1. **"Invalid API key" error**
   - Check that your environment variables are correct
   - Make sure you're using the right keys (anon vs service_role)

2. **"Table doesn't exist" error**
   - Verify that you ran the SQL schema successfully
   - Check the Table Editor to see if tables were created

3. **"Permission denied" error**
   - Check that RLS policies are set up correctly
   - Verify you're using the service_role key for admin operations

4. **Connection timeout**
   - Check your internet connection
   - Verify the Supabase URL is correct
   - Check if there are any firewall restrictions

### Getting Help

- Check the Supabase documentation: [https://supabase.com/docs](https://supabase.com/docs)
- Join the Supabase Discord community
- Check the project logs in the Supabase dashboard

## Next Steps

Once your database is set up:

1. **Import existing data** using the CMS import functionality
2. **Set up authentication** if you want user management
3. **Configure backups** in Supabase settings
4. **Set up monitoring** for production use
5. **Configure custom domains** if needed

## Production Considerations

- **Database backups**: Enable automatic backups in Supabase
- **Monitoring**: Set up alerts for database performance
- **Scaling**: Supabase handles scaling automatically
- **Security**: Review and update RLS policies as needed
- **API limits**: Monitor API usage and upgrade plan if needed

Your TOTO CMS is now ready to use with a robust, scalable database backend! 🚀
