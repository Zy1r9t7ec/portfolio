import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Archive" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-5xl">
        <Link 
          href="/" 
          className="text-lg font-serif text-white tracking-tight hover:opacity-80 transition-opacity"
        >
          Mayank Thakre.
        </Link>
        
        <nav className="flex gap-8 relative">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors tracking-wide py-2",
                  isActive ? "text-white" : "text-[#888888] hover:text-white"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}