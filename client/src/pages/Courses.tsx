import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, BookOpen, School, GraduationCap, Music, Palette, Trophy, Globe } from "lucide-react";

export default function Courses() {
  const segments = [
    {
      icon: Baby,
      title: "Educação Infantil",
      age: "2 a 5 anos",
      description: "Desenvolvimento integral através de atividades lúdicas e pedagógicas que estimulam a curiosidade, criatividade e socialização das crianças.",
      highlights: [
        "Alfabetização lúdica e pré-escolar",
        "Desenvolvimento motor e sensorial",
        "Socialização e valores",
        "Música e artes integradas",
      ],
    },
    {
      icon: BookOpen,
      title: "Ensino Fundamental I",
      age: "1º ao 5º ano",
      description: "Consolidação da alfabetização e desenvolvimento das competências fundamentais em todas as áreas do conhecimento, com foco no protagonismo infantil.",
      highlights: [
        "Alfabetização completa e letramento",
        "Raciocínio lógico-matemático",
        "Projetos de ciências e tecnologia",
        "Desenvolvimento da autonomia",
      ],
    },
    {
      icon: School,
      title: "Ensino Fundamental II",
      age: "6º ao 9º ano",
      description: "Aprofundamento dos conhecimentos e preparação para o Ensino Médio, com desenvolvimento do pensamento crítico e projetos interdisciplinares.",
      highlights: [
        "Aprofundamento em todas as disciplinas",
        "Projetos interdisciplinares",
        "Orientação vocacional inicial",
        "Desenvolvimento de pesquisa científica",
      ],
    },
    {
      icon: GraduationCap,
      title: "Ensino Médio",
      age: "1ª a 3ª série",
      description: "Preparação para vestibulares e ENEM, com foco no desenvolvimento de competências para o ensino superior e a vida profissional.",
      highlights: [
        "Preparação para ENEM e vestibulares",
        "Orientação profissional completa",
        "Projetos de pesquisa avançados",
        "Simulados e aulas de aprofundamento",
      ],
    },
  ];

  const extracurricular = [
    { icon: Music, title: "Música e Coral", description: "Desenvolvimento musical e artístico" },
    { icon: Palette, title: "Artes e Teatro", description: "Expressão criativa e cultural" },
    { icon: Trophy, title: "Esportes", description: "Atividades físicas e trabalho em equipe" },
    { icon: Globe, title: "Idiomas", description: "Inglês e Espanhol" },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Cursos e Segmentos
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Educação de qualidade em todas as etapas do desenvolvimento
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-6xl mx-auto">
            {segments.map((segment, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 flex-shrink-0">
                      <segment.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-display mb-1">{segment.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">{segment.age}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{segment.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {segment.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Atividades Extracurriculares
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvimento integral através de atividades complementares
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {extracurricular.map((activity, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/20 mb-4">
                    <activity.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
