import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";

interface CarouselFact {
  icon: React.ReactNode;
  fact: string;
  tag: string;
}

const carouselFacts: CarouselFact[] = [
  { icon: <Icons.WaterDrop />, fact: "Copper pipes last 50+ years in coastal homes. PVC degrades 4x faster in salt air.", tag: "MATERIALS" },
  { icon: <Icons.DropletSearch />, fact: "A dripping tap wastes 11,000+ litres per year — enough to fill a Knysna pool.", tag: "WASTE" },
  { icon: <Icons.DropletSearch />, fact: "Thermal leak detection finds 94% of slab leaks within 15 minutes — no demolition needed.", tag: "TECH" },
  { icon: <Icons.Wind />, fact: "70% of Plett homes have undetected forest root intrusions in drainage. Camera inspect.", tag: "ROOTS" },
  { icon: <Icons.Shield />, fact: "Our 7-year workmanship guarantee is the longest on the Garden Route. We stand by it.", tag: "GUARANTEE" },
];

export function KnowledgeCarousel() {
  const [flowIdx, setFlowIdx] = useState(1);

  const paddedFlow = useMemo(
    () => [carouselFacts[carouselFacts.length - 1], ...carouselFacts, carouselFacts[0]],
    []
  );

  // Smooth auto-rotate only - no click interaction, no hover pause
  useEffect(() => {
    const id = setInterval(() => {
      setFlowIdx((i) => (i >= paddedFlow.length - 2 ? 1 : i + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [paddedFlow.length]);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #0A1A2E 0%, #072641 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(0,210,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.03) 1px, transparent 1px)",
        backgroundSize: "50px 50px"
      }} pointerEvents="none" />
      <div className="mx-auto max-w-[1250px] px-5 sm:px-7">
        <div className="max-w-[720px] text-center">
          <h2 className="text-[34px] sm:text-[48px] font-[800] mt-3 text-white">Water wisdom from the Route.</h2>
        </div>
        <div className="mt-12 relative" style={{ perspective: "1300px" }}>
          <div className="relative h-[340px] sm:h-[380px] flex items-center justify-center">
            {paddedFlow.map((item, i) => {
              const diff = i - flowIdx;
              const abs = Math.abs(diff);
              const sign = Math.sign(diff) || 1;
              const isCenter = diff === 0;
              const x = isCenter ? 0 : sign * (180 + (abs - 1) * 100);
              const scale = isCenter ? 1 : Math.max(0.45, 0.85 - (abs - 1) * 0.18);
              const rotateY = isCenter ? 0 : sign * (abs === 1 ? -22 : -40);
              const z = isCenter ? 0 : -(abs * 60);
              const opacity = isCenter ? 1 : Math.max(0, 0.9 - (abs - 1) * 0.1);

              return (
                <motion.div
                  key={i}
                  animate={{ x, scale, rotateY, z, opacity }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute"
                  style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                >
                  <div className="w-[290px] sm:w-[360px] rounded-[24px] p-[24px] sm:p-[28px] border"
                    style={{
                      background: isCenter
                        ? "linear-gradient(170deg, rgba(23,48,76,0.98), rgba(8,24,44,0.98))"
                        : "linear-gradient(170deg, rgba(10,22,40,0.98), rgba(8,18,34,0.98))",
                      borderColor: isCenter
                        ? "rgba(0,210,255,0.25)"
                        : "rgba(255,255,255,0.13)",
                      boxShadow: isCenter ? "0 20px 70px rgba(0,210,255,0.13)" : "none",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="text-aqua" style={{ fontSize: "32px" }}>
                        {item.icon}
                      </div>
                      <div className="text-[10px] tracking-widest font-[700] px-2 py-1 rounded-full"
                        style={{ background: `rgba(0,210,255,0.12)`, color: "#00D2FF", border: "1px solid rgba(0,210,255,0.2)" }}>
                        {item.tag}
                      </div>
                    </div>
                    <p className="mt-[18px] text-[16px] sm:text-[18px] leading-relaxed font-[600] text-white/92">
                      {item.fact}
                    </p>
                    <div className="mt-5 text-[11.6px] text-white/44 flex items-center gap-2">
                      <span className="h-[5px] w-[5px] rounded-full bg-[#00D2FF]" />
                      GARDEN ROUTE PLUMBING CO.
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Simple indicator dots */}
          <div className="flex justify-center gap-2 mt-8">
            {carouselFacts.map((_, i) => (
              <div
                key={i}
                className="h-[7px] rounded-full transition-all"
                style={{
                  width: i + 1 === flowIdx ? 32 : 7,
                  background: i + 1 === flowIdx ? "#00D2FF" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}