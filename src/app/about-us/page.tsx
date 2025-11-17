import Image from "next/image";

function AboutUs() {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-alfa-orange mb-10 text-center">
          About Us
        </h1>

        <section className="mb-16 p-6 bg-white rounded-xl shadow-lg flex gap-10 justify-center items-center">
          <Image
            src={"/Company.png"}
            width={500}
            height={500}
            alt="Company environment"
            className="hidden lg:block rounded-3xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-alfa-blue mb-4">
              Company Overview
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Alfa Trading House DMCC is a globally recognized general trading
              company specializing in **laboratory equipment, commodities,
              agricultural technologies, industrial systems, and educational
              solutions.**
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Since inception, our focus has been on **quality, customer
              satisfaction, and efficient global connectivity.** We partner with
              manufacturers and clients worldwide to deliver reliable solutions
              backed by technical expertise.
            </p>
          </div>
        </section>

        <section className="mb-16 bg-indigo-50 p-8 rounded-xl shadow-inner border-l-4 border-orange-500">
          <h2 className="text-3xl font-bold text-alfa-orange mb-4">
            Vision Statement
          </h2>
          <blockquote className="text-xl italic text-gray-700 pl-4">
            “To provide our clients with high-quality equipment at the most
            competitive prices by building modern infrastructure and connecting
            global markets… delivering the highest quality products and services
            to clients worldwide.”
          </blockquote>
        </section>

        <section className="mb-16 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-alfa-blue mb-6">
            Mission Statement
          </h2>
          <ul className="space-y-3 text-lg text-gray-600 list-none">
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-3 font-bold">•</span>{" "}
              Deliver reliable, technology-driven solutions
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-3 font-bold">•</span>{" "}
              Provide world-className, value-for-money products
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-3 font-bold">•</span>{" "}
              Build long-term global partnerships
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-3 font-bold">•</span>{" "}
              Offer exceptional technical support and after-sales service
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-alfa-blue mb-6">
            Our Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-2 border-alfa-orange text-center">
              <span className="text-4xl text-black mb-2 block">📋</span>
              <h3 className="text-xl font-semibold text-black mb-2">
                Project Planning & Design
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-2 border-alfa-orange text-center">
              <span className="text-4xl text-black mb-2 block">🖨️</span>
              <h3 className="text-xl font-semibold text-black mb-2">
                Printing, Branding & Installation
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-2 border-alfa-orange text-center">
              <span className="text-4xl text-black mb-2 block">🧑‍💻</span>
              <h3 className="text-xl font-semibold text-black mb-2">
                Technical Support & Training
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-2 border-alfa-orange text-center">
              <span className="text-4xl text-black mb-2 block">🔑</span>
              <h3 className="text-xl font-semibold text-black mb-2">
                Complete Turnkey Execution
              </h3>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutUs;
