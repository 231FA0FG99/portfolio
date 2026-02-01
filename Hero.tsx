import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/231FA0FG99", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/simoni-shah-aa6a432b6/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shahcmoni2002@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+917701926231", label: "Phone" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[80px]" />
      </div>

      <div className="section-container relative z-10 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-4 ring-offset-background glow-subtle animate-float">
              <img
                src={profilePhoto}
                alt="Simoni Shah - Full-Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-4 border-background" />
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
                Full-Stack Developer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
                Simoni <span className="text-gradient">Shah</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                B.Tech Computer Science • Vignan University
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              Passionate about building scalable applications with expertise in React, Node.js, and cloud technologies. 
              Strong problem-solving skills with <span className="text-foreground font-medium">300+ CodeChef</span> and <span className="text-foreground font-medium">100+ LeetCode</span> problems solved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-8"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/30 hover:bg-primary/5"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FileText className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 text-muted-foreground animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
