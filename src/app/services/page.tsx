const serviceData = [
  {
    title: "Project Planning",
    icon: "📋",
    description:
      "Strategic planning and consultation to ensure project success.",
  },
  {
    title: "Designing & Printing",
    icon: "📐",
    description: "Design, printing, and branding for project components.",
  },
  {
    title: "Installation & Commissioning",
    icon: "🔧",
    description: "Professional setup and testing of all equipment and systems.",
  },
  {
    title: "Technical Support",
    icon: "🧑‍💻",
    description: "Reliable after-sales support and maintenance services.",
  },
  {
    title: "On-site Training",
    icon: "🎓",
    description: "Professional training for staff on equipment operation.",
  },
  {
    title: "Turnkey Project Solutions",
    icon: "🔑",
    description: "Full management and execution from start to finish.",
  },
  {
    title: "Global Procurement & Export",
    icon: "🌍",
    description: "Efficient worldwide sourcing and logistics services.",
  },
  {
    title: "Custom Product Sourcing",
    icon: "🔎",
    description: "Finding specialized products tailored to client needs.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold text-indigo-corporate mb-4 text-center">
            Our Services
          </h1>

          <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            We offer comprehensive, end-to-end solutions designed to support
            your project from concept to completion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-amber-brand text-center"
              >
                <span className="text-4xl text-indigo-corporate mb-3 block">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold text-indigo-corporate mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
