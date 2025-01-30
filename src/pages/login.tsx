import logo from "@/assets/LogoM.svg"; // Ajustez le chemin d'import en fonction de votre structure
import Bouton from "@/components/ui/bouton";
import LoginForm from "@/components/ui/login-form";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center w-full">
            {/* Section de l'image */}
            <div className="flex-1 flex items-center justify-center">
                <img
                src={logo}
                alt="MirEnvent Logo"
                className="max-w-full h-auto"
                />
            </div>

            {/* Section du formulaire */}
            <div className="flex-1 flex items-center justify-center">
                <LoginForm />
            </div>
        </div>

        {/* Conteneur centré pour le bouton */}
        <div className="w-full flex justify-center mt-6">
            <Bouton label="Se connecter" />
        </div>
    </div>
  );
};

export default LoginPage;
