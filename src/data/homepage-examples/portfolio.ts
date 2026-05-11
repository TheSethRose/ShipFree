export const portfolioHomepageExample = {
  name: 'Portfolio',
  description: 'A homepage pattern for designers, developers, and creatives showcasing work.',
  sections: [
    'Hero',
    'Selected work',
    'About',
    'Skills',
    'Process',
    'Testimonials',
    'Contact',
  ],
  hero: {
    name: 'Jordan Lee',
    role: 'Product Designer & Developer',
    tagline: 'I design and build digital products that people love to use. Based in San Francisco, working with teams worldwide.',
    primaryCta: { label: 'View my work', href: '/#work' },
    secondaryCta: { label: 'Get in touch', href: '/contact' },
  },
  navLinks: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Contact', href: '/contact' },
  ],
  projects: {
    label: 'SELECTED WORK',
    title: 'Projects I am proud of',
    description: 'A mix of product design, front-end development, and brand work for startups and established companies.',
    projects: [
      { title: 'Finova Banking', category: 'Product Design', description: 'Redesigned the mobile banking experience for a neobank serving 2M users.' },
      { title: 'GreenCart', category: 'E-commerce', description: 'Built a sustainable grocery platform with real-time inventory and delivery tracking.' },
      { title: 'HealthTrack', category: 'Healthcare', description: 'Designed a patient portal that reduced appointment no-shows by 35%.' },
      { title: 'CloudSync', category: 'SaaS', description: 'Created the brand identity and marketing site for a developer tools startup.' },
      { title: 'UrbanEats', category: 'Mobile App', description: 'Designed and developed a food discovery app with AR restaurant previews.' },
      { title: 'TaskFlow', category: 'Productivity', description: 'Redesigned the onboarding flow, increasing activation by 28%.' },
    ],
  },
  skills: {
    label: 'SKILLS',
    title: 'Tools and technologies',
    description: 'I work across the full product lifecycle, from research to deployment.',
    categories: [
      { category: 'Design', skills: [{ name: 'Figma' }, { name: 'Sketch' }, { name: 'Prototyping' }, { name: 'User Research' }] },
      { category: 'Development', skills: [{ name: 'React' }, { name: 'TypeScript' }, { name: 'Next.js' }, { name: 'Tailwind CSS' }] },
      { category: 'Strategy', skills: [{ name: 'Product Strategy' }, { name: 'Growth' }, { name: 'Analytics' }, { name: 'A/B Testing' }] },
    ],
  },
  experience: {
    label: 'EXPERIENCE',
    title: 'Where I have worked',
    items: [
      { role: 'Senior Product Designer', company: 'Stripe', period: '2022–Present', description: 'Leading design for the developer dashboard and API documentation experience.' },
      { role: 'Product Designer', company: 'Figma', period: '2019–2022', description: 'Worked on community features and the design system infrastructure.' },
      { role: 'Frontend Developer', company: 'Vercel', period: '2017–2019', description: 'Built marketing sites and internal tools using Next.js and React.' },
    ],
  },
  testimonials: {
    label: 'TESTIMONIALS',
    title: 'What people say',
    testimonials: [
      { quote: 'Jordan brought both design craft and technical execution to our team. A rare combination.', name: 'Emily Park', role: 'VP Product, Stripe' },
      { quote: 'The best designer I have worked with. Every detail was considered, and the results showed.', name: 'David Kim', role: 'CEO, GreenCart' },
      { quote: 'Delivered on time, communicated clearly, and the work exceeded expectations.', name: 'Rachel Chen', role: 'Founder, HealthTrack' },
    ],
  },
  footer: {
    logoLabel: 'Jordan Lee',
    description: 'Product Designer & Developer based in San Francisco.',
    linkGroups: [
      { title: 'Work', links: [{ label: 'Projects', href: '/#work' }, { label: 'Process', href: '/#process' }] },
      { title: 'Connect', links: [{ label: 'Email', href: 'mailto:hello@jordanlee.dev' }, { label: 'GitHub', href: 'https://github.com' }] },
      { title: 'Legal', links: [{ label: 'Privacy', href: '/privacy' }] },
    ],
  },
} as const
