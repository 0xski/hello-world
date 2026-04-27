"use client"

import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  { icon: Mail, label: "Email", value: "lamine.tuure@gmail.com", href: "mailto:lamine.tuure@gmail.com" },
  { icon: Phone, label: "Telephone", value: "+221 78 551 99 16", href: "tel:+221785519916" },
  { icon: MapPin, label: "Localisation", value: "Mermoz, Dakar, Senegal", href: null },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-muted-foreground font-mono text-sm mb-4">04. Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Me Contacter</h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Je suis actuellement a la recherche de nouvelles opportunites. 
            N&apos;hesitez pas a me contacter pour toute question ou collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info) => (
            <Card key={info.label} className="bg-card/50 text-center">
              <CardContent className="pt-6">
                <info.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                {info.href ? (
                  <a href={info.href} className="font-medium hover:text-primary transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <p className="font-medium">{info.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {submitted ? (
          <Card className="bg-card max-w-2xl mx-auto">
            <CardContent className="py-12 text-center">
              <div className="text-primary mb-4">
                <Send className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Message envoye !</h3>
              <p className="text-muted-foreground">
                Merci pour votre message. Je vous repondrai dans les plus brefs delais.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-card text-left max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Votre nom" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="votre@email.com" 
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet
                  </label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="De quoi s'agit-il ?" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Votre message..." 
                    rows={5} 
                    required 
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full sm:w-auto px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
