import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
import { ArrowRight, Github } from "lucide-react";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    title: "EasyWebinar AI Voice Agent",
    subtitle: "Telephony AI Voice Agent",
    description: "Production-ready inbound and outbound AI voice agent handling 10 diverse workflows (cart abandonment, VIP agenda building, FAQ RAG support). Engineered with Telnyx Voice API (Call Control + Media Streaming) and Pipecat to eliminate third-party SIP bridge latency.",
    technologies: ["Python", "Pipecat", "Telnyx", "RAG", "Pytest"],
    date: "2026",
    github: "https://github.com/Mayank-ew/Calling-Agent-"
  },
  {
    title: "AI Avatar Pipeline",
    subtitle: "Serverless Video Generation",
    description: "Automated talking-head video generation pipeline deployed on Modal. Synthesizes host scripts via Groq (gpt-oss-120b), generates speech (Fish Audio), and lip-syncs expressive avatars using the Wan2.2-S2V video diffusion model.",
    technologies: ["Python", "Modal", "Wan2.2", "Groq", "Fish Audio"],
    date: "2026",
    github: "https://github.com/Mayank-ew/AI-avatar"
  },
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
    title: "TerraMind",
    subtitle: "Methane Emission Tracker",
    description: "Machine learning notebooks analyzing environmental data. Includes the implementation of a TinyUNet model for predictive geospatial processing and methane emission tracking.",
    technologies: ["Python", "Jupyter", "PyTorch", "ML"],
    date: "Apr 2026",
    github: "https://github.com/Zy1r9t7ec/methane-tracker"
  },
  {
    title: "Local RAG Pipeline",
    subtitle: "Privacy-First Document Retrieval",
    description: "A completely localized Retrieval-Augmented Generation (RAG) pipeline prioritizing privacy and efficiency, built using Ollama for local inference and ChromaDB for vector storage.",
    technologies: ["Python", "Ollama", "ChromaDB", "RAG"],
    date: "Mar 2026",
    github: "https://github.com/Zy1r9t7ec/b5_basic_RAG"
  },
  {
    title: "Annotator Disagreement CIFAR-10",
    subtitle: "Noisy Label Research",
    description: "Contributed to computer vision research focusing on model robustness against noisy data. Trained and evaluated models on the CIFAR-10 dataset using techniques designed to mitigate the impact of simulated annotator disagreement and improve generalization.",
    technologies: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
    date: "2025",
    github: "https://github.com/MarkVI2/annotater-disagreement-cifar10"
  },
  {
    title: "Drug Discovery Pipeline",
    subtitle: "Computational Analysis",
    description: "Contributed to an ML-driven platform aimed at accelerating the drug discovery process. Focused on building computational tools and interfaces required for researchers to evaluate molecular compounds and experimental data.",
    technologies: ["Python", "Machine Learning", "Bioinformatics"],
    date: "2025",
    github: "https://github.com/bluebell2505/drug-testing-ai"
  },
  {
    title: "NASA CMAPPS",
    subtitle: "Predictive Maintenance Pipeline",
    description: "End-to-end pipeline processing raw jet engine sensor data. Utilized unsupervised clustering and PCA to define degradation stages. Developed hybrid models to forecast Remaining Useful Life (RUL) and compute real-time risk scores.",
    technologies: ["Python", "Scikit-Learn", "PCA", "Machine Learning"],
    date: "2025",
    github: "https://github.com/Zy1r9t7ec/nasa-cmapps"
  },
  {
    title: "Employee Leave Manager",
    subtitle: "Full-Stack HR Platform",
    description: "A robust web application for managing employee leave requests featuring role-based access control (Employee, Manager, HR Admin). Integrates automated email notifications and detailed reporting systems.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    date: "May 2026",
    github: "https://github.com/Zy1r9t7ec/Employee-Leave-Manager"
  },
  {
    title: "Internship & Skill Tracker",
    subtitle: "Progression Mapping Tool",
    description: "A specialized tracker for mapping evidence to skills, incorporating a decay calculation system to accurately reflect skill retention and growth over time.",
    technologies: ["TypeScript"],
    date: "Apr 2026",
    github: "https://github.com/Zy1r9t7ec/Internship-Skill-Tracker"
  }
];

export default function Projects() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] selection:bg-white/20">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-48 pb-32 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8">
            Archive.
          </h1>
          <p className="text-lg md:text-xl text-[#888888] leading-relaxed max-w-2xl font-light">
            A comprehensive ledger of autonomous systems, secure protocols, generative pipelines, and ML experiments.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-0 border-t border-[#1F1F1F]"
        >
          {projects.map((project, index) => (
            <motion.div 
              variants={item}
              key={index} 
              className="group grid md:grid-cols-12 gap-8 py-12 border-b border-[#1F1F1F] hover:bg-[#0C0C0C] transition-colors duration-500 px-4 -mx-4 rounded-sm"
            >
              {/* Left Column: Meta & Tech */}
              <div className="md:col-span-3 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs text-[#555555] font-mono tracking-tight block mb-2">
                    {project.date}
                  </span>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-[#888888]">
                    {project.subtitle}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-mono text-[#555555]">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>

              {/* Center Column: Title & Description */}
              <div className="md:col-span-7">
                <h2 className="text-2xl md:text-3xl font-serif mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h2>
                <p className="text-[#888888] leading-relaxed font-light text-base">
                  {project.description}
                </p>
              </div>

              {/* Right Column: Actions */}
              <div className="md:col-span-2 flex items-start md:justify-end mt-4 md:mt-0">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono tracking-wide uppercase text-white hover:opacity-70 transition-opacity pb-1"
                >
                  <Github className="w-4 h-4" />
                  Code
                  <ArrowRight className="w-3 h-3 -rotate-45" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="bg-[#0A0A0A]">
        <div className="container mx-auto px-6 py-12 max-w-5xl flex justify-between items-center text-[#555555] text-xs font-mono border-t border-[#1F1F1F]">
          <p>© {new Date().getFullYear()} Mayank Thakre.</p>
        </div>
      </footer>
      
      <BackToTop />
    </div>
  );
}