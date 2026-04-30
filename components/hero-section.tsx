import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-beige-light section-padding">
      <div className="site-container">
        <div className="card-soft flex flex-col items-center gap-8 bg-[#0b1a3a] px-6 py-8 text-center md:px-10 md:py-9 lg:flex-row lg:justify-between lg:gap-12 lg:px-12 lg:py-10 lg:text-left">
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Materiais pedagógicos prontos para imprimir e aplicar
            </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-white/75">
              Educação que transforma, inclui e humaniza
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#materiais"
                className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0b1a3a] transition-transform hover:scale-[1.02] hover:bg-[#f4f0e6] sm:text-base"
              >
                Acessar materiais
              </a>
              <a
                href="#materiais"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
                aria-label="Ir para seção de materiais"
              >
                <ChevronDown className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative h-44 w-44 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/30 sm:h-52 sm:w-52 md:h-56 md:w-56">
            <Image
              src="/images/logo-placeholder.svg"
              alt="Logo ilustrativo temporário"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
