import { ChevronDown } from "lucide-react"

interface Category {
  id: string
  name: string
}

interface CategoriesProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

export function Categories({ categories, activeCategory, onCategoryChange }: CategoriesProps) {
  return (
    <div className="flex gap-2 overflow-x-auto p-4 scrollbar-hide">
      <button className="flex items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
        Filters
        <ChevronDown className="h-4 w-4" />
      </button>

      <button className="flex items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
        Data
        <ChevronDown className="h-4 w-4" />
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`rounded-full px-4 py-2 text-sm transition-colors ${
            activeCategory === category.id ? "bg-blue-500 text-white" : "bg-white/90 text-black hover:bg-white/70"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

