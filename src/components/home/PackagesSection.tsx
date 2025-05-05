
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import CTAButton from "@/components/common/CTAButton";

const PackagesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Our Packages"
          title="Packages Available"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <PriceCard
              key={index}
              title={pkg.title}
              description={pkg.description}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold mb-4">Pricing Details</h3>
          <p className="mb-4">Apex Associates fees typically range from £600-£1800 per day, depending on project scope and skills required.</p>
          <p className="text-sm text-gray-500 italic">Money-back guarantee subject to terms and conditions.</p>
          
          <div className="mt-8">
            <CTAButton 
              text="CONTACT US FOR MORE INFORMATION ON OUR PACKAGES"
              href="/contact"
              className="uppercase"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface PriceCardProps {
  title: string;
  description: string;
  delay?: number;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold text-navy mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

const packages = [
  {
    title: "Fixed Fee",
    description: "For clients with complex one-off needs. We provide a clear scope of work with transparent pricing that won't change during the project.",
  },
  {
    title: "Retain and Grow",
    description: "For clients with ad-hoc needs on a fixed-fee monthly retainer. Get ongoing access to our expertise with predictable monthly costs.",
  },
];

export default PackagesSection;
