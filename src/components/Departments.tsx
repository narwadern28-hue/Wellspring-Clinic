import { useState } from "react";
import { ChevronDown, Stethoscope, Baby, HeartPulse, Bone, Ear, Sparkles, Smile } from "lucide-react";

const departments = [
  { icon: Stethoscope, title: "General Medicine", desc: "Routine checkups, chronic conditions, vaccinations, and preventive screenings for all ages.", count: "12 Doctors" },
  { icon: Baby, title: "Pediatrics", desc: "Compassionate child health from newborn to teen — growth tracking, immunizations, and common illnesses.", count: "5 Doctors" },
  { icon: HeartPulse, title: "Gynecology", desc: "Women’s wellness, maternity care, family planning, and preventive screenings in a private setting.", count: "6 Doctors" },
  { icon: HeartPulse, title: "Cardiology", desc: "Heart health assessments, ECG, echocardiography, and management of hypertension and arrhythmia.", count: "4 Doctors" },
  { icon: Bone, title: "Orthopedics", desc: "Joint care, fractures, sports injuries, and rehabilitation with in-house physiotherapy.", count: "4 Doctors" },
  { icon: Ear, title: "ENT", desc: "Ear, nose, and throat care — hearing tests, sinus issues, and voice disorders.", count: "3 Doctors" },
  { icon: Sparkles, title: "Dermatology", desc: "Skin conditions, allergy testing, acne treatment, and cosmetic consultations.", count: "3 Doctors" },
  { icon: Smile, title: "Dental", desc: "Cleanings, fillings, root canals, crowns, and gentle cosmetic dentistry.", count: "5 Doctors" },
];

export default function Departments() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? departments : departments.slice(0, 6);

  return (
    <section id="departments" className="bg-paper py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.15] mb-5">Specialties under one roof.</h2>
          <p className="text-xl text-ink-soft font-light leading-relaxed">Find expert care without the travel, waiting, or confusion of multiple clinics. Every department works together for you.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map(({ icon: Icon, title, desc, count }, i) => (
            <a
              key={title}
              href="#contact"
              className="group bg-white rounded-3xl p-7 md:p-8 border border-ink/5 shadow-sm shadow-teal/5 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/40"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-soft to-green-soft flex items-center justify-center mb-6 shadow-inner shadow-teal/10 group-hover:scale-105 transition-transform">
                <Icon size={28} className="text-teal" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl text-ink mb-2 tracking-tight group-hover:text-teal transition-colors">{title}</h3>
              <p className="text-ink-soft text-[15px] leading-relaxed mb-3">{desc}</p>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-coral bg-coral-soft px-2.5 py-1 rounded-full">{count}</span>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-teal font-semibold text-lg hover:text-teal-deep transition-colors tracking-tight focus:outline-none focus:ring-2 focus:ring-teal/40 rounded-full px-4 py-2"
            aria-expanded={showAll}
          >
            {showAll ? "Show fewer" : "Show all specialties"}
            <ChevronDown size={18} className={`transition-transform ${showAll ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
