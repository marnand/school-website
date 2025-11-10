import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import studentsCollaborating from "@assets/generated_images/Students_collaborating_in_classroom_b4665452.png";
import techClassroom from "@assets/generated_images/Technology_integrated_classroom_65225a45.png";
import teacherStudent from "@assets/generated_images/Teacher_giving_individual_attention_b4faa4c0.png";
import robotics from "@assets/generated_images/Students_working_on_robotics_b0918abe.png";
import schoolBuilding from "@assets/generated_images/School_building_exterior_3ff2fbe3.png";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: studentsCollaborating,
      title: "Colaboração em Sala de Aula",
      category: "Educação",
    },
    {
      src: techClassroom,
      title: "Tecnologia Integrada",
      category: "Inovação",
    },
    {
      src: teacherStudent,
      title: "Atenção Individual",
      category: "Educação",
    },
    {
      src: robotics,
      title: "Projetos de Robótica",
      category: "Inovação",
    },
    {
      src: schoolBuilding,
      title: "Nossa Escola",
      category: "Infraestrutura",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Galeria
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Conheça nossa escola através de imagens que mostram nosso dia a dia e estrutura
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
                data-testid={`card-gallery-${index}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-testid={`img-gallery-${index}`}
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-primary font-medium mb-1" data-testid={`text-gallery-category-${index}`}>{image.category}</p>
                  <h3 className="font-semibold" data-testid={`text-gallery-title-${index}`}>{image.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Visite Nossa Escola
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nada substitui conhecer pessoalmente nossa estrutura e sentir a energia acolhedora que permeia nossos corredores. Agende uma visita e venha nos conhecer!
            </p>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
