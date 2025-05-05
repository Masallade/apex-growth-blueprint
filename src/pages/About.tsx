
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import SectionTitle from "@/components/common/SectionTitle";
import CTAButton from "@/components/common/CTAButton";

const About = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filterOptions = [
    { id: "all", label: "All" },
    { id: "strategy", label: "Strategy" },
    { id: "finance", label: "Finance" },
    { id: "operations", label: "Operations" },
    { id: "technology", label: "Technology" },
    { id: "legal", label: "Legal" },
  ];
  
  const teamMembers = [
    {
      id: 1,
      name: "Joseph Fleming",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      bio: "With over 20 years of experience in tech growth and venture capital, Joseph has guided hundreds of startups from concept to acquisition. Prior to founding Apex Executive Partners, he served as a Partner at a leading VC firm where he led investments in over 50 technology companies. Joseph holds an MBA from Stanford and is a regular speaker at industry conferences.",
      expertise: ["strategy", "finance"],
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      position: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
      bio: "Sarah brings 15+ years of corporate strategy experience from Fortune 500 companies. Before joining Apex, she was the Chief Strategy Officer at a global technology firm where she led several successful market expansions. Sarah specializes in competitive positioning and growth strategy. She holds a Ph.D. in Economics from MIT.",
      expertise: ["strategy", "operations"],
    },
    {
      id: 3,
      name: "David Chen",
      position: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
      bio: "David's background includes 12 years in investment banking where he specialized in technology sector M&A transactions. His analytical approach to financial modeling and valuation has helped clients secure over $500M in funding. David holds a CFA designation and a degree in Finance from the Wharton School of Business.",
      expertise: ["finance"],
    },
    {
      id: 4,
      name: "Michael Roberts",
      position: "Operations Consultant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "Michael is an operations expert with experience optimizing processes for companies ranging from early-stage startups to Fortune 100 corporations. His specialty lies in identifying inefficiencies and implementing lean methodologies that have saved clients millions in operational costs. He holds an MBA from INSEAD.",
      expertise: ["operations"],
    },
    {
      id: 5,
      name: "Jennifer Lee",
      position: "Technology Advisor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      bio: "Jennifer is a former CTO with extensive experience in scaling technology infrastructure for high-growth companies. She specializes in helping businesses make strategic technology decisions that support rapid growth without sacrificing stability. Jennifer has a Master's in Computer Science from Stanford University.",
      expertise: ["technology"],
    },
    {
      id: 6,
      name: "Robert Wilson",
      position: "Legal Counsel",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      bio: "Robert brings 20 years of corporate legal experience with a focus on startup law, intellectual property, and M&A transactions. As a former partner at a prominent law firm, he has advised hundreds of entrepreneurs on legal matters critical to business success. Robert holds a J.D. from Harvard Law School.",
      expertise: ["legal"],
    },
  ];
  
  const filteredMembers = teamMembers.filter(member => {
    if (activeFilter === "all") return true;
    return member.expertise.includes(activeFilter);
  });

  const companyValues = [
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do, from initial consultation to delivery and follow-up.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
    },
    {
      title: "Integrity",
      description: "We are committed to honesty and transparency in all our client relationships, even when that means delivering difficult truths.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"></path>
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "We continuously seek creative solutions to complex business challenges, embracing new technologies and methodologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12.5V12a10 10 0 0110-10v0a10 10 0 0110 10v.5"></path>
          <path d="M12 13a5 5 0 015 5v6H7v-6a5 5 0 015-5z"></path>
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "We believe in working alongside our clients as true partners, integrating seamlessly with your team for optimal results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
          <path d="M16 3.13a4 4 0 010 7.75"></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Apex Executive Partners</title>
        <meta
          name="description"
          content="Meet the expert team behind Apex Executive Partners. With decades of combined experience, we deliver tailored business consulting for companies at every growth stage."
        />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Page Header */}
        <section className="pt-32 pb-20 bg-navy text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About Us
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                We are a team of seasoned business consultants dedicated to helping companies achieve sustainable growth and operational excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Apex Executive Partners was founded in 2015 by Joseph Fleming after he recognized a critical gap in the consulting industry: the lack of tailored, actionable advice for businesses at different growth stages.
                </p>
                <p className="text-gray-600 mb-4">
                  Having spent two decades in venture capital and witnessing both spectacular successes and preventable failures, Joseph assembled a team of industry experts who shared his vision of providing truly customized consulting that delivers measurable results.
                </p>
                <p className="text-gray-600 mb-4">
                  Today, Apex Executive Partners works with clients ranging from pre-seed startups to established enterprises, maintaining our founding principle: we succeed only when our clients succeed.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              subtitle="Our Values"
              title="What Drives Us"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="text-gold mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Spotlight */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="Joseph Fleming"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Meet Our Founder
                </h2>
                <p className="text-gray-600 mb-4">
                  Joseph Fleming brings over 20 years of experience in tech growth and venture capital to his role as Founder and CEO of Apex Executive Partners.
                </p>
                <p className="text-gray-600 mb-4">
                  Prior to founding Apex, Joseph was a Partner at Horizon Ventures where he led investments in over 50 technology companies, achieving a portfolio return rate in the top quartile of VC firms. His hands-on approach to advising portfolio companies revealed his true passion: helping entrepreneurs build sustainable businesses.
                </p>
                <p className="text-gray-600 mb-6">
                  Joseph holds an MBA from Stanford University and is a regular speaker at industry conferences including TechCrunch Disrupt and the Venture Capital Summit. His thought leadership on business strategy has been featured in publications such as Forbes, Harvard Business Review, and Entrepreneur.
                </p>
                <div className="flex space-x-4">
                  <a href="#" aria-label="LinkedIn" className="text-navy hover:text-gold transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" aria-label="Twitter" className="text-navy hover:text-gold transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              subtitle="Our Team"
              title="Meet the Experts"
              centered={true}
            />
            
            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === option.id
                      ? "bg-navy text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                  onClick={() => setActiveFilter(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </motion.div>
            
            {/* Team members grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="aspect-[3/4] bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gold font-medium mb-4">{member.position}</p>
                    <p className="text-gray-600 mb-4 line-clamp-3">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm"
                        >
                          {filterOptions.find((option) => option.id === skill)?.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Let's discuss how our team can help your business achieve its goals.
              </p>
              <CTAButton
                text="Contact Us Today"
                href="/contact"
                className="px-8 py-3"
              />
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default About;
