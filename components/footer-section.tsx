import Image from "next/image"

export function FooterSection() {
  return (
    <footer className="bg-[#f4f0e6]">
      <div className="site-container py-12 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div>
            <h2 className="text-3xl font-extrabold italic leading-tight text-[#9ca3af] md:text-5xl">
              Educação que liberta, inclui e transforma.
            </h2>
          </div>

          <div className="relative rounded-3xl border border-[#d5ccb9] bg-white/70 p-6">
            <div className="pointer-events-none absolute right-5 top-4 h-16 w-16 opacity-30 grayscale md:h-20 md:w-20">
              <Image
                src="/images/logo-placeholder.svg"
                alt="Marca d'água ilustrativa"
                fill
                className="object-contain"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#4b5563]">
              Este projeto é voltado à produção e comercialização de materiais pedagógicos digitais para
              apoio ao trabalho docente e à educação inclusiva.
            </p>
            <div className="mt-5 space-y-3">
              <div>
                <h3 className="text-sm font-bold text-navy">Email</h3>
                <a
                  href="mailto:pedagogiandocomfreire@gmail.com"
                  className="text-sm text-[#4b5563] transition-colors hover:text-[#0b1a3a]"
                >
                  pedagogiandocomfreire@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy">Telefone</h3>
                <a
                  href="tel:+5592995316615"
                  className="text-sm text-[#4b5563] transition-colors hover:text-[#0b1a3a]"
                >
                  (92) 99531-6615
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#d5ccb9] pt-4">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p className="text-xs text-[#9ca3af]">
              Nenhuma imagem aqui disponibilizada pode ser copiada. Material protegido.
            </p>
            <a href="#materiais" className="text-xs text-[#9ca3af] transition-colors hover:text-[#0b1a3a]">
              Iniciar minha compra de materiais
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
