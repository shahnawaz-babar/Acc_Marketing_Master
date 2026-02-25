import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  MapPin
} from "lucide-react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new URLSearchParams(formData);

    await fetch(
      "https://script.google.com/macros/s/AKfycbyuwRu65B5td9AuvYaxIG5mTuUaXX3qzZF5yAReiCsSYFmdphkgin4YQ7O7pvDrPpF_qg/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      }
    );

    alert("Enquiry submitted successfully ✅");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-[#FDECEC] via-[#F8F9FB] to-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E1E]">
            Let’s Talk About Your{" "}
            <span className="text-[#D32F2F] drop-shadow-lg">Business</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Tell us about your goals and challenges. Our team will get back to you
            with a customized marketing solution.
          </p>

          <ul className="mt-10 space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-[#D32F2F] text-xl">✔</span>
              Free strategy consultation
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#D32F2F] text-xl">✔</span>
              No obligation, no spam
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#D32F2F] text-xl">✔</span>
              Response within 24 hours
            </li>
          </ul>

          {/* 🌟 PREMIUM CONTACT CARD */}
          <div className="mt-12 relative max-w-md group">

            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-700 via-[#D32F2F] to-red-500 
            rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>

            {/* Card */}
            <div className="relative bg-gradient-to-br from-[#7A0000] via-[#D32F2F] to-red-500 
            rounded-2xl p-7 text-white shadow-2xl backdrop-blur-md 
            border border-white/20 transition-all duration-300 
            group-hover:-translate-y-1">

              <h3 className="text-2xl font-bold mb-6">
                Contact Us
              </h3>

              <div className="space-y-5 text-sm">

                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-red-200 mt-1" />
                  <span>India • Serving Clients Worldwide</span>
                </div>

                <a
                  href="tel:+919893509493"
                  className="flex items-center gap-4 hover:translate-x-1 transition"
                >
                  <Phone size={20} className="text-red-200" />
                  <span className="hover:underline">
                    +91 98935 09493
                  </span>
                </a>

                <a
                  href="mailto:acemarketing.masters@gmail.com"
                  className="flex items-center gap-4 hover:translate-x-1 transition"
                >
                  <Mail size={20} className="text-red-200" />
                  <span className="hover:underline">
                    acemarketing.masters@gmail.com
                  </span>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="rounded-3xl p-[2px] bg-gradient-to-b from-[#FDECEC] to-transparent">
          <div className="bg-white rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">

            <form onSubmit={handleSubmit} className="space-y-6">

              <InputField
                icon={<User />}
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <InputField
                icon={<Mail />}
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <InputField
                icon={<Phone />}
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              <TextareaField
                icon={<MessageSquare />}
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <motion.button
                type="submit"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full bg-[#D32F2F] text-white py-4 rounded-xl
                font-semibold hover:bg-red-700 transition"
              >
                Submit Enquiry
              </motion.button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Inputs ---------- */

const InputField = ({ icon, ...props }) => (
  <div className="relative">
    <span className="absolute top-4 left-4 text-gray-400">
      {icon}
    </span>
    <input
      {...props}
      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
      focus:ring-2 focus:ring-red-400 focus:shadow-lg outline-none"
    />
  </div>
);

const TextareaField = ({ icon, ...props }) => (
  <div className="relative">
    <span className="absolute top-4 left-4 text-gray-400">
      {icon}
    </span>
    <textarea
      {...props}
      rows="5"
      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
      focus:ring-2 focus:ring-red-400 focus:shadow-lg outline-none resize-none"
    />
  </div>
);