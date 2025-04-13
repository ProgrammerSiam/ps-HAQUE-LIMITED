export const uploadImage = async (file: File, folder: string = "products") => {
  if (!file) {
    throw new Error("No file provided");
  }

  // Create form data for the API request
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);

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
