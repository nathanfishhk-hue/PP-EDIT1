import { motion } from "framer-motion";
import { Icons } from "../components/Icons";
import { Icons } from "../components/Icons";

export function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-[14px] text-white/60">
              Effective date: {effectiveDate} | Last updated: {lastUpdated}
            </p>
            <p className="mt-2 text-[13px] text-white/50">
              This policy covers Punctual Plumbers (Pty) Ltd, Agentcy.co.za, and Integr8 AI, including their employees, owners, contractors, and agents.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[900px] px-5 sm:px-7 space-y-10 text-[15px] leading-[1.75] text-white/80">
          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">1. Introduction</h2>
            <p>Punctual Plumbers (Pty) Ltd ("we", "us", "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or contact us. This policy complies with the Protection of Personal Information Act, 2013 (POPIA) and applies to all data subjects in South Africa.</p>
            <p className="mt-3">This policy also covers Agentcy.co.za ("Agentcy") and Integr8 AI ("Integr8"), who provide web development, AI integration, and digital marketing services to Punctual Plumbers. All three parties are jointly responsible for ensuring your personal information is processed lawfully, fairly, and transparently.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">2. Information We Collect</h2>
            <h3 className="text-[16px] font-[700] text-white mb-2">2.1 Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li>Full name and contact details (phone, email, address)</li>
              <li>Location data (town, region, service address)</li>
              <li>Service history and job details</li>
              <li>Payment information (processed via secure third-party payment processors)</li>
              <li>Communication records (calls, emails, WhatsApp messages)</li>
              <li>Website usage data and analytics</li>
            </ul>
            <h3 className="text-[16px] font-[700] text-white mt-4 mb-2">2.2 Non-Personal Information</h3>
            <p>We collect anonymous technical data including IP addresses, browser types, device information, and pages visited for analytics and security purposes.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">3. How We Use Your Information</h2>
            <p>We process your personal information for the following purposes under POPIA's lawful basis for processing:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li><strong>Service delivery:</strong> To provide plumbing services, schedule appointments, and complete jobs</li>
              <li><strong>Communication:</strong> To respond to enquiries, send quotes, and provide customer support</li>
              <li><strong>Payment processing:</strong> To issue invoices and process payments</li>
              <li><strong>Marketing (with consent):</strong> To send service reminders and offers where you have opted in</li>
              <li><strong>Legal compliance:</strong> To meet regulatory obligations including POPIA, tax, and safety reporting</li>
              <li><strong>Website analytics:</strong> To improve our website and services (via Agentcy.co.za and Integr8 AI)</li>
              <li><strong>Safety and security:</strong> To prevent fraud and ensure site security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">4. POPIA Compliance</h2>
            <p>This policy complies with the Protection of Personal Information Act, 2013 (Act No. 4 of 2013). Under POPIA, you have the following rights:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li><strong>Right to be informed:</strong> You have the right to be informed about how your personal information is processed</li>
              <li><strong>Right of access:</strong> You can request access to your personal information</li>
              <li><strong>Right to correction:</strong> You can request correction of inaccurate personal information</li>
              <li><strong>Right to erasure:</strong> You can request deletion of your personal information under certain circumstances</li>
              <li><strong>Right to object:</strong> You can object to processing of your personal information for direct marketing</li>
              <li><strong>Right to data portability:</strong> You can request transfer of your data to another service provider</li>
              <li><strong>Right to complain:</strong> You can lodge a complaint with the Information Regulator of South Africa</li>
            </ul>
            <p className="mt-3">Information Regulator contact details: JD House, 27 Wiemers Road, Pretoria | complaints.IR@justice.gov.za | 012 406 4818</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">5. Information Sharing and Disclosure</h2>
            <p>We do not sell, rent, or trade your personal information. We may share your information with:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li><strong>Service providers:</strong> Trusted third parties who assist in service delivery (payment processors, insurance providers, municipal bodies)</li>
              <li><strong>Regulatory bodies:</strong> PIRB, IOPSA, and other regulatory authorities as required by law</li>
              <li><strong>Business partners:</strong> Agentcy.co.za and Integr8 AI for website hosting, analytics, and AI integration services</li>
              <li><strong>Legal authorities:</strong> When required by law or to protect our rights, property, or safety</li>
            </ul>
            <p className="mt-3">All third parties are contractually obligated to protect your information and are subject to strict confidentiality obligations.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">6. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li>SSL encryption for all data transmission</li>
              <li>Secure servers hosted in South Africa or approved jurisdictions</li>
              <li>Access controls and authentication protocols</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Staff training on data protection and confidentiality</li>
            </ul>
            <p className="mt-3 text-white/60 text-[13px]">While we strive to protect your information, no method of electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data to the highest standards.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">7. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Specific retention periods include:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li>Customer records: 7 years (tax and legal requirements)</li>
              <li>Job records: 5 years</li>
              <li>Marketing communications: Until you opt out</li>
              <li>Website analytics: 26 months (anonymized)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">8. Cookies and Tracking</h2>
            <p>Our website uses cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. Types of cookies used:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li><strong>Essential cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics cookies:</strong> Google Analytics (via Agentcy.co.za) for site performance monitoring</li>
              <li><strong>Preference cookies:</strong> To remember your settings and preferences</li>
              <li><strong>Marketing cookies:</strong> With your consent only, for retargeting</li>
            </ul>
            <p className="mt-3">You can manage cookie preferences through your browser settings. Disabling essential cookies may affect website functionality.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">9. Third-Party Services</h2>
            <p>Our website and services may integrate with third-party platforms, including:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li><strong>Agentcy.co.za:</strong> Web development, hosting, and digital marketing services</li>
              <li><strong>Integr8 AI:</strong> AI-powered website features and integrations</li>
              <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
              <li><strong>WhatsApp Business API:</strong> Customer communication</li>
              <li><strong>Payment processors:</strong> Secure payment handling</li>
            </ul>
            <p className="mt-3">Each third party has its own privacy policy. We encourage you to review their policies. Agentcy.co.za and Integr8 AI are data processors acting on our behalf and are bound by strict data processing agreements.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">10. Your Rights and Choices</h2>
            <p>Under POPIA, you have the right to:</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/75">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Lodge a complaint with the Information Regulator</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at punctualplumbers@outlook.com or 083 237 9132.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">11. Children's Privacy</h2>
            <p>Our services are not directed to children under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">12. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
          </div>

          <div>
            <h2 className="text-[22px] font-[800] text-white mb-3">13. Contact Us</h2>
            <p>For questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:</p>
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
              <p className="mt-3 text-[12px] text-white/50">POPIA Information Officer available on request</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}