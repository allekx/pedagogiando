import { CheckCircle2 } from "lucide-react"

const features = [
  "Atividades impressas em PDF",
  "Guias para prática pedagógica",
  "Foco em metodologias ativas para aprendizagem significativa",
  "Recursos pensados para diferentes níveis de aprendizagem",
  "Materiais aplicáveis no AEE e na educação inclusiva",
]

export function FeaturesSection() {
  return (
    <section className="section-padding bg-[#f4f0e6]">
      <div className="site-container">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#d5ccb9] bg-white p-5 shadow-[0_10px_24px_rgba(11,26,58,0.08)] md:p-7 lg:p-8">
          <div className="mb-6 flex justify-center">
            <span className="section-title-pill">Recursos e benefícios</span>
          </div>
          <div className="space-y-4">
            {features.map((text) => (
              <div key={text} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2f9e44]" />
                <p className="text-sm font-medium text-navy md:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
