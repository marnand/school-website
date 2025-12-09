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
      title: "Acolhimento Individualizado",
      description: "Cada aluno é visto, ouvido e acompanhado em sua singularidade. Aqui seu filho não é um número.",
    },
    {
      icon: Users,
      title: "Turmas Reduzidas",
      description: "Proximidade humana com espaço de atenção, cuidado e apoio constante para cada criança.",
    },
    {
      icon: Sparkles,
      title: "Formação Cidadã e Humana",
      description: "Desenvolvemos empatia, responsabilidade social, respeito e convivência com valores sólidos.",
    },
    {
      icon: GraduationCap,
      title: "Preparação para a Vida",
      description: "Foco em protagonismo, ética, autonomia e bom convívio social — além das provas.",
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/80 to-black/30" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Mais do que ensino:<br />uma comunidade onde seu filho é conhecido pelo nome
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto font-light">
            Aqui, formamos mentes, corações e cidadãos — com carinho, atenção individual e turmas reduzidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/proposta">
              <Button size="lg" className="text-lg px-6 py-4" data-testid="button-hero-agendar">
                Conheça nosso projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/contato">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-6 py-4 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-conhecer"
              >
                Agende uma visita
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Nossos Pilares
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Acolhemos cada aluno como pessoa, não como número. Preparamos para a vida — para escolhas conscientes, convivência com o outro e construção de um mundo mais humano.
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
                Quem Somos
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                No Colégio Sagrado Coração de Jesus, acreditamos que a educação vai além de conteúdos — trata-se de formar pessoas com consciência, empatia e responsabilidade. Somos uma comunidade acolhedora, onde cada criança e adolescente é vista como única: com nome, com história, com sonhos.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa estrutura humana e pedagógica permite que professores e colaboradores acompanhem o crescimento de cada aluno de perto, respeitando suas particularidades. Aqui, famílias e escola caminham juntas, construindo valores como solidariedade, respeito mútuo e cidadania.
              </p>
              <Link href="/sobre">
                <Button size="lg" variant="default" data-testid="button-saiba-mais-sobre">
                  Conheça nossa história
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
            Quer conhecer nosso colégio de perto?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Venha visitar-nos, agendar uma conversa ou tirar suas dúvidas. Teremos prazer em acolher sua família.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-6 py-4"
              data-testid="button-cta-agendar"
            >
              Agende uma visita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
