"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Blog, blogService } from "@/lib/services/blogService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ImageUpload } from "@/components/image-upload";
import { CategorySelect } from "@/components/category-select";
import { TagSelect } from "@/components/tag-select";
import { RichTextEditor } from "../dashboard/RichTextEditor";
// import { Editor } from "@/components/editor";
// import { RichTextEditor } from "@/components/dashboard/rich-text-editor";
// import { ImageUpload } from "@/components/dashboard/image-upload";
// import { CategorySelect } from "@/components/dashboard/category-select";
// import { TagSelect } from "@/components/dashboard/tag-select";

interface BlogFormProps {
    blog?: Blog;
}

export function BlogForm({ blog }: BlogFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [content, setContent] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
    console.log(blog);

    // Initialize form data when editing a blog
    useEffect(() => {
        if (blog) {
            setContent(blog.content || "");
            setSelectedCategory(blog.category || "");
            setSelectedTags(blog.tags || []);
            setTitle(blog.title || "");
            setShortDescription(blog.short_description || "");
            setMetaDescription(blog.meta_description || "");
            setCoverImage(blog.cover_image || "");
        }
    }, [blog]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);

            // Validate required fields
            if (!title || !content || !selectedCategory) {
                toast.error("Please fill in all required fields");
                return;
            }

            const formData = new FormData();
            formData.append("title", title);
            formData.append("content", content);
            formData.append("category", selectedCategory);
            formData.append("tags", JSON.stringify(selectedTags));
            formData.append("short_description", shortDescription);
            formData.append("meta_description", metaDescription);

            // Only append cover_image if there's a new file
            if (coverImageFile) {
                formData.append("cover_image", coverImageFile);
            } else if (coverImage) {
                // If no new file but we have an existing image URL, keep it
                // formData.append("cover_image_url", coverImage);
                formData.append("cover_image", coverImage);
            }

            const updatedInputs = {
                title: formData.get("title") as string,
                content: formData.get("content") as string,
                category: formData.get("category") as string,
                tags: JSON.parse(formData.get("tags") as string),
                short_description: formData.get("short_description") as string,
                meta_description: formData.get("meta_description") as string,
                cover_image: formData.get("cover_image") as string | File,
            };

            console.log(updatedInputs);

            const updatedBlog = await blogService.updateBlog(
                blog?.id || "",
                updatedInputs
            );

            toast.success(
                updatedBlog
                    ? "Blog updated successfully"
                    : "Blog created successfully"
            );
            router.push("/dashboard/blog");
            router.refresh();
        } catch (error) {
            console.error("Error saving blog:", error);
            toast.error("Failed to save blog");
        } finally {
            setIsSubmitting(false);
        }
    };

    //! ----- previous handleSubmit code. -----
    //! ----- Fetch request for updating blog is not properly working so fetch has been replaced with blogService -----

    // const handleSubmit = async (e: React.FormEvent) => {
    //   e.preventDefault();

    //   try {
    //     setIsSubmitting(true);

    //     // Validate required fields
    //     if (!title || !content || !selectedCategory) {
    //       toast.error("Please fill in all required fields");
    //       return;
    //     }

    //     const formData = new FormData();
    //     formData.append("title", title);
    //     formData.append("content", content);
    //     formData.append("category", selectedCategory);
    //     formData.append("tags", JSON.stringify(selectedTags));
    //     formData.append("short_description", shortDescription);
    //     formData.append("meta_description", metaDescription);

    //     // Only append cover_image if there's a new file
    //     if (coverImageFile) {
    //       formData.append("cover_image", coverImageFile);
    //     } else if (coverImage) {
    //       // If no new file but we have an existing image URL, keep it
    //       formData.append("cover_image_url", coverImage);
    //     }

    //     const url = blog ? `/api/blogs/${blog.id}` : "/api/blogs";
    //     const method = blog ? "PUT" : "POST";

    //     const response = await fetch(url, {
    //       method,
    //       body: formData,
    //     });

    //     if (!response.ok) {
    //       throw new Error("Failed to save blog");
    //     }

    //     toast.success(
    //       blog ? "Blog updated successfully" : "Blog created successfully"
    //     );
    //     router.push("/dashboard/blog");
    //     router.refresh();
    //   } catch (error) {
    //     console.error("Error saving blog:", error);
    //     toast.error("Failed to save blog");
    //   } finally {
    //     setIsSubmitting(false);
    //   }
    // };

    const handleImageDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error("Image size should be less than 5MB");
                return;
            }
            setCoverImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    }, []);

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label>Cover Image</Label>
                    <ImageUpload
                        value={coverImage}
                        onChange={handleImageDrop}
                        onRemove={() => {
                            setCoverImage("");
                            setCoverImageFile(null);
                        }}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter blog title"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="shortDescription">Short Description</Label>
                    <Textarea
                        id="shortDescription"
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                        placeholder="Enter a brief description"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Content *</Label>
                    <div className="relative z-10">
                        {/* <Editor
                            value={content}
                            onChange={setContent}
                            placeholder="Write your blog content here..."
                        /> */}
                        <RichTextEditor
                            content={content}
                            onChange={setContent}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Category *</Label>
                    <div className="relative z-30">
                        <CategorySelect
                            value={selectedCategory}
                            onChange={setSelectedCategory}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Tags</Label>
                    <div className="relative z-20">
                        <TagSelect
                            value={selectedTags}
                            onChange={setSelectedTags}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="metaDescription">
                        Meta Description (SEO)
                    </Label>
                    <Textarea
                        id="metaDescription"
                        value={metaDescription}
                        onChange={(e) => setMetaDescription(e.target.value)}
                        placeholder="Enter meta description for SEO"
                    />
                </div>
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 mt-6 w-full md:w-auto"
            >
                {isSubmitting
                    ? "Saving..."
                    : blog
                      ? "Update Blog"
                      : "Create Blog"}
            </Button>
        </form>
    );
}
