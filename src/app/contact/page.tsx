'use client'

import Link from 'next/link'

export default function ContactPage() {
  return (
    <section className="py-12">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">Contact</h1>
        <p className="text-gray-600 mb-8">
          Have questions or suggestions? I'd love to hear from you. Send me an email and I'll get back within 2-3 business days.
        </p>
        <div className="bg-white rounded-xl shadow border border-gray-200 p-6 space-y-4">
          <div>
            <div className="text-sm text-gray-500">Creator & Developer</div>
            <div className="text-lg font-semibold">MartinD</div>
            <div className="text-sm text-gray-500 mt-1">842646990@qq.com</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">General inquiries</div>
            <div className="text-lg font-semibold">842646990@qq.com</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Privacy requests</div>
            <div className="text-lg font-semibold">842646990@qq.com</div>
          </div>
          <div className="pt-2">
            <Link href="/privacy" className="text-primary-600 hover:text-primary-700 font-semibold">
              View our Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


