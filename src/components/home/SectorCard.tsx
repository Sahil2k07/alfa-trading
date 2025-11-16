function SectorCard({ icon, title }: SectorCardProps) {
  return (
    <div
      className="
        flex rounded-2xl flex-col items-center justify-center gap-6 py-6 px-4 
        bg-transparent 
        border-2 border-gray-500
        shadow-[6px_6px_0px_0px_rgba(255,200,0,0.7),0_0_20px_6px_rgba(255,200,0,0.4)]
        ring-1 ring-yellow-300/40
      "
    >
      <div
        className="
          flex items-center justify-center 
          w-20 h-20 rounded-full bg-white 
        "
      >
        <div className="text-4xl text-alfa-orange">{icon}</div>
      </div>

      <h3 className="text-white text-lg font-semibold text-center">{title}</h3>
    </div>
  );
}

export default SectorCard;
