export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          parent_id: string | null
          sort_order: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          parent_id?: string | null
          sort_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          parent_id?: string | null
          sort_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string | null
          brand: string | null
          model_number: string | null
          price: number | null
          availability: string
          condition: string
          material: string[] | null
          color: string[] | null
          size: string | null
          weight: string | null
          dimensions: string | null
          warranty: string | null
          country_of_origin: string | null
          gtin: string | null
          mpn: string | null
          sku: string | null
          tags: string[] | null
          is_new: boolean
          is_active: boolean
          seo_title: string | null
          seo_description: string | null
          seo_keywords: string | null
          features: string[] | null
          technologies: string[] | null
          images: string[] | null
          downloads: string[] | null
          videos: string[] | null
          related_products: string[] | null
          compatible_products: string[] | null
          remarks: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name: string
          description?: string | null
          brand?: string | null
          model_number?: string | null
          price?: number | null
          availability?: string
          condition?: string
          material?: string[] | null
          color?: string[] | null
          size?: string | null
          weight?: string | null
          dimensions?: string | null
          warranty?: string | null
          country_of_origin?: string | null
          gtin?: string | null
          mpn?: string | null
          sku?: string | null
          tags?: string[] | null
          is_new?: boolean
          is_active?: boolean
          seo_title?: string | null
          seo_description?: string | null
          seo_keywords?: string | null
          features?: string[] | null
          technologies?: string[] | null
          images?: string[] | null
          downloads?: string[] | null
          videos?: string[] | null
          related_products?: string[] | null
          compatible_products?: string[] | null
          remarks?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          brand?: string | null
          model_number?: string | null
          price?: number | null
          availability?: string
          condition?: string
          material?: string[] | null
          color?: string[] | null
          size?: string | null
          weight?: string | null
          dimensions?: string | null
          warranty?: string | null
          country_of_origin?: string | null
          gtin?: string | null
          mpn?: string | null
          sku?: string | null
          tags?: string[] | null
          is_new?: boolean
          is_active?: boolean
          seo_title?: string | null
          seo_description?: string | null
          seo_keywords?: string | null
          features?: string[] | null
          technologies?: string[] | null
          images?: string[] | null
          downloads?: string[] | null
          videos?: string[] | null
          related_products?: string[] | null
          compatible_products?: string[] | null
          remarks?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      banners: {
        Row: {
          id: string
          title: string
          description: string | null
          image_url: string | null
          link_url: string | null
          link_type: string
          is_active: boolean
          sort_order: number
          start_date: string | null
          end_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          image_url?: string | null
          link_url?: string | null
          link_type?: string
          is_active?: boolean
          sort_order?: number
          start_date?: string | null
          end_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          image_url?: string | null
          link_url?: string | null
          link_type?: string
          is_active?: boolean
          sort_order?: number
          start_date?: string | null
          end_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      technologies: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          image_url: string | null
          features: string[] | null
          products: string[] | null
          is_active: boolean
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          image_url?: string | null
          features?: string[] | null
          products?: string[] | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          image_url?: string | null
          features?: string[] | null
          products?: string[] | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      awards: {
        Row: {
          id: string
          name: string
          description: string | null
          image_url: string | null
          year: number | null
          category: string | null
          organization: string | null
          products: string[] | null
          is_active: boolean
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          image_url?: string | null
          year?: number | null
          category?: string | null
          organization?: string | null
          products?: string[] | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          image_url?: string | null
          year?: number | null
          category?: string | null
          organization?: string | null
          products?: string[] | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      locations: {
        Row: {
          id: string
          name: string
          address: string
          city: string | null
          state: string | null
          country: string | null
          postal_code: string | null
          phone: string | null
          email: string | null
          website: string | null
          latitude: number | null
          longitude: number | null
          is_active: boolean
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          address: string
          city?: string | null
          state?: string | null
          country?: string | null
          postal_code?: string | null
          phone?: string | null
          email?: string | null
          website?: string | null
          latitude?: number | null
          longitude?: number | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          address?: string
          city?: string | null
          state?: string | null
          country?: string | null
          postal_code?: string | null
          phone?: string | null
          email?: string | null
          website?: string | null
          latitude?: number | null
          longitude?: number | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      content_pages: {
        Row: {
          id: string
          slug: string
          title: string
          content: any | null
          meta_title: string | null
          meta_description: string | null
          meta_keywords: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          content?: any | null
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          content?: any | null
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Helper types for easier usage
export type Product = Database['public']['Tables']['products']['Row']
export type ProductInsert = Database['public']['Tables']['products']['Insert']
export type ProductUpdate = Database['public']['Tables']['products']['Update']

export type Category = Database['public']['Tables']['categories']['Row']
export type CategoryInsert = Database['public']['Tables']['categories']['Insert']
export type CategoryUpdate = Database['public']['Tables']['categories']['Update']

export type Banner = Database['public']['Tables']['banners']['Row']
export type BannerInsert = Database['public']['Tables']['banners']['Insert']
export type BannerUpdate = Database['public']['Tables']['banners']['Update']

export type Technology = Database['public']['Tables']['technologies']['Row']
export type TechnologyInsert = Database['public']['Tables']['technologies']['Insert']
export type TechnologyUpdate = Database['public']['Tables']['technologies']['Update']

export type Award = Database['public']['Tables']['awards']['Row']
export type AwardInsert = Database['public']['Tables']['awards']['Insert']
export type AwardUpdate = Database['public']['Tables']['awards']['Update']

export type Location = Database['public']['Tables']['locations']['Row']
export type LocationInsert = Database['public']['Tables']['locations']['Insert']
export type LocationUpdate = Database['public']['Tables']['locations']['Update']

export type ContentPage = Database['public']['Tables']['content_pages']['Row']
export type ContentPageInsert = Database['public']['Tables']['content_pages']['Insert']
export type ContentPageUpdate = Database['public']['Tables']['content_pages']['Update']
