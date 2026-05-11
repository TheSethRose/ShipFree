export const localBusinessHomepageExample = {
  name: 'Local Business',
  description:
    'A contact-first homepage for businesses where location, hours, reviews, and trust matter.',
  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'Service area', href: '#service-area' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Hours', href: '#hours' },
    { label: 'Quote', href: '#quote' },
  ],
  hero: {
    eyebrow: 'Locally owned service business',
    title:
      'Fast, reliable service for homes and small businesses nearby.',
    description:
      'A local business homepage pattern built around calls, quotes, service areas, reviews, and practical trust signals.',
    primaryCta: { label: 'Request a quote', href: '#quote' },
    secondaryCta: { label: 'Call now', href: 'tel:+15550142024' },
    trustPoints: [
      'Locally owned',
      'Clear arrival windows',
      'Upfront estimates',
    ],
    availabilityCard: {
      title: "Today's availability",
      status: 'Appointments available this week',
      phone: '(555) 014-2024',
      hours: 'Mon-Fri, 8:00 AM - 6:00 PM',
      responseTime: 'Typical response: same business day',
      serviceArea: 'Serving Franklin County and nearby communities',
    },
  },
  quickContact: [
    {
      label: 'Call',
      value: '(555) 014-2024',
      href: 'tel:+15550142024',
    },
    {
      label: 'Hours',
      value: 'Mon-Fri, 8 AM - 6 PM',
    },
    {
      label: 'Service area',
      value: 'Columbus, OH',
    },
    {
      label: 'Quotes',
      value: 'Free estimates',
      href: '#quote',
    },
  ],
  services: [
    {
      title: 'Routine service visit',
      description:
        'Standard scheduled service for common maintenance, inspection, and small repair needs.',
      startingAt: 'From $95',
      duration: '60-90 minutes',
      idealFor: 'Maintenance and small fixes',
      cta: { label: 'Request visit', href: '#quote' },
    },
    {
      title: 'Priority repair',
      description:
        'Faster scheduling for issues that need attention soon but are not emergencies.',
      startingAt: 'Quote after review',
      duration: 'Same or next business day when available',
      idealFor: 'Leaks, outages, urgent issues',
      cta: { label: 'Check availability', href: 'tel:+15550142024' },
    },
    {
      title: 'Project estimate',
      description:
        'On-site or virtual estimate for larger projects, replacements, or multi-step work.',
      startingAt: 'Free estimate',
      duration: '30-45 minutes',
      idealFor: 'Planning and budgeting',
      cta: { label: 'Book estimate', href: '#quote' },
    },
    {
      title: 'Recurring maintenance',
      description:
        'Scheduled service plan for customers who want fewer surprises and easier upkeep.',
      startingAt: 'Custom plan',
      duration: 'Monthly or seasonal',
      idealFor: 'Homes and small businesses',
      cta: { label: 'Ask about plans', href: '#quote' },
    },
  ],
  serviceArea: {
    title: 'Serving nearby communities',
    description:
      'Use this section to make your service area obvious before visitors call or request a quote.',
    cities: [
      'Columbus',
      'Dublin',
      'Westerville',
      'Grove City',
      'Hilliard',
      'Worthington',
      'Reynoldsburg',
      'Gahanna',
    ],
    note:
      'Not sure if you are in range? Call or send your address and we will confirm.',
  },
  gallery: [
    {
      title: 'Cleanup and repair',
      before: 'Unclear issue, repeated callbacks, no documented fix.',
      after:
        'Issue identified, repaired, and documented for the customer.',
    },
    {
      title: 'Maintenance visit',
      before: 'Deferred upkeep and no regular schedule.',
      after:
        'Recurring service plan with seasonal reminders.',
    },
    {
      title: 'Project estimate',
      before:
        'Customer unsure what the project would involve.',
      after:
        'Clear scope, options, and next-step quote.',
    },
  ],
  reviews: [
    {
      rating: '★★★★★',
      quote:
        'They explained the issue clearly, showed up in the window they gave, and did not make the process weird.',
      name: 'Megan R.',
      location: 'Dublin',
      service: 'Priority repair',
    },
    {
      rating: '★★★★★',
      quote:
        'Easy quote, clean work, and good communication. That is basically all I want from a local service company.',
      name: 'Daniel T.',
      location: 'Westerville',
      service: 'Project estimate',
    },
    {
      rating: '★★★★★',
      quote:
        'We use them for recurring maintenance now because scheduling is simple and they actually follow up.',
      name: 'Chris L.',
      location: 'Grove City',
      service: 'Recurring maintenance',
    },
  ],
  contact: {
    phone: '(555) 014-2024',
    phoneHref: 'tel:+15550142024',
    email: 'hello@examplelocal.com',
    emailHref: 'mailto:hello@examplelocal.com',
    address: '123 Main Street, Columbus, OH',
    serviceArea: 'Franklin County area',
    hours: [
      { label: 'Monday-Friday', value: '8:00 AM - 6:00 PM' },
      { label: 'Saturday', value: 'By appointment' },
      { label: 'Sunday', value: 'Closed' },
    ],
    note:
      'Emergency availability depends on schedule and service type.',
  },
  booking: {
    urgent: {
      title: 'Need help soon?',
      description:
        'Call first for time-sensitive issues. The team will confirm whether same-day service is available.',
      cta: { label: 'Call now', href: 'tel:+15550142024' },
    },
    planned: {
      title: 'Planning ahead?',
      description:
        'Use the quote request for estimates, recurring service, and non-urgent projects.',
      cta: { label: 'Request quote', href: '#quote' },
    },
  },
  faq: [
    {
      question: 'Do you serve my area?',
      answer:
        'The service area list covers the main cities. If you are nearby, send your address and the team can confirm.',
    },
    {
      question: 'Do you offer same-day service?',
      answer:
        'Same-day availability depends on the schedule and issue type. Call first for time-sensitive work.',
    },
    {
      question: 'Can I get an estimate before booking?',
      answer:
        'Yes. Smaller services can use starting prices, while larger jobs usually need a short estimate.',
    },
    {
      question: 'Do you work with small businesses?',
      answer:
        'Yes. The page structure works for residential customers, small offices, shops, and local facilities.',
    },
    {
      question: 'What should I include in a quote request?',
      answer:
        'Include your address, photos if useful, the issue, and your preferred timing.',
    },
  ],
  footer: {
    logoLabel: 'Local Business Example',
    description:
      'A contact-first homepage pattern for local service businesses.',
    linkGroups: [
      {
        title: 'Page',
        links: [
          { label: 'Services', href: '#services' },
          { label: 'Service area', href: '#service-area' },
          { label: 'Quote', href: '#quote' },
        ],
      },
    ],
  },
} as const
