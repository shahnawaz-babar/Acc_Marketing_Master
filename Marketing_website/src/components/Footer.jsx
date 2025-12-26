import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        relative
        bg-gradient-to-br
        from-[#0B0B0B]
        via-[#120A0A]
        to-[#3B0D0D]
        text-gray-300
        pt-24 pb-10
        overflow-hidden
      "
    >
      {/* 🔥 Brand glow */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-[#D32F2F]/25 rounded-full blur-[150px]" />
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-[#D32F2F]/15 rounded-full blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
<h2
  className="
    text-2xl font-extrabold
    bg-gradient-to-r from-orange-400 via-yellow-200 to-orange-500
    bg-clip-text text-transparent
    drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]
  "
>
  Acc Marketing Master
</h2>




            <p className="mt-5 text-gray-400 text-sm leading-relaxed">
              We help businesses grow through strategic digital marketing,
              high-converting design and performance-driven campaigns.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-10 h-10 rounded-full bg-white/10
                    flex items-center justify-center
                    hover:bg-[#D32F2F] transition
                  "
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              {["Home", "Services", "Pricing", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#D32F2F] transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Services
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                "Social Media Marketing",
                "SEO Optimization",
                "Video & Reels Marketing",
                "Website Design",
                "Paid Ads Campaigns",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-[#D32F2F] transition"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>

            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D32F2F]" />
                <span>India • Serving Clients Worldwide</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D32F2F]" />
                <span>+91 98935 09493</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D32F2F]" />
                <span>acemarketing.masters@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Marketing Master. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D32F2F] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#D32F2F] transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
