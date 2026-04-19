import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const childrensClass = "/images/childrens-class/childrens-class.png";
const childrensClass2 = "/images/childrens-class/childrens-class2.jpg";
const childrensClass3 = "/images/childrens-class/childrens-class3.jpg";
const childrensClass4 = "/images/childrens-class/childrens-class4.jpg";
const childrensClass5 = "/images/childrens-class/childrens-class5.jpg";
const childrensClass6 = "/images/childrens-class/childrens-class6.jpg";
const childrensClass7 = "/images/childrens-class/childrens-class7.jpg";
const childrensClass8 = "/images/childrens-class/childrens-class8.jpg";

const multimedia = "/images/multimedia/multimedia.png";
const multimedia2 = "/images/multimedia/multimedia2.jpg";
const multimedia3 = "/images/multimedia/multimedia3.jpg";
const multimedia4 = "/images/multimedia/multimedia4.jpg";
const multimedia5 = "/images/multimedia/multimedia5.jpg";

const maker = "/images/maker/maker.png";
const maker2 = "/images/maker/maker2.jpg";
const maker3 = "/images/maker/maker3.jpg";
const maker4 = "/images/maker/maker4.jpg";

const quadra = "/images/quadra/quadra.png";
const quadra2 = "/images/quadra/quadra2.jpg";
const quadra3 = "/images/quadra/quadra3.jpg";
const quadra4 = "/images/quadra/quadra4.jpg";

const library = "/images/library/library.jpg";
const library2 = "/images/library/library2.jpg";
const library3 = "/images/library/library3.jpg";
const library4 = "/images/library/library4.jpg";
const library5 = "/images/library/library5.jpg";

const backgroundImage = "/fachada.jpg";

interface GalleryGroup {
  title: string;
  category: string;
  images: string[];
}

const galleryGroups: GalleryGroup[] = [
  {
    title: "Sala Maker",
    category: "Inovação",
    images: [maker, maker2, maker3, maker4],
  },
  {
    title: "Sala Multimídia",
    category: "Tecnologia",
    images: [multimedia, multimedia2, multimedia3, multimedia4, multimedia5],
  },
  {
    title: "Espaço Turma Infantil",
    category: "Infraestrutura",
    images: [childrensClass, childrensClass2, childrensClass3, childrensClass4, childrensClass5, childrensClass6, childrensClass7, childrensClass8],
  },
  {
    title: "Biblioteca",
    category: "Sala de Estudo",
    images: [library, library2, library3, library4, library5],
  },
  {
    title: "Quadra Poliesportiva",
    category: "Estrutura",
    images: [quadra, quadra2, quadra3, quadra4],
  }
];

export default function Gallery() {
  const [selectedGroup, setSelectedGroup] = useState<GalleryGroup | null>(null);

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
            {galleryGroups.map((group, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedGroup(group)}
                data-testid={`card-gallery-${index}`}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={group.images[0]}
                    alt={group.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-testid={`img-gallery-${index}`}
                  />
                  {group.images.length > 1 && (
                    <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                      {group.images.length} fotos
                    </span>
                  )}
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-primary font-medium mb-1" data-testid={`text-gallery-category-${index}`}>{group.category}</p>
                  <h3 className="font-semibold" data-testid={`text-gallery-title-${index}`}>{group.title}</h3>
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

      <Dialog open={!!selectedGroup} onOpenChange={() => setSelectedGroup(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedGroup && (
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-4 text-center">{selectedGroup.title}</h3>
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedGroup.images.map((src, i) => (
                    <CarouselItem key={i}>
                      <img
                        src={src}
                        alt={`${selectedGroup.title} - ${i + 1}`}
                        className="rounded-lg shadow-lg w-full h-[30rem] object-cover mx-auto"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {selectedGroup.images.length > 1 && (
                  <div className="flex justify-start mt-4">
                    <div className="flex justify-between min-w-24">
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </div>
                  </div>
                )}
              </Carousel>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
