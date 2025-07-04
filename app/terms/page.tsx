import Image from "next/image"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/images/app-icon.png"
                  alt="Service Checkmate"
                  width={40}
                  height={40}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Service Checkmate</h1>
                <p className="text-xs text-emerald-600 font-semibold">AI-Powered Platform</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                FAQ
              </Link>
              <Link href="/privacy" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50/30 to-teal-50 py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Legal Terms & Conditions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-xl text-gray-600 mb-4">Please read these terms carefully before using our services.</p>
          <p className="text-sm text-gray-500 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
            Last updated: January 1, 2024
          </p>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-60"></div>
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-orange-500 rounded-full animate-pulse opacity-40"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 mb-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-amber-800 mb-0">Important Notice</h2>
              </div>
              <p className="text-amber-700 mb-0 text-lg leading-relaxed">
                By using Service Checkmate, you agree to these terms and conditions. Please read them carefully as they
                contain important information about your rights and obligations.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>

            <p className="text-gray-600 mb-6">
              By accessing or using the Service Checkmate platform, mobile application, or website (collectively, the
              "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these
              Terms, you may not use our Service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Description of Service</h2>

            <p className="text-gray-600 mb-6">
              Service Checkmate is an AI-powered platform that connects homeowners with verified contractors and service
              providers for home improvement and renovation projects. Our Service includes project matching,
              communication tools, payment processing, project management features, and quality assurance systems.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Accounts</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Creation</h3>
            <p className="text-gray-600 mb-6">
              To use our Service, you must create an account and provide accurate, complete, and current information.
              You are responsible for maintaining the confidentiality of your account credentials and for all activities
              that occur under your account.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Responsibilities</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>You must be at least 18 years old to create an account</li>
              <li>You must provide accurate and truthful information</li>
              <li>You are responsible for maintaining account security</li>
              <li>You must notify us immediately of any unauthorized use</li>
              <li>One person may not maintain multiple accounts</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Conduct</h2>

            <p className="text-gray-600 mb-4">You agree not to:</p>

            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Post false, misleading, or fraudulent information</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Use automated systems to access the Service</li>
              <li>Circumvent any security measures</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Contractor Services</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Independent Contractors</h3>
            <p className="text-gray-600 mb-6">
              Contractors on our platform are independent service providers. Service Checkmate does not employ
              contractors and is not responsible for their work, conduct, or compliance with local regulations. We
              facilitate connections but do not guarantee the quality or completion of work.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contractor Verification</h3>
            <p className="text-gray-600 mb-6">
              While we verify contractor credentials, licenses, and insurance, you are responsible for conducting your
              own due diligence before hiring any contractor. We recommend obtaining multiple quotes and checking
              references before making decisions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Payments and Fees</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Fees</h3>
            <p className="text-gray-600 mb-6">
              Service Checkmate charges fees for successful project completions and premium features. All fees are
              clearly disclosed before you incur them. Fees are non-refundable except as required by law or as specified
              in our refund policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Processing</h3>
            <p className="text-gray-600 mb-6">
              We use third-party payment processors to handle transactions. By using our payment services, you agree to
              the terms and conditions of our payment processors. We are not responsible for payment processor errors or
              failures.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Escrow Services</h3>
            <p className="text-gray-600 mb-6">
              Our escrow service holds payments until project milestones are completed. Funds are released based on
              agreed-upon terms or dispute resolution outcomes. We reserve the right to hold funds pending investigation
              of disputes or potential fraud.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Intellectual Property</h2>

            <p className="text-gray-600 mb-6">
              The Service Checkmate platform, including all content, features, and functionality, is owned by Service
              Checkmate and is protected by copyright, trademark, and other intellectual property laws. You may not
              copy, modify, distribute, or create derivative works without our written permission.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Privacy and Data</h2>

            <p className="text-gray-600 mb-6">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
              information. By using our Service, you consent to the collection and use of information as described in
              our Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Disclaimers</h2>

            <p className="text-gray-600 mb-6">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL
              WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Limitation of Liability</h2>

            <p className="text-gray-600 mb-6">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SERVICE CHECKMATE SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA LOSS, OR BUSINESS
              INTERRUPTION, ARISING FROM YOUR USE OF THE SERVICE.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Platform Disputes</h3>
            <p className="text-gray-600 mb-6">
              We provide dispute resolution services for conflicts between users and contractors. Our AI-powered system
              analyzes disputes and facilitates resolution. If automated resolution fails, human mediators will assist
              in finding a fair solution.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Legal Disputes</h3>
            <p className="text-gray-600 mb-6">
              Any legal disputes arising from these Terms or your use of the Service will be resolved through binding
              arbitration in accordance with the rules of the American Arbitration Association. You waive your right to
              participate in class action lawsuits.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Termination</h2>

            <p className="text-gray-600 mb-6">
              We may terminate or suspend your account at any time for violation of these Terms or for any other reason
              at our sole discretion. You may terminate your account at any time by contacting customer support. Upon
              termination, your right to use the Service ceases immediately.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Changes to Terms</h2>

            <p className="text-gray-600 mb-6">
              We reserve the right to modify these Terms at any time. We will notify users of material changes through
              the app or by email. Your continued use of the Service after changes constitutes acceptance of the new
              Terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Governing Law</h2>

            <p className="text-gray-600 mb-6">
              These Terms are governed by the laws of the State of California, without regard to conflict of law
              principles. Any legal action must be brought in the state or federal courts located in San Francisco,
              California.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">15. Contact Information</h2>

            <p className="text-gray-600 mb-4">If you have questions about these Terms, please contact us:</p>

            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> legal@servicecheckmate.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105
              </p>
              <p className="text-gray-700 mb-0">
                <strong>Phone:</strong> (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
            {/* Logo and Mission */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/images/app-icon.png"
                  alt="Service Checkmate"
                  width={50}
                  height={50}
                  className="rounded-2xl shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Service Checkmate</h3>
                  <p className="text-sm text-emerald-600 font-semibold">AI-Powered Platform</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Our mission is to transform home remodeling with unparalleled AI intelligence to achieve quality,
                efficiency, and lasting satisfaction for every project.
              </p>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-lg underline decoration-2 underline-offset-4">Links</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <Link href="/" className="hover:text-emerald-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-emerald-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-emerald-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-emerald-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Important Links Column */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-lg underline decoration-2 underline-offset-4">
                Important Links
              </h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-emerald-600 transition-colors underline decoration-1 underline-offset-2"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-emerald-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-emerald-600 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-emerald-600 transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help & Support Column */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-lg underline decoration-2 underline-offset-4">
                Help & Support
              </h4>
              <div className="space-y-4 text-gray-600">
                <p>
                  <a href="mailto:support@servicecheckmate.com" className="hover:text-emerald-600 transition-colors">
                    support@servicecheckmate.com
                  </a>
                </p>
                <p>San Francisco, California, United States</p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Subscribe to our newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <input
                type="text"
                placeholder="Enter your name"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-gray-700 placeholder-gray-500"
              />
              <div className="flex flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address here"
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-gray-700 placeholder-gray-500 pr-14"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 sm:mb-0">SERVICE CHECKMATE LLC © 2024. All Rights Reserved.</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
