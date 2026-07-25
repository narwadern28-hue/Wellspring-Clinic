import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/90">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal to-teal-deep flex items-center justify-center shadow-md shadow-teal/20">
                <svg width="22" height="22" viewBox="0 0 48 48" fill="none"><path d="M24 6C16 14 10 22 10 30c0 7.7 6.3 14 14 14s14-6.3 14-14c0-8-6-16-14-24z" fill="#F7F9F8" opacity="0.25"/><circle cx="24" cy="28" r="9" fill="#F7F9F8"/><circle cx="24" cy="28" r="4" fill="#2C6E7F"/><path d="M24 19v3m0 8v3M16 28h3m10 0h3" stroke="#F7F9F8" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <div className="leading-none">
                <span className="block font-display text-xl tracking-tight">Wellspring</span>
                <span className="block text-[10px] tracking-[0.14em] uppercase text-white/50 font-medium">Multispecialty Clinic</span>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed font-light">Complete, compassionate care for every stage of life — all under one roof, with respect and clarity.</p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 tracking-tight">Explore</h4>
            <ul className="space-y-2 text-sm font-medium text-white/70">
              {["About Us", "Our Doctors", "Departments", "Services", "Health Packages", "Testimonials", "Blog", "Contact"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors tracking-tight">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 tracking-tight">Departments</h4>
            <ul className="space-y-2 text-sm font-medium text-white/70">
              {["General Medicine", "Pediatrics", "Gynecology", "Cardiology", "Orthopedics", "ENT", "Dermatology", "Dental"].map((item) => (
                <li key={item}><a href="#departments" className="hover:text-white transition-colors tracking-tight">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 tracking-tight">Contact</h4>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              <li><a href="#contact" className="flex items-center gap-2 hover:text-white transition-colors"><MapPin size={16} /> 245 Wellness Lane</a></li>
              <li><a href="tel:+15551234567" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={16} /> +1 (555) 123-4567</a></li>
              <li><a href="mailto:hello@wellspringclinic.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={16} /> hello@wellspringclinic.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 font-medium tracking-tight">
          <p>© {new Date().getFullYear()} Wellspring Multispecialty Clinic. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
