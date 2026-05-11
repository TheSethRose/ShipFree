export const agencyHomepageExample = {
  name: 'Agency',
  description: 'A homepage pattern for creative and digital agencies offering services.',
  sections: [
    'Hero',
    'Clients',
    'Services',
    'Case studies',
    'Team',
    'Process',
    'Testimonials',
    'Contact',
  ],
  hero: {
    headline: 'We build brands that stand out',
    subheadline:
      'A creative studio helping startups and established companies design products, build identities, and grow audiences.',
    primaryCta: { label: 'Start a project', href: '/contact' },
    secondaryCta: { label: 'View our work', href: '/#work' },
  },
  navLinks: [
    { label: 'Work', href: '/#work' },
    { label: 'Services', href: '/#services' },
    { label: 'Process', href: '/#process' },
    { label: 'Contact', href: '/contact' },
  ],
  services: {
    label: 'SERVICES',
    title: 'What we do',
    description: 'End-to-end creative services from strategy to launch.',
    services: [
      { title: 'Brand Strategy', description: 'Positioning, messaging, and visual identity systems that differentiate.' },
      { title: 'Product Design', description: 'User research, UX, and UI design for web and mobile products.' },
      { title: 'Web Development', description: 'Fast, accessible, and scalable websites built with modern frameworks.' },
      { title: 'Content Strategy', description: 'Messaging frameworks, copywriting, and editorial systems.' },
      { title: 'Growth Marketing', description: 'Acquisition, retention, and conversion optimization.' },
      { title: 'Motion Design', description: 'Animations, video, and interactive experiences that engage.' },
    ],
  },
  process: {
    label: 'PROCESS',
    title: 'How we work',
    description: 'A proven process that delivers results on time and on budget.',
    steps: [
      { step: '01', title: 'Discover', description: 'Deep dive into your business, audience, and competitive landscape.' },
      { step: '02', title: 'Strategize', description: 'Define positioning, messaging, and the roadmap to success.' },
      { step: '03', title: 'Design', description: 'Create visuals, prototypes, and experiences that resonate.' },
      { step: '04', title: 'Build', description: 'Develop, test, and launch with precision and care.' },
    ],
  },
  results: {
    label: 'RESULTS',
    title: 'Outcomes that matter',
    results: [
      { metric: '120%', label: 'Average conversion lift', context: 'For clients who implemented our redesigns.' },
      { metric: '3x', label: 'Faster time-to-market', context: 'Using our design system approach.' },
      { metric: '50+', label: 'Brands launched', context: 'Across tech, retail, and healthcare.' },
    ],
  },
  testimonials: {
    label: 'TESTIMONIALS',
    title: 'What clients say',
    testimonials: [
      { quote: 'They transformed our brand and doubled our inbound leads in three months.', name: 'Tom Walsh', role: 'CEO, TechFlow' },
      { quote: 'The team felt like an extension of ours. Fast, thoughtful, and always on point.', name: 'Lisa Chen', role: 'CMO, GreenCart' },
      { quote: 'Best investment we made. The new site paid for itself in the first quarter.', name: 'James Park', role: 'Founder, UrbanEats' },
    ],
  },
  footer: {
    logoLabel: 'Studio One',
    description: 'Creative studio building brands that stand out.',
    linkGroups: [
      { title: 'Services', links: [{ label: 'Brand Strategy', href: '/#brand' }, { label: 'Product Design', href: '/#design' }, { label: 'Development', href: '/#development' }] },
      { title: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Careers', href: '/careers' }, { label: 'Contact', href: '/contact' }] },
      { title: 'Legal', links: [{ label: 'Terms', href: '/terms' }, { label: 'Privacy', href: '/privacy' }] },
    ],
  },
} as const
