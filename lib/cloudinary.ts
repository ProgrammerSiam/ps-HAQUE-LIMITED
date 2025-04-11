// // Client-side Cloudinary upload implementation
// export const uploadImage = async (file: File) => {
//   if (
//     !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
//     !process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ||
//     !process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
//   ) {
//     throw new Error("Cloudinary configuration is missing");
//   }

//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append(
//     "upload_preset",
//     process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
//   );

//   // For unsigned uploads, we don't need to send the API key
//   formData.append("timestamp", String(Date.now() / 1000));

//   const uploadUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

//   console.log("Cloudinary Config:", {
//     cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//     uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
//   });

//   console.log("Starting upload with:", {
//     cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//     uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
//     uploadUrl,
//     fileType: file.type,
//   });

//   try {
//     const response = await fetch(uploadUrl, {
//       method: "POST",
//       body: formData,
//     });

//     if (!response.ok) {
//       const error = await response.json();
//       console.error("Upload failed with response:", error);
//       throw new Error(error.error?.message || "Failed to upload image");
//     }

//     const data = await response.json();
//     console.log("Upload successful:", data);
//     return data.secure_url;
//   } catch (error) {
//     console.error("Upload error:", error);
//     throw error;
//   }
// };

// lib/cloudinary.js - Updated to use the server API route

export const uploadImage = async (file) => {
  if (!file) {
    throw new Error("No file provided");
  }

  // Create form data for the API request
  const formData = new FormData();
  formData.append("file", file);

  try {
    console.log("Starting upload through server API...");

    // Use the API route we created
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Upload failed:", errorData);
      throw new Error(errorData.error || "Failed to upload image");
    }

    const data = await response.json();
    console.log("Upload successful:", data);
    return data.url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
