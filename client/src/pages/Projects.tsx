import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Overwatch - Autonomous DevOps Swarm",
    description: "A 6-role multi-agent swarm system engineered for autonomous monitoring, diagnosis, and recovery of real-time application incidents. Integrated the Model Context Protocol (MCP) to execute self-healing Azure infrastructure actions with human-in-loop validation and LLM confidence scoring.",
    technologies: ["Python", "FastAPI", "Docker", "Terraform", "Azure", "MCP", "Foundry API"],
    date: "March 2026",
    highlights: [
      "Multi-agent swarm architecture for autonomous incident response",
      "MCP integration for self-healing infrastructure",
      "Real-time monitoring and diagnosis",
      "LLM-based confidence scoring for remediation"
    ],
    github: "https://github.com/Zy1r9t7ec/overwatch-devops",
    featured: true
  },
  {
    title: "SCP (Secure Context Protocol)",
    description: "Developed a secure middleware layer enabling AI Agents to execute tasks in private environments (Gmail, Outlook) using standard OAuth2.0 permission grants. Engineered an extensible provider architecture supporting various AI agent frameworks with production-ready Docker containerization.",
    technologies: ["Python", "OAuth2.0", "Flask", "Docker"],
    date: "August 2025 - September 2025",
    highlights: [
      "Secure OAuth2.0 middleware for private environment access",
      "Extensible provider architecture",
      "Multi-framework AI agent support",
      "Production-ready containerization"
    ],
    github: "https://github.com/Zy1r9t7ec/scp-protocol",
  },
  {
    title: "NASA CMAPPS Predictive Maintenance",
    description: "Engineered an end-to-end pipeline to process raw jet engine sensor data, utilizing unsupervised clustering and PCA to define 5 novel degradation stages. Developed hybrid regression and classification models to forecast Remaining Useful Life (RUL) and compute real-time Risk Scores for operational alerting.",
    technologies: ["Python", "Scikit-Learn", "PCA", "Machine Learning"],
    date: "March 2025 - May 2025",
    highlights: [
      "Jet engine sensor data pipeline",
      "Unsupervised clustering and PCA analysis",
      "Remaining Useful Life (RUL) prediction",
      "Real-time risk scoring for operational alerts"
    ],
    github: "https://github.com/Zy1r9t7ec/nasa-cmapps",
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{fontFamily: 'Sora'}}>
            Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects showcasing my expertise in AI/ML, DevOps, and cloud infrastructure.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`flex flex-col overflow-hidden hover:shadow-lg transition-shadow ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl" style={{fontFamily: 'Sora'}}>{project.title}</CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-foreground mb-4 leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="gap-2"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border">
          <h2 className="text-2xl font-bold mb-4" style={{fontFamily: 'Sora'}}>More Projects</h2>
          <p className="text-foreground mb-4">
            I'm constantly working on new projects exploring AI, DevOps, and innovative solutions. Check out my GitHub profile for more repositories and contributions.
          </p>
          <Button asChild variant="default" className="gap-2">
            <a href="https://github.com/Zy1r9t7ec" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Visit My GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
