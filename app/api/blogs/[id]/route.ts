import { NextResponse } from "next/server";

// GET /api/brands/[id] - Get a single brand
export async function GET() {
  try {
    return NextResponse.json({ message: "Hello, Next.js!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// import { NextRequest, NextResponse } from "next/server";
// import { blogService } from "@/lib/services/blogService";

// type RouteParams = { params: { id: string } };

// export async function GET(request: NextRequest, { params }: RouteParams) {
//   try {
//     const blog = await blogService.getBlogById(params.id);
//     if (!blog) {
//       return NextResponse.json({ error: "Blog not found" }, { status: 404 });
//     }
//     return NextResponse.json(blog);
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch blog" },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(request: NextRequest, { params }: RouteParams) {
//   try {
//     const formData = await request.formData();
//     const data = {
//       title: formData.get("title") as string,
//       content: formData.get("content") as string,
//       category: formData.get("category") as string,
//       tags: JSON.parse(formData.get("tags") as string),
//       short_description: formData.get("short_description") as string,
//       meta_description: formData.get("meta_description") as string,
//     };

//     // Handle cover image
//     const coverImage = formData.get("cover_image") as File | null;
//     const coverImageUrl = formData.get("cover_image_url") as string | null;

//     const updateData = {
//       ...data,
//       cover_image: coverImage || coverImageUrl || undefined,
//     };

//     const blog = await blogService.updateBlog(params.id, updateData);
//     return NextResponse.json(blog);
//   } catch (error) {
//     console.error("Error updating blog:", error);
//     return NextResponse.json(
//       { error: "Failed to update blog" },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(request: NextRequest, { params }: RouteParams) {
//   try {
//     await blogService.deleteBlog(params.id);
//     return NextResponse.json({ message: "Blog deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting blog:", error);
//     return NextResponse.json(
//       { error: "Failed to delete blog" },
//       { status: 500 }
//     );
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import { blogService } from "@/lib/services/blogService";

// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const blog = await blogService.getBlogById(params.id);
//     if (!blog) {
//       return NextResponse.json({ error: "Blog not found" }, { status: 404 });
//     }
//     return NextResponse.json(blog);
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch blog" },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const formData = await request.formData();
//     const data = {
//       title: formData.get("title") as string,
//       content: formData.get("content") as string,
//       category: formData.get("category") as string,
//       tags: JSON.parse(formData.get("tags") as string),
//       short_description: formData.get("short_description") as string,
//       meta_description: formData.get("meta_description") as string,
//     };

//     // Handle cover image
//     const coverImage = formData.get("cover_image") as File | null;
//     const coverImageUrl = formData.get("cover_image_url") as string | null;

//     const updateData = {
//       ...data,
//       cover_image: coverImage || coverImageUrl || undefined,
//     };

//     const blog = await blogService.updateBlog(params.id, updateData);
//     return NextResponse.json(blog);
//   } catch (error) {
//     console.error("Error updating blog:", error);
//     return NextResponse.json(
//       { error: "Failed to update blog" },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await blogService.deleteBlog(params.id);
//     return NextResponse.json({ message: "Blog deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting blog:", error);
//     return NextResponse.json(
//       { error: "Failed to delete blog" },
//       { status: 500 }
//     );
//   }
// }
