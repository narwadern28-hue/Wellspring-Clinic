import { useState } from "react";
import { Menu, X, Phone, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Doctors", href: "#doctors" },
  {
    label: "Departments",
    href: "#departments",
    children: [
      { label: "General Medicine", href: "#departments" },
      { label: "Pediatrics", href: "#departments" },
      { label: "Gynecology", href: "#departments" },
      { label: "Cardiology", href: "#departments" },
      { label: "Orthopedics", href: "#departments" },
      { label: "ENT", href: "#departments" },
      { label: "Dermatology", href: "#departments" },
      { label: "Dental", href: "#departments" },
    ],
  },
  { label: "Services", href: "#services" },
  { label: "Health Packages", href: "#packages" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-teal-deep text-white/95 text-[13px] md:text-base leading-snug">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-2.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="tel:+15551234567" className="flex items-center gap-1.5 hover:text-white transition-colors font-medium tracking-tight">
              <Phone size={14} strokeWidth={2.5} />
              <span>+1 (555) 123-4567</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-white/80">245 Wellness Lane, Greenwood</span>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <span className="flex items-center gap-1.5 bg-coral/20 text-coral-soft px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase">
              <Clock size={12} strokeWidth={2.5} /> 24/7 Helpline
            </span>
            <span className="hidden md:inline text-white/70">Emergency care available</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-ink/5 shadow-[0_1px_20px_rgba(44,110,127,0.06)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-[72px] md:h-[80px] flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-teal to-teal-deep flex items-center justify-center shadow-md shadow-teal/20 group-hover:shadow-lg transition-shadow">
              <svg width="28" height="28" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 6C16 14 10 22 10 30c0 7.7 6.3 14 14 14s14-6.3 14-14c0-8-6-16-14-24z" fill="#F7F9F8" opacity="0.25"/><circle cx="24" cy="28" r="9" fill="#F7F9F8"/><circle cx="24" cy="28" r="4" fill="#2C6E7F"/><path d="M24 19v3m0 8v3M16 28h3m10 0h3" stroke="#F7F9F8" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div className="leading-none">
              <span className="block font-display text-xl md:text-2xl text-teal tracking-tight">Wellspring</span>
              <span className="block text-[10px] md:text-xs text-ink-muted font-medium tracking-[0.12em] uppercase">Multispecialty Clinic</span>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setDropdownOpen(true)}
                onMouseLeave={() => link.children && setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="px-2.5 py-2 rounded-lg text-[15px] font-medium text-ink-soft hover:text-teal hover:bg-teal-soft/50 transition-colors tracking-tight"
                >
                  {link.label}
                </a>
                {link.children && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-2xl shadow-teal/10 border border-ink/5 overflow-hidden p-2"
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-3 py-2.5 rounded-xl text-[15px] text-ink-soft hover:text-teal hover:bg-teal-soft/40 transition-colors leading-snug tracking-tight"
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-coral hover:bg-[#d6745b] text-white text-[15px] font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-coral/20 hover:shadow-coral/30 transition-all tracking-tight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral/50"
            >
              Book Appointment
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2.5 rounded-xl bg-teal-soft/60 text-teal hover:bg-teal-soft transition-colors"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-cream border-t border-ink/5"
            >
              <div className="max-w-7xl mx-auto px-5 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => { if (!link.children) setOpen(false); }}
                      className="block px-3 py-3 rounded-xl text-lg font-medium text-ink-soft hover:text-teal hover:bg-teal-soft/40 transition-colors tracking-tight"
                    >
                      {link.label}
                    </a>
                    {link.children && (
                      <div className="ml-4 pl-3 border-l-2 border-teal-soft/60 space-y-0.5 pb-1">
                        {link.children.map((c) => (
                          <a
                            key={c.label}
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2 rounded-lg text-base text-ink-muted hover:text-teal transition-colors tracking-tight"
                          >
                            {c.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 block text-center bg-coral text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg shadow-coral/20"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
