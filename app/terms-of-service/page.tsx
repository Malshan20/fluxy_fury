import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import MobileNav from "@/components/mobile-nav"

export default function TermsOfService() {
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
            Terms of Service
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-lg blur-xl"></div>
            <div className="relative bg-black/80 border border-red-900/50 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-red-500">FLUXY FURY Terms of Service</h2>
              <p className="text-gray-300 mb-6">Last Updated: April 12, 2025</p>

              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">1. Agreement to Terms</h3>
                  <p className="text-gray-300 mb-4">
                    These Terms of Service constitute a legally binding agreement made between you and FLUXY FURY ("we,"
                    "us," or "our"), concerning your access to and use of our website and services.
                  </p>
                  <p className="text-gray-300">
                    You agree that by accessing the website, you have read, understood, and agree to be bound by all of
                    these Terms of Service. If you do not agree with all of these Terms of Service, then you are
                    expressly prohibited from using the website and you must discontinue use immediately.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">2. Intellectual Property Rights</h3>
                  <p className="text-gray-300 mb-4">
                    Unless otherwise indicated, the website is our proprietary property and all source code, databases,
                    functionality, software, website designs, audio, video, text, photographs, and graphics on the
                    website (collectively, the "Content") and the trademarks, service marks, and logos contained therein
                    (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and
                    trademark laws and various other intellectual property rights.
                  </p>
                  <p className="text-gray-300">
                    The Content and the Marks are provided on the website "AS IS" for your information and personal use
                    only. Except as expressly provided in these Terms of Service, no part of the website and no Content
                    or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed,
                    encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any
                    commercial purpose whatsoever, without our express prior written permission.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">3. User Representations</h3>
                  <p className="text-gray-300 mb-4">By using the website, you represent and warrant that:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>All registration information you submit will be true, accurate, current, and complete.</li>
                    <li>
                      You will maintain the accuracy of such information and promptly update such registration
                      information as necessary.
                    </li>
                    <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                    <li>
                      You are not a minor in the jurisdiction in which you reside, or if a minor, you have received
                      parental permission to use the website.
                    </li>
                    <li>
                      You will not access the website through automated or non-human means, whether through a bot,
                      script, or otherwise.
                    </li>
                    <li>You will not use the website for any illegal or unauthorized purpose.</li>
                    <li>Your use of the website will not violate any applicable law or regulation.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">4. User Registration</h3>
                  <p className="text-gray-300 mb-4">
                    You may be required to register with the website. You agree to keep your password confidential and
                    will be responsible for all use of your account and password. We reserve the right to remove,
                    reclaim, or change a username you select if we determine, in our sole discretion, that such username
                    is inappropriate, obscene, or otherwise objectionable.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">5. Prohibited Activities</h3>
                  <p className="text-gray-300 mb-4">
                    You may not access or use the website for any purpose other than that for which we make the website
                    available. The website may not be used in connection with any commercial endeavors except those that
                    are specifically endorsed or approved by us.
                  </p>
                  <p className="text-gray-300 mb-4">As a user of the website, you agree not to:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>
                      Systematically retrieve data or other content from the website to create or compile, directly or
                      indirectly, a collection, compilation, database, or directory without written permission from us.
                    </li>
                    <li>
                      Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive
                      account information such as user passwords.
                    </li>
                    <li>Circumvent, disable, or otherwise interfere with security-related features of the website.</li>
                    <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the website.</li>
                    <li>
                      Use any information obtained from the website in order to harass, abuse, or harm another person.
                    </li>
                    <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                    <li>Use the website in a manner inconsistent with any applicable laws or regulations.</li>
                    <li>Engage in unauthorized framing of or linking to the website.</li>
                    <li>
                      Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other
                      material, including excessive use of capital letters and spamming, that interferes with any
                      party's uninterrupted use and enjoyment of the website or modifies, impairs, disrupts, alters, or
                      interferes with the use, features, functions, operation, or maintenance of the website.
                    </li>
                    <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                    <li>Attempt to impersonate another user or person or use the username of another user.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">6. Submissions</h3>
                  <p className="text-gray-300 mb-4">
                    You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other
                    information regarding the website ("Submissions") provided by you to us are non-confidential and
                    shall become our sole property. We shall own exclusive rights, including all intellectual property
                    rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any
                    lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">7. Website Management</h3>
                  <p className="text-gray-300 mb-4">We reserve the right, but not the obligation, to:</p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Monitor the website for violations of these Terms of Service.</li>
                    <li>
                      Take appropriate legal action against anyone who, in our sole discretion, violates the law or
                      these Terms of Service, including without limitation, reporting such user to law enforcement
                      authorities.
                    </li>
                    <li>
                      In our sole discretion and without limitation, refuse, restrict access to, limit the availability
                      of, or disable (to the extent technologically feasible) any of your Contributions or any portion
                      thereof.
                    </li>
                    <li>
                      In our sole discretion and without limitation, notice, or liability, to remove from the website or
                      otherwise disable all files and content that are excessive in size or are in any way burdensome to
                      our systems.
                    </li>
                    <li>
                      Otherwise manage the website in a manner designed to protect our rights and property and to
                      facilitate the proper functioning of the website.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">8. Term and Termination</h3>
                  <p className="text-gray-300 mb-4">
                    These Terms of Service shall remain in full force and effect while you use the website. WITHOUT
                    LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE
                    DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE WEBSITE (INCLUDING
                    BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT
                    LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF
                    SERVICE OR OF ANY APPLICABLE LAW OR REGULATION.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">9. Modifications and Interruptions</h3>
                  <p className="text-gray-300 mb-4">
                    We reserve the right to change, modify, or remove the contents of the website at any time or for any
                    reason at our sole discretion without notice. However, we have no obligation to update any
                    information on our website. We also reserve the right to modify or discontinue all or part of the
                    website without notice at any time.
                  </p>
                  <p className="text-gray-300">
                    We will not be liable to you or any third party for any modification, price change, suspension, or
                    discontinuance of the website.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">10. Governing Law</h3>
                  <p className="text-gray-300 mb-4">
                    These Terms of Service and your use of the website are governed by and construed in accordance with
                    the laws applicable to agreements made and to be entirely performed within the State/Commonwealth of
                    [STATE/COMMONWEALTH], without regard to its conflict of law principles.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">11. Contact Us</h3>
                  <p className="text-gray-300">
                    In order to resolve a complaint regarding the website or to receive further information regarding
                    use of the website, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-red-900/20 rounded-lg border border-red-900/30">
                    <p className="text-white">Email: legal@fluxyfury.com</p>
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
