// // import { NextResponse } from "next/server";
// // import { createClient } from "@/lib/supabase";
// // const supabase = createClient();

// // export const dynamic = "force-dynamic";

// // // GET /api/plants/[id]
// // export async function GET(
// //   request: Request,
// //   { params }: { params: { id: string } }
// // ) {
// //   if (!params.id) {
// //     return NextResponse.json(
// //       { error: "Plant ID is required" },
// //       { status: 400 }
// //     );
// //   }

// //   try {
// //     const { data: plant, error } = await supabase
// //       .from("plants")
// //       .select("*")
// //       .eq("id", params.id)
// //       .single();

// //     if (error) {
// //       console.error("Supabase error:", error);
// //       return NextResponse.json(
// //         { error: error.message || "Failed to fetch plant" },
// //         { status: 500 }
// //       );
// //     }

// //     if (!plant) {
// //       return NextResponse.json({ error: "Plant not found" }, { status: 404 });
// //     }

// //     return NextResponse.json(plant);
// //   } catch (error: unknown) {
// //     console.error("Error fetching plant:", error);
// //     return NextResponse.json(
// //       { error: (error as Error).message || "Failed to fetch plant" },
// //       { status: 500 }
// //     );
// //   }
// // }

// // // PUT /api/plants/[id]
// // export async function PUT(
// //   request: Request,
// //   { params }: { params: { id: string } }
// // ) {
// //   if (!params.id) {
// //     return NextResponse.json(
// //       { error: "Plant ID is required" },
// //       { status: 400 }
// //     );
// //   }

// //   try {
// //     const body = await request.json();
// //     const { name, description, category, image_url } = body;

// //     if (!name || !category || !image_url) {
// //       return NextResponse.json(
// //         { error: "Missing required fields" },
// //         { status: 400 }
// //       );
// //     }

// //     const { data: plant, error } = await supabase
// //       .from("plants")
// //       .update({
// //         name,
// //         description,
// //         category,
// //         image_url,
// //         updated_at: new Date().toISOString(),
// //       })
// //       .eq("id", params.id)
// //       .select()
// //       .single();

// //     if (error) {
// //       console.error("Supabase error:", error);
// //       return NextResponse.json(
// //         { error: error.message || "Failed to update plant" },
// //         { status: 500 }
// //       );
// //     }

// //     if (!plant) {
// //       return NextResponse.json({ error: "Plant not found" }, { status: 404 });
// //     }

// //     return NextResponse.json(plant);
// //   } catch (error: unknown) {
// //     console.error("Error updating plant:", error);
// //     return NextResponse.json(
// //       { error: (error as Error).message || "Failed to update plant" },
// //       { status: 500 }
// //     );
// //   }
// // }

// // // DELETE /api/plants/[id]
// // export async function DELETE(
// //   request: Request,
// //   { params }: { params: { id: string } }
// // ) {
// //   if (!params.id) {
// //     return NextResponse.json(
// //       { error: "Plant ID is required" },
// //       { status: 400 }
// //     );
// //   }

// //   try {
// //     const { error } = await supabase
// //       .from("plants")
// //       .delete()
// //       .eq("id", params.id);

// //     if (error) {
// //       console.error("Supabase error:", error);
// //       return NextResponse.json(
// //         { error: error.message || "Failed to delete plant" },
// //         { status: 500 }
// //       );
// //     }

// //     return NextResponse.json({ success: true });
// //   } catch (error: unknown) {
// //     console.error("Error deleting plant:", error);
// //     return NextResponse.json(
// //       { error: (error as Error).message || "Failed to delete plant" },
// //       { status: 500 }
// //     );
// //   }
// // }

// import { NextResponse } from "next/server";
// import { createClient } from "@/lib/supabase";

// const supabase = createClient();

// export const dynamic = "force-dynamic";

// // GET /api/plants/[id]
// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = params;

//   if (!id) {
//     return NextResponse.json(
//       { error: "Plant ID is required" },
//       { status: 400 }
//     );
//   }

//   try {
//     const { data: plant, error } = await supabase
//       .from("plants")
//       .select("*")
//       .eq("id", id)
//       .single();

