"use client";
import { motion, AnimatePresence } from "framer-motion";

export const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        } text-white`}
      >
        {message}
        <button onClick={onClose} className="ml-4 text-white">
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
