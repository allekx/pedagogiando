import Image from "next/image"

export function AboutSection() {
  return (
    <section className="section-padding bg-beige">
      <div className="site-container">
        <div className="mb-8 flex justify-center md:mb-9">
          <span className="section-title-pill">Quem cria os materiais</span>
        </div>

        <div className="mb-6 text-center md:mb-7">
          <h3 className="text-2xl font-bold text-navy md:text-3xl">Matheus Freire</h3>
        </div>

        <div className="grid items-center gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-2xl bg-white/75 p-5 shadow-sm">
            <p className="text-sm leading-relaxed text-navy/85 md:text-base">
              O Pedagogiando com Freire é um projeto autoral, criado e desenvolvido por Matheus Freire,
              pedagogo, pós-graduado em Educação Especial e Inclusiva, com especializações concluídas
              em Tutoria em Educação a Distância e Docência em Ensino Técnico Profissional, além de
              estar em formação continuada em Recursos para o AEE.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-4 border-navy/80 shadow-lg md:h-56 md:w-56">
              <Image
                src="/images/avatar-placeholder.svg"
                alt="Foto ilustrativa de autor"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-white/75 p-5 shadow-sm">
            <p className="text-sm leading-relaxed text-navy/85 md:text-base">
              No desenvolvimento dos materiais buscou a construção de fundamentos teóricos,
              práticas docentes, pedagógicas e mais, alinhando a inclusão, o protagonismo do
              estudante e a realidade de quem vive a escola todos os dias, com foco em propostas práticas
              aplicadas, acessíveis e ativas a diferentes contextos educacionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
