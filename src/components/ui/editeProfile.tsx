import React, { useState } from 'react';
import { Eye, EyeOff, Pencil, Upload } from 'lucide-react';
import avatarPlaceholder from '../../assets/image.png';
import Button from "@/components/ui/bouton"; // Import du bouton personnalisé

const EditProfile: React.FC = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState(avatarPlaceholder);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  // Typage explicite de `isEditing` avec `keyof`
  const [isEditing, setIsEditing] = useState<{ username: boolean; email: boolean }>({
    username: false,
    email: false,
  });

  // Gestion de l'upload d'avatar
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setAvatar(file);
    }
  };

  // Fonction de sauvegarde
  const handleSave = () => {
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
    } else {
      setError('');
      alert("Modifications enregistrées avec succès !");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-2xl w-full p-8 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-center mb-4">Modifier le Profil</h2>
        
        {/* Avatar */}
        <div className="flex flex-col items-center mb-4">
          <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-gray-600 object-cover" />
          <label className="mt-2 flex items-center cursor-pointer text-sm text-gray-300 hover:text-blue-400">
            <Upload className="w-4 h-4 mr-2" /> Changer l'avatar
            <input type="file" className="hidden" onChange={handleAvatarChange} />
          </label>
        </div>
        
        {/* Champs modifiables */}
        <div className="space-y-4">
          {[{ label: 'Nom d’utilisateur', value: username, setter: setUsername, field: 'username' },
            { label: 'Email', value: email, setter: setEmail, field: 'email' }
          ].map(({ label, value, setter, field }, index) => (
            <div key={index} className="p-4 rounded-xl bg-black border border-white/20">
              <label className="text-xs font-regular text-gray-400">{label}</label>
              <div className="flex items-center justify-between mt-1">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  className="bg-transparent border-none focus:outline-none text-white text-lg font-bold w-full"
                  readOnly={!isEditing[field]} // Si en mode édition, permettre la modification
                />
                <Pencil
                  className="w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-400"
                  onClick={() => setIsEditing(prev => ({ ...prev, [field]: true }))} // Activer l'édition
                />
              </div>
            </div>
          ))}

          {/* Mot de passe */}
          {[{ label: 'Mot de passe', value: password, setter: setPassword, show: showPassword, setShow: setShowPassword },
            { label: 'Confirmer le mot de passe', value: confirmPassword, setter: setConfirmPassword, show: showConfirmPassword, setShow: setShowConfirmPassword }
          ].map(({ label, value, setter, show, setShow }, index) => (
            <div key={index} className="p-4 rounded-xl bg-black border border-white/20">
              <label className="text-xs font-regular text-gray-400">{label}</label>
              <div className="flex items-center justify-between mt-1">
                <input
                  type={show ? "text" : "password"}
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  className="bg-transparent border-none focus:outline-none text-white text-lg font-bold w-full"
                />
                {show ? (
                  <EyeOff className="w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-400" onClick={() => setShow(false)} />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-400" onClick={() => setShow(true)} />
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Affichage erreur */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        
        {/* Bouton sauvegarde */}
        <div className="w-full flex justify-center mt-6" onClick={handleSave}>
          <Button label="Enregistrer les modifications" />
        </div>

      </div>
    </div>
  );
};

export default EditProfile;
