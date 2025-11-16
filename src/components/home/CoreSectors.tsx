import SectorCard from "./SectorCard";

const sectorsList: SectorCardProps[] = [
  { icon: "🌾", title: "Agriculture", key: "Agriculture" },
  {
    icon: "🔬",
    title: "Scientific & Laboratory Supplies",
    key: "Scientific & Laboratory Supplies",
  },
  { icon: "📦", title: "Commodities", key: "Commodities" },
  {
    icon: "🎓",
    title: "Education & Technology",
    key: "Education & Technology",
  },
  { icon: "⚡", title: "Energy Solutions", key: "Energy Solutions" },
  { icon: "🏗", title: "Engineering Projects", key: "Engineering Projects" },
  { icon: "💊", title: "Health Supplements", key: "Health Supplements" },
  { icon: "🛡", title: "Safety & Security", key: "Safety & Security" },
  { icon: "🧵", title: "Textile Machinery", key: "Textile Machinery" },
  { icon: "🔧", title: "Workshop Equipment", key: "Workshop Equipment" },
];

function CoreSectors() {
  return (
    <section className="bg-[url('/Sector.png')] bg-cover bg-center bg-no-repeat p-8 lg:p-16 flex flex-col gap-16">
      <h2 className="text-center font-bold text-white text-2xl lg:text-4xl">
        <span className="inline-block border-b-2 border-white pb-4 px-10">
          Our Core Sectors
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto max-w-7xl">
        {sectorsList.map((sector: SectorCardProps) => (
          <SectorCard
            icon={sector.icon}
            title={sector.title}
            key={sector.key}
          />
        ))}
      </div>
    </section>
  );
}

export default CoreSectors;
