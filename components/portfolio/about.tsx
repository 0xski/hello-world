export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-muted-foreground font-mono text-lg">01.</span>
          A propos de moi
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Bonjour ! Je suis Lamine, ingenieur systeme et reseau avec 6 ans d&apos;experience, 
              base a Dakar. Je concois des architectures IT fiables et performantes, de la 
              virtualisation a la securite des infrastructures critiques.
            </p>
            <p>
              Diplome d&apos;un Master 2 en ingenierie informatique de Mediaschool Iris, 
              j&apos;interviens actuellement chez Huawei Senegal sur des projets d&apos;envergure : 
              deploiement de systemes de surveillance, administration reseau et mise en conformite securitaire.
            </p>
            <p>
              Voici les technologies avec lesquelles je travaille regulierement :
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
              {["VMware vSphere", "Windows Server", "Linux (Ubuntu, Debian, Red Hat)", "Python / Bash", "Cisco / Huawei Routing", "Veeam Backup"].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-foreground">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="relative w-full aspect-square bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center text-6xl font-bold text-muted-foreground/30">
                LT
              </div>
            </div>
            <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
