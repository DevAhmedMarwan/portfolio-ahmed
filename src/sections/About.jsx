import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Responsive Design",
    description:
      "Crafting interfaces that adapt seamlessly to any device or screen size.",
  },
  {
    icon: Rocket,
    title: "Fast Loading",
    description:
      "Implementing performance optimizations to deliver snappy and efficient web apps.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Collaborating effectively with designers and developers to build cohesive products.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring new tools, libraries, and technologies to stay at the cutting edge.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Crafting modern web experiences,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Ahmed Marwan, a passionate Front-End Developer specializing in
                React, Next.js, and TypeScript. I love building scalable, responsive,
                and user-friendly web applications that deliver real value.
              </p>
              <p>
                My work ranges from sleek landing pages to complex enterprise
                applications. I focus on combining clean code, technical excellence,
                and a strong sense of design and user experience.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new web technologies,
                contributing to open-source projects, and continuously improving my
                skills to stay at the forefront of frontend development.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build web experiences that are not only functional,
                but also enjoyable — interfaces that users love to interact with and
                developers love to maintain."
              </p>
            </div>
          </div>
          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
