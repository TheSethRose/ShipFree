export const productHomepageExample = {
  name: 'Product',
  description: 'A homepage pattern for physical products, gadgets, and e-commerce launches.',
  sections: [
    'Hero',
    'Problem',
    'Solution',
    'Features',
    'Gallery',
    'Reviews',
    'Pricing',
    'FAQ',
    'CTA',
  ],
  hero: {
    productName: 'Luma Lamp',
    tagline: 'Smart lighting that adapts to your day.',
    description:
      'A desk lamp with circadian rhythm lighting, wireless charging, and app control. Designed to reduce eye strain and improve focus throughout the day.',
    primaryCta: { label: 'Pre-order now', href: '/checkout' },
    secondaryCta: { label: 'Watch video', href: '/video' },
    trustPoints: ['Free shipping', '2-year warranty', '30-day returns'],
  },
  navLinks: [
    { label: 'Features', href: '/#features' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'FAQ', href: '/#faq' },
  ],
  features: {
    label: 'FEATURES',
    title: 'Designed for how you work',
    features: [
      { title: 'Circadian lighting', description: 'Color temperature shifts from warm morning light to cool focus light throughout the day.' },
      { title: 'Wireless charging', description: 'Built-in Qi charger keeps your phone powered while you work.' },
      { title: 'App control', description: 'Set schedules, adjust brightness, and create scenes from your phone.' },
      { title: 'Eye strain reduction', description: 'Flicker-free LEDs with adjustable brightness and color temperature.' },
    ],
  },
  showcase: {
    label: 'DETAILS',
    title: 'Built with care',
    description: 'Every detail was considered, from the materials to the manufacturing process.',
    features: [
      { title: 'Sustainable materials', description: 'Made from recycled aluminum and FSC-certified wood. Plastic-free packaging.' },
      { title: 'Precision engineering', description: 'CNC-machined joints and a weighted base for stability and smooth adjustment.' },
      { title: 'Long-lasting LEDs', description: '50,000-hour lifespan. That is over 17 years of daily use.' },
    ],
  },
  license: {
    label: 'OPTIONS',
    title: 'Choose your finish',
    tiers: [
      { name: 'Matte Black', description: 'Minimal and modern. Fits any desk setup.', rights: ['Matte black aluminum', 'Walnut wood accent', 'Black fabric cable'] },
      { name: 'Natural White', description: 'Clean and bright. Perfect for creative spaces.', rights: ['White aluminum', 'Birch wood accent', 'White fabric cable'] },
      { name: 'Limited Edition', description: 'Brushed brass and oak. Only 500 made.', rights: ['Brushed brass', 'Oak wood accent', 'Braided cable', 'Numbered certificate'] },
    ],
  },
  pricing: {
    label: 'PRICING',
    title: 'Simple pricing',
    tiers: [
      { name: 'Single', price: '$149', description: 'One Luma Lamp with full feature access.', cta: { label: 'Pre-order', href: '/checkout' } },
      { name: 'Bundle', price: '$279', description: 'Two lamps with free shipping and a 2-year warranty.', cta: { label: 'Pre-order', href: '/checkout' } },
      { name: 'Office', price: '$599', description: 'Four lamps with dedicated support and custom branding.', cta: { label: 'Contact us', href: '/contact' } },
    ],
  },
  reviews: {
    label: 'REVIEWS',
    title: 'Early backers love it',
    testimonials: [
      { quote: 'The circadian lighting actually helps me focus. I did not expect it to make such a difference.', name: 'Alex R.', role: 'Designer' },
      { quote: 'Beautiful design and the wireless charging is incredibly convenient.', name: 'Sam T.', role: 'Developer' },
      { quote: 'Best desk lamp I have owned. The build quality is exceptional.', name: 'Jordan M.', role: 'Writer' },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Questions answered',
    questions: [
      { question: 'When will it ship?', answer: 'We are shipping in batches. Current pre-orders will ship in 6–8 weeks.' },
      { question: 'Does it work without the app?', answer: 'Yes. All core functions work with the touch controls on the lamp itself.' },
      { question: 'What is the warranty?', answer: '2-year warranty covering manufacturing defects. Extended warranty available at checkout.' },
    ],
  },
  cta: {
    label: 'PRE-ORDER',
    title: 'Be among the first.',
    description: 'Pre-orders are limited. Secure yours before the next batch sells out.',
    primaryCta: { label: 'Pre-order now', href: '/checkout' },
    secondaryCta: { label: 'Watch video', href: '/video' },
  },
  footer: {
    logoLabel: 'Luma',
    description: 'Smart lighting for better living.',
    linkGroups: [
      { title: 'Product', links: [{ label: 'Features', href: '/#features' }, { label: 'Pricing', href: '/#pricing' }, { label: 'FAQ', href: '/#faq' }] },
      { title: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Support', href: '/support' }] },
      { title: 'Legal', links: [{ label: 'Terms', href: '/terms' }, { label: 'Privacy', href: '/privacy' }] },
    ],
  },
} as const
