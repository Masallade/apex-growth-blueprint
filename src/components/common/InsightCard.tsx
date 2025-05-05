
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface InsightCardProps {
  image: string;
  title: string;
  date: string;
  summary: string;
  slug: string;
  delay?: number;
}

const InsightCard: React.FC<InsightCardProps> = ({
  image,
  title,
  date,
  summary,
  slug,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm text-gray-500 mb-2">{date}</span>
        <h3 className="text-xl font-bold mb-3 hover:text-navy transition-colors">
          <Link to={`/insights/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{summary}</p>
        <Link
          to={`/insights/${slug}`}
          className="text-navy font-medium inline-flex items-center hover:text-gold transition-colors"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default InsightCard;
