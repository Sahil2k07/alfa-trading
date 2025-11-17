function ChooseUs() {
  const chooseUsItems = [
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Serving clients worldwide.",
    },
    {
      icon: "💼",
      title: "Extensive Product Portfolio",
      description:
        "A wide range of high quality industrial and scientific solutions.",
    },
    {
      icon: "🏷",
      title: "Competitive Pricing",
      description: "Providing maximum value without compromising on quality.",
    },
    {
      icon: "⚙️",
      title: "Technical Expertise & After Sales Support",
      description: "Reliable support, installation, and professional training.",
    },
    {
      icon: "⏱",
      title: "On-Time Delivery",
      description: "Efficient logistics to ensure timely project execution.",
    },
    {
      icon: "⭐",
      title: "Trusted by Industries & Institutions",
      description:
        "A recognized partner for reliable, high quality global trading.",
    },
  ];

  return (
    <section className="p-8 lg:p-16 flex flex-col gap-16">
      <h2 className="text-center font-bold text-alfa-blue text-2xl lg:text-4xl">
        <span className="inline-block border-b-4 border-alfa-blue pb-4 px-10">
          Our Core Sectors
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-6xl">
        {chooseUsItems.map((item) => (
          <div key={item.title} className="flex gap-5">
            <span className="text-4xl">{item.icon}</span>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>

              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChooseUs;
