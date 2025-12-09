import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users2, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";

const techImage = "/images/Technology_integrated_classroom_65225a45.png";

export default function Pedagogical() {
  const methods = [
    {
      icon: BookOpen,
      title: "Aprendizagem Ativa",
      description: "Metodologias que colocam o aluno como protagonista do processo de aprendizagem, desenvolvendo autonomia e pensamento crítico.",
    },
    {
      icon: Users2,
      title: "Educação Personalizada",
      description: "Acompanhamento individual que respeita o ritmo e as necessidades de cada estudante, potencializando seus talentos.",
    },
    {
      icon: Lightbulb,
      title: "Projetos Interdisciplinares",
      description: "Integração entre diferentes áreas do conhecimento através de projetos práticos que estimulam a criatividade e a inovação.",
    },
    {
      icon: TrendingUp,
      title: "Avaliação Contínua",
      description: "Processo avaliativo formativo que acompanha o desenvolvimento do aluno ao longo de toda a jornada educacional.",
    },
  ];

  const highlights = [
    "Currículo alinhado à BNCC com atividades complementares",
    "Aulas dinâmicas e interativas com recursos tecnológicos",
    "Desenvolvimento socioemocional integrado ao currículo",
    "Preparação para ENEM e principais vestibulares",
    "Programa de monitoria e reforço escolar",
    "Projetos de leitura e escrita criativa",
    "Atividades culturais e artísticas",
    "Educação ambiental e sustentabilidade",
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Proposta Pedagógica
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Formação integral: para a vida, não só para provas
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-center">
              Nossa Abordagem Pedagógica
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nossa proposta pedagógica une formação intelectual, humana e cidadã. Com turmas reduzidas, valorizamos o ritmo individual de cada aluno e incentivamos o desenvolvimento do pensamento crítico, da empatia e do respeito ao outro.
              </p>
              <p>
                Trabalhamos por meio de projetos interdisciplinares, vivências de convivência cidadã e estímulo à criatividade, preparando nossos alunos não apenas para exames, mas para decisões conscientes, participação comunitária e escolhas éticas.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {methods.map((method, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
                    <method.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Turmas Reduzidas e Atenção Individual
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Com turmas reduzidas, cada aluno recebe atenção personalizada. Nossos professores conhecem profundamente cada estudante, suas dificuldades, potencialidades e sonhos.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Esse acompanhamento próximo permite que identifiquemos rapidamente necessidades específicas e ajustemos nossa abordagem, garantindo que ninguém fique para trás e todos possam brilhar.
              </p>
              <p className="text-lg text-muted-foreground">
                O resultado é uma educação verdadeiramente humanizada, que forma não apenas bons alunos, mas pessoas preparadas para a vida.
              </p>
            </div>
            <div>
              <img
                src={techImage}
                alt="Tecnologia em sala de aula"
                className="rounded-lg shadow-lg w-full"
                data-testid="img-personalization"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8 text-center">
              Destaques do Nosso Programa
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
