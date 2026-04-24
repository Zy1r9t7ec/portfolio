import Navigation from "@/components/Navigation";
import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    title: "Overwatch",
    subtitle: "Autonomous DevOps Swarm",
    description: "A 6-role multi-agent swarm system engineered for autonomous monitoring, diagnosis, and recovery of real-time application incidents. Integrated the Model Context Protocol (MCP) to execute self-healing Azure infrastructure actions with human-in-the-loop validation.",
    technologies: ["Python", "FastAPI", "Docker", "Terraform", "Azure", "MCP"],
    date: "2026",
    github: "https://github.com/Zy1r9t7ec/Overwatch-guardrails"
  },
  {
    title: "ReComm",
    subtitle: "AI-Driven Return Automation",
    description: "An automated system utilizing video analysis to verify product conditions and prevent fraud during the return process. Features an 'Inspector' agent designed to autonomously assess physical item states and manage user workflows.",
    technologies: ["Python", "Computer Vision", "Agentic Frameworks", "LLMs"],
    date: "2026",
    github: "https://github.com/Zy1r9t7ec/ReComm"
  },
  {
    title: "SCP",
    subtitle: "Secure Context Protocol",
    description: "A secure middleware layer enabling AI Agents to execute tasks in private environments (Gmail, Outlook) using standard OAuth2.0 permission grants. Features an extensible provider architecture supporting multiple AI frameworks.",
    technologies: ["Python", "OAuth2.0", "Flask", "Docker"],
    date: "2025",
    github: "https://github.com/Zy1r9t7ec/SecureContext-Protocol"
  },
  {
    title: "NASA CMAPPS",
    subtitle: "Predictive Maintenance Pipeline",
    description: "End-to-end pipeline processing raw jet engine sensor data. Utilized unsupervised clustering and PCA to define degradation stages. Developed hybrid models to forecast Remaining Useful Life (RUL) and compute real-time risk scores.",
    technologies: ["Python", "Scikit-Learn", "PCA", "Machine Learning"],
    date: "2025",
    github: "https://github.com/Zy1r9t7ec/nasa-cmapps"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] selection:bg-white/20">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-48 pb-32 max-w-5xl">
        <div className="mb-24 animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8" style={{fontFamily: 'Sora'}}>
            Index.
          </h1>
          <p className="text-xl md:text-2xl text-[#a1a1aa] leading-relaxed max-w-2xl font-light">
            An archive of autonomous systems, secure protocols, and predictive pipelines built for real-world application.
          </p>
        </div>

        <div className="space-y-0 border-t border-[#27272a] animate-fade-up delay-200">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group grid md:grid-cols-12 gap-8 py-12 border-b border-[#27272a] hover:bg-[#0f0f11] transition-colors duration-500 px-4 -mx-4"
            >
              {/* Left Column: Meta & Tech */}
              <div className="md:col-span-4 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-sm text-[#71717a] font-mono tracking-tight block mb-2">
                    {project.date}
                  </span>
                  <h3 className="text-sm font-medium tracking-widest uppercase text-[#a1a1aa]">
                    {project.subtitle}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm font-mono text-[#a1a1aa]">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>

              {/* Center Column: Title & Description */}
              <div className="md:col-span-6">
                <h2 className="text-3xl md:text-4xl font-medium mb-4 group-hover:translate-x-2 transition-transform duration-500" style={{fontFamily: 'Sora'}}>
                  {project.title}
                </h2>
                <p className="text-[#a1a1aa] leading-relaxed font-light text-lg">
                  {project.description}
                </p>
              </div>

              {/* Right Column: Actions */}
              <div className="md:col-span-2 flex items-start md:justify-end mt-4 md:mt-0">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-white link-underline pb-1"
                >
                  <Github className="w-4 h-4" />
                  Code
                  <ArrowRight className="w-3 h-3 -rotate-45" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-[#09090b]">
        <div className="container mx-auto px-6 py-12 max-w-5xl flex justify-between items-center text-[#71717a] text-sm">
          <p>© 2026 Mayank Thakre.</p>
          <a href="#" className="link-underline">Back to top</a>
        </div>
      </footer>
    </div>
  );
}