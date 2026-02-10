import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

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
      className="py-32 bg-gradient-to-b from-[#FDECEC] via-[#F8F9FB] to-white"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E1E]">
            Let’s Talk About Your{" "}
            <span className="text-[#D32F2F] drop-shadow-sm">Business</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Tell us about your goals and challenges. Our team will get back to you
            with a customized marketing solution.
          </p>

          <ul className="mt-10 space-y-4 text-gray-700">
            <li>✔ Free strategy consultation</li>
            <li>✔ No obligation, no spam</li>
            <li>✔ Response within 24 hours</li>
          </ul>
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

              {/* ✅ ANIMATED SUBMIT BUTTON */}
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

/* ---------------- Small Components ---------------- */

const InputField = ({ icon, ...props }) => (
  <div className="relative">
    <span className="absolute top-4 left-4 text-gray-400">
      {icon}
    </span>
    <input
      {...props}
      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
      focus:ring-2 focus:ring-[#D32F2F] outline-none"
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
      focus:ring-2 focus:ring-[#D32F2F] outline-none resize-none"
    />
  </div>
);
