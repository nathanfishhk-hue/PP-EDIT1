import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";

export function WaterCalculator() {
  const [people, setPeople] = useState(3);
  const [showersPerWeek, setShowersPerWeek] = useState(14);
  const [hasGarden, setHasGarden] = useState(true);

  const calcSavings = useMemo(() => {
    // SA water usage benchmarks (litres per person per day)
    const litresPerPersonPerDay = 210; // SA average
    const showerLitres = 90; // 10 min shower @ 9L/min
    const gardenLitresPerDay = 650; // irrigation

    const dailyLitres = people * litresPerPersonPerDay;
    const showerLitresPerWeek = showersPerWeek * showerLitres;
    const gardenLitresPerWeek = hasGarden ? gardenLitresPerWeek : 0;

    // Weekly total
    const weeklyLitres = dailyLitres * 7 + showerLitresPerWeek + gardenLitresPerWeek;

    // 37% savings with efficient fixtures + leak repair + smart irrigation
    const savedWeekly = Math.round(weeklyLitres * 0.37);
    const savedMonthly = savedWeekly * 4.33;

    // SA water cost: ~R84 per kilolitre (varies by municipality, Garden Route average)
    const randPerKL = 84;
    const randMonthly = Math.round((savedMonthly / 1000) * randPerKL);

    // CO2: 0.018 kg per litre (water treatment + pumping)
    const co2Monthly = Math.round(savedMonthly * 0.018);

    return {
      litresPerMonth: savedMonthly,
      randPerMonth: randMonthly,
      co2PerMonth: co2Monthly,
    };
  }, [people, showersPerWeek, hasGarden]);

  return (
    <section id="calculator" className="py-20 sm:py-28" style={{ background: "#0A1A2E" }}>
      <div className="mx-auto max-w-[1250px] px-5 sm:px-7">
        <div className="text-center max-w-[820px] mx-auto">
          <h3 className="text-[32px] sm:text-[44px] font-[800] mt-3 text-white">Water Savings Calculator</h3>
          <p className="text-white/68 mt-3 text-[15.7px]">See how much Garden Route water — and money — you could save.</p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="rounded-[24px] border border-white/[0.095] p-[22px] sm:p-[28px] w-full max-w-[560px]"
            style={{ background: "linear-gradient(170deg, rgba(23,48,76,0.95), rgba(8,24,44,0.95))" }}>
            <div className="flex items-center gap-2 text-[#7ef3ff] font-[700] text-[11px] tracking-widest">
              <Icons.Calculator />
              WATER SAVINGS CALCULATOR
            </div>

            <div className="mt-5 grid gap-4">
              <label className="text-[13px] text-white/80">
                People in home:
                <span className="font-[700] text-white ml-2">{people}</span>
                <input type="range" min={1} max={8} value={people} onChange={e => setPeople(+e.target.value)} className="w-full mt-1" />
              </label>
              <label className="text-[13px] text-white/80">
                Showers per week (household):
                <span className="font-[700] text-white ml-2">{showersPerWeek}</span>
                <input type="range" min={0} max={35} value={showersPerWeek} onChange={e => setShowersPerWeek(+e.target.value)} className="w-full mt-1" />
              </label>
              <label className="flex items-center gap-3 text-[13.8px] text-white/82">
                <input type="checkbox" checked={hasGarden} onChange={e => setHasGarden(e.target.checked)} className="w-4 h-4 accent-aqua" />
                Garden / irrigation system
              </label>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="rounded-[16px] py-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-[22px] font-[800] text-[#8fffff]">{calcSavings.litresPerMonth.toLocaleString()}</div>
                <div className="text-[11px] text-white/55">litres / month saved</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="rounded-[16px] py-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-[22px] font-[800] text-[#8fffff]">R {calcSavings.randPerMonth.toLocaleString()}</div>
                <div className="text-[11px] text-white/55">Rand / month</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="rounded-[16px] py-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-[22px] font-[800] text-[#8fffff]">{calcSavings.co2PerMonth} kg</div>
                <div className="text-[11px] text-white/55">CO₂ avoided / month</div>
              </motion.div>
            </div>

            <p className="mt-4 text-[11px] text-white/40 text-center">
              Based on SA municipal averages: 210L/person/day, 90L/shower, R84/kL. Savings assume 37% reduction via efficient fixtures, leak repair & smart irrigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}