import { motion } from "framer-motion";
import { Icons } from "../components/Icons";
import { Icons } from "../components/Icons";

export function TermsOfServicePage() {
  const effectiveDate = "21 August 2026";
  const lastUpdated = "21 August 2026";

  return (
    <div className="min-h-screen" style={{ background: "#0A1A2E", color: "#f6f6f6" }}>
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0A1A2E 0%, #072641 100%)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(0,210,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.03) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="relative mx-auto max-w-[900px] px-5 sm:px-7">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 text-aqua font-[700] text-[11px] tracking-widest mb-4">
              <Icons.FileText />
              LEGAL
            </div>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[52px] font-[800] leading-[0.95] text-white">
              Terms of Service
            </h1>
            <p className="mt-4 text-[14px] text-white/60">
              Effective date: {effectiveDate} | Last updated: {lastUpdated}
            </p>
            <p className="mt-2 text-[13px] text-white/50">
              These terms govern your use of Punctual Plumbers services and website, operated by Punctual Plumbers (Pty) Ltd in partnership with Agentcy.co.za and Integr8 AI.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[900px] px-5 sm:px-7 space-y-10 text-[15px] leading-[1.75] text-white/80">
          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">1. Agreement to Terms</h2>
            <p>By accessing our website or using our plumbing services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.</p>
            <p className="mt-3">These terms constitute a legally binding agreement between you and Punctual Plumbers (Pty) Ltd ("Company", "we", "us"), a South African registered company. For website and AI-related services, this agreement also involves Agentcy.co.za and Integr8 AI as service providers.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">2. Services</h2>
            <p>Punctual Plumbers provides residential, commercial, and emergency plumbing services along the Garden Route, from Mossel Bay to Storms River. Services include but are not limited to:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li>General plumbing repairs and installations</li>
              <li>Bathroom renovations</li>
              <li>Leak detection and repair</li>
              <li>New installations (copper, PEX, PVC)</li>
              <li>Geyser repairs and replacements</li>
              <li>Drain cleaning and root removal</li>
              <li>Water filtration systems</li>
              <li>24/7 emergency callouts</li>
            </ul>
            <p className="mt-3">Service availability, response times, and pricing may vary. Emergency callout response times are indicative only and not guaranteed.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">3. Quotes and Estimates</h2>
            <p>All quotes and estimates provided are valid for 30 days from the date of issue. Quotes are based on visual inspection and information provided at the time. We reserve the right to revise quotes if:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li>Additional damage or work is discovered during the job</li>
              <li>Access conditions change from those initially assessed</li>
              <li>Client requests additional work not included in the original quote</li>
              <li>Material prices change significantly between quoting and execution</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">4. Payment Terms</h2>
            <p>Payment terms are as follows:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li><strong>Residential jobs:</strong> Payment due upon completion</li>
              <li><strong>Commercial jobs:</strong> Progress billing as per contract terms</li>
              <li><strong>Emergency callouts:</strong> Payment due within 7 days of invoice</li>
              <li><strong>Large projects:</strong> Deposit may be required (max 30% of total)</li>
              <li><strong>Overdue accounts:</strong> Interest at 2% per month charged on balances over 30 days</li>
            </ul>
            <p className="mt-3">We accept EFT, cash, and card payments. All prices are in South African Rand (ZAR) and include VAT where applicable.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">5. Warranties and Guarantees</h2>
            <p><strong>Workmanship:</strong> All work is guaranteed for 7 years from the date of completion. This guarantee covers workmanship defects only, not damage caused by misuse, negligence, or external factors beyond our control.</p>
            <p className="mt-3"><strong>Materials:</strong> Manufacturer warranties apply to all materials supplied. We will assist in making warranty claims on your behalf where possible.</p>
            <p className="mt-3"><strong>Coastal guarantee:</strong> Copper installations in coastal areas carry an extended 10-year corrosion warranty against salt-air degradation.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by South African law, Punctual Plumbers (Pty) Ltd, Agentcy.co.za, and Integr8 AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li>Loss of profits, data, or business opportunities</li>
              <li>Property damage beyond the scope of the contracted work</li>
              <li>Consequential damages from water damage, flooding, or equipment failure</li>
              <li>Website downtime, data loss, or service interruption (Agentcy.co.za / Integr8 AI)</li>
            </ul>
            <p className="mt-3">Our total liability shall not exceed the amount paid for the specific services giving rise to the claim. This limitation applies to all parties including employees, contractors, and agents of Punctual Plumbers, Agentcy.co.za, and Integr8 AI.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">7. Client Responsibilities</h2>
            <p>To ensure safe and efficient service delivery, clients must:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li>Provide accurate information about the plumbing issue or project</li>
              <li>Ensure safe access to work areas</li>
              <li>Disclose known hazards (asbestos, structural issues, etc.)</li>
              <li>Be present or authorize entry for work to proceed</li>
              <li>Pay invoices in accordance with agreed terms</li>
              <li>Notify us promptly of any defects or concerns post-completion</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">8. Cancellation and Rescheduling</h2>
            <p><strong>Emergency callouts:</strong> Cancellation within 1 hour of dispatch may incur a callout fee.</p>
            <p className="mt-3"><strong>Scheduled jobs:</strong> Cancellation with less than 24 hours' notice may incur a cancellation fee of up to 50% of the quoted amount.</p>
            <p className="mt-3"><strong>Large projects:</strong> Cancellation terms are as per individual contract. Deposits may be non-refundable.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">9. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of Punctual Plumbers (Pty) Ltd, Agentcy.co.za, or Integr8 AI, or their respective licensors. You may not reproduce, distribute, or create derivative works without express written permission.</p>
            <p className="mt-3">The Punctual Plumbers logo and "Paradise Protected" tagline are trademarks of Punctual Plumbers (Pty) Ltd. The Agentcy.co.za and Integr8 AI logos are trademarks of their respective owners.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">10. Website Use</h2>
            <p>This website is provided by Agentcy.co.za and maintained by Integr8 AI. By using this website, you agree:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li>Not to use the website for any unlawful purpose</li>
              <li>Not to attempt unauthorized access to any part of the website</li>
              <li>Not to interfere with the website's functionality or security</li>
              <li>That content is provided "as is" without warranties</li>
            </ul>
            <p className="mt-3">We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">11. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Punctual Plumbers (Pty) Ltd, Agentcy.co.za, Integr8 AI, and their respective directors, employees, contractors, and agents from any claims, damages, losses, and expenses arising from your use of our services or website, or your violation of these terms.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">12. Governing Law and Jurisdiction</h2>
            <p>These Terms of Service are governed by the laws of the Republic of South Africa. Any disputes shall be resolved in the courts of South Africa, and you submit to the exclusive jurisdiction of those courts.</p>
            <p className="mt-3">This agreement is subject to the Consumer Protection Act, 68 of 2008, where applicable.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">13. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact:</p>
            <div className="mt-3 p-6 rounded-[20px]" style={{ background: "rgba(0,210,255,0.03)", border: "1px solid rgba(0,210,255,0.1)" }}>
              <p className="font-[700] text-white">Punctual Plumbers (Pty) Ltd</p>
              <p className="mt-1 text-white/75">Mossel Bay → Storms River, Garden Route, South Africa</p>
              <p className="mt-1 text-white/75 flex items-center gap-2">
                <span className="text-aqua"><Icons.Phone /></span>
                083 237 9132
              </p>
              <p className="text-white/75 flex items-center gap-2">
                <span className="text-aqua"><Icons.Mail /></span>
                punctualplumbers@outlook.com
              </p>
              <p className="mt-3 text-white/50 text-[12px]">Reg. No: [Company Registration Number] | PIRB 3419 | IOPSA Member</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}