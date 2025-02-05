import MyComponent from "../components/ui/card-dashboard";
import image1 from '@/assets/tiakola-foreztival.jpg.webp';
import image2 from '@/assets/Rectangle 9@2x.png';
import image3 from '@/assets/MirEnventLogo.png'



const DashboardOrga = () => {
  return (
    <div className="flex flex-col items-center space-y-4"> {/* Ajout de space-y-4 pour espacer les composants */}
      {/* Ajoute ici les autres composants si tu en as */}
      <MyComponent imageSrc={image2} /> {/* Passer une image différente si nécessaire */}
      <MyComponent imageSrc={image1} />
      <MyComponent imageSrc={image3} />
      <MyComponent imageSrc={image2} />
    </div>
  );
};

export default DashboardOrga;

  