import { Award, GraduationCap } from "lucide-react";

const doctors = [
  {
    name: "Dr. Elena Vasquez",
    role: "Head of General Medicine",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
    creds: "MD, MPH — Harvard Medical School",
    bio: "Over 20 years guiding families through preventive care and complex chronic conditions with warmth and clarity.",
  },
  {
    name: "Dr. Ravi Menon",
    role: "Cardiologist & Clinic Director",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
    creds: "MD, FACC — Johns Hopkins",
    bio: "A cardiologist who treats hearts and lives with patience, offering clear explanations and personalized plans.",
  },
  {
    name: "Dr. Amara Osei",
    role: "Pediatrician",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
    creds: "MD — University of Cape Town",
    bio: "Dedicated to gentle, playful care that makes children feel safe while parents stay informed at every step.",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.15] mb-5">Meet our doctors.</h2>
          <p className="text-xl text-ink-soft font-light leading-relaxed">Experienced, approachable, and committed to your wellbeing. Each doctor brings deep expertise and a calm heart.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map(({ name, role, img, creds, bio }) => (
            <article key={name} className="bg-white rounded-[2.5rem] overflow-hidden border border-ink/5 shadow-lg shadow-teal/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group focus-within:ring-2 focus-within:ring-teal/40">
              <div className="relative h-72 overflow-hidden">
                <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-display text-2xl tracking-tight leading-none mb-1 drop-shadow-md">{name}</h3>
                  <p className="text-white/90 text-sm font-medium tracking-tight">{role}</p>
                </div>
              </div>
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-2 text-teal text-sm font-semibold mb-3 tracking-tight">
                  <GraduationCap size={18} strokeWidth={2.5} />
                  {creds}
                </div>
                <p className="text-ink-soft leading-relaxed mb-4">{bio}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-coral font-semibold hover:text-[#d6745b] transition-colors tracking-tight underline underline-offset-4 decoration-2 decoration-coral/30">Book with {name.split(" ")[1]} <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
