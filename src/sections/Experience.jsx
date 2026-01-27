const experiences = [
   {
    period: "Oct 2025 — Present",
    role: "Junior Frontend Engineer",
    company: "Tab agency",
    description:
    "Currently working at a software company in Egypt, where I have gained hands-on experience and advanced my skills in React and Next.js. I actively contribute to building and maintaining frontend features, focusing on clean code, reusable components, and responsive design. Through continuous practice and real project involvement, I have significantly improved my understanding of modern frontend development, performance optimization, and best practices.",
    technologies: ["React", "TypeScript", "Next.js",],
    current: true,
  },
  {
    period: "Jan 2025 – Sep 2025 (9 months)",
    role: "Junior Developer",
    company: "EraaSoft",
    description:
      "A full-featured doctors directory and appointment booking platform built with modern frontend technologies. The platform displays available doctors with their names, specialties, and schedules, allowing users to easily book appointments. It integrates with Strapi for managing data via APIs, supports efficient routing, and includes pagination for handling large datasets. The website is fully responsive, scalable, and designed with usability and performance in mind, providing a seamless experience for both patients and administrators.",
    technologies: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
      "Strapi",
      "Routing",
    ],
    current: false,
  },  
  {
    period: "2024 — 2025",
    role: "Freelance Developer",
    company: "Mostaql",
    description:
      "Worked as a freelance frontend developer on Mostaql, delivering responsive and user-friendly websites using HTML, CSS, and JavaScript. I focused on converting designs into clean, well-structured code, ensuring cross-browser compatibility, and optimizing performance. Collaborated with clients to understand requirements, apply feedback, and deliver high-quality results on time.",
    technologies: ["Html", "Css", "JavaScript"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
     font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold
     mt-4 mb-6 animate-fade-in animation-delay-100
      text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              builds real skills.
            </span>
          </h2>

          <p
            className="text-muted-foreground
     animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth as a frontend developer, showcasing my
            journey of learning, building real-world projects, and continuously
            improving my skills with modern web technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:col-start-2 md:pl-16"
                    }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
