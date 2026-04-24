import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity" style={{fontFamily: 'Sora'}}>
            MT
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-foreground hover:text-primary transition-colors font-medium">
              Projects
            </a>
          </Link>
          <a
            href="#contact"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/">
              <a
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </a>
            </Link>
            <Link href="/projects">
              <a
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Projects
              </a>
            </Link>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
