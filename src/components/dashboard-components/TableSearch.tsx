import { SearchIcon } from "lucide-react";

interface TableSearchProps {
  placeholder?: string;
  onSearchChange?: (query: string) => void;  // Optional prop for handling input changes
}

export default function TableSearch({ placeholder = "Search...", onSearchChange }: TableSearchProps) {
  return (
    <div className="flex items-center w-full gap-2 px-2 text-sm transition duration-200 ease-in-out rounded-full md:w-auto ring-2 ring-gray-300 hover:ring-gray-400 focus-within:ring-gray-500">
      {/* Search Icon with dynamic color on focus */}
      <SearchIcon className="text-gray-500 transition hover:text-gray-700" size={20} />
      
      {/* Search Input */}
      <input 
        type="text"
        placeholder={placeholder}
        aria-label="Search Table"
        className="w-[180px] md:w-[200px] lg:w-[250px] p-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
        onChange={(e) => onSearchChange?.(e.target.value)} // Trigger onSearchChange if provided
      />
    </div>
  );
}
