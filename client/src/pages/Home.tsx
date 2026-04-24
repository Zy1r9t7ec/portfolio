import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight, Mail, Phone, Github, Linkedin, Code2, Brain, Cloud } from "lucide-react";

export default function Home() {
  const skills = {
    "AI & ML": ["PyTorch", "Scikit-Learn", "OpenCV", "TensorFlow", "LLMs", "RAG Systems", "Agentic Frameworks"],
    "Languages": ["Python", "Java", "C", "C#", "SQL"],
    "Dev & Tools": ["Git/GitHub", "Docker", "AWS", "Azure", "Google Cloud", "VS Code", "Figma"]
  };

  const researchInterests = [
    {
      icon: Brain,
      title: "AI & Large Language Models",
      description: "Exploring advanced LLM architectures, fine-tuning techniques, and applications in autonomous systems."
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud Infrastructure",
      description: "Building scalable, resilient cloud systems with focus on automation and self-healing capabilities."
    },
    {
      icon: Code2,
      title: "Autonomous Systems",
      description: "Developing multi-agent systems and AI agents that can operate independently with human oversight."
    }
  ];

  const contactInfo = [
    { label: "Email", value: "se23ucse218@mahindrauniversity.edu.in", icon: Mail, href: "mailto:se23ucse218@mahindrauniversity.edu.in" },
    { label: "Phone", value: "+91 9959613560", icon: Phone, href: "tel:+919959613560" },
    { label: "GitHub", value: "Zy1r9t7ec", icon: Github, href: "https://github.com/Zy1r9t7ec" },
    { label: "LinkedIn", value: "mayank-thakrem13", icon: Linkedin, href: "https://www.linkedin.com/in/mayank-thakrem13" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <Badge variant="outline" className="mb-4">Computer Science Student</Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight" style={{fontFamily: 'Sora'}}>
              Mayank <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Thakre</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Passionate about building intelligent systems, exploring cutting-edge AI/ML technologies, and architecting scalable DevOps solutions. Currently studying at Mahindra University with hands-on experience in autonomous systems and cloud infrastructure.
            </p>
            <div className="flex gap-4">
              <Link href="/projects">
                <Button size="lg" className="gap-2">
                  View My Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <a href="#contact" className="flex items-center gap-2">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4" style={{fontFamily: 'Sora'}}>
                    MT
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">AI/ML Engineer</p>
                  <p className="text-sm text-muted-foreground font-mono">DevOps Architect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-foreground" style={{fontFamily: 'Sora'}}>About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl" style={{fontFamily: 'Sora'}}>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">B.Tech Computer Science</h3>
                  <p className="text-sm text-muted-foreground">Mahindra University</p>
                  <p className="text-sm text-muted-foreground">Aug 2023 – Present</p>
                  <p className="text-sm text-muted-foreground mt-1">CGPA: 6.73/10</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground">Intermediate</h3>
                  <p className="text-sm text-muted-foreground">Aakash Coaching Institute</p>
                  <p className="text-sm text-muted-foreground">93% | JEE Mains: 97.29%</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl" style={{fontFamily: 'Sora'}}>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Intern - Vknow Patents</h3>
                  <p className="text-sm text-muted-foreground">Jan 2026 – Ongoing</p>
                  <p className="text-sm text-muted-foreground mt-1">IP Law & AI in Legal Tech</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground">AI R&D Intern - EasyWebinar</h3>
                  <p className="text-sm text-muted-foreground">Jun 2025 – Aug 2025</p>
                  <p className="text-sm text-muted-foreground mt-1">AI Agents & RAG Systems</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl" style={{fontFamily: 'Sora'}}>Interests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Technical Interests:</p>
                  <p className="text-sm text-muted-foreground">AI & LLMs, DevOps, Autonomous Systems, Legal Tech</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground mb-2">Extra-curricular:</p>
                  <p className="text-sm text-muted-foreground">Football, Skating, Branding & Marketing</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-foreground" style={{fontFamily: 'Sora'}}>Research Interests</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {researchInterests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle style={{fontFamily: 'Sora'}}>{interest.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-foreground" style={{fontFamily: 'Sora'}}>Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle style={{fontFamily: 'Sora'}}>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20" id="contact">
        <h2 className="text-4xl font-bold mb-12 text-foreground" style={{fontFamily: 'Sora'}}>Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="hover:shadow-lg hover:border-primary transition-all cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg" style={{fontFamily: 'Sora'}}>{info.label}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors font-mono text-sm">
                      {info.value}
                    </p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 border-t border-border py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground" style={{fontFamily: 'Sora'}}>
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new projects, innovative ideas, and opportunities to work on challenging problems.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <a href="mailto:se23ucse218@mahindrauniversity.edu.in">Send Me an Email</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/Zy1r9t7ec" target="_blank" rel="noopener noreferrer">
                View My GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2026 Mayank Thakre. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
