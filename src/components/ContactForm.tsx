import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Send, User } from "lucide-react";

export const ContactForm = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              Contacto
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              ¿Tienes un proyecto en mente? <br />
              <span className="text-primary">Hablemos ahora</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Estamos listos para escucharte y ayudarte a dar el siguiente paso
              en la evolución digital de tu empresa. Completa el formulario y
              nos pondremos en contacto contigo en menos de 24 horas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="size-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">hola@miracode.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageSquare className="size-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-muted-foreground">+34 600 000 000</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/50 border border-border/40 p-10 rounded-[2.5rem] backdrop-blur-md shadow-2xl shadow-primary/5"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 size-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos un poco más sobre tu proyecto..."
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button className="w-full h-12 text-lg font-semibold group rounded-xl">
                Enviar Mensaje
                <Send className="ml-2 size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
