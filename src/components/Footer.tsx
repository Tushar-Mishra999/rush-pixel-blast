import { Link } from "react-router-dom";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
];

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl tracking-wider text-foreground">
                RUSH
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              IIM Ranchi's flagship cultural festival. Three days of 
              art, music, competition, and memories.
            </p>
            <p className="font-display text-xs tracking-[0.3em] text-primary">
              FEBRUARY 2025
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xs tracking-[0.2em] text-foreground mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-xs tracking-[0.2em] text-foreground mb-6">
              CONNECT
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 RUSH — IIM Ranchi
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground/50">
                Built with precision
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};