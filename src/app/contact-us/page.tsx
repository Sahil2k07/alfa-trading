import ContactUsForm from "@/components/contact-us/ContactUsForm";

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
            <ContactUsForm />

            {/* CONTACT DETAILS */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-indigo-corporate text-alfa-blue p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Contact Details</h2>

                <address className="not-italic space-y-4">
                  <p className="text-lg font-semibold">
                    Alfa Trading House DMCC
                  </p>
                  <p className="text-lg text-gray-600">
                    Dubai Multi Commodities Centre (DMCC), UAE
                  </p>

                  <div className="pt-4 space-y-2 text-gray-800">
                    <p className="flex items-center space-x-3 text-lg">
                      <span className="text-amber-brand">📞</span>
                      <a href="tel:+971 55 2268150" className="hover:underline">
                        Phone: +971 55 2268150
                      </a>
                    </p>

                    <p className="flex items-center space-x-3 text-lg">
                      <span className="text-amber-brand">📧</span>
                      <a
                        href="mailto:info@alfatradingco.com"
                        className="hover:underline"
                      >
                        Email: info@alfatradingco.com
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
                  {/* <span className="text-gray-500">
                    [Optional Google Map Embed Placeholder]
                  </span> */}

                  <iframe
                    title="Our Location"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.971352662594!2d55.133962687140645!3d25.06896007963949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cad462eb9f3%3A0xe631d001b6b1c0fb!2sFortune%20Tower%20-%20Al%20Thanyah%20Fifth%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1763381497214!5m2!1sen!2sin"
                  ></iframe>
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
