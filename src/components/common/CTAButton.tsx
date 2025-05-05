
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  href,
  variant = "primary",
  icon,
  className = "",
  isExternal = false,
}) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-gold hover:bg-gold-light text-navy shadow-md hover:shadow-lg",
    secondary: "bg-navy hover:bg-navy-light text-white shadow-md hover:shadow-lg",
    outline: "bg-transparent hover:bg-navy-light/10 text-navy border-2 border-navy"
  };
  
  const buttonContent = (
    <>
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (isExternal) {
    return (
      <Button
        asChild
        className={cn(baseClasses, variantClasses[variant], className)}
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      </Button>
    );
  }
  
  return (
    <Button
      asChild
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      <Link to={href}>
        {buttonContent}
      </Link>
    </Button>
  );
};

export default CTAButton;
