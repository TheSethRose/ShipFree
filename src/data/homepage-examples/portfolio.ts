export const portfolioHomepageExample = {
  name: 'Portfolio',
  description: 'A work-first homepage for a developer, designer, consultant, or creative professional.',
  navLinks: [
    { label: 'Work', href: '#work' },
    { label: 'Case studies', href: '#case-studies' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Independent product builder',
    title: 'I design and build useful software for real business problems.',
    description:
      'A portfolio homepage for developers, designers, and consultants who want to show shipped work, not just list skills.',
    location: 'Remote / US-based',
    role: 'Product engineer',
    focus: 'SaaS, automation, and internal tools',
    availability: 'Available for select projects',
    primaryCta: { label: 'View selected work', href: '#work' },
    secondaryCta: { label: 'Contact me', href: '#contact' },
    knownFor: [
      'Clean product UX',
      'Production-ready builds',
      'Fast technical discovery',
    ],
  },
  projects: [
    {
      title: 'Client Portal Redesign',
      type: 'Product UX / Frontend',
      description:
        'Reworked a confusing client portal into a task-focused dashboard with clearer navigation and faster status visibility.',
      role: 'UX direction, React implementation',
      stack: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
      outcome:
        'Reduced support questions by making account status and next actions obvious.',
      href: '#',
      linkLabel: 'View case study',
    },
    {
      title: 'Automation Console',
      type: 'Internal tool',
      description:
        'Built a lightweight operations console for reviewing requests, triggering workflows, and tracking failed jobs.',
      role: 'Full-stack build',
      stack: ['React', 'API routes', 'Queue jobs', 'Audit logs'],
      outcome:
        'Gave operators one place to see what broke and retry safely.',
      href: '#',
      linkLabel: 'View project',
    },
    {
      title: 'Founder Landing Page',
      type: 'Marketing site',
      description:
        'Designed and shipped a clear landing page for a solo founder validating a niche B2B product.',
      role: 'Messaging, design, implementation',
      stack: ['Next.js', 'MDX', 'Stripe', 'Analytics'],
      outcome:
        'Turned a vague product idea into a page people could understand in under 10 seconds.',
      href: '#',
      linkLabel: 'View writeup',
    },
  ],
  caseStudies: [
    {
      title: 'Untangling a messy onboarding flow',
      problem:
        'Users were abandoning setup because the product asked too many questions before showing value.',
      approach:
        'Moved setup into progressive steps, clarified defaults, and gave users a useful first screen faster.',
      result:
        'The flow became easier to finish and easier for the team to explain.',
    },
    {
      title: 'Turning manual ops into a dashboard',
      problem:
        'A team was tracking work across spreadsheets, Slack threads, and one-off scripts.',
      approach:
        'Mapped the recurring decisions, built a small internal interface, and added retry-safe actions.',
      result:
        'The team got a single operating view instead of chasing state across tools.',
    },
    {
      title: 'Making a technical product legible',
      problem:
        'The product was powerful, but the homepage sounded like internal architecture notes.',
      approach:
        'Reframed the copy around user outcomes, simplified the page structure, and added concrete examples.',
      result:
        'Visitors could understand the offer without needing a sales call.',
    },
  ],
  skills: [
    {
      category: 'Product Engineering',
      items: ['Next.js', 'React', 'TypeScript', 'APIs', 'Dashboards'],
    },
    {
      category: 'UX Systems',
      items: ['Information architecture', 'Design systems', 'Interaction cleanup'],
    },
    {
      category: 'Automation',
      items: ['Workflow mapping', 'Internal tools', 'AI-assisted processes'],
    },
    {
      category: 'Delivery',
      items: ['Scoping', 'Technical discovery', 'Documentation', 'Handoff'],
    },
  ],
  experience: [
    {
      period: 'Recent',
      role: 'Independent product work',
      company: 'Client and internal projects',
      description:
        'Building focused web apps, automation systems, and landing pages for practical business workflows.',
    },
    {
      period: 'Previous',
      role: 'Senior software engineer',
      company: 'Enterprise teams',
      description:
        'Worked across internal platforms, integrations, support tooling, and production delivery.',
    },
    {
      period: 'Earlier',
      role: 'Frontend and full-stack developer',
      company: 'Product teams',
      description:
        'Shipped user-facing interfaces, admin systems, and operational dashboards.',
    },
  ],
  now: {
    title: 'Now and availability',
    focus: [
      'Building focused product interfaces',
      'Improving messy SaaS onboarding',
      'Turning internal workflows into usable tools',
    ],
    availableFor: [
      'Landing page builds',
      'SaaS dashboard UX',
      'Internal tool design/build',
      'Technical product cleanup',
    ],
    notAvailableFor: [
      'Vague idea calls with no owner',
      'Spec-free rebuilds',
      'Pixel-perfect clone requests',
    ],
  },
  cta: {
    label: 'Work together',
    title:
      'Have a messy product flow or internal tool that needs to become usable?',
    description:
      'Send a short note with what exists, what is broken, and what needs to happen next.',
    primaryCta: { label: 'Start a project', href: '#contact' },
    secondaryCta: { label: 'Email directly', href: 'mailto:hello@example.com' },
  },
  footer: {
    logoLabel: 'Portfolio Example',
    description:
      'A work-first homepage pattern for independent builders and technical creatives.',
    linkGroups: [
      {
        title: 'Page',
        links: [
          { label: 'Work', href: '#work' },
          { label: 'Case studies', href: '#case-studies' },
          { label: 'Contact', href: '#contact' },
        ],
      },
    ],
  },
} as const
