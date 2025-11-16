function ContactUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold text-indigo-corporate mb-4 text-center">
            Get in Touch
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            We are ready to assist you with your scientific, agricultural, or
            industrial needs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* FORM SECTION */}
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <form action="#" method="POST" className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-corporate focus:border-indigo-corporate"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-corporate focus:border-indigo-corporate"
                    />
                  </div>
                </div>

                {/* Company + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-corporate focus:border-indigo-corporate"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-corporate focus:border-indigo-corporate"
                    />
                  </div>
                </div>

                {/* Sector */}
                <div>
                  <label
                    htmlFor="sector"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sector of Interest
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    defaultValue=""
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-corporate focus:border-indigo-corporate"
                  >
                    <option value="" disabled>
                      Select a Sector
                    </option>
                    <option>Agriculture</option>
                    <option>Scientific & Lab Supplies</option>
                    <option>Commodities</option>
                    <option>Education & Technology</option>
                    <option>Energy</option>
                    <option>Engineering Projects</option>
                    <option>Health Supplements</option>
                    <option>Safety & Security</option>
                    <option>Textile Machinery</option>
                    <option>Workshop Equipment</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-corporate focus:border-indigo-corporate"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-md text-base font-medium rounded-md text-white bg-amber-brand hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-brand transition duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* CONTACT DETAILS */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-indigo-corporate text-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Contact Details</h2>

                <address className="not-italic space-y-4">
                  <p className="text-lg font-semibold">
                    Alfa Trading House DMCC
                  </p>
                  <p className="text-lg">
                    Dubai Multi Commodities Centre (DMCC), UAE
                  </p>

                  <div className="pt-4 space-y-2">
                    <p className="flex items-center space-x-3 text-lg">
                      <span className="text-amber-brand">📞</span>
                      <a href="tel:+" className="hover:underline">
                        Phone: +[Insert]
                      </a>
                    </p>

                    <p className="flex items-center space-x-3 text-lg">
                      <span className="text-amber-brand">📧</span>
                      <a href="mailto:info@" className="hover:underline">
                        Email: info@[insert].com
                      </a>
                    </p>
                  </div>
                </address>
              </div>

              {/* Map placeholder */}
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Our Location
                </h3>
                <div className="h-64 w-full bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">
                    [Optional Google Map Embed Placeholder]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactUs;
