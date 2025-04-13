import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import MobileNav from "@/components/mobile-nav"

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-lg blur-xl"></div>
            <div className="relative bg-black/80 border border-red-900/50 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-red-500">FLUXY FURY Cookie Policy</h2>
              <p className="text-gray-300 mb-6">Last Updated: April 12, 2025</p>

              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">1. What Are Cookies</h3>
                  <p className="text-gray-300 mb-4">
                    Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is
                    stored in your web browser and allows the website or a third-party to recognize you and make your
                    next visit easier and the website more useful to you.
                  </p>
                  <p className="text-gray-300">
                    Essentially, cookies are a user's identification card for the FLUXY FURY servers. Web beacons are
                    small graphic files linked to our servers that allow us to track your use of our website and related
                    functionalities.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">2. How We Use Cookies</h3>
                  <p className="text-gray-300 mb-4">
                    When you use and access our website, we may place a number of cookie files in your web browser. We
                    use cookies for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>To enable certain functions of the website</li>
                    <li>To provide analytics</li>
                    <li>To store your preferences</li>
                    <li>To enable advertisements delivery, including behavioral advertising</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    We use both session and persistent cookies on the website and we use different types of cookies to
                    run the website:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                    <li>
                      Essential cookies. We may use essential cookies to authenticate users and prevent fraudulent use
                      of user accounts.
                    </li>
                    <li>
                      Preferences cookies. We may use preferences cookies to remember information that changes the way
                      the website behaves or looks, such as the "remember me" functionality.
                    </li>
                    <li>
                      Statistics cookies. We may use statistics cookies to track information how the website is used so
                      that we can make improvements. We may also use statistics cookies to test new advertisements,
                      pages, features or new functionality of the website to see how our users react to them.
                    </li>
                    <li>
                      Marketing cookies. These types of cookies track browsing habits and are used to deliver targeted
                      (interest-based) advertising. They are also used to limit the number of times you see an ad and to
                      measure the effectiveness of advertising campaigns.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">3. Third-Party Cookies</h3>
                  <p className="text-gray-300 mb-4">
                    In addition to our own cookies, we may also use various third-party cookies to report usage
                    statistics of the website, deliver advertisements on and through the website, and so on.
                  </p>
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-900/30 mb-4">
                    <h4 className="font-bold text-white mb-2">Third-Party Services We Use:</h4>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                      <li>Google Analytics (for website traffic analysis)</li>
                      <li>Google AdSense (for displaying advertisements)</li>
                      <li>Facebook Pixel (for advertising and analytics)</li>
                      <li>Twitter (for social media integration)</li>
                      <li>YouTube (for video content)</li>
                    </ul>
                  </div>
                  <p className="text-gray-300">
                    Each of these services may place their own cookies and have their own privacy policies. We encourage
                    you to review the privacy policies of these third-party services.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">4. What Are Your Choices Regarding Cookies</h3>
                  <p className="text-gray-300 mb-4">
                    If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please
                    visit the help pages of your web browser.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Please note, however, that if you delete cookies or refuse to accept them, you might not be able to
                    use all of the features we offer, you may not be able to store your preferences, and some of our
                    pages might not display properly.
                  </p>
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-900/30 mb-4">
                    <h4 className="font-bold text-white mb-2">How to manage cookies in major web browsers:</h4>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                      <li>
                        Chrome:{" "}
                        <Link
                          href="https://support.google.com/chrome/answer/95647"
                          className="text-red-400 hover:underline"
                        >
                          https://support.google.com/chrome/answer/95647
                        </Link>
                      </li>
                      <li>
                        Safari:{" "}
                        <Link
                          href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471"
                          className="text-red-400 hover:underline"
                        >
                          https://support.apple.com/guide/safari/manage-cookies
                        </Link>
                      </li>
                      <li>
                        Firefox:{" "}
                        <Link
                          href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                          className="text-red-400 hover:underline"
                        >
                          https://support.mozilla.org/en-US/kb/enable-and-disable-cookies
                        </Link>
                      </li>
                      <li>
                        Internet Explorer:{" "}
                        <Link
                          href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
                          className="text-red-400 hover:underline"
                        >
                          https://support.microsoft.com/help/17442
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">5. Cookie Consent</h3>
                  <p className="text-gray-300 mb-4">
                    When you first visit our website, we will ask for your consent to use cookies. You can choose to
                    accept or decline cookies. If you choose to decline cookies, some features of the website may not
                    function properly.
                  </p>
                  <p className="text-gray-300">
                    You can change your cookie preferences at any time by clicking on the "Cookie Settings" button in
                    the footer of our website. You can also clear cookies stored in your browser at any time through
                    your browser settings.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">6. Updates to This Cookie Policy</h3>
                  <p className="text-gray-300 mb-4">
                    We may update our Cookie Policy from time to time. We will notify you of any changes by posting the
                    new Cookie Policy on this page and updating the "Last Updated" date at the top of this policy.
                  </p>
                  <p className="text-gray-300">
                    You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie
                    Policy are effective when they are posted on this page.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-4 text-white">7. Contact Us</h3>
                  <p className="text-gray-300">If you have any questions about our Cookie Policy, please contact us:</p>
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
