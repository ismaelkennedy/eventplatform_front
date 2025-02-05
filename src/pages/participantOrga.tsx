import MyComponent from "../components/ui/card-participant"; // Assurez-vous d'utiliser le bon chemin

const DashboardOrga = () => {
  return (
    <div className="flex flex-col items-center space-y-4"> {/* Ajout d'un espace entre les composants */}
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </div>
  );
};

export default DashboardOrga;

