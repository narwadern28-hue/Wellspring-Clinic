import { Check, ShieldCheck, Clock, Award } from "lucide-react";

const packages = [
  {
    name: "Family Wellness Check",
    price: "$149",
    desc: "A full health review for adults and seniors — bloodwork, BP, BMI, vision, hearing, and a doctor consultation.",
    features: [
      "Comprehensive blood panel",
      "Blood pressure & heart rhythm",
      "Vision & hearing screening",
      "One-hour consultation",
      "Written health summary",
    ],
    tag: "Most Popular",
    tagColor: "bg-coral text-white",
  },
  {
    name: "Pediatric Growth Plan",
    price: "$99",
    desc: "Growth tracking, immunization review, nutrition guidance, and a gentle exam for children ages 2–16.",
    features: [
      "Height & weight tracking",
      "Immunization review",
      "Nutritional guidance",
      "Gentle physical exam",
      "Parent report",
    ],
    tag: "For Kids",
    tagColor: "bg-teal text-white",
  },
  {
    name: "Women's Wellness Screen",
    price: "$189",
    desc: "Gynecological exam, Pap smear, breast exam, and hormonal health discussion in a private setting.",
    features: [
      "Pelvic exam & Pap",
      "Breast examination",
      "Hormone screening",
      "Private consultation",
      "Results within 48 hours",
    ],
    tag: "Private",
    tagColor: "bg-green-muted text-white",
  },
];

export default function HealthPackages() {
  return (
    <section id="packages" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.15] mb-5">Health packages made simple.</h2>
          <p className="text-xl text-ink-soft font-light leading-relaxed">Clear pricing, no surprises. Pick a checkup that fits your life and get comprehensive results in a calm, unhurried visit.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map(({ name, price, desc, features, tag, tagColor }) => (
            <div key={name} className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-ink/5 shadow-xl shadow-teal/5 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative">
              <div className={`absolute top-5 right-5 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${tagColor}`}>{tag}</div>
              <h3 className="font-display text-2xl md:text-3xl text-ink mb-2 tracking-tight">{name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display text-4xl md:text-5xl text-teal tracking-tight">{price}</span>
                <span className="text-ink-muted text-sm font-medium">one-time</span>
              </div>
              <p className="text-ink-soft leading-relaxed mb-6">{desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-ink-soft text-[15px] leading-snug font-medium tracking-tight">
                    <Check size={20} className="text-green-muted shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center w-full bg-teal hover:bg-teal-deep text-white font-semibold text-lg px-6 py-3.5 rounded-full shadow-lg shadow-teal/20 hover:shadow-xl transition-all tracking-tight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal/50">Book This Plan</a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-ink-muted font-medium tracking-tight">
          <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-green-muted" /> No hidden fees</span>
          <span className="flex items-center gap-2"><Clock size={18} className="text-green-muted" /> Results within 48 hours</span>
          <span className="flex items-center gap-2"><Award size={18} className="text-green-muted" /> Insurance accepted</span>
        </div>
      </div>
    </section>
  );
}
