/**
 * Site configuration and content data.
 * Edit these values to customize the template for your SaaS product.
 */

export const siteConfig = {
  name: 'ShipFree',
  tagline: 'Turn ideas into products, fast',
  description:
    'A production-ready Next.js boilerplate with auth, payments, and everything you need to launch fast.',
  url: 'https://shipfree.app',
  logo: '/image.png',
  repo: 'TheSethRose/ShipFree',
  supportEmail: 'support@shipfree.app',
} as const

export const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'FAQ', href: '/#faq' },
] as const

export const heroData = {
  headline: 'Ship your startup in days, not weeks',
  subheadline:
    'A modern boilerplate that saves you weeks of setup so you can spend time building features that actually make money.',
  primaryCta: { label: 'Get Started', href: '/register' },
  secondaryCta: { label: 'Try demo', href: '/dashboard' },
} as const

export const logoCloudData = {
  label: 'TRUSTED BY DEVELOPERS AT',
  logos: [
    { name: 'Vercel', src: '/stack-icons/vercel.svg' },
    { name: 'Stripe', src: '/stack-icons/stripe.svg' },
    { name: 'Tailwind', src: '/stack-icons/tailwindcss.svg' },
    { name: 'TypeScript', src: '/stack-icons/typescript.svg' },
    { name: 'Bun', src: '/stack-icons/bun.svg' },
  ],
} as const

export const problemData = {
  label: 'THE PROBLEM',
  headline: 'Building a startup should not take months',
  description:
    'Every founder wastes weeks wiring together auth, payments, emails, and deployment. Time that should be spent on product, spent on plumbing.',
  painPoints: [
    { title: 'Weeks of setup', description: 'Auth, database, payments, emails — each takes days to configure.' },
    { title: 'Decision fatigue', description: 'Which stack? Which provider? Which pattern? The options are endless.' },
    { title: 'Reinventing the wheel', description: 'You build the same login flow, the same billing page, the same dashboard every time.' },
  ],
} as const

export const solutionData = {
  label: 'THE SOLUTION',
  headline: 'A complete starter kit, ready to ship',
  description:
    'ShipFree gives you a production-ready foundation with all the essentials pre-configured. Skip the setup. Start building.',
  benefits: [
    { title: 'Launch in hours', description: 'Clone, configure env vars, deploy. Your landing page and auth are live the same day.' },
    { title: 'Battle-tested stack', description: 'Next.js, Drizzle, Better Auth, Stripe — chosen for performance and maintainability.' },
    { title: 'Grow without rewriting', description: 'Built-in i18n, multi-provider payments, and role-based access from day one.' },
  ],
} as const

export const featuresData = {
  label: 'FEATURES',
  title: 'Everything you need to ship fast',
  description:
    'Stop wrestling with config files. Start building your product with battle-tested tools.',
  features: [
    {
      title: 'Authentication',
      description:
        'Built-in auth with Better Auth. Social logins, email verification, and session management ready to go.',
      icon: '/stack-icons/better-auth.svg',
    },
    {
      title: 'Payments',
      description:
        'Stripe, Polar, and Lemon Squeezy integrations. Subscriptions, one-time payments, and webhooks configured.',
      icon: '/stack-icons/stripe.svg',
    },
    {
      title: 'Database',
      description:
        'Drizzle ORM with PostgreSQL. Migrations, relations, and type-safe queries out of the box.',
      icon: '/stack-icons/drizzle-orm.svg',
    },
    {
      title: 'UI Components',
      description:
        'Beautiful, accessible components built with Base UI. Dark mode, animations, and responsive design.',
      icon: '/stack-icons/tailwindcss.svg',
    },
    {
      title: 'Emails',
      description:
        'Multi-provider email support. Resend, Postmark, Plunk, and Nodemailer ready to configure.',
      icon: '/stack-icons/resend.svg',
    },
    {
      title: 'Internationalization',
      description:
        'Multi-language support with next-intl. English, French, and Spanish out of the box.',
      icon: '/stack-icons/vercel.svg',
    },
  ],
} as const

export const featureShowcaseData = {
  label: 'WHY SHIPFREE',
  title: 'Built for founders who ship',
  description: 'Every detail is designed to get you from idea to product faster.',
  showcases: [
    {
      title: 'Type-safe from the ground up',
      description: 'Drizzle ORM gives you fully typed database queries. No more guessing column names or debugging SQL at runtime.',
      icon: '/stack-icons/typescript.svg',
    },
    {
      title: 'Auth that just works',
      description: 'Better Auth handles OAuth, email/password, magic links, and session management with minimal configuration.',
      icon: '/stack-icons/better-auth.svg',
    },
    {
      title: 'Payments out of the box',
      description: 'Stripe Checkout, customer portals, and webhook handling are wired up and ready for your pricing plans.',
      icon: '/stack-icons/stripe.svg',
    },
    {
      title: 'Emails that convert',
      description: 'Multi-provider email with React Email templates. Welcome flows, password resets, and transactional emails — all pre-built.',
      icon: '/stack-icons/resend.svg',
    },
    {
      title: 'Global from day one',
      description: 'next-intl handles routing, translations, and locale switching. Support multiple languages without rebuilding your app.',
      icon: '/stack-icons/vercel.svg',
    },
  ],
} as const

