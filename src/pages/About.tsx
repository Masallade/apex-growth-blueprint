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
      name: "Jo Fleming",
      position: "Founder of Apex Executive Partners",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
      bio: "The creation of Apex Executive Partners is driven by Jo's relentless passion in supporting the business community, and she is able to successfully execute this for her clients with the exceptional talent within the Apex associates portfolio. With over 20 years of corporate experience, Jo is a results-driven business leader specialising in commercial and operational growth within innovative technology-focused organisations. Her track record reflects a consistent ability to establish and execute commercial and organisational strategies that drive substantial revenue growth and operational excellence within start-up or private equity backed organisations. Named as one of the Top 20 Most Inspirational Business Leaders for 2 consecutive years, Jo has received numerous accolades, including the Women in Business Award, which underscore her commitment to excellence and leadership.",
      expertise: ["strategy", "operations"],
    },
    {
      id: 2,
      name: "John",
      position: "C-Suite Fractional Board Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
      bio: "With over 40 years of experience as a Board Director, Strategy Consultant, and Entrepreneur, John has started seven of his own businesses and advised over 100 scale-ups, family businesses, and SMEs on strategy, growth, and innovation. John has been ranked among the Top UK Entrepreneurs and Innovators, and has won a Lifetime Achievement Award.",
      expertise: ["strategy", "finance"],
    },
    {
      id: 3,
      name: "Pia",
      position: "Commercial Business Lawyer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      bio: "Pia is a dual qualified (English/Danish) pragmatic corporate & commercial solicitor with many years' experience advising a wide range of business clients including start-ups, SMEs and listed companies on a multitude of corporate & commercial legal issues including buying and selling of businesses/companies (M&A), cross-border transactions.",
      expertise: ["legal"],
    },
    {
      id: 4,
      name: "Claudio",
      position: "United Emirates CFO, Change Agent",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "Project and Finance Executive for processes of organizational transition. Advisory Board Member (Advisory Council Team ex-FGV) for small & medium size organizations. Change agent leading to corporate restructuring and cultural transformation, adding value to organizations through entrepreneurial mindset and spirit of innovation.",
      expertise: ["finance", "operations"],
    },
    {
      id: 5,
      name: "Jade",
      position: "UK Employment Law Solicitor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      bio: "Jade is a highly skilled and registered solicitor specialising in employment law, dedicated to helping UK companies navigate the complexities of workplace regulations with confidence. With a proactive approach, Jade ensures businesses remain fully compliant with employment law, safeguarding them from costly disputes, legal pitfalls, and reputational damage.",
      expertise: ["legal"],
    },
    {
      id: 6,
      name: "David",
      position: "Digital Transformation Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      bio: "David is a professionally qualified customer focused programme and digital transformation delivery specialist, with extensive international experience in the planning, execution and delivery of complex programmes and project portfolios. David works closely with our clients to design and develop class leading technical solutions.",
      expertise: ["technology", "operations"],
    },
    {
      id: 7,
      name: "Stephen",
      position: "Business Intelligence Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      bio: "With a background in serious fraud and cybercrime investigation, Stephen delivers In-Depth Business Rival Research, Helping Businesses Stay Informed and Stay Ahead. Stephen works with business owners, executives, and investors who need clear, raw data on their competitors to make strategic decisions with confidence. His focus is on precision.",
      expertise: ["technology", "strategy"],
    },
    {
      id: 8,
      name: "Martin",
      position: "Sustainability and Growth Specialist",
      image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&q=80",
      bio: "With a proven track record of driving 250% company growth, Martin specializes in helping ambitious business owners build sustainable, scalable, and sellable ventures. Whether you're looking to streamline operations, scale effectively, or prepare your business for a successful exit, Martin can support.",
      expertise: ["operations", "strategy"],
    },
    {
      id: 9,
      name: "Margaret",
      position: "Executive Coach",
      image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?auto=format&fit=crop&q=80",
      bio: "Margaret is a PGC Senior Practitioner in Business & Executive Coaching and a Fellow of the Chartered Management Institute. She specialises in 121 Leadership & Management Coaching, Psychometric Assessments, Coaching Workshops, Transitional & On-Boarding Coaching.",
      expertise: ["operations"],
    },
    {
      id: 10,
      name: "Dan",
      position: "Executive Business Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      bio: "Executive Business Director | Scaling Businesses | Driving Growth & Turnarounds. With over 30 years of leadership experience at board and MD level, Dan specialises in guiding businesses to achieve exceptional growth and long-term success. From shaping strategy to empowering leadership teams. Every business faces pivotal moments—whether it's scaling up or turning around performance—and Dan provides the expertise to navigate these critical transitions successfully.",
      expertise: ["strategy", "operations"],
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
          content="Meet the expert team behind Apex Executive Partners. Our associates are dedicated to helping businesses develop innovative strategies to achieve their goals and drive profitability."
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
                Empowering entrepreneurs and professionals with tailored business strategies for growth-focused businesses.
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
                  Welcome to Apex Executive Partners. Our expert associates are dedicated to helping businesses develop innovative strategies to achieve their goals and drive profitability.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe that the key to success is a collaborative approach that puts your needs first. Our team works closely with you every step of the way to ensure that our solutions are aligned with your goals and objectives.
                </p>
                <p className="text-gray-600 mb-4">
                  We offer tailored solutions that will elevate your business to the next level. Ready to build a smarter, stronger business? Let's talk!
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
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                  alt="Jo Fleming"
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
                  The creation of Apex Executive Partners is driven by Jo's relentless passion in supporting the business community, and she is able to successfully execute this for her clients with the exceptional talent within the Apex associates portfolio.
                </p>
                <p className="text-gray-600 mb-4">
                  With over 20 years of corporate experience, Jo is a results-driven business leader specialising in commercial and operational growth within innovative technology-focused organisations. Her track record reflects a consistent ability to establish and execute commercial and organisational strategies that drive substantial revenue growth and operational excellence within start-up or private equity backed organisations.
                </p>
                <p className="text-gray-600 mb-6">
                  Named as one of the Top 20 Most Inspirational Business Leaders for 2 consecutive years, Jo has received numerous accolades, including the Women in Business Award, which underscore her commitment to excellence and leadership.
                </p>
                <div className="flex space-x-4">
                  <a href="#" aria-label="LinkedIn" className="text-navy hover:text-gold transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              subtitle="Our Team"
              title="Apex Executive Associates"
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
                    <p className="text-gray-600 mb-4">{member.bio}</p>
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

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <SectionTitle
              subtitle="How We Work"
              title="Our Pricing Model"
              centered={true}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto mb-12"
            >
              <p className="text-lg text-gray-700 mb-6">
                Our associates are all hugely professional and experienced business executives in their own right, who once aligned to your company, will agree the project scope and provide a detailed cost analysis.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Costs are determined on either a day or a project rate. Apex Associates fees typically range from £600-£1800 per day dependant on the depth of the project and the skills required to deliver.
              </p>
              <p className="text-sm italic text-gray-600">
                *Our money back guarantee is subject to terms and conditions included within terms and conditions available on request.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">Fixed Fee</h3>
                <p className="text-gray-700 mb-6">
                  Clients with complex one off needs prefer this package to add the skills and resource to your business FAST.
                </p>
                <CTAButton text="Find Out More" href="/contact" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">Retain and Grow</h3>
                <p className="text-gray-700 mb-6">
                  Perfect for clients with ad-hoc needs to utilise our Associates services on a fixed-fee monthly retainer package.
                </p>
                <CTAButton text="Find Out More" href="/contact" />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <CTAButton 
                text="Looking to join our TEAM of associates?"
                href="/contact"
                className="px-8 py-3"
              />
            </motion.div>
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
                Transform Your Business with Apex Executive Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Request our free Business ToolKit here
              </p>
              
              <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto mb-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="p-3 rounded-lg flex-grow text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-light text-navy font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  SIGN UP
                </button>
              </form>
              <p className="text-xs text-gray-300">Subscribe Here for free toolkits and more!</p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default About;
