import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import rushLogo from "@/assets/rush-logo.png";
export const Footer = () => {
  return <footer className="bg-card border-t-2 border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/">
              <img src={rushLogo} alt="RUSH Logo" className="h-12 w-auto" />
            </Link>
            <p className="font-subheading text-sm text-muted-foreground">IIM Ranchi's cultural fest sparks breakthroughs, revolutions, and stories. Tomorrow is not coming-it is already in our hands!                </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs text-accent uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About RUSH
              </Link>
              <Link to="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
              <Link to="/sponsors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sponsors
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs text-accent uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:rush@iimranchi.ac.in" className="hover:text-primary transition-colors">
                  rush@iimranchi.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>IIM Ranchi, Suchana Bhawan, Audrey House Campus, Ranchi</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs text-accent uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-border flex items-center justify-center text-muted-foreground hover:text-destructive hover:border-destructive transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 RUSH - IIM Ranchi. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary animate-neon-pulse" />
            <div className="w-3 h-3 bg-secondary animate-neon-pulse" style={{
            animationDelay: "0.3s"
          }} />
            <div className="w-3 h-3 bg-accent animate-neon-pulse" style={{
            animationDelay: "0.6s"
          }} />
            <div className="w-3 h-3 bg-highlight animate-neon-pulse" style={{
            animationDelay: "0.9s"
          }} />
          </div>
        </div>
      </div>
    </footer>;
};