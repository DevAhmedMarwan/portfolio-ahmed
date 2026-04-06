import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Booking",
    description: "Appointment Booking Web App: A full-featured appointment booking platform that allows users to browse available services, book appointments seamlessly, and manage their sessions through a secure authentication system. The application supports smooth navigation, pagination for large datasets, and efficient API-driven data handling. Designed with a clean and intuitive user experience, the project follows scalable architecture and clean code practices to ensure long-term maintainability.",
    image: "/projects/booking.png",
    tags: ["next.js","react.js","shadcn/ui", "Material UI", "Api", "Pagination", "Routing"],
    link: "https://github.com/DevAhmedMarwan/Booking",
    github: "https://github.com/DevAhmedMarwan/Booking",
  },
  {
    title: "Book Store",
    description:
      "A feature-rich book platform inspired by modern reading apps, built with cutting-edge frontend technologies. The project includes social authentication with Google and Facebook, infinite scroll with pagination, light/dark theme support, and localization for multiple languages. It showcases both grid and list layouts, a detailed single book view, caching strategies, state management using Zustand, and robust error handling. Designed with scalability, performance, and user experience in mind.",
    image: "/projects/BookStore.png",
    tags: [
      "React",
      "Tailwind",
      "Firebase Login with Google",
      "Localization",
      "Theming",
      "Caching",
      "Pagination",
      "Error Handling",
      "Zustand",
      "Api",
    ],
    link: "https://github.com/DevAhmedMarwan/BookStore",
    github: "https://github.com/DevAhmedMarwan/BookStore",
  },
  {
    title: "localization",
    description:
      "A multilingual product showcase platform built with React and Next.js, designed to display products with their name, price, and description. The project integrates a multilingual API supporting four languages: Arabic, English, Urdu, and Indonesian, allowing users to seamlessly switch between languages. It leverages Zustand for state management, is fully responsive across devices, and incorporates best practices for performance and user experience. Ideal for showcasing products in an internationalized, scalable, and user-friendly way.",
    image: "/projects/localization.png",
    tags: ["Api", "Zustand", "localization", "Tailwind"],
    link: "https://github.com/DevAhmedMarwan/Localization",
    github: "https://github.com/DevAhmedMarwan/Localization",
  },
  {
    title: "MediTro",
    description:
      "A full-featured doctors directory and appointment booking platform built with modern frontend technologies. The platform displays available doctors with their names, specialties, and schedules, allowing users to easily book appointments. It integrates with Strapi for managing data via APIs, supports efficient routing, and includes pagination for handling large datasets. The website is fully responsive, scalable, and designed with usability and performance in mind, providing a seamless experience for both patients and administrators.",
    image: "/projects/MediTro.png",
    tags: ["Strapi", "Api", "Routing", "Pagination"],
    link: "https://github.com/DevAhmedMarwan/MediTro",
    github: "https://github.com/DevAhmedMarwan/MediTro",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
