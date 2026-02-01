import { motion } from "framer-motion";
import { Award, Code, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Finalist — Amaravati Quantum Valley Hackathon",
      period: "2025",
      icon: Award,
      type: "achievement",
      points: [
        "Built a scalable cloud-native system using Agile methodology",
        "Implemented CI/CD pipelines with GitHub Actions for automated deployment",
        "Received state-level recognition for quantum computing innovation",
      ],
    },
    {
      title: "Full-Stack Developer",
      period: "Internship / Freelance",
      icon: Code,
      type: "work",
      points: [
        "Developed REST APIs for an e-commerce platform",
        "Optimized data synchronization, reducing sync time by 35%",
        "Collaborated with cross-functional teams for timely delivery",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-label">Career</p>
          <h2 className="section-title">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className="professional-card"
            >
              <div className="flex items-start gap-4">
                <div className="icon-badge flex-shrink-0">
                  <exp.icon className="w-4 h-4" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h3 className="font-display font-semibold text-base">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
