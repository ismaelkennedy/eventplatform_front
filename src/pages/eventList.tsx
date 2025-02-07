import { useState, useEffect } from "react";
import axios from "axios";
import { Categories } from "@/components/ui/tag";
import MyComponent from "@/components/ui/card-eventList";

export default function EventListPage() {
    const [categories, setCategories] = useState<{ id: number, name: string }[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>("");

    
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/categories")
            .then(response => {
                setCategories(response.data);
                if (response.data.length > 0) {
                    setActiveCategory(response.data[0].id.toString()); 
                }
            })
            .catch(error => console.error("Erreur lors du chargement des catégories :", error));
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className='pb-10'>
                <Categories categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
            </div>
            <MyComponent categoryId={activeCategory} />
        </div>
    );
}

