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
