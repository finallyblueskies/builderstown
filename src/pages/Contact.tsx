import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { setPageTitle } from "@/utils/title";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setPageTitle("Contact Us");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-gray-600">
          Contact us to discuss your next construction project
        </p>
      </div>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="space-y-6"
      >
        <input
          type="hidden"
          name="access_key"
          value="ad8d2d43-9347-487c-8c7e-43b4b179edc2"
        />
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-theme focus:outline-none focus:ring-1 focus:ring-theme"
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
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-theme focus:outline-none focus:ring-1 focus:ring-theme"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-theme focus:outline-none focus:ring-1 focus:ring-theme"
          />
        </div>

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
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-theme focus:outline-none focus:ring-1 focus:ring-theme"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-theme hover:bg-theme-dark text-white px-4 py-3 rounded-lg transition-colors duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
