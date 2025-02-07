import logo from "@/assets/LogoM.svg"; 
import LoginForm from "@/components/ui/login-form";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center w-full">
            {/* Section de l'image */}
            <div className="flex-1 flex items-center justify-center">
                <a href="/">
                  <img
                  src={logo}
                  alt="MirEnvent Logo"
                  className="max-w-full h-auto"
                  />
                </a>
            </div>

            
            <div className="flex-1 flex items-center justify-center">
                <LoginForm />
            </div>
        </div>

        
       
    </div>
  );
};

export default LoginPage;
