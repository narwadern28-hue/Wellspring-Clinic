import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch("https://formspree.io/f/xzdnklgr", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: JSON.stringify(form),
    });
    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
};
  return (
    <section id="contact" className="bg-gradient-to-b from-paper to-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight leading-[1.15] mb-5">Reach out. We're here.</h2>
          <p className="text-xl text-ink-soft font-light leading-relaxed">Schedule a visit, ask a question, or request a call back. We respond within one business day.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-ink/5 shadow-xl shadow-teal/5">
              <h3 className="font-display text-2xl text-ink mb-6 tracking-tight">Clinic Details</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-start gap-4 hover:bg-teal-soft/40 p-3 -mx-3 rounded-2xl transition-colors">
                  <span className="w-11 h-11 rounded-xl bg-teal-soft flex items-center justify-center text-teal shrink-0 shadow-sm"><MapPin size={22} strokeWidth={2} /></span>
                  <div>
                    <p className="text-xs text-ink-muted font-bold uppercase tracking-widest mb-0.5">Address</p>
                    <p className="text-ink font-medium leading-snug tracking-tight">245 Wellness Lane<br />Greenwood, CA 94030</p>
                  </div>
                </a>
                <a href="tel:+15551234567" className="flex items-start gap-4 hover:bg-teal-soft/40 p-3 -mx-3 rounded-2xl transition-colors">
                  <span className="w-11 h-11 rounded-xl bg-teal-soft flex items-center justify-center text-teal shrink-0 shadow-sm"><Phone size={22} strokeWidth={2} /></span>
                  <div>
                    <p className="text-xs text-ink-muted font-bold uppercase tracking-widest mb-0.5">Phone</p>
                    <p className="text-ink font-medium tracking-tight">+1 (555) 123-4567</p>
                  </div>
                </a>
                <a href="mailto:hello@wellspringclinic.com" className="flex items-start gap-4 hover:bg-teal-soft/40 p-3 -mx-3 rounded-2xl transition-colors">
                  <span className="w-11 h-11 rounded-xl bg-teal-soft flex items-center justify-center text-teal shrink-0 shadow-sm"><Mail size={22} strokeWidth={2} /></span>
                  <div>
                    <p className="text-xs text-ink-muted font-bold uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-ink font-medium tracking-tight">hello@wellspringclinic.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-3 -mx-3">
                  <span className="w-11 h-11 rounded-xl bg-teal-soft flex items-center justify-center text-teal shrink-0 shadow-sm"><Clock size={22} strokeWidth={2} /></span>
                  <div>
                    <p className="text-xs text-ink-muted font-bold uppercase tracking-widest mb-0.5">Hours</p>
                    <p className="text-ink font-medium leading-snug tracking-tight">Mon – Fri: 7:00 AM – 8:00 PM<br />Sat – Sun: 9:00 AM – 5:00 PM<br/><span className="text-coral font-bold">24/7 Emergency Line</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="rounded-[2rem] overflow-hidden shadow-xl shadow-teal/5 ring-1 ring-ink/5 bg-ink/5 h-72 md:h-80 relative">
              <iframe
                title="Wellspring Clinic location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.715220363377!2d-122.419418!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f9d2b%3A0x9be8fc29565477e0!2zNDU3IFZhbGxlciB8IEhlYWx0aGNhcmUgQ2xpbg!5e0!3m2!1sen!2sus!4v1720000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 grayscale contrast-[1.1] bg-teal-soft/20"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-ink/5 shadow-xl shadow-teal/5">
              <h3 className="font-display text-2xl md:text-3xl text-ink mb-2 tracking-tight">Book an appointment</h3>
              <p className="text-ink-muted mb-8 tracking-tight">Fill in your details and we'll confirm within one business day.</p>

              {submitted ? (
                <div className="bg-green-soft rounded-2xl p-8 text-center border border-green-muted/20">
                  <CheckCircle size={56} className="text-green-muted mx-auto mb-4" strokeWidth={2} />
                  <h4 className="font-display text-2xl text-ink mb-2 tracking-tight">Request received</h4>
                  <p className="text-ink-soft">We'll be in touch shortly to confirm your appointment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-ink mb-1.5 tracking-tight">Full name</label>
                      <input id="name" type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-paper border border-ink/10 text-ink font-medium tracking-tight focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/40 transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1.5 tracking-tight">Email</label>
                      <input id="email" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-paper border border-ink/10 text-ink font-medium tracking-tight focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/40 transition-colors" placeholder="you@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-1.5 tracking-tight">Phone</label>
                    <input id="phone" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-paper border border-ink/10 text-ink font-medium tracking-tight focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/40 transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-ink mb-1.5 tracking-tight">How can we help?</label>
                    <textarea id="message" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-paper border border-ink/10 text-ink font-medium tracking-tight focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/40 transition-colors resize-y" placeholder="Tell us about the visit you need — specialist, checkup, or emergency concern." />
                  </div>
                  <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-coral hover:bg-[#d6745b] text-white text-lg font-semibold px-10 py-4 rounded-full shadow-xl shadow-coral/20 hover:shadow-2xl transition-all tracking-tight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral/50">
                    <Send size={20} strokeWidth={2.5} /> Request Appointment
                  </button>
                  <p className="text-xs text-ink-muted font-medium">By submitting, you agree to our privacy policy. We do not share your health information.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
