import { AddEventForm} from "../components/ui/add-event-form";
import logo from "@/assets/LogoM.svg";


export default function AddEventPage() {
  const handleSubmit = (formData: FormData) => {
    console.log("Données soumises :", formData);
  };

  return (
    <div className="flex flex-row items-center justify-center w-full p-10">
      <div className="flex-1 flex items-center justify-center">
        <img src={logo} alt="MirEvent Logo" className="max-w-full h-auto" />
      </div>
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-center text-2xl font-bold text-white p-6 pb-0">Enregistrer</h1>
        <AddEventForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
