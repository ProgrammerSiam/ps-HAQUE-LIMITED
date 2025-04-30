"use client";
import { PageLayout } from "@/components/dashboard/PageLayout";
import { FormField, FormSection } from "@/components/dashboard/Form";
import { RichTextEditor } from "@/components/dashboard/RichTextEditor";
import Select from "react-select";
import { useState, useRef } from "react";
import { blogService, CreateBlogInput } from "@/lib/services/blogService";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface CategoryOption {
    value: string;
    label: string;
}

const categoryOptions: CategoryOption[] = [
    { value: "technology", label: "Technology" },
    { value: "business", label: "Business" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "education", label: "Education" },
];

const tagOptions: CategoryOption[] = [
    { value: "web-development", label: "Web Development" },
    { value: "javascript", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "typescript", label: "TypeScript" },
    { value: "programming", label: "Programming" },
];

const MAX_TITLE_LENGTH = 255;
const MAX_SHORT_DESC_LENGTH = 500;
const MAX_META_DESC_LENGTH = 160;
const MIN_CONTENT_LENGTH = 100;

export default function AddBlogPost() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [content, setContent] = useState("");
    const [selectedCategory, setSelectedCategory] =
        useState<CategoryOption | null>(null);
    const [selectedTags, setSelectedTags] = useState<CategoryOption[]>([]);
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [coverImage, setCoverImage] = useState<string | null>(null);
    const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const validateForm = (): boolean => {
        if (!title.trim()) {
            toast.error("Please enter a title");
            return false;
        }

        if (title.length > MAX_TITLE_LENGTH) {
            toast.error(
                `Title must be less than ${MAX_TITLE_LENGTH} characters`
            );
            return false;
        }

        if (!content.trim()) {
            toast.error("Please enter some content");
            return false;
        }

        if (content.length < MIN_CONTENT_LENGTH) {
            toast.error(
                `Content must be at least ${MIN_CONTENT_LENGTH} characters`
            );
            return false;
        }

        if (!selectedCategory) {
            toast.error("Please select a category");
            return false;
        }

        if (selectedTags.length === 0) {
            toast.error("Please select at least one tag");
            return false;
        }

        if (
            shortDescription &&
            shortDescription.length > MAX_SHORT_DESC_LENGTH
        ) {
            toast.error(
                `Short description must be less than ${MAX_SHORT_DESC_LENGTH} characters`
            );
            return false;
        }

        if (metaDescription && metaDescription.length > MAX_META_DESC_LENGTH) {
            toast.error(
                `Meta description must be less than ${MAX_META_DESC_LENGTH} characters`
            );
            return false;
        }

        if (!coverImageFile) {
            toast.error("Please upload a cover image");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            setIsSubmitting(true);
            toast.loading("Creating blog post...");

            const blogData: CreateBlogInput = {
                title,
                short_description: shortDescription,
                content,
                // category: selectedCategory?.value,
                category: selectedCategory?.value || "",
                tags: selectedTags.map((tag) => tag.value),
                meta_description: metaDescription,
            };

            if (coverImageFile) {
                blogData.cover_image = coverImageFile;
            }

            await blogService.createBlog(blogData);
            toast.dismiss();
            toast.success("Blog post created successfully!");
            router.push("/dashboard/blog");
            router.refresh();
        } catch (error) {
            console.error("Error creating blog post:", error);
            toast.dismiss();
            toast.error("Failed to create blog post. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        if (newTitle.length > MAX_TITLE_LENGTH) {
            toast.error(
                `Title must be less than ${MAX_TITLE_LENGTH} characters`
            );
        }
    };

    const handleShortDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const newDesc = e.target.value;
        setShortDescription(newDesc);
        if (newDesc.length > MAX_SHORT_DESC_LENGTH) {
            toast.error(
                `Short description must be less than ${MAX_SHORT_DESC_LENGTH} characters`
            );
        }
    };

    const handleMetaDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const newDesc = e.target.value;
        setMetaDescription(newDesc);
        if (newDesc.length > MAX_META_DESC_LENGTH) {
            toast.error(
                `Meta description must be less than ${MAX_META_DESC_LENGTH} characters`
            );
        }
    };

    const handleContentChange = (newContent: string) => {
        setContent(newContent);
        if (newContent.length < MIN_CONTENT_LENGTH) {
            toast.error(
                `Content must be at least ${MIN_CONTENT_LENGTH} characters`
            );
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                toast.error("File size should be less than 10MB");
                return;
            }

            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            if (!allowedTypes.includes(file.type)) {
                toast.error(
                    "Please upload a valid image file (JPG, PNG, or GIF)"
                );
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                setCoverImage(reader.result as string);
                setCoverImageFile(file);
                toast.success("Cover image uploaded successfully!");
            };
            reader.onerror = () => {
                toast.error("Failed to read the image file");
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                toast.error("File size should be less than 10MB");
                return;
            }

            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            if (!allowedTypes.includes(file.type)) {
                toast.error(
                    "Please upload a valid image file (JPG, PNG, or GIF)"
                );
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                setCoverImage(reader.result as string);
                setCoverImageFile(file);
                toast.success("Cover image uploaded successfully!");
            };
            reader.onerror = () => {
                toast.error("Failed to read the image file");
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCategoryChange = (option: CategoryOption | null) => {
        setSelectedCategory(option);
        if (option) {
            toast.success(`Category "${option.label}" selected`);
        }
    };

    const handleTagsChange = (options: readonly CategoryOption[]) => {
        setSelectedTags(options as CategoryOption[]);
        if (options.length > 0) {
            toast.success(
                `${options.length} tag${options.length > 1 ? "s" : ""} selected`
            );
        }
    };

    return (
        <PageLayout title="Add Blog Post">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <FormSection title="Cover Image">
                        <div
                            className={`border-2 border-dashed rounded-lg transition-colors ${
                                isDragging
                                    ? "border-blue-500 bg-blue-50"
                                    : "border-gray-300 hover:border-gray-400"
                            }`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            {coverImage ? (
                                <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden">
                                    <img
                                        src={coverImage}
                                        alt="Blog cover"
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity" />
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCoverImage(null);
                                            setCoverImageFile(null);
                                            toast.success(
                                                "Cover image removed"
                                            );
                                        }}
                                        className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line
                                                x1="18"
                                                y1="6"
                                                x2="6"
                                                y2="18"
                                            />
                                            <line
                                                x1="6"
                                                y1="6"
                                                x2="18"
                                                y2="18"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            ) : (
                                <div className="py-12 flex flex-col items-center">
                                    <svg
                                        className="mx-auto h-16 w-16 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="mt-4 text-center">
                                        <span className="text-sm font-medium text-blue-600">
                                            Upload cover image
                                        </span>
                                        <p className="mt-1 text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                        <p className="mt-2 text-xs text-gray-400">
                                            Recommended size: 1920x820 pixels
                                        </p>
                                    </div>
                                </div>
                            )}
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/png,image/jpeg,image/gif"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                        </div>
                    </FormSection>

                    <FormSection title="Post Details">
                        <FormField label="Title">
                            <div className="space-y-1">
                                <input
                                    type="text"
                                    value={title}
                                    onChange={handleTitleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                                    placeholder="Enter post title"
                                    required
                                />
                                <p className="text-xs text-gray-500 text-right">
                                    {title.length}/{MAX_TITLE_LENGTH} characters
                                </p>
                            </div>
                        </FormField>

                        <FormField label="Short Description">
                            <div className="space-y-1">
                                <textarea
                                    value={shortDescription}
                                    onChange={handleShortDescriptionChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                                    placeholder="Enter a short description of your post"
                                    rows={3}
                                />
                                <p className="text-xs text-gray-500 text-right">
                                    {shortDescription.length}/
                                    {MAX_SHORT_DESC_LENGTH} characters
                                </p>
                            </div>
                        </FormField>

                        <FormField label="Category">
                            <Select<CategoryOption>
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                options={categoryOptions}
                                className="w-full"
                                placeholder="Select a category"
                                classNames={{
                                    control: () =>
                                        "!border-gray-300 hover:!border-primary-500",
                                }}
                            />
                        </FormField>

                        <FormField label="Tags">
                            <Select<CategoryOption, true>
                                isMulti
                                value={selectedTags}
                                onChange={handleTagsChange}
                                options={tagOptions}
                                className="w-full"
                                placeholder="Select tags"
                                classNames={{
                                    control: () =>
                                        "!border-gray-300 hover:!border-primary-500",
                                }}
                            />
                        </FormField>

                        <FormField label="Content">
                            <div className="space-y-1">
                                <RichTextEditor
                                    content={content}
                                    onChange={handleContentChange}
                                />
                                <p className="text-xs text-gray-500">
                                    Minimum {MIN_CONTENT_LENGTH} characters
                                    required
                                </p>
                            </div>
                        </FormField>
                    </FormSection>

                    <FormSection title="SEO">
                        <FormField label="Meta Description">
                            <div className="space-y-1">
                                <textarea
                                    value={metaDescription}
                                    onChange={handleMetaDescriptionChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                                    placeholder="Enter meta description for SEO"
                                    rows={2}
                                />
                                <p className="text-xs text-gray-500 text-right">
                                    {metaDescription.length}/
                                    {MAX_META_DESC_LENGTH} characters
                                </p>
                            </div>
                        </FormField>
                    </FormSection>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="px-4 py-2 text-gray-700 border rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm hover:shadow-md ${
                                isSubmitting
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                            }`}
                        >
                            {isSubmitting ? "Publishing..." : "Publish Post"}
                        </button>
                    </div>
                </form>
            </div>
        </PageLayout>
    );
}
