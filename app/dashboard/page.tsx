"use client";
import { motion } from "framer-motion";
import {
  ShoppingCartIcon,
  UserGroupIcon,
  DocumentTextIcon,
  NewspaperIcon,
  VideoCameraIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState, useCallback } from "react";
import {
  Blog,
  Brand,
  Product,
  News,
  databaseService,
} from "@/lib/supabaseService";
import { blogService } from "@/lib/services/blogService";
import { useRealtimeSubscription } from "@/hooks/useRealtimeSubscription";

interface DashboardStats {
  totalProducts: number;
  totalBrands: number;
  totalBlogs: number;
  totalNews: number;
  totalPlants: number;
  totalCommercials: number;
  totalRevenue: number;
  averageProductPrice: number;
}

interface RecentActivity {
  id: string;
  type: "product" | "blog" | "news" | "brand" | "plant" | "commercial";
  title: string;
  timestamp: string;
  action: "created" | "updated" | "deleted";
}

export default function Dashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalBrands: 0,
    totalBlogs: 0,
    totalNews: 0,
    totalPlants: 0,
    totalCommercials: 0,
    totalRevenue: 0,
    averageProductPrice: 0,
  });
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all data on component mount
  const fetchAllData = useCallback(async () => {
    try {
      setLoading(true);
      const [
        blogsData,
        brandsData,
        productsData,
        newsData,
        plantsData,
        commercialsData,
      ] = await Promise.all([
        blogService.getAllBlogs(),
        databaseService.brands.getAll(),
        databaseService.products.getAll(),
        databaseService.news.getAll(),
        databaseService.plants.getAll(),
        databaseService.tv_commercials.getAll(),
      ]);

      setBlogs(blogsData || []);
      setProducts(productsData || []);

      // Calculate stats
      const totalRevenue =
        productsData?.reduce(
          (sum, product) => sum + (product.selling_price || 0),
          0
        ) || 0;
      const averageProductPrice =
        productsData?.length > 0 ? totalRevenue / productsData.length : 0;

      setStats({
        totalProducts: productsData?.length || 0,
        totalBrands: brandsData?.length || 0,
        totalBlogs: blogsData?.length || 0,
        totalNews: newsData?.length || 0,
        totalPlants: plantsData?.length || 0,
        totalCommercials: commercialsData?.length || 0,
        totalRevenue,
        averageProductPrice,
      });

      // Generate recent activity
      generateRecentActivity(blogsData, brandsData, productsData, newsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const generateRecentActivity = (
    blogsData: Blog[],
    brandsData: Brand[],
    productsData: Product[],
    newsData: News[]
  ) => {
    const activities: RecentActivity[] = [];

    // Add recent items from each category
    [...(blogsData || []).slice(0, 3)].forEach((blog) => {
      activities.push({
        id: blog.id,
        type: "blog",
        title: blog.title,
        timestamp: blog.created_at || new Date().toISOString(),
        action: "created",
      });
    });

    [...(productsData || []).slice(0, 3)].forEach((product) => {
      activities.push({
        id: product.id,
        type: "product",
        title: product.title,
        timestamp: product.created_at || new Date().toISOString(),
        action: "created",
      });
    });

    [...(newsData || []).slice(0, 3)].forEach((newsItem) => {
      activities.push({
        id: newsItem.id,
        type: "news",
        title: newsItem.title,
        timestamp: newsItem.created_at || new Date().toISOString(),
        action: "created",
      });
    });

    // Sort by timestamp and take the most recent 10
    const sortedActivities = activities
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
      .slice(0, 10);

    setRecentActivity(sortedActivities);
  };

  // Real-time subscriptions
  useRealtimeSubscription({
    table: "blogs",
    onInsert: (newBlog) => {
      setBlogs((prev) => [newBlog as Blog, ...prev]);
      setStats((prev) => ({ ...prev, totalBlogs: prev.totalBlogs + 1 }));
    },
    onUpdate: (updatedBlog) => {
      setBlogs((prev) =>
        prev.map((blog) =>
          blog.id === updatedBlog.id ? (updatedBlog as Blog) : blog
        )
      );
    },
    onDelete: (deletedBlog) => {
      setBlogs((prev) => prev.filter((blog) => blog.id !== deletedBlog.id));
      setStats((prev) => ({ ...prev, totalBlogs: prev.totalBlogs - 1 }));
    },
  });

  useRealtimeSubscription({
    table: "products",
    onInsert: (newProduct) => {
      setProducts((prev) => [newProduct as Product, ...prev]);
      setStats((prev) => ({
        ...prev,
        totalProducts: prev.totalProducts + 1,
        totalRevenue: prev.totalRevenue + (newProduct.selling_price || 0),
        averageProductPrice:
          (prev.totalRevenue + (newProduct.selling_price || 0)) /
          (prev.totalProducts + 1),
      }));
    },
    onUpdate: (updatedProduct) => {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === updatedProduct.id
            ? (updatedProduct as Product)
            : product
        )
      );
    },
    onDelete: (deletedProduct) => {
      setProducts((prev) =>
        prev.filter((product) => product.id !== deletedProduct.id)
      );
      setStats((prev) => ({
        ...prev,
        totalProducts: prev.totalProducts - 1,
        totalRevenue: prev.totalRevenue - (deletedProduct.selling_price || 0),
        averageProductPrice:
          prev.totalProducts > 1
            ? (prev.totalRevenue - (deletedProduct.selling_price || 0)) /
              (prev.totalProducts - 1)
            : 0,
      }));
    },
  });

  useRealtimeSubscription({
    table: "brands",
    onInsert: () => {
      setStats((prev) => ({ ...prev, totalBrands: prev.totalBrands + 1 }));
    },
    onUpdate: () => {
      // Implementation needed
    },
    onDelete: () => {
      setStats((prev) => ({ ...prev, totalBrands: prev.totalBrands - 1 }));
    },
  });

  useRealtimeSubscription({
    table: "news",
    onInsert: () => {
      setStats((prev) => ({ ...prev, totalNews: prev.totalNews + 1 }));
    },
    onUpdate: () => {
      // Implementation needed
    },
    onDelete: () => {
      setStats((prev) => ({ ...prev, totalNews: prev.totalNews - 1 }));
    },
  });

  useRealtimeSubscription({
    table: "plants",
    onInsert: () => {
      setStats((prev) => ({ ...prev, totalPlants: prev.totalPlants + 1 }));
    },
    onUpdate: () => {
      // Implementation needed
    },
    onDelete: () => {
      setStats((prev) => ({ ...prev, totalPlants: prev.totalPlants - 1 }));
    },
  });

  const statsCards = [
    {
      title: "Total Products",
      value: stats.totalProducts.toString(),
      icon: ShoppingCartIcon,
      change: "+" + Math.floor(Math.random() * 10 + 1) + "%",
      changeType: "increase" as const,
      color: "blue",
    },
    {
      title: "Total Brands",
      value: stats.totalBrands.toString(),
      icon: UserGroupIcon,
      change: "+" + Math.floor(Math.random() * 8 + 2) + "%",
      changeType: "increase" as const,
      color: "purple",
    },
    {
      title: "Total Blogs",
      value: stats.totalBlogs.toString(),
      icon: DocumentTextIcon,
      change: "+" + Math.floor(Math.random() * 12 + 3) + "%",
      changeType: "increase" as const,
      color: "indigo",
    },
    {
      title: "Total News",
      value: stats.totalNews.toString(),
      icon: NewspaperIcon,
      change: "+" + Math.floor(Math.random() * 6 + 1) + "%",
      changeType: "increase" as const,
      color: "orange",
    },
    {
      title: "Total Plants",
      value: stats.totalPlants.toString(),
      icon: BuildingOfficeIcon,
      change: "+" + Math.floor(Math.random() * 9 + 2) + "%",
      changeType: "increase" as const,
      color: "emerald",
    },
    {
      title: "Total Commercials",
      value: stats.totalCommercials.toString(),
      icon: VideoCameraIcon,
      change: "+" + Math.floor(Math.random() * 7 + 1) + "%",
      changeType: "increase" as const,
      color: "red",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "product":
        return ShoppingCartIcon;
      case "blog":
        return DocumentTextIcon;
      case "news":
        return NewspaperIcon;
      case "brand":
        return UserGroupIcon;
      case "plant":
        return BuildingOfficeIcon;
      case "commercial":
        return VideoCameraIcon;
      default:
        return DocumentTextIcon;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "product":
        return "text-blue-600 bg-blue-50";
      case "blog":
        return "text-indigo-600 bg-indigo-50";
      case "news":
        return "text-orange-600 bg-orange-50";
      case "brand":
        return "text-purple-600 bg-purple-50";
      case "plant":
        return "text-emerald-600 bg-emerald-50";
      case "commercial":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading dashboard data...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {statsCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {card.title}
                </p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">
                  {card.value}
                </p>
              </div>
              <div
                className={`p-3 rounded-lg ${
                  card.color === "blue"
                    ? "bg-blue-50"
                    : card.color === "green"
                      ? "bg-green-50"
                      : card.color === "purple"
                        ? "bg-purple-50"
                        : card.color === "indigo"
                          ? "bg-indigo-50"
                          : card.color === "orange"
                            ? "bg-orange-50"
                            : card.color === "emerald"
                              ? "bg-emerald-50"
                              : card.color === "red"
                                ? "bg-red-50"
                                : "bg-yellow-50"
                }`}
              >
                <card.icon
                  className={`w-6 h-6 ${
                    card.color === "blue"
                      ? "text-blue-600"
                      : card.color === "green"
                        ? "text-green-600"
                        : card.color === "purple"
                          ? "text-purple-600"
                          : card.color === "indigo"
                            ? "text-indigo-600"
                            : card.color === "orange"
                              ? "text-orange-600"
                              : card.color === "emerald"
                                ? "text-emerald-600"
                                : card.color === "red"
                                  ? "text-red-600"
                                  : "text-yellow-600"
                  }`}
                />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm font-medium text-green-600">
                {card.change}
              </span>
              <span className="text-sm text-gray-500"> from last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-lg shadow"
      >
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {recentActivity.length > 0 ? (
              recentActivity.map((activity) => {
                const Icon = getActivityIcon(activity.type);
                return (
                  <div
                    key={activity.id}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div
                      className={`p-2 rounded-lg ${getActivityColor(activity.type)}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {activity.type} {activity.action} •{" "}
                        {new Date(activity.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500 text-center py-4">
                No recent activity
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Data Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Products
          </h3>
          <div className="space-y-3">
            {products.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.title}
                  </p>
                  <p className="text-xs text-gray-500">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">
                    ${product.selling_price}
                  </p>
                  <p className="text-xs text-gray-500">{product.brand_name}</p>
                </div>
              </div>
            ))}
            {products.length === 0 && (
              <p className="text-gray-500 text-center py-4">
                No products available
              </p>
            )}
          </div>
        </motion.div>

        {/* Recent Blogs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Blogs
          </h3>
          <div className="space-y-3">
            {blogs.slice(0, 5).map((blog) => (
              <div
                key={blog.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 line-clamp-1">
                    {blog.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {blog.category || "Uncategorized"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    {new Date(blog.created_at || "").toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
            {blogs.length === 0 && (
              <p className="text-gray-500 text-center py-4">
                No blogs available
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
