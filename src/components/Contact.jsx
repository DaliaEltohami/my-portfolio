import React, { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    console.log(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://getform.io/f/aollgqkb", {
          method: "POST",
          body: new FormData(e.target),
        });
        if (response.ok) {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setSubmitStatus("error");
        }
      } catch (error) {
        setSubmitStatus("error");
      }
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-gray-100 py-20"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold inline-block border-b-4 border-blue-500 pb-2">
              Get in Touch
            </h2>
            <p className="mt-6 text-gray-400 text-lg">
              Have a question or want to work together? I'd love to hear from
              you.
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mb-8 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-500 text-center">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-8 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-500 text-center">
              Something went wrong. Please try again later.
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-400 mb-1 block"
              >
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-900 border-2 ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  } rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-400 mb-1 block"
              >
                Your Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-900 border-2 ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-400 mb-1 block"
              >
                Your Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-400 h-5 w-5" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full bg-gray-900 border-2 ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
                  placeholder="Your message here..."
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed transition-colors duration-300 text-white font-medium space-x-2 min-w-[200px]"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Additional Contact Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-400">
              Prefer email? Reach me directly at{" "}
              <a
                href="mailto:your.email@example.com"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                daliaeltohami1991@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