//     if (error) {
//       console.error("Supabase error:", error);
//       return NextResponse.json(
//         { error: error.message || "Failed to fetch plant" },
//         { status: 500 }
//       );
//     }

//     if (!plant) {
//       return NextResponse.json({ error: "Plant not found" }, { status: 404 });
//     }

//     return NextResponse.json(plant);
//   } catch (error: unknown) {
//     console.error("Error fetching plant:", error);
//     return NextResponse.json(
//       { error: (error as Error).message || "Failed to fetch plant" },
//       { status: 500 }
//     );
//   }
// }

// // PUT /api/plants/[id]
// export async function PUT(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = params;

//   if (!id) {
//     return NextResponse.json(
//       { error: "Plant ID is required" },
//       { status: 400 }
//     );
//   }

//   try {
//     const body = await request.json();
//     const { name, description, category, image_url } = body;

//     if (!name || !category || !image_url) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const { data: plant, error } = await supabase
//       .from("plants")
//       .update({
//         name,
//         description,
//         category,
//         image_url,
//         updated_at: new Date().toISOString(),
//       })
//       .eq("id", id)
//       .select()
//       .single();

//     if (error) {
//       console.error("Supabase error:", error);
//       return NextResponse.json(
//         { error: error.message || "Failed to update plant" },
//         { status: 500 }
//       );
//     }

//     if (!plant) {
//       return NextResponse.json({ error: "Plant not found" }, { status: 404 });
//     }

//     return NextResponse.json(plant);
//   } catch (error: unknown) {
//     console.error("Error updating plant:", error);
//     return NextResponse.json(
//       { error: (error as Error).message || "Failed to update plant" },
//       { status: 500 }
//     );
//   }
// }

// // DELETE /api/plants/[id]
// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = params;

//   if (!id) {
//     return NextResponse.json(
//       { error: "Plant ID is required" },
//       { status: 400 }
//     );
//   }

//   try {
//     const { error } = await supabase.from("plants").delete().eq("id", id);

//     if (error) {
//       console.error("Supabase error:", error);
//       return NextResponse.json(
//         { error: error.message || "Failed to delete plant" },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ success: true });
//   } catch (error: unknown) {
//     console.error("Error deleting plant:", error);
//     return NextResponse.json(
//       { error: (error as Error).message || "Failed to delete plant" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase";

const supabase = createClient();

export const dynamic = "force-dynamic";

// GET /api/plants/[id]
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // Changed: params is now a Promise
) {
  const { id } = await params; // Changed: await the params

  if (!id) {
    return NextResponse.json(
      { error: "Plant ID is required" },
      { status: 400 }
    );
  }

  try {
    const { data: plant, error } = await supabase
      .from("plants")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to fetch plant" },
        { status: 500 }
      );
    }

    if (!plant) {
      return NextResponse.json({ error: "Plant not found" }, { status: 404 });
    }

    return NextResponse.json(plant);
  } catch (error: unknown) {
    console.error("Error fetching plant:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Failed to fetch plant" },
      { status: 500 }
    );
  }
}

// PUT /api/plants/[id]
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // Changed: params is now a Promise
) {
  const { id } = await params; // Changed: await the params

  if (!id) {
    return NextResponse.json(
      { error: "Plant ID is required" },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();
    const { name, description, category, image_url } = body;

    if (!name || !category || !image_url) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data: plant, error } = await supabase
      .from("plants")
      .update({
        name,
        description,
        category,
        image_url,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to update plant" },
        { status: 500 }
      );
    }

    if (!plant) {
      return NextResponse.json({ error: "Plant not found" }, { status: 404 });
    }

    return NextResponse.json(plant);
  } catch (error: unknown) {
    console.error("Error updating plant:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Failed to update plant" },
      { status: 500 }
    );
  }
}

// DELETE /api/plants/[id]
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // Changed: params is now a Promise
) {
  const { id } = await params; // Changed: await the params

  if (!id) {
    return NextResponse.json(
      { error: "Plant ID is required" },
      { status: 400 }
    );
  }

  try {
    const { error } = await supabase.from("plants").delete().eq("id", id);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to delete plant" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error deleting plant:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Failed to delete plant" },
      { status: 500 }
    );
  }
}
