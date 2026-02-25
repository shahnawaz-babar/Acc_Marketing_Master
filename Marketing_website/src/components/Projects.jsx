import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import projects1 from "../assets/project1.jpg";
import projects2 from "../assets/project2.jpg";
import projects3 from "../assets/project3.jpg";

const projects = [
  {
    tag: "Digital Marketing",
    title: "E-Commerce Growth Engine",
    desc: "Scaled an online store with performance marketing, SEO and automation.",
    results: [
      "3x sales growth in 6 months",
      "99.9% uptime during campaigns",
      "High-ROI paid ads strategy",
    ],
    image: projects1,
  },
  {
    tag: "Startup Marketing",
    title: "Startup Launch Accelerator",
    desc: "Helped a startup go from idea to traction with full-funnel marketing.",
    results: [
      "Brand launch in 30 days",
      "1,000+ qualified leads acquired",
      "Strong social media presence",
    ],
    image: projects3,
  },
  {
    tag: "Brand & UX",
    title: "Brand Experience Redesign",
    desc: "Redesigned brand identity and digital presence for higher conversions.",
    results: [
      "45% engagement increase",
      "Improved brand trust",
      "Modern UI & messaging",
    ],
    image: projects2,
  },
];

export default function Projects() {
  return (
    <section className="relative py-32 overflow-hidden" id="projects">

      {/* 🌸 Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5F5] via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E1E]">
            Our <span className="text-[#D32F2F]">Impactful Initiative</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Real results, real growth — see how we help brands scale digitally.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="
                group bg-white rounded-3xl overflow-hidden
                shadow-lg hover:shadow-2xl
                hover:-translate-y-2 transition-all duration-300
                border border-gray-100
              "
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold bg-[#FFF0F0] text-[#D32F2F]">
                  {p.tag}
                </span>

                <h3 className="text-xl font-bold text-[#1E1E1E]">
                  {p.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {p.desc}
                </p>

                {/* RESULTS */}
                <ul className="mt-6 space-y-2">
                  {p.results.map((r, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#D32F2F]" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
    mt-28 grid md:grid-cols-4 gap-8
    bg-white/80 backdrop-blur-xl
    rounded-3xl p-14
    border border-gray-100
    shadow-[0_10px_30px_rgba(0,0,0,0.12)]
    text-center
  "
>
  {[
    { value: '100+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Industries Served' },
    { value: '5+', label: 'Years Experience' },
  ].map((s, i) => (
    <div key={i}>
      <h3 className="text-3xl font-extrabold text-[#D32F2F]">
        {s.value}
      </h3>
      <p className="mt-2 text-gray-600">{s.label}</p>
    </div>
  ))}
</motion.div>


      </div>
    </section>
  );
}
