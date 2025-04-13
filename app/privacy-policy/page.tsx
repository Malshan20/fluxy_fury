import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import MobileNav from "@/components/mobile-nav"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Header with back button */}
      <div className="bg-black/50 backdrop-blur-md border-b border-red-900/30 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-xl md:text-2xl font-bold mx-auto bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-lg blur-xl"></div>
            <div className="relative bg-black/80 border border-red-900/50 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-red-500">FLUXY FURY Privacy Policy</h2>
              <p className="text-gray-300 mb-6">Last Updated: April 12, 2025</p>

              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">1. Introduction</h3>
                  <p className="text-gray-300 mb-4">
                    FLUXY FURY ("we," "our," or "us") respects your privacy and is committed to protecting your personal
                    data. This privacy policy will inform you about how we look after your personal data when you visit
                    our website and tell you about your privacy rights and how the law protects you.
                  </p>
                  <p className="text-gray-300">
                    This privacy policy applies to all information collected through our website, as well as any related
                    services, sales, marketing, or events.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">2. Information We Collect</h3>
                  <p className="text-gray-300 mb-4">
                    We collect personal information that you voluntarily provide to us when you register on our website,
                    express an interest in obtaining information about us or our products and services, participate in
                    activities on the website, or otherwise contact us.
                  </p>
                  <p className="text-gray-300 mb-4">
                    The personal information that we collect depends on the context of your interactions with us and the
                    website, the choices you make, and the products and features you use. The personal information we
                    collect may include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Name and contact data (such as email address, phone number)</li>
                    <li>Credentials (such as passwords and security questions)</li>
                    <li>Payment data (such as credit card information)</li>
                    <li>Location data (such as IP address)</li>
                    <li>Usage data (such as how you interact with our website)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">3. How We Use Your Information</h3>
                  <p className="text-gray-300 mb-4">We use the information we collect or receive:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>To facilitate account creation and login process</li>
                    <li>To send administrative information to you</li>
                    <li>To send you marketing and promotional communications</li>
                    <li>To respond to your inquiries and solve any potential issues</li>
                    <li>To protect our services and your account from fraudulent activity</li>
                    <li>To comply with legal obligations</li>
                    <li>
                      For other business purposes, such as data analysis, identifying usage trends, and enhancing our
                      website
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">4. Sharing Your Information</h3>
                  <p className="text-gray-300 mb-4">
                    We only share information with your consent, to comply with laws, to provide you with services, to
                    protect your rights, or to fulfill business obligations. We may process or share your data based on
                    the following legal basis:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>
                      Consent: We may process your data if you have given us specific consent to use your personal
                      information for a specific purpose.
                    </li>
                    <li>
                      Legitimate Interests: We may process your data when it is reasonably necessary to achieve our
                      legitimate business interests.
                    </li>
                    <li>
                      Performance of a Contract: Where we have entered into a contract with you, we may process your
                      personal information to fulfill the terms of our contract.
                    </li>
                    <li>
                      Legal Obligations: We may disclose your information where we are legally required to do so in
                      order to comply with applicable law, governmental requests, a judicial proceeding, court order, or
                      legal process.
                    </li>
                    <li>
                      Vital Interests: We may disclose your information where we believe it is necessary to investigate,
                      prevent, or take action regarding potential violations of our policies, suspected fraud,
                      situations involving potential threats to the safety of any person and illegal activities, or as
                      evidence in litigation in which we are involved.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">5. Cookies and Tracking Technologies</h3>
                  <p className="text-gray-300 mb-4">
                    We may use cookies and similar tracking technologies to access or store information. Specific
                    information about how we use such technologies and how you can refuse certain cookies is set out in
                    our Cookie Policy.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">6. Data Security</h3>
                  <p className="text-gray-300 mb-4">
                    We have implemented appropriate technical and organizational security measures designed to protect
                    the security of any personal information we process. However, despite our safeguards and efforts to
                    secure your information, no electronic transmission over the Internet or information storage
                    technology can be guaranteed to be 100% secure.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">7. Your Privacy Rights</h3>
                  <p className="text-gray-300 mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, such
                    as:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>The right to access personal data we hold about you</li>
                    <li>
                      The right to request that we correct any personal data if it is found to be inaccurate or out of
                      date
                    </li>
                    <li>
                      The right to request that your personal data be erased where it is no longer necessary for us to
                      retain such data
                    </li>
                    <li>The right to withdraw your consent to the processing at any time</li>
                    <li>
                      The right to request that we provide you with your personal data and where possible, to transmit
                      that data directly to another data controller
                    </li>
                    <li>
                      The right, where there is a dispute in relation to the accuracy or processing of your personal
                      data, to request a restriction is placed on further processing
                    </li>
                    <li>The right to object to the processing of personal data</li>
                    <li>The right to lodge a complaint with a supervisory authority</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">8. Changes to This Privacy Policy</h3>
                  <p className="text-gray-300 mb-4">
                    We may update our privacy policy from time to time. We will notify you of any changes by posting the
                    new privacy policy on this page and updating the "Last Updated" date at the top of this privacy
                    policy.
                  </p>
                  <p className="text-gray-300">
                    You are advised to review this privacy policy periodically for any changes. Changes to this privacy
                    policy are effective when they are posted on this page.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">9. Contact Us</h3>
                  <p className="text-gray-300">
                    If you have any questions about this privacy policy, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-red-900/20 rounded-lg border border-red-900/30">
                    <p className="text-white">Email: privacy@fluxyfury.com</p>
                    <p className="text-white">Address: 123 Esports Avenue, Gaming City, GC 12345</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/30 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-gray-500">© 2025 FLUXY FURY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
