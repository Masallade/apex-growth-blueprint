
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const servicesItems = [
    { title: "Seed-Stage Consulting", href: "/services#seed-stage" },
    { title: "SME Optimization", href: "/services#sme" },
    { title: "Venture Growth", href: "/services#venture" },
    { title: "M&A Advisory", href: "/services#ma" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-navy">
            Apex<span className="text-gold">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={`font-medium transition-colors hover:text-navy-light ${
              isActive("/") ? "text-navy" : "text-gray-600"
            }`}
          >
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`font-medium flex items-center hover:text-navy-light transition-colors ${
                  isActive("/services") ? "text-navy" : "text-gray-600"
                }`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white w-56 shadow-lg rounded-lg border border-gray-200">
              {servicesItems.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  <Link 
                    to={item.href}
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer w-full text-gray-700"
                  >
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link
            to="/about"
            className={`font-medium transition-colors hover:text-navy-light ${
              isActive("/about") ? "text-navy" : "text-gray-600"
            }`}
          >
            About
          </Link>
          
          <Link
            to="/insights"
            className={`font-medium transition-colors hover:text-navy-light ${
              isActive("/insights") ? "text-navy" : "text-gray-600"
            }`}
          >
            Insights
          </Link>
          
          <Link
            to="/contact"
            className={`font-medium transition-colors hover:text-navy-light ${
              isActive("/contact") ? "text-navy" : "text-gray-600"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            variant="default"
            className="bg-gold hover:bg-gold-light text-navy font-medium"
          >
            Get Your Free Toolkit
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-navy" />
          ) : (
            <Menu className="h-6 w-6 text-navy" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full left-0 shadow-lg animate-slide-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className={`block py-2 font-medium ${
                isActive("/") ? "text-navy" : "text-gray-600"
              }`}
            >
              Home
            </Link>
            
            <div className="space-y-2">
              <p className="text-gray-600 font-medium py-2">Services</p>
              <div className="pl-4 space-y-2">
                {servicesItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block py-1 text-gray-600 hover:text-navy"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/about"
              className={`block py-2 font-medium ${
                isActive("/about") ? "text-navy" : "text-gray-600"
              }`}
            >
              About
            </Link>
            
            <Link
              to="/insights"
              className={`block py-2 font-medium ${
                isActive("/insights") ? "text-navy" : "text-gray-600"
              }`}
            >
              Insights
            </Link>
            
            <Link
              to="/contact"
              className={`block py-2 font-medium ${
                isActive("/contact") ? "text-navy" : "text-gray-600"
              }`}
            >
              Contact
            </Link>
            
            <Button
              variant="default"
              className="w-full bg-gold hover:bg-gold-light text-navy font-medium"
            >
              Get Your Free Toolkit
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
