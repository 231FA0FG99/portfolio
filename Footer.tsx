import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/231FA0FG99", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/simoni-shah-aa6a432b6/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shahcmoni2002@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-6 border-t border-border bg-background">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-display font-semibold text-gradient">Simoni Shah</span>
            <span className="text-border">•</span>
            <span className="text-muted-foreground">
              © {currentYear} All rights reserved
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
