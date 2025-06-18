import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const supabase = createClient();
  try {
    const { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", context.params.id)
      .single();

    if (error) throw error;
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch product" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import { supabase } from "@/lib/supabase";

// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { data: product, error } = await supabase
//       .from("products")
//       .select("*")
//       .eq("id", params.id)
//       .single();

//     if (error) throw error;
//     if (!product) {
//       return NextResponse.json({ error: "Product not found" }, { status: 404 });
//     }

//     return NextResponse.json(product);
//   } catch (error: any) {
//     return NextResponse.json(
//       { error: error.message || "Failed to fetch product" },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const body = await request.json();

//     const { data: product, error } = await supabase
//       .from("products")
//       .update({
//         title: body.title,
//         description: body.description,
//         category: body.category,
//         brand_name: body.brand_name,
//         stock_status: body.stock_status,
//         stock_quantity: body.stock_quantity,
//         original_price: body.original_price,
//         selling_price: body.selling_price,
//         image_url: body.image_url,
//         updated_at: new Date().toISOString(),
//       })
//       .eq("id", params.id)
//       .select()
//       .single();

//     if (error) throw error;
//     if (!product) {
//       return NextResponse.json({ error: "Product not found" }, { status: 404 });
//     }

//     return NextResponse.json(product);
//   } catch (error: any) {
//     return NextResponse.json(
//       { error: error.message || "Failed to update product" },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { error } = await supabase
//       .from("products")
//       .delete()
//       .eq("id", params.id);

//     if (error) throw error;

//     return NextResponse.json({ message: "Product deleted successfully" });
//   } catch (error: any) {
//     return NextResponse.json(
//       { error: error.message || "Failed to delete product" },
//       { status: 500 }
//     );
//   }
// }
