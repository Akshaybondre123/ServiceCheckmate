"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Search,
  Download,
  Star,
  Users,
  Shield,
  Brain,
  Menu,
  X,
  Play,
  Apple,
  Bot,
  FileText,
  CreditCard,
  TrendingUp,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant for Service Checkmate. How can I help you with your home project today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponses = [
        "I can help you find the perfect contractor for your project! What type of work are you looking to get done?",
        "Great question! Our AI can generate a detailed scope of work for your project. Would you like me to help you create one?",
        "I can connect you with verified professionals in your area. What's your location and project type?",
        "Our AI analyzes your project requirements to match you with the best contractors. Tell me more about your needs!",
        "I can help you track project milestones and manage payments. What specific assistance do you need?",
        "Let me help you schedule a contractor visit. What type of service do you need and when would work best for you?",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

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
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center animate-pulse">
                  <Bot className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Service Checkmate</h1>
                <p className="text-xs text-emerald-600 font-semibold">AI-Powered Platform</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                Home
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                FAQ
              </Link>
              <Link href="/privacy" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Terms & Conditions
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/faq" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  FAQ
                </Link>
                <Link href="/privacy" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Terms & Conditions
                </Link>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg w-full">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1500 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              {/* App Badge */}
              <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Brain className="w-4 h-4 animate-pulse" />
                <span>AI-Powered Remodeling Platform</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Home Projects
                </span>
                <span className="block text-4xl md:text-5xl">with AI</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Home remodeling and renovation services powered by artificial intelligence. Search, hire, and manage
                service providers seamlessly with smart automation.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Search className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Smart Provider Matching</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">AI Project Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Automated Billing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Milestone Tracking</span>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group relative overflow-hidden bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center justify-center space-x-3 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Apple className="w-5 h-5 relative z-10 group-hover:animate-pulse" />
                  <div className="text-left relative z-10">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                </button>

                <button className="group relative overflow-hidden bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-green-300 px-6 py-3 rounded-xl text-sm font-medium flex items-center justify-center space-x-3 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Play className="w-5 h-5 text-green-600 relative z-10 group-hover:animate-pulse" />
                  <div className="text-left relative z-10">
                    <div className="text-xs opacity-60">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Right Content - App Screenshots */}
            <div
              className={`relative transition-all duration-1500 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative mx-auto max-w-sm">
                {/* Main Phone */}
                <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <Image
                      src="/images/dashboard-screen.png"
                      alt="Service Checkmate Dashboard"
                      width={300}
                      height={400}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>

                {/* Floating Screenshots - Hidden on mobile, visible on larger screens */}
                <div className="hidden md:block absolute -top-8 -right-16 w-32 h-64 bg-gray-900 rounded-2xl p-1 shadow-xl opacity-80 transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <div className="bg-white rounded-xl overflow-hidden h-full">
                    <Image
                      src="/images/service-provider-screen.png"
                      alt="Service Provider Profile"
                      width={120}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="hidden md:block absolute -bottom-8 -left-16 w-32 h-64 bg-gray-900 rounded-2xl p-1 shadow-xl opacity-80 transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                  <div className="bg-white rounded-xl overflow-hidden h-full">
                    <Image
                      src="/images/project-review-screen.png"
                      alt="Project Review"
                      width={120}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Mobile-friendly floating screenshots - smaller and positioned better */}
                <div className="md:hidden absolute -top-4 -right-8 w-20 h-32 bg-gray-900 rounded-xl p-1 shadow-lg opacity-70 transform rotate-6">
                  <div className="bg-white rounded-lg overflow-hidden h-full">
                    <Image
                      src="/images/service-provider-screen.png"
                      alt="Service Provider Profile"
                      width={80}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:hidden absolute -bottom-4 -left-8 w-20 h-32 bg-gray-900 rounded-xl p-1 shadow-lg opacity-70 transform -rotate-6">
                  <div className="bg-white rounded-lg overflow-hidden h-full">
                    <Image
                      src="/images/project-review-screen.png"
                      alt="Project Review"
                      width={80}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating AI Elements - Adjusted for mobile */}
                <div className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl opacity-20 animate-bounce flex items-center justify-center">
                  <Brain className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl opacity-20 animate-bounce flex items-center justify-center"
                  style={{ animationDelay: "1s" }}
                >
                  <Bot className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>
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
            className="absolute bottom-40 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-50"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Service Checkmate?</h2>
            <p className="text-xl text-gray-600">Transform your construction projects with powerful AI automation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Search</h3>
              <p className="text-gray-600">AI-powered provider matching based on your specific needs</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Project Management</h3>
              <p className="text-gray-600">Seamlessly manage tasks and collaborate on-site</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Enhanced Productivity</h3>
              <p className="text-gray-600">Boost efficiency with automated workflows and tracking</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">AI-verified professionals with guaranteed quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Brain className="w-4 h-4 animate-pulse" />
              <span>Powered by Advanced AI</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Features That Set Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of home remodeling with our cutting-edge artificial intelligence features designed
              to streamline every aspect of your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Scope Generation */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AI Scope Generation</h3>
              <p className="text-gray-600 text-center mb-4">
                Generate comprehensive project scopes using natural language processing. Our AI analyzes your
                requirements and suggests detailed tasks, milestones, and deliverables.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>Automated task breakdown</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>Milestone suggestions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span>Completeness review</span>
                </li>
              </ul>
            </div>

            {/* AI Progress Monitoring */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Progress Monitoring</h3>
              <p className="text-gray-600 text-center mb-4">
                Advanced image recognition analyzes photos and progress reports to assess work quality and completion
                status automatically.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Visual progress tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Quality assessment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Deviation alerts</span>
                </li>
              </ul>
            </div>

            {/* Smart Dispute Resolution */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Smart Dispute Resolution</h3>
              <p className="text-gray-600 text-center mb-4">
                AI-powered sentiment analysis monitors communication and satisfaction levels to prevent disputes and
                facilitate quick resolution.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Sentiment analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Automated flagging</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Resolution recommendations</span>
                </li>
              </ul>
            </div>

            {/* Automated Payment Management */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Automated Payments</h3>
              <p className="text-gray-600 text-center mb-4">
                Intelligent escrow management with predictive algorithms for completion timelines and dynamic payment
                release schedules.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>Dynamic escrow release</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>Fraud detection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>Timeline prediction</span>
                </li>
              </ul>
            </div>

            {/* Contractor Vetting */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Smart Contractor Vetting</h3>
              <p className="text-gray-600 text-center mb-4">
                Advanced algorithms analyze contractor profiles, reviews, and project history to provide predictive
                reliability scoring and optimal matching.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  <span>Reliability scoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  <span>Automated background checks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  <span>Review analysis</span>
                </li>
              </ul>
            </div>

            {/* Personalized Recommendations */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Smart Recommendations</h3>
              <p className="text-gray-600 text-center mb-4">
                Personalized suggestions for materials, design options, and additional services based on your project
                type and preferences.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  <span>Material suggestions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  <span>Design optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  <span>Service upselling</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <Bot className="w-6 h-6" />
              <span>Experience AI-Powered Remodeling</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-30"></div>
          <div
            className="absolute top-40 right-20 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-40"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-4 h-4 bg-teal-400 rounded-full animate-bounce opacity-20"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-50"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-20 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <Image
                src="/images/app-icon.png"
                alt="Service Checkmate"
                width={80}
                height={80}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Projects?</h2>
            <p className="text-xl text-emerald-100 mb-10">
              Join thousands of homeowners and contractors using Service Checkmate to streamline their remodeling
              projects with AI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative overflow-hidden bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl text-base font-medium flex items-center space-x-4 shadow-2xl transform hover:scale-110 transition-all duration-500 hover:shadow-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Apple className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <div className="text-left relative z-10">
                <div className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            <button className="group relative overflow-hidden bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-green-400 px-8 py-4 rounded-2xl text-base font-medium flex items-center space-x-4 shadow-2xl transform hover:scale-110 transition-all duration-500 hover:shadow-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Play className="w-7 h-7 text-green-600 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <div className="text-left relative z-10">
                <div className="text-sm opacity-60 group-hover:opacity-80 transition-opacity">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-green-200/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>

          <div className="mt-12 flex justify-center items-center space-x-8 text-emerald-100">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <span>4.8 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>25K+ Downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>5K+ Projects Completed</span>
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

      {/* AI Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chatbot Button */}
        {!chatbotOpen && (
          <button
            onClick={() => setChatbotOpen(true)}
            className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300"
          >
            <Bot className="w-8 h-8 text-white" />
          </button>
        )}

        {/* Chatbot Interface */}
        {chatbotOpen && (
          <div className="w-80 sm:w-96 h-[450px] sm:h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">AI Assistant</h3>
                  <p className="text-emerald-100 text-xs sm:text-sm">Service Checkmate</p>
                </div>
              </div>
              <button
                onClick={() => setChatbotOpen(false)}
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] p-2 sm:p-3 rounded-2xl ${
                      message.sender === "user" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-xs sm:text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === "user" ? "text-emerald-100" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-2 sm:p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="p-2 sm:p-3 border-t border-gray-100">
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                <button
                  onClick={() => setInputMessage("I need help finding a contractor")}
                  className="bg-emerald-50 text-emerald-700 px-2 sm:px-3 py-1 rounded-full text-xs hover:bg-emerald-100 transition-colors"
                >
                  Find Contractor
                </button>
                <button
                  onClick={() => setInputMessage("Create a project scope")}
                  className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs hover:bg-blue-100 transition-colors"
                >
                  Create Scope
                </button>
                <button
                  onClick={() => setInputMessage("Track my project progress")}
                  className="bg-purple-50 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs hover:bg-purple-100 transition-colors"
                >
                  Track Progress
                </button>
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-2 sm:px-3 py-2 border border-gray-200 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
