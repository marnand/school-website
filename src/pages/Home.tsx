import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Heart, Users, Sparkles, GraduationCap, ArrowRight } from "lucide-react";

const heroImage = "/images/Students_collaborating_in_classroom_b4665452.png";
const teacherImage = "/images/Teacher_giving_individual_attention_b4faa4c0.png";
const parent1 = "/images/Parent_testimonial_portrait_1_51f7cb88.png";
const parent2 = "/images/Parent_testimonial_portrait_2_f9be5ce5.png";
const studentImage = "/images/Student_testimonial_portrait_7e7ee09b.png";

export default function Home() {
  const differentials = [
    {
      icon: Heart,
      title: "Atenção Individual",
      description: "Cada aluno é único e recebe acompanhamento personalizado para seu desenvolvimento integral.",
    },
    {
      icon: Users,
      title: "Valores Humanos",
      description: "Educação baseada em princípios de respeito, empatia e responsabilidade social.",
    },
    {
      icon: Sparkles,
      title: "Tecnologia e Inovação",
      description: "Ferramentas digitais modernas integradas ao processo de aprendizagem.",
    },
    {
      icon: GraduationCap,
      title: "Professores Comprometidos",
      description: "Equipe dedicada e qualificada que inspira e motiva os alunos todos os dias.",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe de aluno do 5º ano",
      image: parent1,
      content: "O cuidado e a atenção que meu filho recebe aqui são incomparáveis. Os professores conhecem cada criança profundamente e trabalham para seu desenvolvimento completo.",
    },
    {
      name: "Carlos Oliveira",
      role: "Pai de aluna do 8º ano",
      image: parent2,
      content: "A combinação de tradição e inovação é perfeita. Minha filha ama aprender e se desenvolveu tanto academicamente quanto como pessoa.",
    },
    {
      name: "Ana Costa",
      role: "Aluna do 2º ano do Ensino Médio",
      image: studentImage,
      content: "Aqui me sinto acolhida e motivada a dar o meu melhor. Os professores são incríveis e sempre nos apoiam em nossos sonhos.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Educar com amor,<br />formar para a vida
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto font-light">
            Uma escola que une tradição, fé e inovação para oferecer educação humanizada e atenção individual a cada aluno
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="text-lg px-8 py-6" data-testid="button-hero-agendar">
                Agende uma Visita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/sobre">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-conhecer"
              >
                Conheça Nossa História
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que torna nossa escola especial e única no cuidado com cada aluno
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-differential-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" data-testid={`text-differential-title-${index}`}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-differential-description-${index}`}>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={teacherImage}
                alt="Professora com aluno"
                className="rounded-lg shadow-lg w-full"
                data-testid="img-about-preview"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Aprender com afeto, crescer com propósito
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                No Colégio Sagrado Coração de Jesus, acreditamos que cada criança tem um potencial único a ser desenvolvido. Nossa missão é proporcionar uma educação que vai além do conhecimento acadêmico, formando cidadãos éticos, criativos e preparados para os desafios do futuro.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Combinamos métodos pedagógicos comprovados com inovação tecnológica, sempre mantendo o cuidado e a atenção individual como nosso maior diferencial.
              </p>
              <Link href="/sobre">
                <Button size="lg" variant="default" data-testid="button-saiba-mais-sobre">
                  Saiba Mais Sobre Nós
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              O que dizem sobre nós
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Depoimentos de famílias e alunos que fazem parte da nossa comunidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic" data-testid={`text-testimonial-content-${index}`}>"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Venha fazer parte da nossa família!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Agende uma visita e descubra uma escola onde cada aluno é único e tem todo o suporte para alcançar seu potencial máximo.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              data-testid="button-cta-agendar"
            >
              Agende Sua Visita Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
