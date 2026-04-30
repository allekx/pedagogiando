const materials = [
  {
    title: "ALFABETO MÓVEL",
    subtitle: "Letras para montar palavras e frases",
    tone: "bg-[#3f6eb3]",
  },
  {
    title: "ALFABETO PUZZLE",
    subtitle: "Atividade lúdica para alfabetização",
    tone: "bg-[#d9a04f]",
  },
  {
    title: "ALFABETO",
    subtitle: "Reconhecimento visual e consciência fonológica",
    tone: "bg-[#c54545]",
  },
]

function MaterialCard({ item }: { item: typeof materials[0] }) {
  return (
    <article className="group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
      <div className={`card-soft h-full rounded-2xl p-6 text-white ${item.tone}`}>
        <p className="text-xs font-semibold tracking-[0.16em] text-white/85">MATERIAL PEDAGÓGICO</p>
        <h3 className="mt-3 text-xl font-extrabold leading-tight">{item.title}</h3>
        <p className="mt-3 text-sm font-medium leading-relaxed text-white/90">{item.subtitle}</p>
      </div>
    </article>
  )
}

export function ProductsSection() {
  return (
    <section id="materiais" className="section-padding bg-beige">
      <div className="site-container">
        <div className="mb-8 flex justify-center md:mb-9">
          <span className="section-title-pill">O que você encontra aqui</span>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3 md:gap-6">
          {materials.map((item) => (
            <MaterialCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
