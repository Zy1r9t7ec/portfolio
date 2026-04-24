import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Mail, Github, Linkedin, BrainCircuit, Cpu, ShieldCheck } from "lucide-react";

export default function Home() {
  const skills = {
    "AI & Machine Learning": ["PyTorch", "Scikit-Learn", "OpenCV", "TensorFlow", "LLMs", "RAG Systems", "Agentic Frameworks", "Fine-tuning"],
    "Languages & Core": ["Python", "Java", "C", "C#", "SQL"],
    "Infrastructure & Tools": ["Git", "Docker", "AWS", "Azure", "Google Cloud", "NumPy", "Pandas", "Jupyter"]
  };

  const focusAreas = [
    {
      icon: BrainCircuit,
      title: "Agentic AI & Swarms",
      description: "Designing multi-agent architectures and self-healing systems capable of autonomous monitoring, diagnosis, and task execution."
    },
    {
      icon: Cpu,
      title: "Local LLM Deployment",
      description: "Optimizing and deploying Small Large Language Models (SLLMs) using quantization techniques like GGUF for efficient, localized inference."
    },
    {
      icon: ShieldCheck,
      title: "Privacy-Preserving ML",
      description: "Exploring secure frameworks and federated learning approaches to maintain data integrity and privacy in distributed AI systems."
    }
  ];

  const experience = [
    {
      role: "Intern",
      company: "Vknow Patents Services",
      date: "Jan 2026 – Present",
      description: "Researching intellectual property law, patent filing processes, and evaluating the integration of AI in cross-jurisdictional legal tech."
    },
    {
      role: "AI R&D Intern",
      company: "EasyWebinar",
      date: "Jun 2025 – Aug 2025",
      description: "Engineered AI agents using RAG to streamline workflows. Developed 5 tailored prototypes to demonstrate automated feature strategies."
    },
    {
      role: "Brand Apprenticeship",
      company: "Knovos Pvt Ltd",
      date: "Jan 2025",
      description: "Analyzed brand identity principles and constructed a complete sample brand identity from scratch."
    },
    {
      role: "AI Training Intern",
      company: "Dr. Reddy's Laboratories",
      date: "Jul 2024 – Aug 2024",
      description: "Explored Vertex AI capabilities and planned integration architectures for the company's internal software environment."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 md:py-48 max-w-5xl">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8" style={{fontFamily: 'Sora'}}>
            Mayank Thakre
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10">
            I build intelligent, autonomous systems. My work focuses on multi-agent swarms, local LLM deployment, and creating software that operates with real-stakes autonomy and human-centric design.
          </p>
          <div className="flex gap-6 items-center">
            <Link href="/projects">
              <Button size="lg" className="rounded-none bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-md group">
                View Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <div className="flex gap-4 text-muted-foreground">
              <a href="https://github.com/Zy1r9t7ec" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/mayank-thakrem13" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:se23ucse218@mahindrauniversity.edu.in" className="hover:text-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-secondary/20 py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-12">Current Focus</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div key={idx} className="space-y-4">
                  <Icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold" style={{fontFamily: 'Sora'}}>{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="container mx-auto px-6 py-24 max-w-5xl">
        <div className="grid md:grid-cols-12 gap-16">
          
          {/* Experience Timeline */}
          <div className="md:col-span-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-12">Experience</h2>
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <div key={idx} className="group">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground font-mono">{exp.date}</span>
                  </div>
                  <h4 className="text-md text-foreground/80 mb-3">{exp.company}</h4>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Interests */}
          <div className="md:col-span-4 space-y-16">
            <div>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">Education</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground">B.Tech Computer Science</h3>
                  <p className="text-sm text-muted-foreground mt-1">Mahindra University</p>
                  <p className="text-sm font-mono text-muted-foreground mt-1">2023 – Present</p>
                  <div className="mt-3 text-sm text-muted-foreground">
                    <span className="text-foreground">Focus:</span> Machine Learning, Deep Neural Networks, Generative AI, Game Theory, DSA
                  </div>
                </div>
                <div className="pt-4 border-t border-border/50 text-sm text-muted-foreground">
                  <p>Intermediate • Aakash Institute (93%)</p>
                  <p>10th Grade • Silver Oaks (90.5%)</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">Interests</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Business Strategies</li>
                <li>Branding & Marketing</li>
                <li>Football & Skating</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="bg-foreground text-background py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-background/60 mb-12">Technical Arsenal</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-6 opacity-90">{category}</h3>
                <ul className="space-y-3 font-mono text-sm opacity-75">
                  {items.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 max-w-5xl text-sm text-muted-foreground flex justify-between items-center border-t border-border/50">
        <p>© 2026 Mayank Thakre.</p>
        <p className="font-mono">System Status: Online</p>
      </footer>
    </div>
  );
}