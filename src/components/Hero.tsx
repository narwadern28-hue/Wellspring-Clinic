import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-teal-soft via-cream to-paper">
      {/* Soft decorative blobs */}
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-16 w-[24rem] h-[24rem] rounded-full bg-coral/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-teal/10 text-teal-deep text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-sm shadow-teal/5 tracking-tight">
            <Sparkles size={16} />
            Trusted by families for over 25 years
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.1] tracking-tight mb-6">
            Complete Care, <br />
            <span className="text-teal">Under One Roof.</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink-soft leading-relaxed mb-8 max-w-xl font-light">
            A warm, multi-specialty clinic where experienced doctors listen first. From routine checkups to specialist care — everything your family needs, in one welcoming place.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-coral hover:bg-[#d6745b] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl shadow-coral/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all tracking-tight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral/50"
            >
              Book Appointment
              <ArrowRight size={20} strokeWidth={2.5} />
            </a>
            <a
              href="#departments"
              className="inline-flex items-center gap-2 text-teal hover:text-teal-deep text-lg font-medium px-5 py-4 rounded-full hover:bg-teal-soft/60 transition-colors tracking-tight underline underline-offset-4 decoration-2 decoration-teal/30 hover:decoration-teal"
            >
              Explore Specialties
            </a>
          </div>

          {/* Quick trust badges */}
          <div className="mt-10 flex flex-wrap gap-3 md:gap-5">
            {[
              { icon: ShieldCheck, label: "Certified Care" },
              { icon: HeartPulse, label: "Family Focused" },
              { icon: Sparkles, label: "24/7 Support" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-ink/5 rounded-xl px-3.5 py-2.5 shadow-sm">
                <Icon size={18} className="text-teal" strokeWidth={2} />
                <span className="text-sm font-medium text-ink-soft tracking-tight">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image / illustration area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal/10 ring-1 ring-ink/5 bg-gradient-to-br from-teal/10 to-coral/10">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="Doctor consulting with a family in a bright modern clinic"
              className="w-full h-[28rem] md:h-[36rem] object-cover mix-blend-normal"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/30 via-transparent to-white/10" />
          </div>

          {/* Floating stat cards */}
          <div className="absolute -bottom-6 -left-4 md:left-6 bg-white rounded-2xl shadow-2xl shadow-teal/10 p-4 md:p-5 w-48 md:w-56 border border-ink/5">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-green-muted animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-coral">Live</span>
            </div>
            <p className="text-ink font-display text-2xl md:text-3xl leading-none">2,400+</p>
            <p className="text-ink-muted text-sm font-medium mt-1">Happy families this year</p>
          </div>

          <div className="absolute top-6 -right-4 md:right-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl shadow-teal/10 p-4 md:p-5 w-44 md:w-52 border border-ink/5">
            <p className="text-ink font-display text-xl md:text-2xl leading-none">25+</p>
            <p className="text-ink-muted text-sm font-medium mt-1">Years of trusted care</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
