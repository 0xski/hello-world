import { ExternalLink, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Ingenieur Reseau et Systeme",
    company: "Huawei Senegal",
    period: "Fevrier 2025 - Present",
    description: "Refonte et mise en place du systeme video-surveillance et controle d'acces du bureau central Huawei Dakar. Membre du comite Cyber Security & Privacy Protection Governance. Administration de l'infrastructure systeme et reseau.",
    tags: ["Video-surveillance", "Controle d'acces", "Cybersecurite", "Administration reseau"],
    featured: true,
  },
  {
    title: "Mission Guinee Bissau",
    company: "Huawei Bissau",
    period: "Aout 2025 - Septembre 2025",
    description: "Participation a la mise sur pied de l'infrastructure et systeme du nouveau bureau Huawei Bissau. Mise en place du nouveau reseau residence Huawei Bissau avec les standards Starlink.",
    tags: ["Infrastructure", "Starlink", "Deploiement reseau"],
    featured: true,
  },
  {
    title: "Alternant Administrateur Reseau",
    company: "Optical Networks Paris",
    period: "Juin 2021 - Janvier 2024",
    description: "Administration des serveurs (AD, WSUS, Exchange, GPO). Administration reseau, switch et routeur Cisco. Gestion de la securite informatique et sauvegarde Veeam. Mise en place de scripts d'automatisation sous Centreon et Nagios.",
    tags: ["Active Directory", "Cisco", "VMware ESX 8.0", "Veeam", "Centreon", "Nagios"],
    featured: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-muted-foreground font-mono text-lg">02.</span>
          Experience Professionnelle
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>
        
        <div className="space-y-24">
          {experiences.map((project, index) => (
            <div 
              key={project.title}
              className={`grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div className={`md:col-span-7 ${index % 2 === 1 ? "md:col-start-6" : ""}`}>
                <Card className="overflow-hidden bg-muted/50 border-0">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                      <Building2 className="w-16 h-16 text-muted-foreground/30" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className={`md:col-span-6 ${
                index % 2 === 1 
                  ? "md:col-start-1 md:row-start-1" 
                  : "md:col-start-6"
              } md:-mt-0 relative z-10`}>
                <p className="text-muted-foreground font-mono text-sm mb-2">{project.period}</p>
                <h3 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-primary font-medium mb-4">{project.company}</p>
                <Card className="mb-4 bg-card shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
                <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
