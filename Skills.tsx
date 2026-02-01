import { motion } from "framer-motion";
import { Code2, Server, Wrench, Terminal, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React.js", "TypeScript", "TailwindCSS", "HTML5", "CSS3"],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "AWS Serverless", "PostgreSQL", "MongoDB", "Redis", "JWT"],
    },
    {
      title: "Programming Languages",
      icon: Terminal,
      skills: ["C++", "JavaScript", "TypeScript", "Python", "C"],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      skills: ["Git", "GitHub", "Linux", "VS Code", "GitHub Actions", "CI/CD", "Docker"],
    },
  ];

  const stats = [
    { label: "CodeChef Problems", value: "300+", icon: TrendingUp },
    { label: "LeetCode Problems", value: "100+", icon: TrendingUp },
    { label: "Hackathons", value: "2+", icon: TrendingUp },
    { label: "Projects Built", value: "10+", icon: TrendingUp },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-label">Technical Expertise</p>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="professional-card group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-badge">
                  <category.icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-display font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="stat-card"
            >
              <p className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
