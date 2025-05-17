import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Placeholder.configure({
        placeholder: "Write your post content...",
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  //! Update editor content when the `content` prop changes
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  const handleButtonClick = (e: React.MouseEvent, callback: () => void) => {
    e.preventDefault();
    callback();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      // Insert image into editor
      editor
        .chain()
        .focus()
        .setImage({ src: previewUrl, alt: file.name })
        .run();
    }
  };

  const handleImageButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="border-b p-2 flex gap-2 bg-gray-50 flex-wrap items-center">
        <button
          type="button"
          onClick={(e) =>
            handleButtonClick(e, () =>
              editor.chain().focus().toggleBold().run()
            )
          }
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("bold") ? "bg-gray-200 text-blue-600" : ""
          }`}
        >
          Bold
        </button>
        <button
          type="button"
          onClick={(e) =>
            handleButtonClick(e, () =>
              editor.chain().focus().toggleItalic().run()
            )
          }
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("italic") ? "bg-gray-200 text-blue-600" : ""
          }`}
        >
          Italic
        </button>
        <button
          type="button"
          onClick={(e) =>
            handleButtonClick(e, () =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            )
          }
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("heading") ? "bg-gray-200 text-blue-600" : ""
          }`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={(e) =>
            handleButtonClick(e, () =>
              editor.chain().focus().toggleBulletList().run()
            )
          }
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("bulletList") ? "bg-gray-200 text-blue-600" : ""
          }`}
        >
          Bullet List
        </button>
        <button
          type="button"
          onClick={(e) =>
            handleButtonClick(e, () =>
              editor.chain().focus().toggleOrderedList().run()
            )
          }
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("orderedList") ? "bg-gray-200 text-blue-600" : ""
          }`}
        >
          Numbered List
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            const url = window.prompt("Enter URL");
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("link") ? "bg-gray-200 text-blue-600" : ""
          }`}
        >
          Link
        </button>
        <button
          type="button"
          onClick={handleImageButtonClick}
          className="p-2 rounded hover:bg-gray-200 transition-colors flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          Image
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
      <EditorContent
        editor={editor}
        className="p-4 min-h-[300px] prose max-w-none"
      />
      {imagePreview && (
        <div className="p-4 border-t">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Last uploaded image preview:
          </p>
          <div className="relative w-40 h-40 rounded-lg overflow-hidden border">
            <NextImage
              src={imagePreview}
              alt="Preview"
              fill
              className="object-cover"
            />
            <button
              type="button"
              onClick={() => setImagePreview(null)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

//! previous code
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Link from "@tiptap/extension-link";
// import Image from "@tiptap/extension-image";
// import Placeholder from "@tiptap/extension-placeholder";
// import { useRef, useState } from "react";

// interface RichTextEditorProps {
//   content: string;
//   onChange: (content: string) => void;
// }

// export function RichTextEditor({ content, onChange }: RichTextEditorProps) {
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Link.configure({
//         openOnClick: false,
//       }),
//       Image,
//       Placeholder.configure({
//         placeholder: "Write your post content...",
//       }),
//     ],
//     content,
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//   });

//   if (!editor) {
//     return null;
//   }

//   const handleButtonClick = (e: React.MouseEvent, callback: () => void) => {
//     e.preventDefault();
//     callback();
//   };

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       // Create a preview URL
//       const previewUrl = URL.createObjectURL(file);
//       setImagePreview(previewUrl);

//       // Insert image into editor
//       editor
//         .chain()
//         .focus()
//         .setImage({ src: previewUrl, alt: file.name })
//         .run();
//     }
//   };

//   const handleImageButtonClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     fileInputRef.current?.click();
//   };

//   return (
//     <div className="border rounded-lg overflow-hidden">
//       <div className="border-b p-2 flex gap-2 bg-gray-50 flex-wrap items-center">
//         <button
//           type="button"
//           onClick={(e) =>
//             handleButtonClick(e, () =>
//               editor.chain().focus().toggleBold().run()
//             )
//           }
//           className={`p-2 rounded hover:bg-gray-200 transition-colors ${
//             editor.isActive("bold") ? "bg-gray-200 text-blue-600" : ""
//           }`}
//         >
//           Bold
//         </button>
//         <button
//           type="button"
//           onClick={(e) =>
//             handleButtonClick(e, () =>
//               editor.chain().focus().toggleItalic().run()
//             )
//           }
//           className={`p-2 rounded hover:bg-gray-200 transition-colors ${
//             editor.isActive("italic") ? "bg-gray-200 text-blue-600" : ""
//           }`}
//         >
//           Italic
//         </button>
//         <button
//           type="button"
//           onClick={(e) =>
//             handleButtonClick(e, () =>
//               editor.chain().focus().toggleHeading({ level: 2 }).run()
//             )
//           }
//           className={`p-2 rounded hover:bg-gray-200 transition-colors ${
//             editor.isActive("heading") ? "bg-gray-200 text-blue-600" : ""
//           }`}
//         >
//           H2
//         </button>
//         <button
//           type="button"
//           onClick={(e) =>
//             handleButtonClick(e, () =>
//               editor.chain().focus().toggleBulletList().run()
//             )
//           }
//           className={`p-2 rounded hover:bg-gray-200 transition-colors ${
//             editor.isActive("bulletList") ? "bg-gray-200 text-blue-600" : ""
//           }`}
//         >
//           Bullet List
//         </button>
//         <button
//           type="button"
//           onClick={(e) =>
//             handleButtonClick(e, () =>
//               editor.chain().focus().toggleOrderedList().run()
//             )
//           }
//           className={`p-2 rounded hover:bg-gray-200 transition-colors ${
//             editor.isActive("orderedList") ? "bg-gray-200 text-blue-600" : ""
//           }`}
//         >
//           Numbered List
//         </button>
//         <button
//           type="button"
//           onClick={(e) => {
//             e.preventDefault();
//             const url = window.prompt("Enter URL");
//             if (url) {
//               editor.chain().focus().setLink({ href: url }).run();
//             }
//           }}
//           className={`p-2 rounded hover:bg-gray-200 transition-colors ${
//             editor.isActive("link") ? "bg-gray-200 text-blue-600" : ""
//           }`}
//         >
//           Link
//         </button>
//         <button
//           type="button"
//           onClick={handleImageButtonClick}
//           className="p-2 rounded hover:bg-gray-200 transition-colors flex items-center gap-1"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//             <circle cx="8.5" cy="8.5" r="1.5" />
//             <polyline points="21 15 16 10 5 21" />
//           </svg>
//           Image
//         </button>
//         <input
//           ref={fileInputRef}
//           type="file"
//           accept="image/*"
//           onChange={handleImageUpload}
//           className="hidden"
//         />
//       </div>
//       <EditorContent
//         editor={editor}
//         className="p-4 min-h-[300px] prose max-w-none"
//       />
//       {imagePreview && (
//         <div className="p-4 border-t">
//           <p className="text-sm font-medium text-gray-700 mb-2">
//             Last uploaded image preview:
//           </p>
//           <div className="relative w-40 h-40 rounded-lg overflow-hidden border">
//             <img
//               src={imagePreview}
//               alt="Preview"
//               className="object-cover w-full h-full"
//             />
//             <button
//               type="button"
//               onClick={() => setImagePreview(null)}
//               className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
