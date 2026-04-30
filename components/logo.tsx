export function Logo({ className = "", size = "default", light = false }: { className?: string; size?: "small" | "default" | "large"; light?: boolean }) {
  const sizes = {
    small: { icon: "w-12 h-12", title: "text-[10px]", subtitle: "text-[7px]" },
    default: { icon: "w-20 h-20", title: "text-xs", subtitle: "text-[8px]" },
    large: { icon: "w-28 h-28", title: "text-sm", subtitle: "text-[9px]" },
  }

  const s = sizes[size]
  const capColor = light ? "#d4a843" : "#d4a843"
  const houseColor = light ? "#ffffff" : "#0d1137"

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`${s.icon} relative`}>
        <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Graduation cap top */}
          <path d="M60 8L15 32L60 56L105 32L60 8Z" fill={capColor} />
          {/* Cap bottom fold */}
          <path d="M30 40V58C30 58 45 72 60 72C75 72 100 58 100 58V40L60 56L30 40Z" fill={houseColor} />
          {/* Tassel pole */}
          <rect x="96" y="30" width="3" height="35" fill={capColor} />
          <circle cx="97.5" cy="68" r="5" fill={capColor} />
          {/* House silhouette in center */}
          <path d="M45 52L60 42L75 52V66H45V52Z" fill={capColor} opacity="0.4" />
          <rect x="55" y="56" width="10" height="10" fill={capColor} opacity="0.3" />
        </svg>
      </div>
      <span className={`font-extrabold tracking-[0.2em] ${s.title} mt-0.5 ${light ? "text-white" : "text-[#d4a843]"}`}>
        PEDAGOGIANDO
      </span>
      <span className={`font-medium tracking-wider ${s.subtitle} ${light ? "text-white/70" : "text-[#0d1137]/60"}`}>
        com Freire
      </span>
    </div>
  )
}
