import { Newspaper } from "lucide-react";

const posts = [
  { title: "How to prepare your child for a first doctor visit", date: "June 10, 2025", cat: "Pediatrics" },
  { title: "What bloodwork reveals about heart health", date: "May 28, 2025", cat: "Cardiology" },
  { title: "A calm guide to gynecological screenings", date: "May 12, 2025", cat: "Women's Health" },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.15] mb-3">Health notes.</h2>
            <p className="text-xl text-ink-soft font-light leading-relaxed">Quick, trustworthy guidance from our doctors — written for patients, not professionals.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-coral font-semibold text-lg hover:text-[#d6745b] transition-colors tracking-tight underline underline-offset-4 decoration-2 decoration-coral/30">View all articles →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(({ title, date, cat }) => (
            <a key={title} href="#" className="group bg-white rounded-[2rem] p-7 md:p-8 border border-ink/5 shadow-lg shadow-teal/5 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/40">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest bg-teal-soft text-teal px-3 py-1 rounded-full">{cat}</span>
                <span className="text-xs text-ink-muted font-medium">{date}</span>
              </div>
              <h3 className="font-display text-xl text-ink mb-3 leading-snug tracking-tight group-hover:text-teal transition-colors">{title}</h3>
              <span className="text-sm font-semibold text-coral">Read more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

