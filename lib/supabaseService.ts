import { create } from "domain";
import { createClient } from "./supabase";
import type { Database } from "./types/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// Initialize Supabase clients
const supabaseClient = createClient();
const supabase = createClientComponentClient<Database>();

type Tables = Database["public"]["Tables"];
export type Brand = Tables["brands"]["Row"];
export type Product = Tables["products"]["Row"];
export type Blog = Tables["blogs"]["Row"];
export type News = Tables["news"]["Row"];
export type Subscriber = Tables["subscribers"]["Row"];
export type MessageDelivery = Tables["message_deliveries"]["Row"];
export type NewsletterMessage = Tables["newsletter_messages"]["Row"];
export type TvCommercial = Tables["tv_commercials"]["Row"];

const handleError = (error: any) => {
    console.error("Database error:", error);
    throw new Error(
        error?.message ||
            error?.error_description ||
            "An unknown error occurred"
    );
};

// Use supabaseClient for all database operations
export const databaseService = {
    brands: {
        async getAll() {
            const { data, error } = await supabaseClient
                .from("brands")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) handleError(error);
            return data as Brand[];
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
    },

    products: {
        async getAll() {
            const { data, error } = await supabaseClient
                .from("products")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) handleError(error);
            return data as Product[];
        },

        async getById(id: string) {
            try {
                const { data, error } = await supabaseClient
                    .from("products")
                    .select("*")
                    .eq("id", id)
                    .single();
                if (error) throw error;
                return data as Product;
            } catch (error) {
                handleError(error);
                throw error;
            }
        },

        async create(
            product: Omit<Product, "id" | "created_at" | "updated_at">
        ) {
            try {
                const { data, error } = await supabaseClient
                    .from("products")
                    .insert([product])
                    .select()
                    .single();
                if (error) throw error;
                return data as Product;
            } catch (error) {
                handleError(error);
                throw error;
            }
        },

        async update(id: string, product: Partial<Product>) {
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
                return data as Product;
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
    },

    blogs: {
        async getAll() {
            const { data, error } = await supabaseClient
                .from("blogs")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) handleError(error);
            return data as Blog[];
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
    },

    news: {
        async getAll() {
            const { data, error } = await supabaseClient
                .from("news")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) handleError(error);
            return data as News[];
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
                    .insert([news])
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
                    .update({
                        ...news,
                        updated_at: new Date().toISOString(),
                    })
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
                const { error } = await supabaseClient
                    .from("news")
                    .delete()
                    .eq("id", id);
                if (error) throw error;
            } catch (error) {
                handleError(error);
                throw error;
            }
        },
    },

    subscribers: {
        async getAll() {
            const { data, error } = await supabaseClient
                .from("subscribers")
                .select("*")
                .eq("status", "active")
                .order("created_at", { ascending: false });

            if (error) handleError(error);
            return data as Subscriber[];
        },

        async create(email: string) {
            const { data, error } = await supabaseClient
                .from("subscribers")
                .insert([{ email, status: "active" }])
                .select()
                .single();

            if (error) handleError(error);
            return data as Subscriber;
        },

        async unsubscribe(id: string) {
            const { error } = await supabaseClient
                .from("subscribers")
                .update({ status: "unsubscribed" })
                .eq("id", id);

            if (error) handleError(error);
        },

        async delete(id: string) {
            const { error } = await supabaseClient
                .from("subscribers")
                .delete()
                .eq("id", id);

            if (error) handleError(error);
        },
    },

    newsletter: {
        async sendMessage(message: {
            subject: string;
            body: string;
            sender: string;
            recipient_type: "all" | "selected" | "single";
            recipient_ids?: string[];
        }) {
            // First, create the message record
            const { data: messageData, error: messageError } =
                await supabaseClient
                    .from("newsletter_messages")
                    .insert([message])
                    .select()
                    .single();

            if (messageError) handleError(messageError);

            // Get recipients based on type
            let recipients: Subscriber[] = [];
            if (message.recipient_type === "all") {
                const { data, error } = await supabaseClient
                    .from("subscribers")
                    .select("*")
                    .eq("status", "active");
                if (error) handleError(error);
                recipients = data as Subscriber[];
            } else if (message.recipient_ids?.length) {
                const { data, error } = await supabaseClient
                    .from("subscribers")
                    .select("*")
                    .in("id", message.recipient_ids)
                    .eq("status", "active");
                if (error) handleError(error);
                recipients = data as Subscriber[];
            }

            // Create delivery records for each recipient
            const deliveries = recipients.map((recipient) => ({
                message_id: messageData.id,
                subscriber_id: recipient.id,
                status: "sent" as const,
            }));

            if (deliveries.length > 0) {
                const { error: deliveryError } = await supabaseClient
                    .from("message_deliveries")
                    .insert(deliveries);

                if (deliveryError) handleError(deliveryError);
            }

            return messageData as NewsletterMessage;
        },

        async getMessageHistory() {
            const { data, error } = await supabaseClient
                .from("newsletter_messages")
                .select(
                    `
          *,
          deliveries:message_deliveries(
            status,
            delivered_at,
            subscriber:subscribers(email)
          )
        `
                )
                .order("sent_at", { ascending: false });

            if (error) handleError(error);
            return data;
        },

        async getMessageDeliveryStatus(messageId: string) {
            const { data, error } = await supabaseClient
                .from("message_deliveries")
                .select(
                    `
          *,
          subscriber:subscribers(email)
        `
                )
                .eq("message_id", messageId)
                .order("created_at", { ascending: false });

            if (error) handleError(error);
            return data as MessageDelivery[];
        },

        async updateDeliveryStatus(
            deliveryId: string,
            status: "delivered" | "failed",
            errorMessage?: string
        ) {
            const { error } = await supabaseClient
                .from("message_deliveries")
                .update({
                    status,
                    delivered_at:
                        status === "delivered"
                            ? new Date().toISOString()
                            : null,
                    error_message: errorMessage,
                })
                .eq("id", deliveryId);

            if (error) handleError(error);
        },
    },

    tv_commercials: {
        async create(
            tvCommercial: Omit<TvCommercial, "id" | "created_at" | "updated_at">
        ) {
            console.log("Creating TV commercial:", tvCommercial);
            
            try {
                const { data, error } = await supabaseClient
                    .from("tv_commercials")
                    .insert([tvCommercial])
                    .select()
                    .single();

                if (error) handleError(error);
                return data as TvCommercial;
            } catch (error) {
                console.log("Error creating TV commercial:", error);
                handleError(error);
                throw error;
            }
        },
    },
};

export const getProducts = async () => {
    const { data, error } = await supabaseClient
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data as Product[];
};
