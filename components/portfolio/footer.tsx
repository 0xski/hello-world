import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/laminetoure", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/laminetoure", icon: Linkedin },
  { name: "Email", href: "mailto:lamine.tuure@gmail.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          Concu et developpe par Lamine Toure
        </p>
        
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
