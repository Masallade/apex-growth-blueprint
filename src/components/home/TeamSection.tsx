
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import CTAButton from "@/components/common/CTAButton";

const TeamSection = () => {
  // For simplicity, let's just display the founder and 3 team members here
  // The full team will be shown on the about page
  const featuredTeam = [team[0], team[1], team[2], team[3]];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Our Team"
          title="Meet Our Expert Associates"
          centered={true}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredTeam.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center">
          <CTAButton 
            text="Meet the Full Team"
            href="/about#team"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string[];
  delay?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, bio, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-md group relative"
    >
      <div className="h-60 bg-gray-200 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-navy/10 flex items-center justify-center">
          <span className="text-4xl font-bold text-navy">{name.charAt(0)}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy">{name}</h3>
        <p className="text-gold font-medium mb-2">{role}</p>
      </div>
      
      {/* Hover overlay with bio */}
      <div className="absolute inset-0 bg-navy bg-opacity-90 text-white p-6 flex flex-col justify-center transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-xl font-bold mb-3">{name}</h3>
        <div className="text-sm space-y-2 overflow-y-auto max-h-[80%]">
          {bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Team data
const team = [
  {
    name: "Jo Fleming",
    role: "Founder",
    bio: [
      "Founder of Apex Executive Partners.",
      "Over 20 years of corporate experience.",
      "Results-driven business leader specializing in commercial and operational growth within innovative technology-focused organizations."
    ]
  },
  {
    name: "John",
    role: "C-Suite Fractional Board Director",
    bio: [
      "Over 40 years of experience as a Board Director, Strategy Consultant, and Entrepreneur.",
      "Started seven businesses and advised over 100 scale-ups, family businesses, and SMEs."
    ]
  },
  {
    name: "Pia",
    role: "Corporate & Commercial Solicitor",
    bio: [
      "Dual qualified (English/Danish) corporate & commercial solicitor.",
      "Expertise in M&A, cross-border transactions, and advising start-ups, SMEs, and listed companies."
    ]
  },
  {
    name: "Jade",
    role: "Employment Law Specialist",
    bio: [
      "Highly skilled and registered solicitor specializing in employment law.",
      "Helps UK companies navigate workplace regulations and avoid legal pitfalls."
    ]
  },
  {
    name: "David",
    role: "Digital Transformation Specialist",
    bio: [
      "Digital Transformation Specialist.",
      "Expertise in designing and delivering class-leading technical solutions."
    ]
  },
  {
    name: "Stephen",
    role: "Business Intelligence Specialist",
    bio: [
      "Background in fraud and cybercrime investigation.",
      "Provides in-depth business rival research to help businesses stay ahead."
    ]
  },
  {
    name: "Martin",
    role: "Sustainability & Growth Specialist",
    bio: [
      "Sustainability and growth specialist.",
      "Proven track record of driving 250% company growth."
    ]
  },
  {
    name: "Margaret",
    role: "Executive Coach",
    bio: [
      "Executive Coach.",
      "Specializes in leadership coaching, psychometric assessments, and transitional coaching."
    ]
  },
  {
    name: "Dan",
    role: "Executive Business Director",
    bio: [
      "Over 30 years of leadership experience at board and MD level.",
      "Guides businesses to achieve exceptional growth and long-term success."
    ]
  }
];

export default TeamSection;
