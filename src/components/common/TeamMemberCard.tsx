
import React, { useState } from "react";
import { motion } from "framer-motion";

interface TeamMemberCardProps {
  image: string;
  name: string;
  position: string;
  bio: string;
  delay?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  position,
  bio,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg shadow-md group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gold font-medium">{position}</p>
      </div>
      
      <div
        className={`absolute inset-0 bg-navy bg-opacity-90 text-white p-6 flex flex-col justify-center transition-all duration-300 transform ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gold font-medium mb-4">{position}</p>
        <p className="text-sm overflow-auto max-h-[60%]">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
