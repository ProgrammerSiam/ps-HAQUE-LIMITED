import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

interface CommercialFormProps {
  initialValues?: {
    videoFile?: string;
    youtubeUrl?: string;
    title?: string;
    description?: string;
    category?: string;
  };
  mode: "add" | "edit";
  onSubmit: (data: {
    videoFile: string;
    youtubeUrl: string;
    title: string;
    description: string;
    category: string;
  }) => Promise<void>;
  loading?: boolean;
  onCancel?: () => void;
}

export function CommercialForm({
  initialValues,
  mode,
  onSubmit,
  loading,
  onCancel,
}: CommercialFormProps) {
  const [formData, setFormData] = useState({
    videoFile: initialValues?.videoFile || "",
    youtubeUrl: initialValues?.youtubeUrl || "",
    title: initialValues?.title || "",
    description: initialValues?.description || "",
    category: initialValues?.category || "tv_commercial",
  });
  const [errors, setErrors] = useState({
    youtubeUrl: "",
    videoFile: "",
    category: "",
  });
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    // Set preview if editing
    if (formData.videoFile) setVideoPreview(formData.videoFile);
    else if (formData.youtubeUrl) {
      const embedUrl = getEmbedUrl(formData.youtubeUrl);
      if (embedUrl) setVideoPreview(embedUrl);
    }
    // eslint-disable-next-line
  }, []);

  const validateYouTubeUrl = (url: string) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return youtubeRegex.test(url);
  };

  const getVideoId = (url: string) => {
    const youtubePatterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
      /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
    ];
    for (const pattern of youtubePatterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const getEmbedUrl = (url: string) => {
    const videoId = getVideoId(url);
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return null;
  };

  const showWarningPopup = (message: string) => {
    setWarningMessage(message);
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "youtubeUrl" && value) {
      const isValid = validateYouTubeUrl(value);
      if (!isValid) {
        setErrors((prev) => ({
          ...prev,
          youtubeUrl: "Please enter a valid YouTube URL",
        }));
        showWarningPopup(
          "Invalid YouTube URL. Please enter a valid YouTube link."
        );
        setVideoPreview(null);
        return;
      }
      const embedUrl = getEmbedUrl(value);
      if (embedUrl) {
        setVideoPreview(embedUrl);
        setErrors((prev) => ({ ...prev, youtubeUrl: "" }));
      } else {
        showWarningPopup(
          "Could not extract video ID from the URL. Please check the link."
        );
        setVideoPreview(null);
      }
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVideoUpload = async (result: CloudinaryUploadWidgetResults) => {
    if (result.event === "success") {
      if (typeof result.info !== "string") {
        const info = result.info as CloudinaryUploadWidgetInfo;
        setFormData((prev) => ({ ...prev, videoFile: info.secure_url }));
        setVideoPreview(info.secure_url);
      }
      setIsUploading(false);
    } else if (result.event === "progress") {
      setUploadProgress(0);
    } else if (result.event === "error") {
      setErrors((prev) => ({
        ...prev,
        videoFile: "Upload failed. Please try again.",
      }));
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.videoFile && !formData.youtubeUrl) {
      setErrors((prev) => ({
        ...prev,
        videoFile: "Please provide either a video file or YouTube URL",
      }));
      return;
    }
    if (formData.youtubeUrl && !validateYouTubeUrl(formData.youtubeUrl)) {
      setErrors((prev) => ({
        ...prev,
        youtubeUrl: "Please enter a valid YouTube URL",
      }));
      return;
    }
    setIsUploading(true);
    await onSubmit(formData);
    setIsUploading(false);
  };

  return (
    <>
      {showWarning && (
        <div className="fixed top-4 right-4 z-50">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Warning! </strong>
            <span className="block sm:inline">{warningMessage}</span>
          </motion.div>
        </div>
      )}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Video Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Commercial Video (Upload or YouTube Link)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-2 text-center">
                {videoPreview ? (
                  <div className="w-full aspect-video">
                    {formData.youtubeUrl ? (
                      <iframe
                        src={videoPreview}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={videoPreview}
                        className="w-full h-full rounded-lg"
                        controls
                      />
                    )}
                  </div>
                ) : (
                  <CldUploadWidget
                    uploadPreset="haque_presets"
                    options={{
                      maxFiles: 1,
                      resourceType: "video",
                      maxFileSize: 100000000,
                    }}
                    onSuccess={(result, {}) => handleVideoUpload(result)}
                  >
                    {({ open }) => (
                      <>
                        <div className="mx-auto h-32 w-32 flex items-center justify-center">
                          <svg
                            className="h-12 w-12 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 4v16M17 4v16M3 8h18M3 16h18"
                            />
                          </svg>
                        </div>
                        <div className="flex text-sm text-gray-600 justify-center">
                          <button
                            type="button"
                            onClick={() => open()}
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                          >
                            Upload video
                          </button>
                        </div>
                        <p className="text-xs text-gray-500">
                          MP4, WebM up to 100MB
                        </p>
                        {isUploading && (
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `${uploadProgress}%` }}
                            ></div>
                          </div>
                        )}
                      </>
                    )}
                  </CldUploadWidget>
                )}
                {errors.videoFile && (
                  <p className="text-xs text-red-500">{errors.videoFile}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="youtubeUrl"
                value={formData.youtubeUrl}
                onChange={handleInputChange}
                className={`mt-6 p-3 block w-full rounded-lg border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.youtubeUrl ? "border-red-500" : ""}`}
                placeholder="Or enter YouTube video URL"
              />
              {errors.youtubeUrl && (
                <p className="text-xs text-red-500 mt-1">{errors.youtubeUrl}</p>
              )}
            </div>
          </div>
          {/* Commercial Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title (Optional)
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 p-3 block w-full rounded-lg border border-gray-300/50 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter commercial title"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="A brief description of the commercial."
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleSelectChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="tv_commercial">TV Commercial</option>
                <option value="recipe_video">Recipe Video</option>
              </select>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCancel}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              disabled={loading || isUploading}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
              disabled={loading || isUploading}
            >
              {loading || isUploading
                ? mode === "add"
                  ? "Adding..."
                  : "Saving..."
                : mode === "add"
                  ? "Add Commercial"
                  : "Save Changes"}
            </motion.button>
          </div>
        </form>
      </div>
    </>
  );
}
