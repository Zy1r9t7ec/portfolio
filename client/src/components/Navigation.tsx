import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" }
  ];

  return (
   <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-[#27272a]">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
       <Link href="/" className="text-lg font-medium text-white tracking-tight hover:text-[#a1a1aa] transition-colors" style={{fontFamily: 'Sora'}}>
  Mayank Thakre.
</Link>
        
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link 
  key={item.href} 
  href={item.href}
  className={cn(
    "text-sm font-medium transition-colors tracking-wide",
    location === item.href ? "text-white" : "text-[#71717a] hover:text-white"
  )}
  style={{fontFamily: 'Sora'}}
>
  {item.label}
</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}