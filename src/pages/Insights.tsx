
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import SectionTitle from "@/components/common/SectionTitle";
import InsightCard from "@/components/common/InsightCard";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Insights = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    // In a real app, this would send the data to a server
    setTimeout(() => {
      toast.success("Thank you! Your toolkit is on the way to your inbox.");
      setIsSubmitting(false);
      reset();
    }, 1000);
  };
  
  const blogPosts = [
    {
      title: "Tech Investment Hits £20B in Q2 2025",
      date: "May 1, 2025",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      summary: "Analysis of the latest investment trends in the technology sector and what they mean for startups seeking funding in today's market.",
      slug: "tech-investment-hits-20b",
    },
    {
      title: "The Hidden Costs of Rapid Scaling",
      date: "April 22, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      summary: "Explore the often overlooked expenses and challenges that companies face when scaling operations too quickly without proper infrastructure.",
      slug: "hidden-costs-rapid-scaling",
    },
    {
      title: "Building a Resilient Supply Chain",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
      summary: "Strategies for creating robust supply chain networks that can withstand global disruptions and maintain business continuity.",
      slug: "resilient-supply-chain",
    },
    {
      title: "Ethical AI Implementation for SMEs",
      date: "April 8, 2025",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      summary: "Practical guidelines for small and medium enterprises looking to adopt AI technologies while maintaining ethical standards.",
      slug: "ethical-ai-implementation",
    },
    {
      title: "The Future of Remote Work Models",
      date: "April 1, 2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      summary: "Examining the evolution of hybrid and remote work arrangements and their impact on business productivity and culture.",
      slug: "future-remote-work-models",
    },
    {
      title: "Navigating Regulatory Changes in 2025",
      date: "March 25, 2025",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80",
      summary: "A comprehensive guide to understanding and preparing for the latest regulatory changes affecting businesses across industries.",
      slug: "navigating-regulatory-changes",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Business Insights & Resources | Apex Executive Partners</title>
        <meta
          name="description"
          content="Explore our latest business insights, articles, and free resources designed to help your business thrive in today's competitive landscape."
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
                Insights & Resources
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Explore our latest articles, research, and tools designed to help your business navigate challenges and seize opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Free Toolkit Section */}
        <section id="toolkit" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Download Our Free Business Growth Toolkit
                </h2>
                <p className="text-gray-600 mb-6">
                  Our comprehensive toolkit includes templates, checklists, and guides to help you navigate:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Strategic Planning Frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Financial Projection Templates</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Operations Optimization Checklist</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Scaling Readiness Assessment</span>
                  </li>
                </ul>
                
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                    {errors.name && (
                      <p className="text-red-500 mt-1 text-sm">
                        {errors.name.message as string}
                      </p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="text-red-500 mt-1 text-sm">
                        {errors.email.message as string}
                      </p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gold hover:bg-gold-light text-navy font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Download Now"}
                  </button>
                </form>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                  alt="Business Growth Toolkit"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              subtitle="Articles"
              title="Latest Business Insights"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <InsightCard
                  key={index}
                  image={post.image}
                  title={post.title}
                  date={post.date}
                  summary={post.summary}
                  slug={post.slug}
                  delay={0.1 * (index % 3)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Webinar Promo */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Join Our Upcoming Webinar
                </h2>
                <p className="text-xl mb-6">
                  "Recession-Proofing Your Business: Strategies for Economic Uncertainty"
                </p>
                <p className="text-gray-300 mb-6">
                  May 15, 2025 • 2:00 PM GMT • Free Registration
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    className="bg-gold hover:bg-gold-light text-navy font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Register Now
                  </button>
                  <button
                    className="bg-transparent hover:bg-white/20 text-white border border-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-gold-light transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-navy ml-1"
                        >
                          <polygon points="6 3 20 12 6 21 6 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                    alt="Webinar Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Insights;
