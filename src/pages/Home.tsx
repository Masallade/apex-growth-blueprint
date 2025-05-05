
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesPreview from "@/components/home/ServicesPreview";
import TeamPreview from "@/components/home/TeamPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Apex Executive Partners | Business Consulting & Strategy</title>
        <meta
          name="description"
          content="Apex Executive Partners provides expert-led consulting for startups, SMEs, and high-growth ventures. Transform your business with our tailored strategies."
        />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <TrustBar />
        <ServicesPreview />
        <TeamPreview />
        <TestimonialsSection />
        <CTASection />
      </motion.div>
    </>
  );
};

export default Home;
