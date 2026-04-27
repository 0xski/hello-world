"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "A propos", href: "#about" },
  { name: "Experience", href: "#projects" },
  { name: "Competences", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          LT
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-foreground font-mono text-xs mr-1">
                  0{index + 1}.
                </span>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <Button asChild variant="outline" size="sm">
              <a href="/CV_TOURELAMINE.pdf" target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-foreground font-mono text-sm mr-2">
                    0{index + 1}.
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="outline" className="w-full">
                <a href="/CV_TOURELAMINE.pdf" target="_blank" rel="noopener noreferrer">
                  CV
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
