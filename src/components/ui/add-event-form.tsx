import { useState } from "react";
import { ChevronDown, ImageIcon } from "lucide-react";

export interface EventFormData {
  name: string;
  category: string;
  date: string;
  time: string;
  image: File | null;
  description: string;
}

interface EventFormProps {
  onSubmit: (data: EventFormData) => void;
}

export function AddEventForm({ onSubmit }: EventFormProps) {
  const [formData, setFormData] = useState<EventFormData>({
    name: "",
    category: "",
    date: "",
    time: "",
    image: null,
    description: "",
  });

  const categories = ["Musique", "Business", "Food & Drink", "Arts", "Community"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Soumettre les données via la fonction onSubmit
      
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 text-white">
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Nom de l'évènement</label>
        <input
          type="text"
          placeholder="Entrez le Nom de l'évènement"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white/40 transition-colors placeholder:text-white/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Catégorie</label>
        <div className="relative">
          <select
            value={formData.category}
            onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
            className="w-full bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white/40 transition-colors appearance-none"
          >
            <option value="" disabled className="bg-black">
              Sélectionner une catégorie
            </option>
            {categories.map((category) => (
              <option key={category} value={category} className="bg-black">
                {category}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 bottom-3 h-5 w-5 text-white/50 pointer-events-none" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Date et Heure</label>
        <div className="flex gap-4">
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
            className="flex-1 bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white/40 transition-colors [color-scheme:dark]"
          />
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData((prev) => ({ ...prev, time: e.target.value }))}
            className="flex-1 bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white/40 transition-colors [color-scheme:dark]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Image</label>
        <div className="relative">
          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="image-upload" />
          <label
            htmlFor="image-upload"
            className="flex items-center gap-2 text-white/50 border-b border-white/20 pb-2 cursor-pointer"
          >
            <ImageIcon className="h-5 w-5" />
            {formData.image ? formData.image.name : "Sélectionner une image"}
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-400">Description</label>
        <textarea
          placeholder="Entrez votre description"
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
          className="bg-transparent border-b border-white/20 pb-2 outline-none focus:border-white/40 transition-colors min-h-[100px] resize-none placeholder:text-white/50"
        />
      </div>

      <button
        type="submit"
        className="mt-4 py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
      >
        Ajouter
      </button>
    </form>
  );
}
