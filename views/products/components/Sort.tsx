import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Sort = ({
    sortBy,
    setSortBy,
}: {
    sortBy: string;
    setSortBy: (value: string) => void;
}) => {
    return (
        <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Default-Sorting">
                        Default Sorting
                    </SelectItem>
                    <SelectItem value="Sort-by-popularity">
                        Sort by popularity
                    </SelectItem>
                    <SelectItem value=" Sort-by-average-rating">
                        Sort by average rating
                    </SelectItem>
                    <SelectItem value="Sort-by-latest">
                        Sort by latest
                    </SelectItem>
                    <SelectItem value="low-to-high">
                        Sort by price: low to high
                    </SelectItem>
                    <SelectItem value="high-to-low">
                        Sort by price: high to low
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Sort;
