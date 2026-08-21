import { motion } from "framer-motion";
import { Icons } from "../components/Icons";

const blogPosts = [
  {
    slug: "knysna-pipe-freeze-protection",
    tag: "WINTER",
    title: "Knysna pipe freeze protection — 7 low-cost checks",
    excerpt: "Winter temperatures in Knysna can drop below 5°C. Unprotected copper and PVC pipes in roof spaces, garages, and exterior walls are at risk. Here's how to prevent burst pipes before they happen.",
    readTime: "5 min read",
    date: "June 2025",
  },
  {
    slug: "loadshedding-geyser-timers",
    tag: "SUMMER",
    title: "Load-shedding geyser timers that actually save",
    excerpt: "Your geyser is likely your home's biggest electricity user. With the right timer strategy, you can cut geyser costs by 30-40% without sacrificing hot water — even during Stage 6.",
    readTime: "6 min read",
    date: "January 2025",
  },
  {
    slug: "why-plett-homes-need-copper",
    tag: "COASTAL",
    title: "Why Plett homes need copper — not PVC — within 800m of sea",
    excerpt: "Salt-laden air corrodes PVC fittings 4x faster than inland. Copper's natural antimicrobial properties and 50+ year lifespan make it the only sensible choice for coastal Garden Route homes.",
    readTime: "7 min read",
    date: "March 2025",
  },
  {
    slug: "garden-route-water-quality-report",
    tag: "WATER QUALITY",
    title: "Garden Route water quality report 2025: What's in your tap?",
    excerpt: "We tested municipal, borehole, and tank water across 12 towns from Mossel Bay to Storms River. Results show elevated iron, hardness, and in some areas — bacterial contamination.",
    readTime: "8 min read",
    date: "April 2025",
  },
  {
    slug: "forest-root-intrusion-drainage",
    tag: "DRAINAGE",
    title: "Forest root intrusion: The silent destroyer of Plett drainage",
    excerpt: "70% of Plett properties have root intrusion in main drainage lines. Camera inspection catches it early — before the backup floods your home.",
    readTime: "5 min read",
    date: "February 2025",
  },
  {
    slug: "copper-vs-pex-coastal-homes",
    tag: "MATERIALS",
    title: "Copper vs PEX for coastal homes: The complete comparison",
    excerpt: "PEX is cheaper and faster to install. But in salt-air environments, copper's corrosion resistance and UV stability make it the better long-term investment. Here's the data.",
    readTime: "7 min read",
    date: "May 2025",
  },
];

export function BlogPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0A1A2E", color: "#f6f6f6" }}>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, #0A1A2E 0%, #072641 100%)"
        }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(0,210,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }} pointerEvents="none" />
        <div className="relative mx-auto max-w-[1250px] px-5 sm:px-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-[800px] mx-auto"
          >
            <div className="text-aqua font-[700] text-[11px] tracking-widest mb-3">JOURNAL</div>
            <h1 className="text-[38px] sm:text-[56px] lg:text-[64px] font-[800] leading-[0.95] text-white">
              Garden Route Plumbing Journal
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] text-white/60 max-w-[600px] mx-auto">
              Expert insights on coastal plumbing, water conservation, and protecting your Garden Route property. Written by the GRP team — PIRB 3419.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-7">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="relative rounded-[24px] overflow-hidden h-full flex flex-col"
                style={{ background: "linear-gradient(170deg, rgba(23,48,76,0.9), rgba(8,24,44,0.9))", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-aqua font-[800] text-[10px] tracking-widest">
                    <span className="px-2 py-1 rounded-full" style={{ background: "rgba(0,210,255,0.12)", border: "1px solid rgba(0,210,255,0.2)" }}>
                      {post.tag}
                    </span>
                    <span className="text-white/40">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="mt-4 text-[20px] sm:text-[24px] font-[750] leading-[1.2] text-white">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/70 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/[0.08]">
                    <span className="text-[12px] text-white/50">{post.readTime}</span>
                    <a href={`/blog/${post.slug}`} className="flex items-center gap-1 text-aqua font-[600] text-[13px] hover:text-aqua/80 transition-colors">
                      Read more
                      <Icons.ChevronRight />
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500" style={{
                  background: "linear-gradient(135deg, rgba(0,210,255,0.05), transparent)"
                }} />
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-white/60">Want these insights delivered to your inbox?</p>
            <a href="#quote" className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-[600] text-[#041a2a] transition-all"
              style={{ background: "linear-gradient(120deg, #00D2FF, #8ef7ff)" }}>
              Subscribe to Journal
              <Icons.ChevronRight />
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 border-t border-white/[0.05]" style={{ background: "#072641" }}>
        <div className="mx-auto max-w-[1250px] px-5 sm:px-7 text-center">
          <h3 className="text-[28px] sm:text-[36px] font-[800] text-white">Need plumbing advice for your property?</h3>
          <p className="mt-3 text-white/60 max-w-[600px] mx-auto">Our team knows every pipe, pressure zone, and council requirement from Mossel Bay to Storms River.</p>
          <a href="https://wa.me/27832379132?text=Hi%20Punctual%20Plumbers%20-%20I%20need%20help%20with%20" target="_blank" rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-[26px] py-[15px] rounded-[16px] text-[14.5px] font-[650] text-white transition-all"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <Icons.WhatsApp />
            WhatsApp Us 24/7
          </a>
        </div>
      </section>
    </div>
  );
}