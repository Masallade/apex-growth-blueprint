
import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  centered = false,
  className = "",
}) => {
  return (
    <div
      className={`mb-12 ${centered ? "text-center" : "text-left"} ${className}`}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm md:text-base font-semibold uppercase tracking-wider text-gold"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
