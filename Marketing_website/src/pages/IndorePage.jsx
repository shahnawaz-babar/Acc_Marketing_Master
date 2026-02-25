import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function IndorePage() {
  useEffect(() => {
    document.title =
      "Best Digital Marketing Agency in Indore | SEO Company in Indore – Marketing Master";

    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Marketing Master is a top digital marketing agency in Indore offering SEO services, social media marketing, Google Ads, website development and lead generation solutions."
      );
    }
  }, []);

  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold mb-6">
          Best Digital Marketing Agency in Indore – Marketing Master
        </h1>

        <p className="mb-6 text-lg text-gray-700">
          Marketing Master is a professional digital marketing agency in Indore
          helping businesses grow online with SEO optimization, social media
          marketing, Google Ads and branding strategies. We are recognized as a
          top marketing agency in Indore for delivering real business results.
        </p>

        <p className="mb-6 text-gray-700">
          As a trusted marketing company in Indore, we work with startups,
          local businesses and growing brands to improve online visibility,
          generate quality leads and build strong digital presence.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Our Digital Marketing Services in Indore
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>SEO Services & SEO Optimization in Indore</li>
          <li>Social Media Marketing & Management</li>
          <li>Google Ads & Lead Generation Campaigns</li>
          <li>Website Design & Development</li>
          <li>Branding & Content Marketing</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Why We Are the Best Marketing Agency in Indore
        </h2>

        <p className="text-gray-700 mb-4">
          Our team understands the Indore market and creates customized digital
          marketing strategies focused on ROI and business growth. We combine
          modern SEO techniques with high-converting marketing campaigns to
          help brands dominate online searches.
        </p>

        <p className="text-gray-700 mb-4">
          Businesses trust Marketing Master because of our transparency,
          performance-driven approach and long-term success mindset. We aim
          to be the most reliable digital marketing company in Indore.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Trusted SEO Company in Indore
        </h2>

        <p className="text-gray-700">
          As a leading SEO optimization company in Indore, we improve website
          rankings, organic traffic and online authority using ethical SEO
          strategies that deliver sustainable results.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Looking for a Digital Marketing Agency Near You?
        </h2>

        <p className="text-gray-700">
          If you are searching for a reliable marketing agency near me in
          Indore, Marketing Master is your trusted partner for complete digital
          marketing solutions.
        </p>

      </section>

      <Footer />
    </>
  );
}