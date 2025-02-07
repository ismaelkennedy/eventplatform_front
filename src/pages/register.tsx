import logo from "@/assets/LogoM.svg"; 
import RegisterForm from "@/components/ui/register-form"

const RegisterPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center w-full">
            
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
                <RegisterForm/>
            </div>
        </div>

        
    </div>
  );
};

export default RegisterPage;
