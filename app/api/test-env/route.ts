// Create a test file to check your environment variables
// pages/api/test-env.js or app/api/test-env/route.js (depending on your Next.js version)

export default function handler(req, res) {
  // Only allow in development
  if (process.env.NODE_ENV !== "development") {
    return res.status(403).json({ error: "Forbidden in production" });
  }

  // Return environment variables for debugging
  res.status(200).json({
    cloudinary: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME || null,
      api_key: process.env.CLOUDINARY_API_KEY ? "Present" : null,
      api_secret: process.env.CLOUDINARY_API_SECRET ? "Present" : null,
    },
    public: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME || null,
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET || null,
    },
  });
}
