import Image from "next/image";

const SectorsPage = () => {
  const sectorData = [
    {
      id: "agri",
      title: "Agriculture",
      icon: "🌾",
      slogan: "Empowering Global Farming with Advanced Technology",
      focuses: [
        "Farm Machinery & Implements",
        "Crop & Food Processing Equipment",
        "Greenhouse Systems",
        "Irrigation Systems (Drip, Sprinkler, Micro)",
      ],
      image: "/Agriculture.png",
      alt: "A picture of a farm",
    },
    {
      id: "sci",
      title: "Scientific & Laboratory Supplies",
      icon: "🔬",
      slogan: "Premium Chemicals, Reagents & Lab Equipment",
      focuses: [
        "Analytical Reagents, HPLC Solvents",
        "Fine Chemicals, Culture Media, High-Purity Acids",
        "Laboratory Glassware & Consumables",
        "pH Indicators, Rare Earth Oxides",
      ],
      image: "/Science.png",
      alt: "Scientific and lab supplies visual",
    },
    {
      id: "com",
      title: "Commodities",
      icon: "📦",
      slogan: "Reliable Global Commodity Supply Chain",
      focuses: [
        "Food commodities",
        "Essential industrial materials",
        "Bulk trading support",
      ],
      image: "/Commodities.png",
      alt: "Commodities sector visual",
    },
    {
      id: "edu",
      title: "Education & Technology",
      icon: "🎓",
      slogan: "Modern Learning Tools for Institutions",
      focuses: [
        "Smart Classroom Solutions",
        "ICT Equipment",
        "STEM & Robotics Kits",
        "Teaching Modules & Models",
      ],
      image: "/Education.png",
      alt: "Education and technology visual",
    },
    {
      id: "energy",
      title: "Energy Solutions",
      icon: "⚡",
      slogan: "Sustainable Energy Systems",
      focuses: [
        "Renewable energy solutions",
        "Power backup systems",
        "Industrial energy equipment",
      ],
      image: "/EnergySolutions.png",
      alt: "Energy solutions visual",
    },
    {
      id: "eng",
      title: "Engineering Projects & Management",
      icon: "🏗",
      slogan: "End-to-End Engineering Solutions",
      focuses: ["Project design", "Consultancy", "Installation & maintenance"],
      image: "/Engineering.png",
      alt: "Engineering sector visual",
    },
    {
      id: "health",
      title: "Health Supplements",
      icon: "💊",
      slogan: "Trusted Health & Nutrition Products",
      focuses: ["Multivitamins", "Wellness products", "Nutraceuticals"],
      image: "/HealthSupplements.png",
      alt: "Health supplements visual",
    },
    {
      id: "safety",
      title: "Safety & Security",
      icon: "🛡",
      slogan: "Workplace Protection & Monitoring",
      focuses: ["PPE", "Surveillance systems", "Fire safety equipment"],
      image: "/Security.png",
      alt: "Safety and security sector visual",
    },
    {
      id: "textile",
      title: "Textile Machinery",
      icon: "🧵",
      slogan: "Advanced Textile Production Systems",
      focuses: [
        "Spinning machinery",
        "Weaving machinery",
        "Dyeing & finishing machinery",
      ],
      image: "/Textile.png",
      alt: "Textile machinery visual",
    },
    {
      id: "workshop",
      title: "Workshop Equipment",
      icon: "🔧",
      slogan: "Tools & Equipment for Industries",
      focuses: [
        "Industrial tools",
        "Mechanical workshop items",
        "Maintenance & repair machinery",
      ],
      image: "/Workshop.png",
      alt: "Workshop equipment visual",
    },
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold text-indigo-corporate mb-4 text-center">
        Our Industry Expertise
      </h1>
      <p className="text-xl text-center text-gray-600 mb-16 max-w-4xl mx-auto">
        We supply high-quality products, technologies, and turnkey solutions to
        global industries across multiple sectors. Select a category below to
        learn more.
      </p>

      <div className="space-y-20">
        {sectorData.map((sector, index) => {
          const isLeftAligned = index % 2 === 0;

          const content = (
            <div
              className={`md:w-1/2 p-6 rounded-xl border-l-4 border-amber-brand ${
                !isLeftAligned ? "md:order-last" : ""
              }`}
            >
              <h2 className="text-4xl font-extrabold text-indigo-corporate mb-3 flex items-center">
                <span className="text-5xl mr-3 text-amber-brand">
                  {sector.icon}
                </span>
                {sector.title}
              </h2>
              <p className="text-xl font-semibold text-gray-700 mb-6">
                {sector.slogan}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Key Focuses:
              </h3>
              <ul className="list-none text-gray-600 space-y-2">
                {sector.focuses.map((focus, focusIndex) => (
                  <li key={focusIndex} className="flex items-start text-lg">
                    <span className="text-indigo-corporate text-xl mr-2 mt-1">
                      →
                    </span>
                    <span className="text-base">{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          );

          const visual = (
            <div
              className={`md:w-1/2 h-80 bg-gray-100 rounded-xl shadow-inner flex items-center justify-center border border-gray-300 ${
                isLeftAligned ? "md:order-last" : ""
              }`}
            >
              <Image
                src={sector.image}
                alt={sector.alt}
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          );

          return (
            <div
              key={sector.id}
              id={sector.id}
              className="flex flex-col md:flex-row items-center gap-10 bg-white p-6 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500"
            >
              {isLeftAligned ? (
                <>
                  {content}
                  {visual}
                </>
              ) : (
                <>
                  {visual}
                  {content}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectorsPage;
