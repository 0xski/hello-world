import Image from "next/image"
import { Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const huaweiExperience = {
  title: "Ingenieur Reseau et Systeme",
  company: "Huawei Senegal",
  period: "Fevrier 2025 - Present",
  description: "Membre du comite Cyber Security & Privacy Protection Governance. Administration de l'infrastructure systeme et reseau.",
  tags: ["Cybersecurite", "Administration reseau", "Infrastructure"],
  image: "/images/huawei-logo.jpg",
}

const huaweiMissions = [
  {
    title: "Mission Guinee Bissau",
    company: "Huawei Bissau",
    period: "Aout 2025 - Septembre 2025",
    description: "Participation a la mise sur pied de l'infrastructure et systeme du nouveau bureau Huawei Bissau. Mise en place du nouveau reseau residence Huawei Bissau avec les standards Starlink.",
    tags: ["Infrastructure", "Starlink", "Deploiement reseau"],
  },
  {
    title: "Mission Gambie",
    company: "Huawei Gambie",
    period: "2025",
    description: "Mission de deploiement et support infrastructure reseau pour le bureau Huawei Gambie.",
    tags: ["Infrastructure", "Deploiement reseau"],
  },
]

const opticalExperience = {
  title: "Alternant Administrateur Reseau",
  company: "Optical Networks Paris",
  period: "Juin 2021 - Janvier 2024",
  description: "Administration des serveurs (AD, WSUS, Exchange, GPO). Administration reseau, switch et routeur Cisco. Gestion de la securite informatique et sauvegarde Veeam. Mise en place de scripts d'automatisation sous Centreon et Nagios.",
  tags: ["Active Directory", "Cisco", "VMware ESX 8.0", "Veeam", "Centreon", "Nagios"],
  image: "/images/optical-networks-logo.jpg",
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-muted-foreground font-mono text-lg">02.</span>
          Experience Professionnelle
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>
        
        <div className="space-y-16">
          {/* Huawei Section */}
          <div className="space-y-8">
            {/* Main Huawei Experience */}
            <div className="grid md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-7">
                <Card className="overflow-hidden bg-muted/50 border-0">
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <Image 
                        src={huaweiExperience.image} 
                        alt={huaweiExperience.company}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-6 md:col-start-6 md:-mt-0 relative z-10">
                <p className="text-muted-foreground font-mono text-sm mb-2">{huaweiExperience.period}</p>
                <h3 className="text-xl md:text-2xl font-bold mb-1">{huaweiExperience.title}</h3>
                <p className="text-primary font-medium mb-4">{huaweiExperience.company}</p>
                <Card className="mb-4 bg-card shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {huaweiExperience.description}
                    </p>
                  </CardContent>
                </Card>
                <div className="flex flex-wrap gap-2 mb-4">
                  {huaweiExperience.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Huawei Missions - Aligned */}
            <div className="grid md:grid-cols-2 gap-6 ml-4 md:ml-8 border-l-2 border-primary/20 pl-6">
              {huaweiMissions.map((mission) => (
                <Card key={mission.title} className="bg-card shadow-md h-full">
                  <CardContent className="p-5">
                    <p className="text-muted-foreground font-mono text-xs mb-2">{mission.period}</p>
                    <h4 className="text-base font-bold mb-1">{mission.title}</h4>
                    <p className="text-primary font-medium text-sm mb-3">{mission.company}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                      {mission.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mission.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-mono text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Optical Networks Section */}
          <div className="pt-8">
            <Card className="overflow-hidden bg-muted/50 border-0 mb-8 md:max-w-md">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <Image 
                    src={opticalExperience.image} 
                    alt={opticalExperience.company}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Optical Networks Experience */}
            <div>
              <p className="text-muted-foreground font-mono text-sm mb-2">{opticalExperience.period}</p>
              <h3 className="text-xl md:text-2xl font-bold mb-1">{opticalExperience.title}</h3>
              <p className="text-primary font-medium mb-4">{opticalExperience.company}</p>
              <Card className="mb-4 bg-card shadow-lg">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {opticalExperience.description}
                  </p>
                </CardContent>
              </Card>
              <div className="flex flex-wrap gap-2">
                {opticalExperience.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-mono text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
