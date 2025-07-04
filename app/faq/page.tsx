"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqData = [
    {
      question: "What is Service Checkmate?",
      answer:
        "Service Checkmate is an AI-powered platform that connects homeowners with verified contractors and service providers for home remodeling and renovation projects. Our platform uses artificial intelligence to match you with the right professionals, manage projects, and ensure quality outcomes.",
    },
    {
      question: "How does the AI matching system work?",
      answer:
        "Our AI analyzes your project requirements, location, budget, timeline, and preferences to match you with the most suitable contractors. The system considers contractor ratings, past performance, specializations, availability, and proximity to provide you with the best possible matches.",
    },
    {
      question: "Is Service Checkmate free to use?",
      answer:
        "Yes, downloading and using the basic features of Service Checkmate is completely free for homeowners. We charge a small service fee only when you successfully complete a project through our platform. Contractors pay a subscription fee to access premium features.",
    },
    {
      question: "How are contractors verified on the platform?",
      answer:
        "All contractors undergo a comprehensive verification process including license verification, insurance confirmation, background checks, and reference validation. Our AI system continuously monitors contractor performance and customer feedback to maintain quality standards.",
    },
    {
      question: "What types of projects can I post?",
      answer:
        "You can post any home improvement project including kitchen remodeling, bathroom renovation, flooring, painting, electrical work, plumbing, HVAC, roofing, landscaping, and general repairs. Our platform supports projects of all sizes from small repairs to major renovations.",
    },
    {
      question: "How does the payment system work?",
      answer:
        "We use a secure escrow system where payments are held safely until project milestones are completed. This protects both homeowners and contractors. Payments are released automatically based on AI-verified project progress or manual approval.",
    },
    {
      question: "Can I track my project progress?",
      answer:
        "Yes! Our AI-powered progress tracking system allows you to monitor your project in real-time. Contractors upload photos and updates, and our AI analyzes the progress to ensure everything is on track. You'll receive notifications about important milestones and any potential issues.",
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer:
        "We have a comprehensive dispute resolution system powered by AI sentiment analysis. If issues arise, our platform facilitates communication between parties and provides mediation services. We also offer a satisfaction guarantee for projects completed through our platform.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply download the Service Checkmate app from the App Store or Google Play, create your account, and post your first project. Our AI will immediately start matching you with suitable contractors in your area. You can also use our web platform for full functionality.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Absolutely. We use enterprise-grade security measures to protect your personal and financial information. All data is encrypted, and we comply with industry standards for data protection. We never share your personal information with third parties without your consent.",
    },
    {
      question: "Can contractors contact me directly?",
      answer:
        "Contractors can only contact you through our secure messaging system within the app. This ensures all communications are tracked and helps maintain professional standards. You have full control over who can contact you and can block any unwanted communications.",
    },
    {
      question: "What happens if a contractor doesn't show up?",
      answer:
        "Our AI system tracks contractor reliability and attendance. If a contractor fails to show up for a scheduled appointment, you can report it through the app. We'll immediately match you with alternative contractors and may penalize the unreliable contractor.",
    },
  ]

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
              <Link href="/faq" className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                FAQ
              </Link>
              <Link href="/privacy" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50/30 to-teal-50 py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Your Answers Here</h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about Service Checkmate and how our AI-powered platform works.
            </p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-60"></div>
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-teal-500 rounded-full animate-pulse opacity-40"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-50"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${openItems.includes(index) ? "ring-2 ring-emerald-500/20 shadow-lg" : ""}`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-emerald-50/50 rounded-2xl transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-emerald-700 transition-colors">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 transform transition-transform duration-300">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-emerald-600 rotate-180" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                    )}
                  </div>
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                    <div className="border-t border-emerald-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Our AI assistant is available 24/7 to help answer your questions and guide you through the platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white hover:bg-gray-50 text-emerald-600 px-8 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg"
            >
              Try AI Assistant
            </Link>
            <a
              href="mailto:support@servicecheckmate.com"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg"
            >
              Contact Support
            </a>
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
                  <Link href="/terms" className="hover:text-emerald-600 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-emerald-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-emerald-600 transition-colors underline decoration-1 underline-offset-2"
                  >
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
