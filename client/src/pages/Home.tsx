import Navigation from "@/components/Navigation";
import { Link } from "wouter";
import { ArrowRight, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";


export default function Home() {
  const experiences = [
    {
      role: "Intern",
      company: "Vknow Patents Services",
      date: "Jan 2026 – Feb 2026",
      link: "https://www.linkedin.com/company/vknow-patent-services/", 
      description: "Evaluating the integration of AI in cross-jurisdictional legal tech and researching patent filing processes within a legal firm environment."
    },
    {
      role: "AI R&D Intern",
      company: "EasyWebinar",
      date: "Jun 2025 – Aug 2025",
      link: "https://www.linkedin.com/company/easywebinar/",
      description: "Engineered AI agents using RAG to streamline workflows. Conducted in-depth feature analysis and crafted 5 tailored prototypes for testing and demonstration."
    },
    {
      role: "Brand Apprenticeship",
      company: "Knovos Pvt Ltd",
      date: "Jan 2025",
      link: "https://www.linkedin.com/company/knovos/",
      description: "Studied brand identity principles and storytelling. Created a comprehensive sample brand from scratch, including visual identity and marketing strategies."
    },
    {
      role: "AI Training Intern",
      company: "Dr. Reddy's Laboratories Ltd",
      date: "Jul 2024 – Aug 2024",
     link: "https://www.linkedin.com/company/dr--reddys-laboratories/",
      description: "Explored Vertex AI capabilities and planned integration architectures for deployment within the company's internal software environment."
    }
  ];

  const capabilities = [
    {
      category: "AI & Machine Learning",
      items: "PyTorch, Scikit-Learn, OpenCV, TensorFlow, LLMs, RAG Systems, Agentic Frameworks"
    },
    {
      category: "Core Infrastructure",
      items: "Python, Java, Docker, AWS, Azure, Google Cloud, Git/GitHub, C, SQL"
    },
    {
      category: "Strategy & Legal",
      items: "IP Law & Patents, Brand Identity, Business Strategies, Marketing, Product Architecture"
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] selection:bg-white/20">
      <Navigation />

      {/* 1. HERO: Who are you? */}
      <section className="container mx-auto px-6 pt-48 pb-32 max-w-5xl animate-fade-up">
        <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8" style={{fontFamily: 'Sora'}}>
          Mayank Thakre.
        </h1>
        <p className="text-xl md:text-2xl text-[#a1a1aa] leading-relaxed mb-12 max-w-3xl font-light">
          I engineer autonomous systems for mission critical environments. My work combines deep technical execution like multi-agent swarms and local LLMs with the commercial strategy, brand positioning, and IP frameworks necessary to actually bring them to market.
        </p>
        
        <div className="flex items-center gap-6">
          <Link href="/projects" className="group flex items-center gap-3 text-sm font-medium tracking-wide uppercase hover:text-[#a1a1aa] transition-colors">
            Explore Work 
            <span className="bg-white text-black p-2 rounded-full group-hover:bg-[#a1a1aa] transition-colors">
              <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </span>
          </Link>
          
          <div className="h-px w-12 bg-[#27272a]"></div>
          
          <div className="flex gap-5 text-[#a1a1aa]">
            <a href="https://github.com/Zy1r9t7ec" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/mayank-thakre-m13" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:mayankthakre123@gmail.com" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </section>

      {/* 2. THE APPROACH: How do you think? (Moved up) */}
      <section className="border-t border-[#27272a] bg-[#0f0f11] animate-fade-up delay-100">
        <div className="container mx-auto px-6 py-24 max-w-5xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-medium tracking-widest uppercase text-[#71717a]">The Approach</h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div>
              <h3 className="text-2xl font-medium mb-4" style={{fontFamily: 'Sora'}}>Real-Stakes Engineering</h3>
              <p className="text-[#a1a1aa] leading-relaxed text-lg font-light">
                I prioritize building systems that solve tangible problems over theoretical exercises. Whether designing self-healing cloud infrastructure or automated verification workflows, technology must be resilient, scalable, and operate with humane logic.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4" style={{fontFamily: 'Sora'}}>Minimalist Execution</h3>
              <p className="text-[#a1a1aa] leading-relaxed text-lg font-light">
                Architectural complexity should not result in execution clutter. I focus on highly efficient localized inferences using SLLMs, clean codebases, and ensuring that user interfaces remain entirely frictionless.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4" style={{fontFamily: 'Sora'}}>The Commercial & Legal Lens</h3>
              <p className="text-[#a1a1aa] leading-relaxed text-lg font-light">
                Great code does not survive in a vacuum. My background studying intellectual property law, branding, and market positioning ensures that the systems I build are not just technically sound, but commercially viable, user-focused, and legally protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE: Are you battle-tested? */}
      <section className="border-t border-[#27272a] animate-fade-up delay-200">
        <div className="container mx-auto px-6 py-24 max-w-5xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-medium tracking-widest uppercase text-[#71717a]">Experience</h2>
          </div>
          <div className="md:col-span-8 space-y-16">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-xl font-medium text-white">{exp.role}</h3>
                  <span className="text-sm text-[#71717a] font-mono tracking-tight mt-1 md:mt-0">{exp.date}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
  <h4 className="text-md text-[#d4d4d8] font-medium">{exp.company}</h4>
  {exp.link && (
    <a 
      href={exp.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group"
      aria-label={`Visit ${exp.company}`}
    >
      <div className="w-8 h-8 rounded-full border border-[#27272a] text-[#a1a1aa] flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  )}
</div>
                <p className="text-[#a1a1aa] leading-relaxed font-light">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES: What is your stack? */}
      <section className="border-t border-[#27272a] bg-[#0f0f11] animate-fade-up delay-300">
        <div className="container mx-auto px-6 py-24 max-w-5xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-medium tracking-widest uppercase text-[#71717a]">Capabilities</h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            {capabilities.map((group, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">{group.category}</h3>
                <p className="text-[#a1a1aa] leading-relaxed font-mono text-sm">{group.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BACKGROUND: What is your foundation? */}
      <section className="border-t border-[#27272a] animate-fade-up" style={{ animationDelay: '400ms' }}>
        <div className="container mx-auto px-6 py-24 max-w-5xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-medium tracking-widest uppercase text-[#71717a]">Background</h2>
          </div>
          <div className="md:col-span-8 grid md:grid-cols-2 gap-12">
            
            {/* Education Stack */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">B.Tech Computer Science</h3>
                <p className="text-[#a1a1aa] text-sm mb-3">Mahindra University • Aug 2023 – Present</p>
                <p className="text-[#71717a] text-sm font-mono mb-4">CGPA: 6.73/10</p>
                <p className="text-[#a1a1aa] text-sm leading-relaxed font-light">
                  <span className="text-white font-medium">Focus:</span> Machine Learning, Deep Neural Networks, Generative AI, DSA, OOP (Java), DBMS, Game Theory.
                </p>
              </div>
              
              <div className="pt-6 border-t border-[#27272a] space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-white">Intermediate (93%)</h4>
                  <p className="text-[#71717a] text-xs font-mono mt-1">Aakash Institute • JEE Mains: 97.29%</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">10th Grade (90.5%)</h4>
                  <p className="text-[#71717a] text-xs font-mono mt-1">Silver Oaks International School</p>
                </div>
              </div>
            </div>

            {/* Pursuits */}
            <div>
              <h3 className="text-lg font-medium text-white mb-6">Pursuits</h3>
              <ul className="space-y-4 text-[#a1a1aa] font-light">
                <li className="flex flex-col">
                  <span className="text-white font-medium text-sm">Athletics</span>
                  <span className="text-sm mt-1">Football, Skating</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#27272a] bg-[#09090b]">
        <div className="container mx-auto px-6 py-12 max-w-5xl flex flex-col md:flex-row justify-between items-center text-[#71717a] text-sm">
          <p>© 2026 Mayank Thakre.</p>
          <p className="font-mono mt-4 md:mt-0">System Status: Online</p>
        </div>
      </footer>
    </div>
  );
}