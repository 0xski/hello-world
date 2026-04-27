import { Server, Shield, Database, Network, Terminal, Monitor } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {
    title: "Virtualisation",
    icon: Server,
    items: ["VMware vSphere", "ESXI", "VirtualBox", "Hyper-V"],
  },
  {
    title: "Serveurs",
    icon: Monitor,
    items: ["Windows Server", "Active Directory", "WSUS", "Exchange", "GPO"],
  },
  {
    title: "Systemes d'exploitation",
    icon: Terminal,
    items: ["Ubuntu", "Debian", "Red Hat", "Kali Linux", "Windows"],
  },
  {
    title: "Reseau",
    icon: Network,
    items: ["Cisco", "Huawei", "VLAN", "VPN", "Routage & Switching"],
  },
  {
    title: "Securite & Forensique",
    icon: Shield,
    items: ["Firewall", "Autopsy", "Volatility", "CTF (Root-me, TryHackMe)"],
  },
  {
    title: "Langages & Outils",
    icon: Database,
    items: ["Python", "Bash", "Powershell", "C", "Oracle SQL", "Veeam"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-muted-foreground font-mono text-lg">03.</span>
          Competences
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.title} className="group hover:shadow-lg transition-shadow bg-card/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <skill.icon className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