export const howItWorksData = {
  label: 'HOW IT WORKS',
  title: 'From zero to live in three steps',
  steps: [
    { number: '01', title: 'Clone the repo', description: 'One command to get the full codebase with all dependencies.' },
    { number: '02', title: 'Configure env vars', description: 'Add your Stripe keys, database URL, and auth secrets.' },
    { number: '03', title: 'Deploy', description: 'Push to Vercel or your host of choice. Your product is live.' },
  ],
} as const

export const useCasesData = {
  label: 'USE CASES',
  title: 'Built for any SaaS product',
  cases: [
    { title: 'Developer Tools', description: 'Launch CLI tools, APIs, and dev platforms with built-in auth and billing.' },
    { title: 'Marketplaces', description: 'Connect buyers and sellers with payments, roles, and transaction emails.' },
    { title: 'Content Platforms', description: 'Build subscription-based newsletters, courses, or communities.' },
    { title: 'AI Products', description: 'Ship AI-powered apps with credit-based billing and usage tracking.' },
  ],
} as const

export const statsData = {
  label: 'BY THE NUMBERS',
  stats: [
    { value: '100+', label: 'Hours saved' },
    { value: '3', label: 'Minutes to deploy' },
    { value: '6', label: 'Payment providers' },
    { value: '∞', label: 'Projects you can build' },
  ],
} as const

export const testimonialsData = {
  label: 'WALL OF LOVE',
  title: 'Loved by indie hackers',
  testimonials: [
    {
      quote: 'ShipFree saved me two weeks of setup. I had auth and payments working on day one.',
      author: 'Alex Chen',
      role: 'Indie Hacker',
      avatar: '/testimonial-image1.jpg',
    },
    {
      quote: 'The best Next.js boilerplate I have used. Clean code, great DX, and it actually works.',
      author: 'Sarah Kim',
      role: 'Founder, SaaSify',
      avatar: '/testimonial-image2.png',
    },
    {
      quote: 'I shipped my MVP in a weekend instead of a month. This template is a game changer.',
      author: 'Marcus Johnson',
      role: 'Solo Founder',
      avatar: '/testimonial-image3.png',
    },
  ],
} as const

export const pricingData = {
  label: 'PRICING',
  title: 'Free forever. Upgrade when you need more.',
  description: 'Start with the full open-source boilerplate. No credit card required.',
  tiers: [
    {
      name: 'Community',
      price: 'Free',
      description: 'Everything you need to build and launch.',
      features: [
        'Full Next.js boilerplate',
        'Auth, payments & UI prewired',
        'Built-in SEO',
        'Resend transaction emails',
        'Payments via Stripe / Polar / Lemon Squeezy',
        'MIT open-source license',
      ],
      cta: { label: 'Get Started', href: '/register' },
      highlighted: true,
    },
  ],
} as const

export const faqData = {
  label: 'FAQ',
  title: 'Frequently Asked Questions',
  description: 'Have another question? Reach out and we will get back to you.',
  questions: [
    { question: "What's included in the free version?", answer: 'Everything you need to build: a full Next.js boilerplate with auth, payments, UI, SEO, and transactional emails. Free forever under the MIT license.' },
    { question: 'Can I use it for commercial products?', answer: 'Yes — you can use it to build and sell your own projects. The MIT license gives you full freedom.' },
    { question: 'What if I find a bug or issue?', answer: 'Open an issue on GitHub or drop it in the community. We fix bugs fast and ship regular updates.' },
    { question: 'How often do you ship updates?', answer: 'Bug fixes and small updates drop regularly. The boilerplate keeps up with the latest Next.js and ecosystem releases.' },
    { question: 'Do I need to know TypeScript?', answer: 'Yes, the template is fully typed. If you know JavaScript, TypeScript will feel familiar quickly.' },
    { question: 'Can I deploy anywhere?', answer: 'Absolutely. Vercel is the easiest, but the template works on any host that supports Next.js.' },
  ],
} as const

export const ctaData = {
  label: 'GET STARTED',
  title: 'Your next product could be live by tonight.',
  description: 'Focus on growth while the stack takes care of the heavy lifting.',
  primaryCta: { label: 'Get Started', href: '/register' },
  secondaryCta: { label: 'Try demo', href: '/dashboard' },
} as const

export const footerData = {
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/#features' },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'Changelog', href: '/changelog' },
        { label: 'Demo', href: '/dashboard' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Docs', href: '/docs' },
        { label: 'Support', href: '/support' },
        { label: 'GitHub', href: `https://github.com/${siteConfig.repo}`, external: true },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms', href: '/terms' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Licenses', href: '/licenses' },
      ],
    },
  ],
} as const
