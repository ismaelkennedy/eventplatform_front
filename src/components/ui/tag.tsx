import { ChevronDown } from "lucide-react";

interface Category {
  id: number; 
  name: string;
}

interface CategoriesProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function Categories({ categories, activeCategory, onCategoryChange }: CategoriesProps) {
  return (
    <div className="flex gap-2 overflow-x-auto p-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id.toString())}
          className={`rounded-full px-4 py-2 text-sm transition-colors ${
            activeCategory === category.id.toString() ? "bg-blue-500 text-white" : "bg-white/90 text-black hover:bg-white/70"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
