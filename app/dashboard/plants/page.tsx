"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { databaseService, type Product } from "@/lib/supabaseService";
import { useRealtimeSubscription } from "@/hooks/useRealtimeSubscription";
import { toast } from "react-hot-toast";

export default function PlantList() {
    const [plants, setPlants] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    // Load initial data
    useEffect(() => {
        const loadPlants = async () => {
            try {
                const data = await databaseService.products.getAll();
                setPlants(data);
            } catch (error: unknown) {
                // console.error("Error loading plants:", error);
                // toast.error(error.message || "Failed to load plants");
                if (error instanceof Error) {
                    // console.error("Error loading plants:", error);
                    // toast.error(error.message || "Failed to load plants");
                    console.error("Error loading plants:", error);
                    toast.error(error.message || "Failed to load plants");
                } else {
                    toast.error("Failed to load plants");
                }
            } finally {
                setLoading(false);
            }
        };

        loadPlants();
    }, []);

    // Set up real-time subscriptions
    useRealtimeSubscription<Product>({
        table: "products",
        onInsert: (newPlant) => {
            setPlants((prev) => [newPlant, ...prev]);
            toast.success("New plant added");
        },
        onUpdate: (updatedPlant) => {
            setPlants((prev) =>
                prev.map((plant) =>
                    plant.id === updatedPlant.id ? updatedPlant : plant
                )
            );
            toast.success("Plant updated");
        },
        onDelete: (deletedPlant) => {
            setPlants((prev) =>
                prev.filter((plant) => plant.id !== deletedPlant.id)
            );
            toast.success("Plant deleted");
        },
    });

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this plant?")) {
            try {
                setDeletingId(id);
                await databaseService.products.delete(id);
                toast.success("Plant deleted successfully");
            } catch (error: unknown) {
                // console.error("Error deleting plant:", error);
                // toast.error(error.message || "Failed to delete plant");
                if (error instanceof Error) {
                    console.error("Error deleting plant:", error);
                    toast.error(error.message || "Failed to delete plant");
                } else {
                    toast.error("Failed to delete plant");
                }
            } finally {
                setDeletingId(null);
            }
        }
    };

    if (loading) {
        return (
            <PageLayout title="All Plants">
                <div className="flex items-center justify-center h-64">
                    <div className="text-gray-500">Loading plants...</div>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout
            title="Our Plants"
            actions={
                <Link href="/dashboard/plants/add">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                        Add Plant
                    </motion.button>
                </Link>
            }
        >
            {plants.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500">No plants added yet</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plants.map((plant) => (
                        <motion.div
                            key={plant.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-lg shadow-sm overflow-hidden"
                        >
                            <div className="aspect-video relative">
                                <Image
                                    src={plant.image_url}
                                    alt={plant.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium text-lg mb-2">
                                    {plant.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-2">
                                    {plant.description}
                                </p>
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-4">
                                    {plant.category}
                                </span>
                                <div className="flex justify-end space-x-2">
                                    <Link
                                        href={`/dashboard/plants/${plant.id}`}
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-3 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                                        >
                                            Edit
                                        </motion.button>
                                    </Link>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleDelete(plant.id)}
                                        className="px-3 py-1 text-red-600 border border-red-600 rounded hover:bg-red-50 disabled:opacity-50"
                                        disabled={deletingId === plant.id}
                                    >
                                        {deletingId === plant.id
                                            ? "Deleting..."
                                            : "Delete"}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </PageLayout>
    );
}
