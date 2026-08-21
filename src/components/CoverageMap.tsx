import { useState } from "react";
import { Icons } from "./Icons";
import { gardenImages } from "../App";

interface ServiceTown {
  name: string;
  time: string;
  lat: number;
  lon: number;
  quote: string;
}

const serviceTowns: ServiceTown[] = [
  { name: "Knysna", time: "21 min", lat: 42, lon: 48, quote: "Lagoon home reno – artistry." },
  { name: "Plettenberg Bay", time: "31 min", lat: 35, lon: 72, quote: "Best emergency response on the Route!" },
  { name: "Wilderness", time: "24 min", lat: 55, lon: 35, quote: "Saved our beach house before the storm." },
  { name: "Sedgefield", time: "29 min", lat: 50, lon: 43, quote: "Salt air specialists, finally." },
  { name: "George", time: "26 min", lat: 48, lon: 58, quote: "Commercial & residential expertise." },
  { name: "Mossel Bay", time: "35 min", lat: 52, lon: 28, quote: "Eastern gateway to the Route." },
  { name: "Hartenbos", time: "33 min", lat: 50, lon: 31, quote: "Family homes & holiday lets." },
  { name: "Storms River", time: "42 min", lat: 32, lon: 78, quote: "Adventure capital, quality plumbing." },
];

export function CoverageMap() {
  const [mapActive, setMapActive] = useState(serviceTowns[0]);

  return (
    <section id="coverage" className="py-20 sm:py-28" style={{ background: "#072641" }}>
      <div className="mx-auto max-w-[1250px] px-5 sm:px-7">
        <div className="max-w-[780px]">
          <h3 className="text-[32px] sm:text-[44px] font-[800] mt-3 text-white">
            Wherever you are on the Garden Route — we're already nearby.
          </h3>
        </div>

        <div className="mt-10 grid lg:grid-cols-1 gap-6">
          <div className="relative rounded-[26px] overflow-hidden border border-white/[0.096]"
            style={{ background: "#0A1A2E" }}>
            <div className="relative h-[420px] sm:h-[500px] overflow-hidden">
              <img src={gardenImages.valley} alt="Garden Route" className="absolute inset-0 w-full h-full object-cover opacity-[0.18]" />
              <div className="absolute inset-0"
                style={{ background: "radial-gradient(800px 360px at 60% 48%, rgba(0,210,255,0.086), transparent 70%), linear-gradient(180deg, rgba(7,23,42,0.42), rgba(6,15,28,0.78))" }} />
              {/* coastline line */}
              <svg viewBox="0 0 900 480" className="absolute inset-0 w-full h-full">
                <path d="M 55 365 C 180 320 320 350 480 300 C 600 260 720 210 830 185"
                  fill="none" stroke="#00D2FF" strokeWidth="2.5" strokeDasharray="6 10" opacity="0.8" />
              </svg>
              {/* pins */}
              {serviceTowns.map((tw) => (
                <button key={tw.name}
                  onClick={() => setMapActive(tw)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-aqua"
                  style={{
                    left: `${tw.lon}%`,
                    top: `${tw.lat}%`
                  }}
                >
                  <span className="relative block">
                    <span className="absolute inset-[-12px] rounded-full"
                      style={{
                        background: mapActive.name === tw.name ? "rgba(0,210,255,0.115)" : "transparent",
                        animation: mapActive.name === tw.name ? "pingSlow 2.0s infinite" : undefined
                      }} />
                    <span className="relative h-[14px] w-[14px] block rounded-full border-2 border-white shadow-lg transition-all"
                      style={{ background: mapActive.name === tw.name ? "#CD7F32" : "#00D2FF", transform: mapActive.name === tw.name ? "scale(1.2)" : "scale(1)" }} />
                  </span>
                  <span className="absolute left-1/2 -translate-x-1/2 top-[18px] whitespace-nowrap text-[10px] font-[700] tracking-wide text-white/86 drop-shadow">
                    {tw.name}
                  </span>
                </button>
              ))}
            </div>
            <div className="px-5 py-4 text-[11px] text-white/58 flex flex-wrap gap-3">
              {serviceTowns.map((t) => (
                <span key={t.name} className={`${t.name === mapActive.name ? "text-[#98f5ff] font-[650]" : "text-white/60"} hover:text-aqua transition-colors cursor-pointer`}
                  onClick={() => setMapActive(t)}>
                  {t.name} {t.time}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}