import { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Privacy Policy - Best Air Fryer Recipes',
  description: 'Learn how Best Air Fryer Recipes collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
              <span className="text-2xl">🔒</span>
              <span className="text-sm font-semibold text-gray-700">Your Privacy Matters</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Privacy <span className="bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We value your privacy and are committed to protecting your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            
            <p className="text-sm text-gray-600 mt-4">
              <strong>Last Updated:</strong> October 13, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            
            {/* Quick Navigation */}
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
              <div className="flex flex-wrap gap-3">
                <a href="#information-collection" className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors">
                  Information We Collect
                </a>
                <a href="#use-of-information" className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors">
                  How We Use Information
                </a>
                <a href="#sharing" className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors">
                  Information Sharing
                </a>
                <a href="#security" className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors">
                  Data Security
                </a>
                <a href="#your-rights" className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors">
                  Your Rights
                </a>
                <a href="#cookies" className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors">
                  Cookies
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 py-12">
              <div className="prose prose-lg max-w-none">
                
                {/* Introduction */}
                <div className="mb-12">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Welcome to Air Fryer Recipes. We are committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p className="text-blue-900 font-semibold mb-2">📋 Key Points</p>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>We never sell your personal information</li>
                      <li>We use minimal data collection for essential services</li>
                      <li>You have full control over your data</li>
                      <li>We implement industry-standard security measures</li>
                    </ul>
                  </div>
                </div>

                {/* 1. Information We Collect */}
                <section id="information-collection" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Information We Collect
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We collect information to provide better services and improve your experience. Here are the types of information we may collect:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-2xl">👤</span>
                        Personal Information
                      </h3>
                      <ul className="text-gray-700 space-y-2">
                        <li><strong>Contact Details:</strong> Name, email address (when you contact us)</li>
                        <li><strong>Account Information:</strong> Username and preferences (if you create an account)</li>
                        <li><strong>Communication Records:</strong> Messages you send through our contact forms</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-2xl">📊</span>
                        Usage Data
                      </h3>
                      <ul className="text-gray-700 space-y-2">
                        <li><strong>Website Analytics:</strong> Pages visited, time spent, click patterns</li>
                        <li><strong>Device Information:</strong> Browser type, operating system, screen resolution</li>
                        <li><strong>Location Data:</strong> General geographic location (country/region level)</li>
                        <li><strong>Referral Sources:</strong> How you found our website</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-2xl">🍪</span>
                        Cookies and Tracking Technologies
                      </h3>
                      <ul className="text-gray-700 space-y-2">
                        <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand user behavior</li>
                        <li><strong>Advertising Cookies:</strong> Enable relevant ad display (with your consent)</li>
                        <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 2. Use of Information */}
                <section id="use-of-information" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    How We Use Your Information
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We use the collected information responsibly and transparently. Here are our primary purposes:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                        <span>🔧</span>
                        Service Provision
                      </h3>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>Process your recipe requests</li>
                        <li>Send newsletter updates</li>
                        <li>Respond to customer inquiries</li>
                        <li>Provide personalized content</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                        <span>📈</span>
                        Website Analytics
                      </h3>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>Understand user preferences</li>
                        <li>Improve website performance</li>
                        <li>Optimize content delivery</li>
                        <li>Enhance user experience</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
                        <span>📢</span>
                        Marketing & Communication
                      </h3>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>Send relevant recipe updates</li>
                        <li>Display personalized ads</li>
                        <li>Promote new features</li>
                        <li>Share cooking tips</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-orange-900 mb-3 flex items-center gap-2">
                        <span>⚖️</span>
                        Legal Compliance
                      </h3>
                      <ul className="text-orange-800 text-sm space-y-1">
                        <li>Comply with legal requirements</li>
                        <li>Protect our rights</li>
                        <li>Prevent fraud</li>
                        <li>Ensure security</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 3. Information Sharing */}
                <section id="sharing" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Information Sharing
                  </h2>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                    <p className="text-red-900 font-bold text-lg mb-2">🚫 We Never Sell Your Data</p>
                    <p className="text-red-800">
                      We do not sell, trade, or rent your personal information to third parties for marketing purposes.
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    We may share your information only in these limited circumstances:
                  </p>

                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-2xl">🤝</span>
                        Trusted Service Providers
                      </h3>
                      <p className="text-gray-700 mb-3">
                        We work with carefully selected partners who help us operate our website:
                      </p>
                      <ul className="text-gray-700 space-y-2 ml-4">
                        <li><strong>Google Analytics:</strong> Website traffic analysis</li>
                        <li><strong>Email Service Providers:</strong> Newsletter delivery</li>
                        <li><strong>Hosting Services:</strong> Website infrastructure</li>
                        <li><strong>CDN Providers:</strong> Content delivery optimization</li>
                      </ul>
                      <p className="text-sm text-gray-600 mt-3">
                        All partners are bound by strict confidentiality agreements and can only use your data for the specific services they provide.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-2xl">⚖️</span>
                        Legal Requirements
                      </h3>
                      <p className="text-gray-700">
                        We may disclose information when required by law, to protect our rights, or to ensure the safety of our users.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-2xl">🔄</span>
                        Business Transfers
                      </h3>
                      <p className="text-gray-700">
                        In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the business transaction.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 4. Data Security */}
                <section id="security" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Data Security
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We implement comprehensive security measures to protect your personal information:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                        <span>🔐</span>
                        Technical Safeguards
                      </h3>
                      <ul className="text-green-800 text-sm space-y-2">
                        <li>SSL encryption for data transmission</li>
                        <li>Secure servers and databases</li>
                        <li>Regular security updates</li>
                        <li>Access controls and monitoring</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                        <span>👥</span>
                        Organizational Measures
                      </h3>
                      <ul className="text-blue-800 text-sm space-y-2">
                        <li>Staff training on data protection</li>
                        <li>Limited access to personal data</li>
                        <li>Regular security audits</li>
                        <li>Incident response procedures</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p className="text-yellow-900 font-semibold mb-2">⚠️ Important Notice</p>
                    <p className="text-yellow-800 text-sm">
                      While we implement industry-standard security measures, no method of transmission over the internet or electronic storage is 100% secure. 
                      We cannot guarantee absolute security, but we continuously work to improve our security practices.
                    </p>
                  </div>
                </section>

                {/* 5. Your Rights */}
                <section id="your-rights" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    Your Privacy Rights
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You have control over your personal information. Depending on your location, you may have the following rights:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-green-500">👁️</span>
                        Right of Access
                      </h3>
                      <p className="text-gray-600 text-sm">Request access to the personal information we hold about you</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-blue-500">✏️</span>
                        Right to Rectification
                      </h3>
                      <p className="text-gray-600 text-sm">Request correction of inaccurate or incomplete information</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-red-500">🗑️</span>
                        Right to Erasure
                      </h3>
                      <p className="text-gray-600 text-sm">Request deletion of your personal information</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-orange-500">⏸️</span>
                        Right to Restrict Processing
                      </h3>
                      <p className="text-gray-600 text-sm">Request limitation of how we process your data</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-purple-500">📤</span>
                        Right to Data Portability
                      </h3>
                      <p className="text-gray-600 text-sm">Request transfer of your data to another service</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-indigo-500">🚫</span>
                        Right to Withdraw Consent
                      </h3>
                      <p className="text-gray-600 text-sm">Withdraw consent for data processing at any time</p>
                    </div>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-bold text-primary-900 mb-3">How to Exercise Your Rights</h3>
                    <p className="text-primary-800 mb-4">
                      To exercise any of these rights, please contact us using the information provided at the bottom of this page. 
                      We will respond to your request within 30 days.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                      >
                        <span>Contact Us</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </section>

                {/* 6. Cookies */}
                <section id="cookies" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                    Cookies and Tracking Technologies
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We use cookies and similar technologies to enhance your browsing experience and analyze website traffic:
                  </p>

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Essential Cookies
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Required for basic website functionality. These cannot be disabled as they are necessary for the site to work properly.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-blue-500">📊</span>
                        Analytics Cookies
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Help us understand how visitors interact with our website by collecting anonymous information about usage patterns.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-orange-500">📢</span>
                        Advertising Cookies
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Enable us to display relevant advertisements and measure ad effectiveness. You can opt-out of these cookies.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-purple-500">⚙️</span>
                        Preference Cookies
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Remember your settings and preferences to provide a personalized experience on future visits.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Managing Cookies</h3>
                    <p className="text-gray-700 mb-4">
                      You can control and manage cookies through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="text-gray-700 space-y-2 ml-4">
                      <li>View and delete existing cookies</li>
                      <li>Block cookies from specific websites</li>
                      <li>Block third-party cookies</li>
                      <li>Clear all cookies when you close your browser</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                      <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
                    </p>
                  </div>
                </section>

                {/* 7. Third-Party Links */}
                <section className="mb-12">
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
                    Third-Party Websites
                  </h2>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <p className="text-gray-700 leading-relaxed">
                      Our website may contain links to third-party websites, including social media platforms and affiliate partners. 
                      We are not responsible for the privacy practices or content of these external sites.
                    </p>
                    <p className="text-gray-700 mt-4">
                      We encourage you to review the privacy policies of any third-party websites you visit through our links.
                    </p>
                  </div>
                </section>

                {/* 8. Policy Updates */}
                <section className="mb-12">
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
                    Updates to This Policy
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
                    When we make significant changes, we will:
                  </p>
                  
                  <ul className="text-gray-700 space-y-2 ml-4 mb-6">
                    <li>Post the updated policy on this page</li>
                    <li>Update the "Last Updated" date</li>
                    <li>Notify users via email (if we have your contact information)</li>
                    <li>Display a prominent notice on our website</li>
                  </ul>
                  
                  <p className="text-gray-700">
                    We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                  </p>
                </section>

                {/* Contact Information */}
                <section className="bg-gradient-to-r from-primary-50 to-orange-50 rounded-2xl p-8 border border-primary-100">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">📧 Email</h3>
                      <p className="text-gray-700">{siteConfig.privacyEmail}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">📝 Contact Form</h3>
                      <Link 
                        href="/contact" 
                        className="text-primary-600 hover:text-primary-700 font-semibold"
                      >
                        Visit our Contact Page
                      </Link>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-primary-200">
                    <p className="text-sm text-gray-600">
                      We will respond to all privacy-related inquiries within 30 days of receipt.
                    </p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

