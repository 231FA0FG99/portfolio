import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Quantum Jobs Tracker",
      subtitle: "Finalist — Amaravati Quantum Valley Hackathon 2025",
      description:
        "Real-time dashboard for monitoring IBM Quantum jobs with queue forecasting and load analytics. Achieved 30% reduction in job wait-time prediction error through caching and analytics optimization.",
      tech: ["React.js", "TypeScript", "Node.js", "Express", "Redis", "PostgreSQL", "AWS"],
      github: "https://github.com/your-repo",
      icon: Cpu,
      highlight: "State-level Recognition",
    },
    {
      title: "Qwipo",
      subtitle: "AI-Powered B2B Product Recommendation System",
      description:
        "Built a personalized product recommendation system for B2B retailers using machine learning algorithms to enhance user experience and drive engagement.",
      tech: ["Python", "Machine Learning", "Recommendation Systems", "REST APIs"],
      github: "https://github.com/231FA0FG99/Qwipo-Personalized-B2B-Product-Recommendation-System",
      icon: ShoppingBag,
      highlight: "Machine Learning",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-24 bg-card/30 relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="professional-card group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="icon-badge w-12 h-12 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg md:text-xl font-display font-bold">
                      {project.title}
                    </h3>
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded">
                      {project.highlight}
                    </span>
                  </div>
                  
                  <p className="text-primary/80 text-sm mb-3">{project.subtitle}</p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-primary/30 hover:bg-primary/5 group/btn"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Source
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
