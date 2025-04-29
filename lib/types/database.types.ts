export type Subscriber = {
    id: string;
    email: string;
    created_at: string;
    status: "active" | "unsubscribed";
};

export type NewsletterMessage = {
    id: string;
    subject: string;
    body: string;
    sent_at: string;
    sender: string;
    recipient_type: "all" | "selected" | "single";
    recipient_ids?: string[];
};

export type MessageDelivery = {
    id: string;
    message_id: string;
    subscriber_id: string;
    status: "sent" | "delivered" | "failed";
    delivered_at?: string;
    error_message?: string;
    created_at: string;
};

export type Brand = {
    id: string;
    name: string;
    description: string;
    image_url: string;
    created_at: string;
    updated_at: string;
};

export type Product = {
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
    created_at: string;
    updated_at: string;
};

export type Blog = {
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
};

export type News = {
    id: string;
    title: string;
    content: string;
    image_url?: string;
    // published_at: string;
    publication_date: string;
    created_at: string;
    updated_at: string;
};

export type TvCommercial = {
    id: string;
    title: string;
    description: string;
    video_url?: string;
    created_at: string;
    updated_at: string;
};

export interface Database {
    public: {
        Tables: {
            subscribers: {
                Row: Subscriber;
                Insert: Omit<Subscriber, "id" | "created_at">;
                Update: Partial<Omit<Subscriber, "id" | "created_at">>;
            };
            newsletter_messages: {
                Row: NewsletterMessage;
                Insert: Omit<NewsletterMessage, "id" | "sent_at">;
                Update: Partial<Omit<NewsletterMessage, "id" | "sent_at">>;
            };
            message_deliveries: {
                Row: MessageDelivery;
                Insert: Omit<MessageDelivery, "id" | "created_at">;
                Update: Partial<Omit<MessageDelivery, "id" | "created_at">>;
            };
            brands: {
                Row: Brand;
                Insert: Omit<Brand, "id" | "created_at" | "updated_at">;
                Update: Partial<
                    Omit<Brand, "id" | "created_at" | "updated_at">
                >;
            };
            products: {
                Row: Product;
                Insert: Omit<Product, "id" | "created_at" | "updated_at">;
                Update: Partial<
                    Omit<Product, "id" | "created_at" | "updated_at">
                >;
            };
            blogs: {
                Row: Blog;
                Insert: Omit<Blog, "id" | "created_at" | "updated_at">;
                Update: Partial<Omit<Blog, "id" | "created_at" | "updated_at">>;
            };
            news: {
                Row: News;
                Insert: Omit<News, "id" | "created_at" | "updated_at">;
                Update: Partial<Omit<News, "id" | "created_at" | "updated_at">>;
            };
            tv_commercials: {
                Row: TvCommercial;
                Insert: Omit<TvCommercial, "id" | "created_at" | "updated_at">;
                Update: Partial<
                    Omit<TvCommercial, "id" | "created_at" | "updated_at">
                >;
            };
        };
    };
}

//! previous code
// export type Subscriber = {
//   id: string;
//   email: string;
//   created_at: string;
//   status: "active" | "unsubscribed";
// };

// export type NewsletterMessage = {
//   id: string;
//   subject: string;
//   body: string;
//   sent_at: string;
//   sender: string;
//   recipient_type: "all" | "selected" | "single";
//   recipient_ids?: string[];
// };

// export type MessageDelivery = {
//   id: string;
//   message_id: string;
//   subscriber_id: string;
//   status: "sent" | "delivered" | "failed";
//   delivered_at?: string;
//   error_message?: string;
//   created_at: string;
// };

// export type Brand = {
//   id: string;
//   name: string;
//   description: string;
//   image_url: string;
//   created_at: string;
//   updated_at: string;
// };

// export type Product = {
//   id: string;
//   title: string;
//   description: string;
//   category: string;
//   brand_name: string;
//   stock_status: "in-stock" | "out-of-stock";
//   stock_quantity: number;
//   original_price: number;
//   selling_price: number;
//   image_url: string;
//   created_at: string;
//   updated_at: string;
// };

// export type Blog = {
//   id: string;
//   title: string;
//   slug: string;
//   content: string;
//   short_description?: string;
//   cover_image?: string;
//   category: string;
//   tags: string[];
//   meta_description?: string;
//   published_at?: string;
//   created_at: string;
//   updated_at: string;
// };

// export type News = {
//   id: string;
//   title: string;
//   content: string;
//   image_url?: string;
//   published_at: string;
//   created_at: string;
//   updated_at: string;
// };

// export interface Database {
//   public: {
//     Tables: {
//       subscribers: {
//         Row: Subscriber;
//         Insert: Omit<Subscriber, "id" | "created_at">;
//         Update: Partial<Omit<Subscriber, "id" | "created_at">>;
//       };
//       newsletter_messages: {
//         Row: NewsletterMessage;
//         Insert: Omit<NewsletterMessage, "id" | "sent_at">;
//         Update: Partial<Omit<NewsletterMessage, "id" | "sent_at">>;
//       };
//       message_deliveries: {
//         Row: MessageDelivery;
//         Insert: Omit<MessageDelivery, "id" | "created_at">;
//         Update: Partial<Omit<MessageDelivery, "id" | "created_at">>;
//       };
//       brands: {
//         Row: Brand;
//         Insert: Omit<Brand, "id" | "created_at" | "updated_at">;
//         Update: Partial<Omit<Brand, "id" | "created_at" | "updated_at">>;
//       };
//       products: {
//         Row: Product;
//         Insert: Omit<Product, "id" | "created_at" | "updated_at">;
//         Update: Partial<Omit<Product, "id" | "created_at" | "updated_at">>;
//       };
//       blogs: {
//         Row: Blog;
//         Insert: Omit<Blog, "id" | "created_at" | "updated_at">;
//         Update: Partial<Omit<Blog, "id" | "created_at" | "updated_at">>;
//       };
//       news: {
//         Row: News;
//         Insert: Omit<News, "id" | "created_at" | "updated_at">;
//         Update: Partial<Omit<News, "id" | "created_at" | "updated_at">>;
//       };
//     };
//   };
// }
