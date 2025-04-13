import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { Database } from "./types/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const createClient = () => {
  return createSupabaseClient<Database>(supabaseUrl, supabaseAnonKey);
};

// Database types
export interface Brand {
  id: string;
  name: string;
  description: string;
  logo_url: string;
  created_at?: string;
  updated_at?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  brand_name: string;
  stock_status: "in-stock" | "out-of-stock";
  stock_quantity: number;
  original_price: number;
  selling_price: number;
  image_url: string;
  created_at?: string;
  updated_at?: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  image_url: string;
  created_at?: string;
  updated_at?: string;
}

export interface News {
  id: string;
  title: string;
  content: string;
  image_url: string;
  publication_date: string;
  created_at?: string;
  updated_at?: string;
}
