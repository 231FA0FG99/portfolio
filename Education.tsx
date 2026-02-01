import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Vignan University, Guntur",
      period: "2023 – 2027",
      grade: "CGPA: 7.3",
      icon: GraduationCap,
      current: true,
    },
    {
      degree: "Higher Secondary (Class XII)",
      institution: "Dhanusha Science School, Janakpur, Nepal",
      period: "2022",
      grade: "CGPA: 8.32",
      icon: BookOpen,
    },
    {
      degree: "Secondary (Class X)",
      institution: "Janaki Boarding School, Janakpur, Nepal",
      period: "2021",
      grade: "CGPA: 8.62",
      icon: BookOpen,
    },
  ];

  const leadership = [
    {
      title: "Event Coordinator",
      organization: "AP SpaceTech Summit 2026",
      description: "Organized expos, hackathons, and research presentations",
    },
    {
      title: "Team Mentor",
      organization: "Peer Leadership",
      description: "Guided juniors in full-stack projects and coding competitions",
    },
  ];

  return (
    <section id="education" className="py-24 bg-card/30 relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-label">Background</p>
          <h2 className="section-title">
            Education & <span className="text-gradient">Leadership</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-base font-display font-semibold mb-5 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              Academic Background
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="professional-card"
                >
                  <div className="flex items-start gap-3">
                    <div className="icon-badge flex-shrink-0">
                      <edu.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm">{edu.degree}</h4>
                        {edu.current && (
                          <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-xs mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-primary font-medium">{edu.grade}</span>
                        <span className="text-border">•</span>
                        <span className="text-muted-foreground">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-base font-display font-semibold mb-5 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Leadership & Activities
            </h3>
            <div className="space-y-4">
              {leadership.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="professional-card"
                >
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-primary text-xs mb-2">{item.organization}</p>
                  <p className="text-muted-foreground text-xs">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
