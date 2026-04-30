import Image from "next/image"

export function WhyChooseSection() {
  return (
    <section className="section-padding bg-[#f4f0e6] pt-3 md:pt-4">
      <div className="site-container">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-[#d5ccb9] shadow-[0_10px_24px_rgba(11,26,58,0.12)]">
            <div className="relative aspect-[16/8] w-full">
              <Image
                src="/images/banner-kids-placeholder.svg"
                alt="Banner ilustrativo de crianças estudando"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-5 text-center text-sm font-semibold text-navy/80 md:text-base">
            Promovendo aprendizado e crescimento para todos
          </p>
        </div>
      </div>
    </section>
  )
}
