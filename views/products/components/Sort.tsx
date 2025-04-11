import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Sort = ({
  sortBy,
  setSortBy,
}: {
  sortBy: string;
  setSortBy: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { value: "Default-Sorting", label: "Default Sorting" },
    { value: "Sort-by-popularity", label: "Sort by popularity" },
    { value: "Sort-by-average-rating", label: "Sort by average rating" },
    { value: "Sort-by-latest", label: "Sort by latest" },
    { value: "low-to-high", label: "Sort by price: low to high" },
    { value: "high-to-low", label: "Sort by price: high to low" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLabel =
    options.find((opt) => opt.value === sortBy)?.label || "Sort by";

  return (
    <div className="flex items-center justify-between gap-2 mt-4 md:mt-0">
      <span className="text-sm text-gray-500">Sort by:</span>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-[220px] px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
        >
          <span>{currentLabel}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
            {options.map((option) => (
              <button
                key={option.value}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                onClick={() => {
                  setSortBy(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;
