import { motion } from "framer-motion";
import {
  Search,
  ClipboardList,
  Code2,
  Rocket
} from "lucide-react";

import bgProcess from "../assets/Background_out_process.jpg";

const steps = [
  {
    title: "Discovery & Consultation",
    desc: "We analyze your business needs and identify high-impact digital opportunities.",
    icon: Search,
  },
  {
    title: "Strategy & Planning",
    desc: "We design a tailored roadmap with clear goals, timelines, and success metrics.",
    icon: ClipboardList,
  },
  {
    title: "Development & Integration",
    desc: "Our experts build and integrate scalable digital solutions seamlessly.",
    icon: Code2,
  },
  {
    title: "Launch & Optimization",
    desc: "We deploy, monitor, and continuously optimize for maximum performance.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="relative py-32 overflow-hidden" id="process">

      {/* 🔥 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgProcess})` }}
      />

      {/* 🔥 TRANSPARENT OVERLAY (Premium look) */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* 🔥 CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E1E]">
            Our <span className="text-[#D32F2F]">Process</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            From discovery to launch, our proven process ensures measurable growth
            and long-term success.
          </p>
        </motion.div>

        {/* PROCESS CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="
                group bg-white/80 backdrop-blur-xl
                rounded-3xl p-8
                shadow-xl border border-gray-200
                hover:-translate-y-2 hover:shadow-2xl
                transition-all duration-300
              "
            >
              {/* ICON */}
              <div
                className="
                  w-14 h-14 rounded-xl
                  bg-gradient-to-br from-[#D32F2F] to-[#FF6B6B]
                  flex items-center justify-center
                  mb-6
                "
              >
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-bold text-[#1E1E1E]">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
