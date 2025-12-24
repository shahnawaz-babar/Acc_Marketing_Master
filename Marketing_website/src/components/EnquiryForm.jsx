import { motion } from "framer-motion";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

export default function EnquiryForm() {
  return (
    <section className="py-32 bg-[#F8F9FB] relative overflow-hidden" id="contact">
      
      {/* subtle background glow */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#D32F2F]/10 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#D32F2F]/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E1E]">
            Let’s Talk About Your{" "}
            <span className="text-[#D32F2F]">Business</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Tell us about your goals and challenges. Our team will get back to
            you with a customized marketing solution.
          </p>

          <ul className="mt-10 space-y-4 text-gray-700">
            <li>✔ Free strategy consultation</li>
            <li>✔ No obligation, no spam</li>
            <li>✔ Response within 24 hours</li>
          </ul>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-10 space-y-6"
        >
          {/* NAME */}
          <div className="relative">
            <User className="absolute top-4 left-4 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
              focus:ring-2 focus:ring-[#D32F2F] focus:outline-none"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute top-4 left-4 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
              focus:ring-2 focus:ring-[#D32F2F] focus:outline-none"
              required
            />
          </div>

          {/* PHONE */}
          <div className="relative">
            <Phone className="absolute top-4 left-4 text-gray-400" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
              focus:ring-2 focus:ring-[#D32F2F] focus:outline-none"
            />
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <MessageSquare className="absolute top-4 left-4 text-gray-400" />
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200
              focus:ring-2 focus:ring-[#D32F2F] focus:outline-none resize-none"
              required
            />
          </div>

          {/* SUBMIT */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#D32F2F] text-white py-4 rounded-xl
            font-semibold shadow-lg hover:bg-red-700 transition"
          >
            Submit Enquiry
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
