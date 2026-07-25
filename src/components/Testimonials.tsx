import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Margaret H.",
    age: "72",
    text: "I have been to many clinics over the years. At Wellspring, they actually listen. The staff help me sit comfortably, and the doctors explain everything slowly. It feels respectful.",
    stars: 5,
  },
  {
    name: "Daniel T.",
    age: "38",
    text: "We bring our two children here. The pediatrician is patient and fun, and when we need a specialist, everything is coordinated in one place. No more phone chaos.",
    stars: 5,
  },
  {
    name: "Aisha R.",
    age: "45",
    text: "The gynecology team made me feel safe and heard from the first visit. The appointment was on time, the office is clean and bright, and I always leave with answers.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-paper to-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.15] mb-5">Kind words from families.</h2>
          <p className="text-xl text-ink-soft font-light leading-relaxed">Real experiences from real patients — young families, adults, and older patients who feel cared for every time.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(({ name, age, text, stars }) => (
            <blockquote key={name} className="bg-white rounded-[2rem] p-8 md:p-10 border border-ink/5 shadow-xl shadow-teal/5 relative">
              <Quote className="text-teal/20 mb-4" size={36} strokeWidth={2.5} />
              <div className="flex gap-1 mb-4" aria-label={`${stars} out of 5 stars`}>
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} size={18} className="text-coral fill-coral" strokeWidth={0} />
                ))}
              </div>
              <p className="text-ink-soft text-lg leading-relaxed font-light mb-6">"{text}"</p>
              <footer className="flex items-center gap-3 pt-6 border-t border-ink/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal-deep flex items-center justify-center text-white font-display text-base shadow-md shadow-teal/15">{name[0]}</div>
                <div>
                  <p className="font-semibold text-ink tracking-tight">{name}</p>
                  <p className="text-ink-muted text-sm">Age {age}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
