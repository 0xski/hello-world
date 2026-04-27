import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl">
        <p className="text-muted-foreground mb-4 tracking-wide">Bonjour, je suis</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
          Lamine Toure.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-muted-foreground mb-8">
          Ingenieur Systeme et Reseau.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12">
          Fort de 6 annees d&apos;experience en infrastructures IT, je concois et 
          securise des systemes reseau performants. Administration, virtualisation 
          et deploiement cloud sont au coeur de mon expertise.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg" variant="outline" className="px-8">
            <a href="#projects">Voir mes projets</a>
          </Button>
          <Button asChild size="lg" className="px-8">
            <a href="#contact">Me contacter</a>
          </Button>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  )
}
