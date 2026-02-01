import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shahcmoni2002@gmail.com",
      href: "mailto:shahcmoni2002@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7701926231",
      href: "tel:+917701926231",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Guntur, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/231FA0FG99",
      username: "@231FA0FG99",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/simoni-shah-aa6a432b6/",
      username: "simoni-shah",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-label">Connect</p>
          <h2 className="section-title mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            I'm actively seeking opportunities in full-stack development, backend engineering, and cloud computing. Let's connect!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="professional-card text-center"
          >
            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 mb-8"
              asChild
            >
              <a href="mailto:shahcmoni2002@gmail.com">
                <Send className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
