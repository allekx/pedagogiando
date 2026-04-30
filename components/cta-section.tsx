import Image from "next/image"

const ctaImages = [
  "/images/cta-placeholder-1.svg",
  "/images/cta-placeholder-2.svg",
  "/images/cta-placeholder-3.svg",
]

export function CTASection() {
  return (
    <section className="section-padding bg-[#0b1a3a]">
      <div className="site-container">
        <div className="mb-8 grid gap-5 lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl md:text-5xl">
              Transforme sua prática pedagógica hoje!
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-[#d3d9ea] md:text-xl">
              Tenha acesso a materiais pensados para facilitar seu trabalho, valorizar a diversidade e
              promover uma educação mais humana, crítica e transformadora.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
          {ctaImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20"
            >
              <Image
                src={src}
                alt={`Imagem fictícia ${i + 1} de práticas pedagógicas`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
