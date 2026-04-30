import Image from "next/image"

const leftTexts = [
  "Pensados e preparados para facilitar e otimizar a prática docente no dia a dia da sala de aula.",
  "Materiais pedagógicos prontos para imprimir, aplicar e adaptar à sua realidade!",
  "Conteúdos pedagógicos com intencionalidade educativa e de aplicação imediata.",
]

const audiences = [
  "Professores da Educação Infantil",
  "Ensino Fundamental",
  "AEE e Educação Inclusiva",
  "Coordenadores",
  "Estudantes de pedagogia",
]

export function AudienceSection() {
  return (
    <section className="section-padding bg-[#0b1a3a]">
      <div className="site-container">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="text-2xl font-semibold italic text-[#f4f0e6] md:text-3xl">
            Feito para quem vive a educação todos os dias
          </h2>
        </div>

        <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          <div className="space-y-5">
            {leftTexts.map((text, i) => (
              <div key={i} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <p className="text-sm font-semibold leading-relaxed text-[#f4f0e6] md:text-base">{text}</p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white/20 md:h-48 md:w-48">
            <Image
              src="/images/avatar-placeholder.svg"
              alt="Avatar ilustrativo"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative space-y-3 md:space-y-4">
            <div className="absolute bottom-3 left-0 top-3 hidden w-7 border-l border-dashed border-white/35 md:block" />
            {audiences.map((audience, i) => (
              <div key={i} className="flex items-center md:pl-7">
                <span className="mr-3 hidden h-px w-6 bg-white/35 md:block" />
                <div className="w-full rounded-full border border-white/25 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white md:text-[15px]">
                  {audience}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
