import Navigation from "@/components/Navigation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Overwatch",
    subtitle: "Autonomous DevOps Swarm",
    description: "A 6-role multi-agent swarm system engineered for autonomous monitoring, diagnosis, and recovery of real-time application incidents. Integrated the Model Context Protocol (MCP) to execute self-healing Azure infrastructure actions with human-in-the-loop validation and LLM confidence scoring.",
    technologies: ["Python", "FastAPI", "Docker", "Terraform", "Azure", "MCP", "Foundry API"],
    date: "March 2026",
    github: "https://github.com/Zy1r9t7ec/overwatch-devops"
  },
  {
    title: "ReComm",
    subtitle: "AI-Driven Return Automation",
    description: "An automated system utilizing video analysis to verify product conditions and prevent fraud during the return process. Features an 'Inspector' agent designed to autonomously assess physical item states (e.g., powerbanks) and manage the user return workflow.",
    technologies: ["Python", "Computer Vision", "Agentic Frameworks", "LLMs"],
    date: "April 2026",
    github: "https://github.com/Zy1r9t7ec/recomm"
  },
  {
    title: "SCP",
    subtitle: "Secure Context Protocol",
    description: "A secure middleware layer enabling AI Agents to execute tasks in private environments (like Gmail or Outlook) using standard OAuth2.0 permission grants. Features an extensible provider architecture supporting multiple AI frameworks with production-ready containerization.",
    technologies: ["Python", "OAuth2.0", "Flask", "Docker"],
    date: "Aug 2025 - Sep 2025",
    github: "https://github.com/Zy1r9t7ec/scp-protocol"
  },
  {
    title: "NASA CMAPPS",
    subtitle: "Predictive Maintenance Pipeline",
    description: "An end-to-end pipeline processing raw jet engine sensor data. Utilized unsupervised clustering and PCA to define 5 novel degradation stages. Developed hybrid regression and classification models to forecast Remaining Useful Life (RUL) and compute real-time operational risk scores.",
    technologies: ["Python", "Scikit-Learn", "PCA", "Machine Learning"],
    date: "Mar 2025 - May 2025",
    github: "https://github.com/Zy1r9t7ec/nasa-cmapps"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      
      <main className="container mx-auto px-6 py-32 max-w-5xl">
        <div className="mb-20">
          <h1 className="text-5xl font-bold mb-6 tracking-tight" style={{fontFamily: 'Sora'}}>
            Selected Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Real-stakes projects focusing on multi-agent architectures, secure protocols, and predictive systems.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-12 gap-8 border-t border-border/50 pt-12">
              {/* Left Column: Title & Tech */}
              <div className="md:col-span-4 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-1" style={{fontFamily: 'Sora'}}>{project.title}</h2>
                  <p className="text-muted-foreground font-medium">{project.subtitle}</p>
                </div>
                <div className="font-mono text-sm text-muted-foreground">
                  {project.date}
                </div>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-foreground/80">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Description & Links */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>
                <div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-muted-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Repository
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}