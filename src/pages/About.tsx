import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Target, Users } from "lucide-react";

const schoolImage = "/images/School_building_exterior_3ff2fbe3.png";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Missão",
      description: "Formar cidadãos conscientes, comprometidos com o bem, com valores, responsabilidade social e convívio humano. Educar com afeto, simplicidade e respeito à individualidade, para que cada aluno descubra seu potencial e sua vocação.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência em educação humanista e católica na nossa comunidade — um colégio onde cada aluno se sinta acolhido, protagonista de sua própria história, preparado para os desafios da vida com ética, empatia e competência.",
    },
    {
      icon: Target,
      title: "Propósito",
      description: "Construir, junto às famílias, uma comunidade educativa que vá além de notas e provas — que forme corações, fortaleça relações humanas e prepare cidadãos capazes de amar, respeitar e contribuir para um mundo melhor.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${schoolImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Quem Somos
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto">
            Uma comunidade onde cada aluno é conhecido pelo nome
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-center">
              Nossa História
            </h2>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                No Colégio Sagrado Coração de Jesus, acreditamos que a educação vai além de conteúdos — trata-se de formar pessoas com consciência, empatia e responsabilidade. Somos uma comunidade acolhedora, onde cada criança e adolescente é vista como única: com nome, com história, com sonhos.
              </p>
              <p>
                Nossa estrutura humana e pedagógica permite que professores e colaboradores acompanhem o crescimento de cada aluno de perto, respeitando suas particularidades. Aqui, famílias e escola caminham juntas, construindo valores como solidariedade, respeito mútuo e cidadania.
              </p>
              <p>
                Ao longo de nossa trajetória, mantivemos firme nosso compromisso com uma educação humanista, que equilibra tradição e inovação, sempre colocando o aluno no centro de tudo o que fazemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Missão, Visão e Propósito
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nossa atuação e definem quem somos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((item, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Nossa Equipe
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contamos com uma equipe pedagógica altamente qualificada e comprometida com a excelência educacional. Nossos professores participam regularmente de formações continuadas e estão sempre atualizados com as melhores práticas pedagógicas.
            </p>
            <p className="text-lg text-muted-foreground">
              Além dos educadores, temos uma equipe multidisciplinar composta por coordenadores pedagógicos, psicólogos, orientadores educacionais e profissionais de apoio, todos dedicados a garantir o melhor ambiente de aprendizagem para cada aluno.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
