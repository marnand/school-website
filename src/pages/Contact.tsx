import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const contactFormSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  childAge: z.string().optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      childAge: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactForm) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua da Educação, 123 - Centro\nSão Paulo, SP - CEP 01000-000",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 1234-5678",
      link: "tel:+551112345678",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@sagradocoracao.edu.br",
      link: "mailto:contato@sagradocoracao.edu.br",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Estamos prontos para receber você e sua família. Agende uma visita ou tire suas dúvidas!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">
                Agende uma Visita
              </h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato para agendar sua visita e apresentar nossa proposta pedagógica.
              </p>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    {...form.register("name")}
                    data-testid="input-name"
                    placeholder="Seu nome completo"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    data-testid="input-email"
                    placeholder="seu@email.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    {...form.register("phone")}
                    data-testid="input-phone"
                    placeholder="(11) 91234-5678"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="childAge">Idade do(a) Filho(a)</Label>
                  <Input
                    id="childAge"
                    {...form.register("childAge")}
                    data-testid="input-child-age"
                    placeholder="Ex: 8 anos"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    data-testid="input-message"
                    placeholder="Conte-nos um pouco sobre seu interesse..."
                    rows={4}
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={contactMutation.isPending || form.formState.isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {(contactMutation.isPending || form.formState.isSubmitting) ? "Enviando..." : "Enviar Mensagem"}
                  {!(contactMutation.isPending || form.formState.isSubmitting) && (
                    <MessageSquare className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </form>

              <div className="mt-8">
                <a
                  href="https://wa.me/5511912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-whatsapp"
                >
                  <Button
                    variant="outline"
                    className="w-full bg-[#25D366]/10 border-[#25D366]/30 hover:bg-[#25D366]/20"
                  >
                    <SiWhatsapp className="mr-2 h-5 w-5 text-[#25D366]" />
                    Fale Conosco pelo WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  Informações de Contato
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-muted-foreground hover:text-foreground transition-colors whitespace-pre-line"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground whitespace-pre-line">
                                {info.content}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Como Chegar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0978!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMDAuMCJX!5e0!3m2!1sen!2sbr!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização do Colégio Sagrado Coração de Jesus"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
