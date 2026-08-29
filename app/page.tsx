export default function Page() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.stripeassets.com/fzn2n1nzq965/115d4Vd5LVAsqFGDR1ClAv/0ceb2c44a7a7182cd624262420af7544/wave-fallback-desktop.png" 
            alt="" 
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              <em className="not-italic text-[#635bff]">Financial infrastructure to grow your revenue.</em>{' '}
              <span className="text-gray-700">Accept payments, offer financial services, and implement custom revenue models—from your first transaction to your billionth.</span>
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-[#635bff] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5851db] transition-colors"
              >
                Get started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 12 12">
                  <path fill="#4285f4" d="M11.8846 4.91113H6.11987v2.31403h3.30546c-.06676.36934-.20976.72135-.42019 1.03438s-.48385.58047-.80343.78585V10.551h1.96699c.6038-.57079 1.0787-1.2598 1.394-2.02239.4722-1.14225.5273-2.4075.3219-3.61748"></path>
                  <path fill="#34a853" d="M6.11985 12c1.64722 0 3.04228-.5278 4.04885-1.449L8.20168 9.0454c-.61936.39256-1.34496.59231-2.08183.5731-.76295-.00928-1.50387-.25249-2.11917-.69564-.61531-.44314-1.07424-1.06406-1.31264-1.77595H.652344v1.53908C1.16135 9.68188 1.9422 10.5192 2.90769 11.1044c.9655.5852 2.07762.8953 3.21216.8956"></path>
                  <path fill="#fbbc04" d="M2.68809 7.14693c-.25717-.74696-.25717-1.55625 0-2.30321v-1.5499H.652386c-.427544.83671-.65018873 1.75993-.65018873 2.6961S.224842 7.84931.652386 8.68602z"></path>
                  <path fill="#ea4335" d="M6.11985 2.37211c.87133-.0146 1.71351.30816 2.34449.89853l1.75046-1.71879C9.51693.932184 8.68295.478902 7.77771.227229 6.87246-.0244442 5.92032-.0677314 4.99527.100731c-.92505.168462-1.79809.544137-2.5513 1.097839-.75321.55369-1.3663 1.2705-1.791626 2.09473L2.68804 4.84371c.2384-.71189.69733-1.33281 1.31264-1.77595.6153-.44315 1.35622-.68636 2.11917-.69565"></path>
                </svg>
                Sign up with Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Solutions Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Flexible solutions for every business model.
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Grow your business with a comprehensive set of payments and financial tools⁠—⁠designed to work individually or together.
          </p>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Grow your business with the most comprehensive set of payments and financial tools.
          </p>
        </div>
      </section>

      {/* Backbone of Global Commerce Section */}
      <section className="py-20 px-6 bg-[#0a2540] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            The backbone of global commerce
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#635bff] mb-2">135+</div>
              <p className="text-gray-300 text-sm">currencies and payment methods supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#635bff] mb-2">$1.9T</div>
              <p className="text-gray-300 text-sm">in payments volume processed in 2025</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#635bff] mb-2">99.999%</div>
              <p className="text-gray-300 text-sm">historical uptime for Stripe services</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#635bff] mb-2">200M+</div>
              <p className="text-gray-300 text-sm">active subscriptions managed on Stripe Billing</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.stripeassets.com/fzn2n1nzq965/63zO5Z4CABvFl3pLLhnu3l/a9c12c883f820dc29d29fa0b9dcb0814/DatavizStatic3x.png?w=768&q=90" 
              alt="Data visualization" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Powering Businesses Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Powering businesses of all sizes.
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16">
            Run your business on a reliable platform that adapts to your needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hertz Card */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <img 
                src="https://images.stripeassets.com/fzn2n1nzq965/24BNV3GGtvCprFLrYovyaa/b2eac20a1d5ec75e4bff3888b998d163/enterprise-accordion-hertz.png?w=296&q=90" 
                alt="Hertz" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex gap-8 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-[#635bff]">160</div>
                    <p className="text-sm text-gray-600">countries</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#635bff]">11K+</div>
                    <p className="text-sm text-gray-600">locations globally</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Products used</p>
                <p className="text-sm text-gray-700">Payments, Terminal, Connect, Radar, and Stripe Sigma</p>
              </div>
            </div>

            {/* URBN Card */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <img 
                src="https://images.stripeassets.com/fzn2n1nzq965/vYmk6v8n7oDAwbDpwhjV6/846f9b3e214549b8f14e2b8c8cfe9343/payment-bento-background.jpg?w=860&q=80" 
                alt="Retail boutique" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex gap-8 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-[#635bff]">5+</div>
                    <p className="text-sm text-gray-600">consumer brands in retailer portfolio</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#635bff]">700+</div>
                    <p className="text-sm text-gray-600">store locations</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Products used</p>
                <p className="text-sm text-gray-700">Payments, Terminal, Connect, Stripe Sigma, Radar, and Link</p>
              </div>
            </div>

            {/* Instacart Card */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <img 
                src="https://images.stripeassets.com/fzn2n1nzq965/m9HBEK464p46FeNIhs2PV/f5054a93c8a0a6aabdd1c47675d610ae/wave_crop.jpg?w=296&q=80" 
                alt="Grocery delivery" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex gap-8 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-[#635bff]">600K+</div>
                    <p className="text-sm text-gray-600">shoppers</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#635bff]">1.8K</div>
                    <p className="text-sm text-gray-600">retail partners across nearly 100K stores</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Products used</p>
                <p className="text-sm text-gray-700">Payments, Connect, Data Pipeline, and Issuing</p>
              </div>
            </div>

            {/* Le Monde Card */}
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <img 
                src="https://images.stripeassets.com/fzn2n1nzq965/3NcSrMqMgaKe75QNr8wZI8/46d520dfc48c5b9f1c59dcde9460b58c/connect-bento-card-background-image.jpg?w=1232&q=90" 
                alt="Parisian kiosk" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex gap-8 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-[#635bff]">100%</div>
                    <p className="text-sm text-gray-600">of digital and print payments powered by Stripe</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Less than 3 months to implement and go live</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Products used</p>
                <p className="text-sm text-gray-700">Payments, Stripe Sigma, and Radar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            Realize value faster with dedicated experts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Professional services.</h3>
              <p className="text-gray-600">
                Get tailored guidance from Stripe on implementation, complex integrations, or major migrations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Stripe-certified experts.</h3>
              <p className="text-gray-600">
                Work with a Stripe consulting partner that can integrate and deploy Stripe solutions on your behalf.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Support plans.</h3>
              <p className="text-gray-600">
                Receive ongoing assistance and day-to-day support for technical questions with tiered plans based on your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.stripeassets.com/fzn2n1nzq965/43eqkFV1GG5GqcbNNeEzVp/8f4705b1b80a4c835c2960ed8055d649/ConnectMobileBackground.jpg?w=296&q=90" 
                alt="Platform graphic" 
                className="w-full rounded-xl"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Get to market faster.</h3>
                <p className="text-gray-600">
                  Launch and scale payments products with lower operational overhead using embedded components and no-code tools.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Grow new lines of revenue.</h3>
                <p className="text-gray-600">
                  Monetize platform transactions—including payments, card interchange, and financing fees.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Manage platform risk.</h3>
                <p className="text-gray-600">
                  Stay ahead of global regulations with tools for compliance, credit risk, fraud prevention, and account security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-6 text-sm">
                With Stripe, we have a global technology partner to help our customers—from Canadian yoga studios to British boxing classes—keep growing and evolving in a new wellness world.
              </p>
              <a href="#" className="text-[#635bff] text-sm font-medium hover:underline">Read the story →</a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-4 text-sm">
                Without Stripe, it would have taken significant time and engineering effort to offer these resources to our customers. The financial infrastructure Stripe offers is incredibly valuable to Jobber, and we look forward to seeing what comes next.
              </p>
              <p className="text-xs text-gray-500 mb-4">Laura Collinson, Director of Fintech, Jobber</p>
              <a href="#" className="text-[#635bff] text-sm font-medium hover:underline">Read the story →</a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-4 text-sm">
                Stripe makes the subscriptions and payment piece really easy for everyone involved. And that helps us make it easy for writers and other creators to do the work they want to do on Substack and get paid for it.
              </p>
              <p className="text-xs text-gray-500 mb-4">Seth McMillan, Engineering Manager, Substack</p>
              <a href="#" className="text-[#635bff] text-sm font-medium hover:underline">Read the story →</a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-4 text-sm">
                Stripe offers an enterprise-grade infrastructure that puts our customers on the cutting edge of modern payments technology. The combination of Terminal and Connect is a powerful integrated solution.
              </p>
              <p className="text-xs text-gray-500 mb-4">Dax Dasilva, Founder and CEO, Lightspeed</p>
              <a href="#" className="text-[#635bff] text-sm font-medium hover:underline">Read the story →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 px-6 bg-[#0a2540] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Reliable, extensible infrastructure for every stack.
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16">
            Adapt Stripe to your business needs with flexible integration options.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Connect to existing systems.</h3>
              <p className="text-gray-300">
                Orchestrate payments across multiple processors, build custom workflows, and connect to third parties using APIs, partner apps, or prebuilt integrations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Scale with confidence.</h3>
              <p className="text-gray-300 mb-6">
                Handle thousands of transactions per second with consistent speed and reliability, even during peak traffic periods.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-[#635bff]">500M+</div>
                  <p className="text-sm text-gray-400">API requests per day</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#635bff]">10K+</div>
                  <p className="text-sm text-gray-400">API requests per second</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#635bff]">150K+</div>
                  <p className="text-sm text-gray-400">transactions per minute</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">Choose an integration path.</h3>
            <p className="text-gray-300 mb-8">
              With AI-powered support, rich documentation, and built-in debugging tools, you can quickly get started with the best option for your business.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1a3a5c] p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-3">Don't code?</h4>
                <p className="text-gray-300 text-sm">
                  Set up billing, take in-person payments, or share a payment link—right from the Stripe Dashboard, no code required.
                </p>
              </div>
              <div className="bg-[#1a3a5c] p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-3">Use a pre-integrated platform.</h4>
                <p className="text-gray-300 text-sm">
                  Browse our directory of platforms that integrate Stripe with website-building tools.
                </p>
              </div>
              <div className="bg-[#1a3a5c] p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-3">Build your own integration.</h4>
                <p className="text-gray-300 text-sm">
                  Use our SDKs, APIs, MCP server, and AI developer tools to build and maintain your own integration with Stripe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Report Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Businesses on Stripe generated $1.9T in 2025.
              </h2>
              <p className="text-gray-600 mb-6">
                Our annual letter explores the trends defining the internet economy—including steeper growth for newer businesses, faster international expansion, stablecoin progress, agentic commerce, and more.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#635bff] font-medium hover:underline">
                Read the letter
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div>
              <img 
                src="https://images.stripeassets.com/fzn2n1nzq965/2YFdgdFPeIiDpmQbhHPAx8/186752498bf713fea245f31bcec84f8a/sessions-2026-on-demand-bg.png?w=296&q=90" 
                alt="Annual report" 
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Book of the Week Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Book of the week</h3>
          <p className="text-xl text-gray-700 mb-4">Entrepreneurship starts with ideas.</p>
          <p className="text-gray-600">
            For more ideas on economic progress and technological advancement, see our in-house publications:
          </p>
        </div>
      </section>
    </div>
  );
}