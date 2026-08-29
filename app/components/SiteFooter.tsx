import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Sign in', href: '/' },
    { label: 'Contact sales', href: '/contact/sales' },
    { label: 'Products', href: '/' },
    { label: 'Solutions', href: '/' },
    { label: 'Developers', href: '/' },
    { label: 'Resources', href: '/' },
  ]

  const languageLinks = [
    { label: 'English (US)', href: '/' },
    { label: 'Español', href: '/es-us' },
    { label: '中文', href: '/zh-us' },
    { label: 'العربية', href: '/ae' },
  ]

  const footerSections = [
    {
      title: 'Products',
      links: [
        { label: 'Payments', href: '/' },
        { label: 'Billing', href: '/' },
        { label: 'Connect', href: '/' },
        { label: 'Terminal', href: '/' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Enterprise', href: '/' },
        { label: 'Startups', href: '/' },
        { label: 'SaaS', href: '/' },
        { label: 'E-commerce', href: '/' },
      ],
    },
    {
      title: 'Developers',
      links: [
        { label: 'Documentation', href: '/' },
        { label: 'API Reference', href: '/' },
        { label: 'SDKs', href: '/' },
        { label: 'MCP Server', href: '/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Customer Stories', href: '/' },
        { label: 'Annual Letter', href: '/' },
        { label: 'Support', href: '/' },
        { label: 'Blog', href: '/' },
      ],
    },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-700">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img
              src="https://images.stripeassets.com/fzn2n1nzq965/24BNV3GGtvCprFLrYovyaa/b2eac20a1d5ec75e4bff3888b998d163/enterprise-accordion-hertz.png?w=296&amp;q=90"
              alt="Stripe | Financial Infrastructure to Grow Your Revenue"
              className="h-8 w-auto"
            />
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Financial infrastructure to grow your revenue. Reliable, extensible infrastructure for every stack.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://twitter.com/stripe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/stripe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/stripe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@stripe.com"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="py-8 border-b border-slate-700">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
            <span>© {currentYear} Stripe, Inc.</span>
            <a href="/" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {languageLinks.map((lang) => (
              <a
                key={lang.label}
                href={lang.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {lang.label}
              </a>
            ))}
          </div>
        </div>

        {/* Highlight Section */}
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm">
            Businesses on Stripe generated{' '}
            <span className="text-white font-semibold">$1.9T in 2025</span>.{' '}
            <a
              href="https://stripe.com/annual-updates/2025"
              className="text-indigo-400 hover:text-indigo-300 underline transition-colors"
            >
              Read our annual letter
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}