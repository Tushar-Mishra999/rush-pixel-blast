import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import rushLogo from "@/assets/rush-logo.png";
const navLinks = [{
  href: "/",
  label: "Home"
}, {
  href: "/about",
  label: "About"
}, {
  href: "/events",
  label: "Events"
}, {
  href: "/team",
  label: "Team"
}, {
  href: "/sponsors",
  label: "Sponsors"
}];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={rushLogo} alt="RUSH Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={cn("font-heading text-[13px] uppercase tracking-wider transition-colors hover:text-primary", location.pathname === link.href ? "text-primary" : "text-muted-foreground")}>
                {link.label}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://www.festbuzz.in/fests/695cd2005d0951e6c22f3221" target="_blank" rel="noopener noreferrer">
              <Button variant="pixel" size="sm">
                Register
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex-col gap-4 flex items-center justify-center">
              {navLinks.map(link => <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className={cn("font-heading text-xs uppercase tracking-wider py-2 transition-colors", location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary")}>
                  {link.label}
                </Link>)}
              <a href="https://www.festbuzz.in/fests/695cd2005d0951e6c22f3221" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="pixel" size="sm" className="mt-2 w-full">
                  Register
                </Button>
              </a>
            </div>
          </div>}
      </div>
    </nav>;
};