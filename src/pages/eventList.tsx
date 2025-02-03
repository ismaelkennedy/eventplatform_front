import { useState } from "react"
import { Categories } from "@/components/ui/tag"



const categories = [
    { id: "music", name: "Music" },
    { id: "business", name: "Business" },
    { id: "food", name: "Food & Drink" },
    { id: "arts", name: "Arts" },
    { id: "community", name: "Community" },
    { id: "music-2", name: "Music" },
  ]
export default function EventListPage() {
    const [activeCategory, setActiveCategory] = useState("arts")
  return (
    <div className='flex items-center justify-center'>
      <Categories categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      {/* Reste de votre contenu */}
    </div>
  )
}
