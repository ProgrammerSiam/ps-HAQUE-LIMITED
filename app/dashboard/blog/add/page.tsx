"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { FormField, FormSection } from "@/components/dashboard/Form";
import { useState } from "react";

export default function AddBlogPost() {
  const [content, setContent] = useState("");

  return (
    <PageLayout title="Add Blog Post">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
        <form className="space-y-8">
          <FormSection title="Post Details">
            <FormField label="Title">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="Enter post title"
              />
            </FormField>

            <FormField label="Content">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                rows={6}
                placeholder="Write your post content..."
              />
            </FormField>
          </FormSection>

          <FormSection title="SEO">
            <FormField label="Meta Description">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="Enter meta description"
              />
            </FormField>
          </FormSection>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 text-gray-700 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
