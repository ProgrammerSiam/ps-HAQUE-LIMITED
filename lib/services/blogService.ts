import { createClient } from "@/lib/supabase";
import { uploadImage } from "@/lib/cloudinary";

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  short_description?: string;
  cover_image?: string;
  category: string;
  tags: string[];
  meta_description?: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

// Initialize Supabase client
const supabase = createClient();

export interface CreateBlogInput {
  title: string;
  content: string;
  short_description?: string;
  cover_image?: File | string;
  category: string;
  tags?: string[];
  meta_description?: string;
}

export const blogService = {
  async createBlog(input: CreateBlogInput): Promise<Blog> {
    try {
      // Generate initial slug from title
      let slug = input.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      // Check if slug exists
      const { data: existingBlog } = await supabase
        .from("blogs")
        .select("slug")
        .eq("slug", slug)
        .single();

      // If slug exists, append timestamp
      if (existingBlog) {
        const timestamp = Date.now();
        slug = `${slug}-${timestamp}`;
      }

      // Upload image if provided
      let coverImageUrl = null;
      if (input.cover_image) {
        if (input.cover_image instanceof File) {
          coverImageUrl = await uploadImage(input.cover_image, "blogs");
        } else {
          coverImageUrl = input.cover_image;
        }
      }

      // Insert blog post into Supabase
      const { data, error } = await supabase
        .from("blogs")
        .insert([
          {
            title: input.title,
            slug,
            short_description: input.short_description,
            content: input.content,
            cover_image: coverImageUrl,
            category: input.category,
            tags: input.tags || [],
            meta_description: input.meta_description,
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Supabase error:", error);
        throw new Error(error.message);
      }

      return data as Blog;
    } catch (error) {
      console.error("Error in createBlog:", error);
      throw error;
    }
  },

  async getAllBlogs(): Promise<Blog[]> {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching blogs:", error);
        throw error;
      }

      return data as Blog[];
    } catch (error) {
      console.error("Error in getAllBlogs:", error);
      throw error;
    }
  },

  async getBlogById(id: string): Promise<Blog | null> {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching blog by ID:", error);
        throw error;
      }

      return data as Blog;
    } catch (error) {
      console.error("Error in getBlogById:", error);
      throw error;
    }
  },

  async updateBlog(id: string, input: Partial<CreateBlogInput>): Promise<Blog> {
    try {
      let updateData: any = { ...input };

      // Handle slug update if title is changed
      if (input.title) {
        let slug = input.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        // Check if new slug would conflict with existing ones
        const { data: existingBlog } = await supabase
          .from("blogs")
          .select("slug")
          .eq("slug", slug)
          .neq("id", id)
          .single();

        if (existingBlog) {
          const timestamp = Date.now();
          slug = `${slug}-${timestamp}`;
        }

        updateData.slug = slug;
      }

      // Handle cover image update
      if (input.cover_image) {
        if (input.cover_image instanceof File) {
          updateData.cover_image = await uploadImage(
            input.cover_image,
            "blogs"
          );
        } else {
          updateData.cover_image = input.cover_image;
        }
      }

      const { data, error } = await supabase
        .from("blogs")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        console.error("Error updating blog:", error);
        throw error;
      }

      return data as Blog;
    } catch (error) {
      console.error("Error in updateBlog:", error);
      throw error;
    }
  },

  async deleteBlog(id: string): Promise<void> {
    try {
      const { error } = await supabase.from("blogs").delete().eq("id", id);

      if (error) {
        console.error("Error deleting blog:", error);
        throw error;
      }
    } catch (error) {
      console.error("Error in deleteBlog:", error);
      throw error;
    }
  },

  async getBlogBySlug(slug: string): Promise<Blog | null> {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return null;
      }
      throw new Error(error.message);
    }

    return data as Blog;
  },
};
