"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useEffect } from "react";

const AVAILABLE_TAGS = [
  "React",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Node.js",
  "CSS",
  "HTML",
  "Web Development",
  "Frontend",
  "Backend",
  "Database",
  "API",
  "UI/UX",
  "DevOps",
  "Testing",
];

interface TagSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function TagSelect({ value, onChange }: TagSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>(value);

  useEffect(() => {
    console.log("TagSelect value changed:", value);
    setSelectedTags(value);
  }, [value]);

  const filteredTags = AVAILABLE_TAGS.filter((tag) =>
    tag.toLowerCase().includes(search.toLowerCase())
  ).filter((tag) => !selectedTags.includes(tag));

  const removeTag = (tagToRemove: string) => {
    const newTags = selectedTags.filter((tag) => tag !== tagToRemove);
    setSelectedTags(newTags);
    onChange(newTags);
  };

  const addTag = (tag: string) => {
    const newTags = [...selectedTags, tag];
    setSelectedTags(newTags);
    onChange(newTags);
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2 min-h-[2.5rem] w-full rounded-md border border-input bg-transparent px-3 py-2">
        {selectedTags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="flex items-center gap-1"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="h-4 w-4 rounded-full hover:bg-muted"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="h-7 rounded bg-transparent px-2 text-sm hover:bg-muted"
            >
              Select tags...
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0" align="start">
            <Command>
              <div className="flex items-center border-b px-3">
                <input
                  placeholder="Search tags..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <CommandGroup className="max-h-[200px] overflow-auto">
                {filteredTags.map((tag) => (
                  <CommandItem key={tag} onSelect={() => addTag(tag)}>
                    {tag}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
