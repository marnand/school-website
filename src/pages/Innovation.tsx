import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Cpu, Leaf, Code, Brain, Smartphone } from "lucide-react";

const roboticsImage = "/images/Students_working_on_robotics_b0918abe.png";

export default function Innovation() {
  const technologies = [
    {
      icon: Laptop,
      title: "Google for Education",
      description: "Plataforma completa com ferramentas colaborativas, Google Classroom e recursos educacionais digitais integrados ao currículo.",
    },
    {
      icon: Code,
      title: "Programação e Robótica",
      description: "Laboratório equipado para projetos de robótica educacional e aulas de programação desde o Fundamental.",
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Introdução aos conceitos de IA e machine learning através de projetos práticos e aplicações reais.",
    },
    {
      icon: Smartphone,
      title: "Aplicativos Educacionais",
      description: "Uso de apps educativos selecionados que complementam o aprendizado e permitem prática personalizada.",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade Digital",
      description: "Projetos de tecnologia sustentável, horta inteligente e monitoramento ambiental com sensores.",
    },
    {
      icon: Cpu,
      title: "Cultura Maker",
      description: "Espaço maker para desenvolvimento de projetos criativos com impressão 3D, eletrônica e prototipagem.",
    },
  ];

  const projects = [
    {
      title: "Robótica Educacional",
      description: "Competições e projetos de robótica que desenvolvem raciocínio lógico, trabalho em equipe e criatividade.",
    },
    {
      title: "Horta Inteligente",
      description: "Sistema automatizado de irrigação e monitoramento com sensores IoT desenvolvido pelos alunos.",
    },
    {
      title: "Apps de Impacto Social",
      description: "Desenvolvimento de aplicativos que buscam resolver problemas reais da comunidade.",
    },
    {
      title: "Cultura Digital",
      description: "Educação para cidadania digital, segurança online e uso ético da tecnologia.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Inovação e Tecnologia
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Preparando nossos alunos para o futuro através da tecnologia e inovação pedagógica
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Tecnologia a Serviço da Educação
            </h2>
            <p className="text-lg text-muted-foreground">
              Integramos as melhores ferramentas tecnológicas ao processo de aprendizagem, sempre com foco pedagógico e no desenvolvimento de competências essenciais para o século XXI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
                    <tech.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
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
              <img
                src={roboticsImage}
                alt="Alunos trabalhando com robótica"
                className="rounded-lg shadow-lg w-full"
                data-testid="img-robotics"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Projetos de Inovação
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nossos alunos participam de projetos práticos que unem tecnologia, sustentabilidade e impacto social, desenvolvendo competências essenciais enquanto fazem a diferença.
              </p>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Compromisso com a Sustentabilidade
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Acreditamos que a tecnologia deve ser usada de forma responsável e sustentável. Por isso, desenvolvemos projetos que aliam inovação tecnológica à consciência ambiental.
            </p>
            <p className="text-lg text-muted-foreground">
              Nossos alunos aprendem sobre energias renováveis, reciclagem, redução de desperdícios e como a tecnologia pode ajudar a criar um futuro mais sustentável para todos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
