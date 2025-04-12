import { supabase as supabaseClient } from "./supabase";
import type { Brand, Product, Blog, News } from "./supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const handleError = (error: any) => {
  console.error("Database operation failed:", error);
  throw new Error(
    error.message || "An error occurred during the database operation"
  );
};

const supabaseAuth = createClientComponentClient();

// Use supabaseClient for all database operations
export type ProductType = Product;

// Brand operations
export const brandService = {
  async getAll() {
    try {
      const { data, error } = await supabaseClient
        .from("brands")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Brand[];
    } catch (error) {
      handleError(error);
      return [];
    }
  },

  async getById(id: string) {
    try {
      const { data, error } = await supabaseClient
        .from("brands")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      return data as Brand;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  async create(brand: Omit<Brand, "id" | "created_at" | "updated_at">) {
    try {
      const { data, error } = await supabaseClient
        .from("brands")
        .insert(brand)
        .select()
        .single();
      if (error) throw error;
      return data as Brand;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  async update(id: string, brand: Partial<Brand>) {
    try {
      const { data, error } = await supabaseClient
        .from("brands")
        .update(brand)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;
      return data as Brand;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  async delete(id: string) {
    try {
      const { error } = await supabaseClient
        .from("brands")
        .delete()
        .eq("id", id);
      if (error) throw error;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
};

// Product operations
export const productService = {
  async getAll() {
    try {
      const { data, error } = await supabaseClient
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as ProductType[];
    } catch (error) {
      handleError(error);
      return [];
    }
  },

  async getById(id: string) {
    try {
      const { data, error } = await supabaseClient
        .from("products")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      return data as ProductType;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  async create(product: Omit<ProductType, "id" | "created_at" | "updated_at">) {
    try {
      const { data, error } = await supabaseClient
        .from("products")
        .insert([product])
        .select()
        .single();
      if (error) throw error;
      return data as ProductType;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  async update(id: string, product: Partial<ProductType>) {
    try {
      const { data, error } = await supabaseClient
        .from("products")
        .update({
          ...product,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;
      return data as ProductType;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  async delete(id: string) {
    try {
      const { error } = await supabaseClient
        .from("products")
        .delete()
        .eq("id", id);
      if (error) throw error;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
};

// Blog operations
export const blogService = {
  async getAll() {
    try {
      const { data, error } = await supabaseClient
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Blog[];
    } catch (error) {
      handleError(error);
      return [];
    }
  },

  async getById(id: string) {
    try {
      const { data, error } = await supabaseClient
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      return data as Blog;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  async create(blog: Omit<Blog, "id" | "created_at" | "updated_at">) {
    try {
      const { data, error } = await supabaseClient
        .from("blogs")
        .insert(blog)
        .select()
        .single();
      if (error) throw error;
      return data as Blog;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  async update(id: string, blog: Partial<Blog>) {
    try {
      const { data, error } = await supabaseClient
        .from("blogs")
        .update(blog)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;
      return data as Blog;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  async delete(id: string) {
    try {
      const { error } = await supabaseClient
        .from("blogs")
        .delete()
        .eq("id", id);
      if (error) throw error;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
};

// News operations
export const newsService = {
  async getAll() {
    try {
      const { data, error } = await supabaseClient
        .from("news")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as News[];
    } catch (error) {
      handleError(error);
      return [];
    }
  },

  async getById(id: string) {
    try {
      const { data, error } = await supabaseClient
        .from("news")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      return data as News;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  async create(news: Omit<News, "id" | "created_at" | "updated_at">) {
    try {
      const { data, error } = await supabaseClient
        .from("news")
        .insert(news)
        .select()
        .single();
      if (error) throw error;
      return data as News;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  async update(id: string, news: Partial<News>) {
    try {
      const { data, error } = await supabaseClient
        .from("news")
        .update(news)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;
      return data as News;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  async delete(id: string) {
    try {
      const { error } = await supabaseClient.from("news").delete().eq("id", id);
      if (error) throw error;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
};
