import { motion, AnimatePresence, useState } from "framer-motion";
import { Icons } from "./Icons";

interface Testimonial {
  name: string;
  area: string;
  text: string;
  stars: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  { name: "Liezl van Rooyen", area: "Knysna Heads", text: "We redid our entire water system with GRP. Copper detailing is museum-level. Their respect for our lagoon home was incredible.", stars: 5, avatar: "LV" },
  { name: "André & Sanet Botha", area: "Wilderness Beach", text: "Burst main at 3:12am in a storm. They were at the door 27 minutes later. Paradise Protected is not marketing — it's real.", stars: 5, avatar: "AB" },
  { name: "Michael Chen", area: "Plettenberg Bay", text: "Whole-house filtration + copper re-pipe. Water bill -64%, pressure perfect. They even sent Garden Route water quality reports.", stars: 5, avatar: "MC" },
  { name: "Nandi Mbeki", area: "George", text: "Three plumbers failed to find the slab leak. GRP found it in 14 minutes with thermal. Saved our oak floors.", stars: 5, avatar: "NM" },
];

export function TestimonialsSection() {
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="reviews" className="py-20 sm:py-28" style={{ background: "#0A1A2E", color: "#f6f6f6" }}>
      <div className="mx-auto max-w-[1250px] px-5 sm:px-7">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h3 className="text-[32px] sm:text-[44px] font-[800] mt-3" style={{ background: "linear-gradient(98deg, #bdf7ff 0%, #00D2FF 38%, #4ff0b2 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              Garden Route homeowners, unfiltered.
            </h3>
          </div>
          <div className="text-[13.8px] text-white/50 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-aqua"><Icons.Star /></span>
              ))}
              <span className="ml-1">4.9 average • 312 Google reviews • video verified</span>
            </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.15fr_.85fr] gap-6 items-start">
          <div className="relative rounded-[24px] p-6 sm:p-8 shadow-[0_14px_56px_rgba(0,0,0,0.4)] min-h-[260px] overflow-hidden"
            style={{ background: "linear-gradient(170deg, rgba(23,48,76,0.95), rgba(8,24,44,0.95))", border: "1px solid rgba(0,210,255,0.15)" }}>
            <Icons.Quote />
            <AnimatePresence mode="wait">
              <motion.div
                key={tIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
              >
                <div className="mt-4 text-[15px] leading-relaxed" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", lineHeight: "1.55", color: "#e8f4f8" }}>
                  "{testimonials[tIdx].text}"
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-[46px] w-[46px] rounded-full flex items-center justify-center font-[800] text-white text-[14px]"
                    style={{ background: "linear-gradient(135deg, #0A3D62, #00D2FF)" }}>
                    {testimonials[tIdx].avatar}
                  </div>
                  <div>
                    <div className="font-[740] text-[15px] text-white">{testimonials[tIdx].name}</div>
                    <div className="text-[12.5px] text-white/50 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-aqua"><Icons.Star /></span>
                  ))}
                  <span className="ml-1">{testimonials[tIdx].area}</span>
                </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-[20px] right-[22px] flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTIdx(i)}
                  className="h-[7px] rounded-full transition-all"
                  style={{
                    width: i === tIdx ? 28 : 7,
                    background: i === tIdx ? "#00D2FF" : "rgba(255,255,255,0.2)",
                  }}
                  aria-label={`testimonial ${i + 1}`} />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {[
              { icon: <Icons.Award />, t: "Garden Route's #1 Rated Plumber", s: "Google Local Services 2023–2025" },
              { icon: <Icons.Shield />, t: "PIRB 3419 • IOPSA Member", s: "Full insurance, COC traceable" },
              { icon: <Icons.Certificate />, t: "Coastal Copper Certified", s: "Salt-air, forest root, lagoon rated" },
            ].map((b) => (
              <div key={b.t} className="rounded-[18px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                style={{ background: "linear-gradient(170deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-aqua" style={{ fontSize: "24px" }}>
                  {b.icon}
                </div>
                <div className="mt-1 font-[730] text-[15px] text-white">{b.t}</div>
                <div className="text-[12.5px] text-white/50">{b.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}