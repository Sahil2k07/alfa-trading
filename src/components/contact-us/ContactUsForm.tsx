"use client";

import { toast } from "sonner";

function ContactUsForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (!response.success) {
        toast.error(response.message || "Something went wrong", {
          position: "bottom-right",
        });
        return;
      }

      toast.success(response?.message || "We received the message", {
        position: "top-right",
      });

      formElement.reset();
    } catch (error) {
      console.error(error);
      toast.error((error as Error)?.message || "Something went wrong", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
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
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 
             focus:ring-indigo-corporate focus:border-indigo-corporate"
          >
            <option value="" disabled hidden>
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
          className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-md text-base font-bold text-white rounded-md  bg-amber-brand hover:bg-alfa-blue bg-alfa-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-brand transition duration-300"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;
