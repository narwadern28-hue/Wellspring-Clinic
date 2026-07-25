import { Heart } from "lucide-react";

export default function ServicesBanner() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-r from-teal-deep via-teal to-teal-deep text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.15] mb-5">Care that extends beyond the appointment.</h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">From preventive screenings to specialist referrals, from family education to 24/7 emergency support — our services are designed to keep you well, not just treat you when unwell.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-6 shrink-0 w-full md:w-auto">
          {[
            { label: "Preventive", desc: "Screens & vaccines" },
            { label: "Specialist", desc: "Expert referrals" },
            { label: "Emergency", desc: "24/7 support" },
          ].map(({ label, desc }) => (
            <div key={label} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors">
              <p className="font-display text-xl text-white tracking-tight">{label}</p>
              <p className="text-white/70 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
ServicesBanner.tsx
