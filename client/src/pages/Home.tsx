import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
import { Link } from "wouter";
import { ArrowRight, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const experiences = [
    {
      role: "AI R&D Intern",
      company: "EasyWebinar",
      date: "Jun 2026 – Jul 2026",
      location: "Hyderabad, India",
      link: "https://www.linkedin.com/company/easywebinar/home/",
      description: "Designed AI avatar workflows and evaluated voice cloning models for natural sounding speech. Established an end to end serverless AI video generation pipeline combining digital avatars with synthesized audio and precise lip syncing. Optimized hosting and resolved technical bottlenecks for production media workflows."
    },
    {
      role: "Intellectual Property (IP) Intern",
      company: "Vknow Patent Services",
      date: "Jan 2026",
      location: "Remote",
      link: "https://www.linkedin.com/company/vknow-patent-services/", 
      description: "Gained hands-on exposure to patent searching and the technical analysis of inventions. Explored the intersection of computer science and intellectual property to evaluate how software innovations are legally safeguarded in the real world."
    },
    {
      role: "AI R&D Intern",
      company: "EasyWebinar",
      date: "Jun 2025 – Aug 2025",
      location: "Hyderabad, India",
      link: "https://www.linkedin.com/company/easywebinar/home/",
      description: "Engineered AI agents using RAG to streamline workflows. Conducted in depth feature analysis and crafted 5 tailored prototypes for testing and demonstration."
    },
    {
      role: "Brand Apprenticeship",
      company: "Knovos Pvt Ltd",
      date: "Jan 2025",
      location: "Ahmedabad, India",
      link: "https://www.linkedin.com/company/knovos/",
      description: "Studied brand identity principles and storytelling. Created a comprehensive sample brand from scratch, including visual identity and marketing strategies."
    },
    {
      role: "AI Training Intern",
      company: "Dr. Reddy's Laboratories Ltd",
      date: "Jul 2024 – Aug 2024",
      location: "Hyderabad, India",
      link: "https://www.linkedin.com/company/dr--reddys-laboratories/",
      description: "Explored Vertex AI capabilities and planned integration architectures for deployment within the company's internal software environment."
    }
  ];

  const selectedWork = [
    {
      title: "Telephony AI Voice Agent",
      tags: ["Python", "Telnyx", "Pipecat", "RAG"],
      description: "Production-ready inbound/outbound AI voice agent handling 10 diverse workflows (Remainder calls, VIP agenda building, FAQ support). Engineered to eliminate third party SIP bridge latency.",
      github: "https://github.com/Mayank-ew/Calling-Agent-"
    },
    {
      title: "Serverless AI Avatar Pipeline",
      tags: ["Python", "Modal", "Wan2.2", "Fish Audio"],
      description: "Automated talking head video generation deployed on Modal. Synthesizes LLM driven scripts, generates speech, and lip syncs expressive avatars using the Wan2.2-S2V video diffusion model.",
      github: "https://github.com/Mayank-ew/AI-avatar"
    }
  ];

  const education = [
    {
      degree: "Diplôme d'Établissement, Digital Transformation",
      school: "Centrale Lyon",
      date: "Sep 2026 – Sep 2027",
      location: "Lyon, France",
    },
    {
      degree: "B.Tech Computer Science",
      school: "Mahindra University",
      date: "Aug 2023 – 2027",
      location: "Hyderabad, India",
    }
  ];

  const techStack = [
    { category: "AI & ML", items: ["PyTorch", "Scikit-Learn", "OpenCV", "TensorFlow", "RAG Systems", "Agentic Frameworks"] },
    { category: "Core Engineering", items: ["Python", "Java", "Docker", "AWS", "Google Cloud", "SQL"] },
    { category: "Strategy & Legal", items: ["IP Law & Patents", "Brand Identity", "Business Strategies", "Product Architecture"] }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] selection:bg-white/20">
      <Navigation />

      {/* 1. HERO */}
      <section className="container mx-auto px-6 pt-48 pb-32 max-w-5xl">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-serif tracking-tight mb-8">
            Mayank Thakre.
          </motion.h1>
          <motion.h2 variants={item} className="text-xl md:text-2xl text-[#888888] font-medium mb-6 tracking-wide">
            Computer Science Student & Engineer.
          </motion.h2>
          <motion.p variants={item} className="text-lg md:text-xl text-[#888888] leading-relaxed mb-12 max-w-2xl font-light">
            I'm drawn to the space where technology, legalities, design, and storytelling meet. My goal is to turn complex problems into clear, human centered experiences whether that means engineering generative AI pipelines or exploring how software is legally safeguarded in the real world.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Link href="/projects" className="group flex items-center gap-3 text-sm font-medium tracking-wide uppercase hover:text-[#888888] transition-colors w-fit">
              Explore Archive 
              <span className="bg-white text-black p-2 rounded-full group-hover:bg-[#888888] transition-colors">
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </span>
            </Link>
            
            <div className="hidden sm:block h-px w-12 bg-[#1F1F1F]"></div>
            
            <div className="flex gap-5 text-[#888888]">
              <a href="https://github.com/Zy1r9t7ec" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/mayank-thakre-m13" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:mayankthakre123@gmail.com" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SELECTED WORK PREVIEW */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-[#1F1F1F]"
      >
        <div className="container mx-auto px-6 py-24 max-w-5xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono tracking-widest uppercase text-[#888888]">Featured Work</h2>
            <h2 className="text-xs font-mono tracking-widest uppercase text-[#888888]">Featured Archive</h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-8">
            {selectedWork.map((work, idx) => (
              <a 
                key={idx} 
                href={work.github} 
                target="_blank" 
                rel="noreferrer"
                className="group block p-6 border border-[#1F1F1F] hover:border-[#333333] transition-colors rounded-sm bg-[#0C0C0C]"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-serif">{work.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm text-[#888888] mb-6 leading-relaxed">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-[#888888] bg-[#151515] px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. EXPERIENCE */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-[#1F1F1F]"
      >
        <div className="container mx-auto px-6 py-24 max-w-5xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono tracking-widest uppercase text-[#888888]">Experience</h2>
          </div>
          <div className="md:col-span-8 space-y-16">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group relative">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-xl font-medium text-white">{exp.role}</h3>
                  <span className="text-sm text-[#888888] font-mono tracking-tight mt-1 md:mt-0">{exp.date}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-md text-[#888888]">{exp.company}</h4>
                  <span className="text-xs text-[#555555] font-mono">— {exp.location}</span>
                  {exp.link && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`Visit ${exp.company}`}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#888888] hover:text-white transition-colors" />
                    </a>
                  )}
                </div>
                <p className="text-[#888888] leading-relaxed font-light">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. BACKGROUND & CERTIFICATIONS */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-[#1F1F1F]"
      >
        <div className="container mx-auto px-6 py-24 max-w-5xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono tracking-widest uppercase text-[#888888]">Education</h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-12">
            <div className="space-y-10">
              {education.map((edu, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-serif text-white mb-1">{edu.degree}</h3>
                  <p className="text-[#888888] text-sm mb-2">{edu.school}</p>
                  <p className="text-[#555555] text-xs font-mono">{edu.date} • {edu.location}</p>
                </div>
              ))}
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-serif text-white mb-1">McKinsey Forward Program</h3>
                <p className="text-[#888888] text-sm mb-2">McKinsey & Company</p>
                <p className="text-[#555555] text-xs font-mono mb-3">Issued Jul 2025</p>
                <p className="text-[#888888] text-sm leading-relaxed font-light">
                  <span className="text-white">Focus:</span> Collaborative Problem Solving, Team Leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. TECH STACK */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-[#1F1F1F]"
      >
        <div className="container mx-auto px-6 py-24 max-w-5xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono tracking-widest uppercase text-[#888888]">Capabilities</h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid sm:grid-cols-3 gap-8">
              {techStack.map((group, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-sm font-medium text-white mb-4 uppercase tracking-wider border-b border-[#1F1F1F] pb-2">{group.category}</h3>
                  <ul className="space-y-3">
                    {group.items.map(item => (
                      <li key={item} className="text-sm font-mono text-[#888888] flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#333333] rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-[#1F1F1F]">
        <div className="container mx-auto px-6 py-12 max-w-5xl flex flex-col md:flex-row justify-between items-center text-[#555555] text-xs font-mono">
          <p>© {new Date().getFullYear()} Mayank Thakre.</p>
        </div>
      </footer>
      
      <BackToTop />
    </div>
  );
}