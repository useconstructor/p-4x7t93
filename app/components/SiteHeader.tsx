"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

const productsDropdown = [
  { label: 'Payments', href: '/payments', description: 'Online payments' },
  { label: 'Checkout', href: '/payments/checkout-button', description: 'Prebuilt payment form' },
  { label: 'Elements', href: '/payments/payment-element', description: 'Customizable payments UI' },
  { label: 'Payment Links', href: '/payments/payment-links', description: 'No-code payments' },
  { label: 'Radar', href: '/radar', description: 'Fraud prevention' },
  { label: 'Connect', href: '/connect', description: 'Payments for platforms' },
  { label: 'Billing', href: '/billing', description: 'Subscriptions and invoicing' },
  { label: 'Invoicing', href: '/invoicing', description: 'Online invoices' },
  { label: 'Terminal', href: '/terminal', description: 'In-person payments' },
  { label: 'Financial Connections', href: '/financial-connections', description: 'Linked financial accounts' },
  { label: 'Identity', href: '/identity', description: 'Identity verification' },
  { label: 'Atlas', href: '/atlas', description: 'Startup incorporation' },
  { label: 'Climate', href: '/climate', description: 'Carbon removal' },
]

const solutionsDropdown = [
  { label: 'Startups', href: '/startups' },
  { label: 'Enterprises', href: '/enterprise' },
  { label: 'SaaS', href: '/use-cases/saas' },
  { label: 'Platforms', href: '/use-cases/platforms' },
  { label: 'Ecommerce', href: '/use-cases/ecommerce' },
  { label: 'Marketplaces', href: '/use-cases/marketplaces' },
  { label: 'Crypto', href: '/use-cases/crypto' },
  { label: 'Creator Economy', href: '/use-cases/creator-economy' },
  { label: 'Embedded Finance', href: '/use-cases/embedded-finance' },
  { label: 'Global Businesses', href: '/use-cases/global-businesses' },
  { label: 'Finance Automation', href: '/use-cases/finance-automation' },
]

const developersDropdown = [
  { label: 'Documentation', href: 'https://docs.stripe.com' },
  { label: 'API Reference', href: 'https://docs.stripe.com/api' },
  { label: 'API Status', href: 'https://status.stripe.com' },
  { label: 'API Changelog', href: 'https://docs.stripe.com/changelog' },
  { label: 'Build a Stripe App', href: 'https://docs.stripe.com/stripe-apps' },
]

const resourcesDropdown = [
  { label: 'Support Center', href: '/support' },
  { label: 'Support Plans', href: '/support-plans' },
  { label: 'Guides', href: '/guides' },
  { label: 'Customer Stories', href: '/customers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Annual Conference', href: '/sessions' },
  { label: 'Contact Sales', href: '/contact/sales' },
  { label: 'Partners', href: '/partners' },
  { label: 'Newsroom', href: '/newsroom' },
  { label: 'Jobs', href: '/jobs' },
]

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleDropdownClick = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName)
  }

  const closeDropdown = () => {
    setOpenMenu(null)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                src="https://images.stripeassets.com/fzn2n1nzq965/24BNV3GGtvCprFLrYovyaa/b2eac20a1d5ec75e4bff3888b998d163/enterprise-accordion-hertz.png?w=296&q=90"
                alt="Stripe | Financial Infrastructure to Grow Your Revenue"
                className="h-8 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center ml-10 space-x-1">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownClick('products')}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Products
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openMenu === 'products' ? 'rotate-180' : ''}`} />
                </button>
                {openMenu === 'products' && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-md z-50 min-w-52 py-2">
                    {productsDropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <span className="font-medium">{item.label}</span>
                        {item.description && (
                          <span className="block text-xs text-gray-500">{item.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownClick('solutions')}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Solutions
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openMenu === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {openMenu === 'solutions' && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-md z-50 min-w-52 py-2">
                    {solutionsDropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownClick('developers')}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Developers
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openMenu === 'developers' ? 'rotate-180' : ''}`} />
                </button>
                {openMenu === 'developers' && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-md z-50 min-w-52 py-2">
                    {developersDropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownClick('resources')}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Resources
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openMenu === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {openMenu === 'resources' && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-md z-50 min-w-52 py-2">
                    {resourcesDropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact/sales"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact sales
            </Link>
            <Link
              href="https://dashboard.stripe.com/login"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="https://dashboard.stripe.com/register"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-full transition-colors"
              style={{ backgroundColor: '#635bff' }}
            >
              Start now
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
            <div className="border-b border-gray-100 pb-2">
              <button
                type="button"
                onClick={() => handleDropdownClick('products-mobile')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === 'products-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === 'products-mobile' && (
                <div className="ml-4 mt-1 space-y-1">
                  {productsDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => { closeDropdown(); setMobileMenuOpen(false); }}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-100 pb-2">
              <button
                type="button"
                onClick={() => handleDropdownClick('solutions-mobile')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === 'solutions-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === 'solutions-mobile' && (
                <div className="ml-4 mt-1 space-y-1">
                  {solutionsDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => { closeDropdown(); setMobileMenuOpen(false); }}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-100 pb-2">
              <button
                type="button"
                onClick={() => handleDropdownClick('developers-mobile')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Developers
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === 'developers-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === 'developers-mobile' && (
                <div className="ml-4 mt-1 space-y-1">
                  {developersDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => { closeDropdown(); setMobileMenuOpen(false); }}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-100 pb-2">
              <button
                type="button"
                onClick={() => handleDropdownClick('resources-mobile')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === 'resources-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === 'resources-mobile' && (
                <div className="ml-4 mt-1 space-y-1">
                  {resourcesDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => { closeDropdown(); setMobileMenuOpen(false); }}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Pricing
            </Link>

            <Link
              href="/contact/sales"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Contact sales
            </Link>

            <Link
              href="https://dashboard.stripe.com/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Sign in
            </Link>

            <div className="pt-2">
              <Link
                href="https://dashboard.stripe.com/register"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2 text-sm font-medium text-white rounded-full"
                style={{ backgroundColor: '#635bff' }}
              >
                Start now
              </Link>
            </div>
          </div>
        </div>
      )}

      {openMenu && (
        <div
          className="fixed inset-0 z-40 hidden lg:block"
          onClick={closeDropdown}
        />
      )}
    </header>
  )
}