import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Kit de Atividades Matemáticas",
    description: "Materiais interativos para ensino fundamental",
    price: "R$ 49,90",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 2,
    name: "Jogos Educativos de Português",
    description: "Diversão e aprendizado em uma só atividade",
    price: "R$ 39,90",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 3,
    name: "Planos de Aula de Ciências",
    description: "Estruturas completas para professores",
    price: "R$ 59,90",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 4,
    name: "Materiais de Artes Visuais",
    description: "Inspiração criativa para alunos",
    price: "R$ 34,90",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 5,
    name: "Avaliações Personalizadas",
    description: "Testes adaptados ao currículo escolar",
    price: "R$ 29,90",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 6,
    name: "Recursos Digitais Interativos",
    description: "Conteúdo multimídia para aulas modernas",
    price: "R$ 79,90",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    featured: true,
  },
]

export default function ProdutosPage() {
  return (
    <main className="min-h-screen bg-beige-light">
      {/* Header */}
      <section className="bg-navy py-16 text-center text-white">
        <div className="site-container">
          <h1 className="text-4xl font-bold mb-4">Produtos pedagógicos</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Materiais de alta qualidade para transformar sua prática docente e enriquecer o aprendizado dos alunos.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0 relative">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.featured && (
                      <Badge className="absolute top-3 left-3 bg-gold text-navy font-semibold">
                        Destaque
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-gold">{product.price}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-navy hover:bg-navy-light text-white font-semibold rounded-full transition-colors">
                    Comprar agora
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}