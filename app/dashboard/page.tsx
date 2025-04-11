"use client";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios from "axios";

const statsCards = [
  {
    title: "Total Sales",
    value: "$23,456",
    icon: ChartBarIcon,
    change: "+12%",
    changeType: "increase",
  },
  {
    title: "Orders",
    value: "456",
    icon: ShoppingCartIcon,
    change: "+23%",
    changeType: "increase",
  },
  {
    title: "Customers",
    value: "2,345",
    icon: UserGroupIcon,
    change: "+8%",
    changeType: "increase",
  },
  {
    title: "Revenue",
    value: "$12,345",
    icon: CurrencyDollarIcon,
    change: "+15%",
    changeType: "increase",
  },
];

export default function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [brands, setBrands] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const blogsResponse = await axios.get("/api/blogs");
        const brandsResponse = await axios.get("/api/brands");
        const adminsResponse = await axios.get("/api/admins");

        setBlogs(blogsResponse.data);
        setBrands(brandsResponse.data);
        setAdmins(adminsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-lg shadow"
      >
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          {/* Add your activity content here */}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <div className="p-3 bg-blue-50 rounded-lg">
                <card.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`text-sm font-medium ${
                  card.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {card.change}
              </span>
              <span className="text-sm text-gray-500"> from last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Blogs */}
      <div>
        <h3 className="text-lg font-medium text-gray-900">Blogs</h3>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </ul>
      </div>

      {/* Brands */}
      <div>
        <h3 className="text-lg font-medium text-gray-900">Brands</h3>
        <ul>
          {brands.map((brand) => (
            <li key={brand.id}>{brand.name}</li>
          ))}
        </ul>
      </div>

      {/* Admins */}
      <div>
        <h3 className="text-lg font-medium text-gray-900">Admins</h3>
        <ul>
          {admins.map((admin) => (
            <li key={admin.id}>{admin.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
