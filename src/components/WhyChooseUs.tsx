import { Clock, Users, Award, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Clock, value: "25+", label: "Years Serving Families" },
  { icon: Users, value: "32", label: "Specialist Doctors" },
  { icon: Award, value: "98%", label: "Patient Satisfaction" },
  { icon: HeartHandshake, value: "8", label: "Medical Departments" },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.15] mb-6">
              Care that feels like <span className="text-teal">family.</span>
            </h2>
            <p className="text-lg md:text-xl text-ink-soft leading-relaxed mb-8 font-light">
              We believe good healthcare begins with listening. At Wellspring, every visit starts with time for your questions — because understanding your life is the first step to healing it.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Experienced specialists across every age",
                "Same-week appointments available",
                "Transparent pricing with no hidden fees",
                "Gentle approach for elderly and young patients",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-ink/5 shadow-sm shadow-teal/5">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-teal-soft flex items-center justify-center text-teal shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-ink-soft font-medium leading-snug tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-teal/10 to-green-soft/50 rounded-[2.5rem] p-8 md:p-10 border border-ink/5 shadow-xl shadow-teal/5">
              <h3 className="font-display text-2xl md:text-3xl text-ink mb-8 tracking-tight">By the numbers</h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {stats.map(({ icon: Icon, value, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-5 md:p-6 border border-ink/5 shadow-sm shadow-teal/5 hover:shadow-md transition-shadow"
                  >
                    <Icon className="text-teal mb-3" size={26} strokeWidth={2} />
                    <p className="font-display text-3xl md:text-4xl text-ink mb-1 tracking-tight">{value}</p>
                    <p className="text-ink-muted text-sm font-medium tracking-tight">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
