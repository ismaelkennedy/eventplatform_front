export default function EventButton() {
  return (
    <div className="inline-block">
      <button className="flex items-center gap-6 px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl hover:opacity-90 transition-opacity">
        <div className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            <path d="M8 13V9m-3 4v-4m11 4v-4m-3 4v-4m-8-3H5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2h2" />
            <path d="M19 21v-7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v7" />
            <rect width="18" height="4" x="3" y="17" rx="1" />
          </svg>
        </div>
        <div className="text-left">
          <h2 className="text-white text-2xl font-medium">
            Créer un évènement
          </h2>
          <p className="text-white/90 text-lg">Organisez, vivez, profitez !</p>
        </div>
      </button>
    </div>
  );
}