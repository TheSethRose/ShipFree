export const productHomepageExample = {
  name: 'Product',
  description:
    'A purchase-focused page for a digital product, template, course, or download.',
  navLinks: [
    { label: 'Preview', href: '#preview' },
    { label: 'Included', href: '#included' },
    { label: 'Use cases', href: '#use-cases' },
    { label: 'License', href: '#license' },
    { label: 'Buy', href: '#buy' },
  ],
  hero: {
    eyebrow: 'Digital product template',
    title: 'A complete launch kit you can customize and ship.',
    description:
      'A product homepage pattern for templates, courses, kits, downloads, and paid resources that need to explain exactly what buyers receive.',
    priceLine: '$49 one-time purchase',
    primaryCta: { label: 'Buy the kit', href: '#buy' },
    secondaryCta: { label: 'See what is included', href: '#included' },
    note: 'Instant access after purchase. Commercial license included.',
    preview: {
      title: 'Launch Kit',
      subtitle: 'Template package',
      version: 'v1.0',
      meta: [
        '32 components',
        '5 page examples',
        'Docs included',
        'Commercial use',
      ],
      contents: ['Pages', 'Components', 'Docs', 'Examples', 'License'],
    },
  },
  showcase: {
    title: 'Everything organized for a clean handoff',
    description:
      'Use this section to preview the contents, structure, and value of the product before asking someone to buy.',
    highlights: [
      'Editable source files',
      'Implementation notes',
      'Usage examples',
      'License and update notes',
    ],
    previewBlocks: [
      {
        title: 'Homepage sections',
        description: 'Hero, pricing, FAQ, CTA, proof, and content blocks.',
      },
      {
        title: 'Component library',
        description: 'Reusable cards, panels, lists, and layout primitives.',
      },
      {
        title: 'Setup guide',
        description: 'Install, customize, and delete unused sections safely.',
      },
      {
        title: 'Usage examples',
        description: 'Realistic examples showing how each section is meant to work.',
      },
      {
        title: 'License file',
        description: 'Plain-language usage rights and redistribution limits.',
      },
      {
        title: 'Changelog',
        description: 'Simple version history for fixes and additions.',
      },
    ],
  },
  whatYouGet: [
    {
      title: 'Ready-to-edit pages',
      description:
        'Prebuilt page structures that can be customized instead of designed from scratch.',
      detail: 'Best for getting a real page online quickly.',
    },
    {
      title: 'Reusable components',
      description:
        'Common blocks organized so buyers can keep, remove, or rearrange them.',
      detail: 'Useful across landing pages, product pages, and resource pages.',
    },
    {
      title: 'Setup documentation',
      description:
        'Clear instructions for installation, customization, and deployment.',
      detail: 'Less guessing. Fewer mystery files.',
    },
    {
      title: 'Example content',
      description:
        'Realistic copy patterns that show how each section should be used.',
      detail: 'No Lorem ipsum garbage.',
    },
    {
      title: 'Commercial license',
      description:
        'Permission to use the product in client or business projects.',
      detail: 'Adjust the license before selling your real product.',
    },
    {
      title: 'Future update notes',
      description:
        'A simple place to document version changes, fixes, and additions.',
      detail: 'Makes the product feel maintained.',
    },
  ],
  useCases: [
    {
      title: 'Launch a new offer',
      description:
        'Use the kit to get a polished product or service page online faster.',
      bestFor: 'Founders and solo builders',
    },
    {
      title: 'Package client work',
      description:
        'Use the structure as a starting point for repeatable client deliverables.',
      bestFor: 'Freelancers and agencies',
    },
    {
      title: 'Sell a resource',
      description:
        'Explain what buyers get, what is included, and how licensing works.',
      bestFor: 'Template and course creators',
    },
    {
      title: 'Standardize internal pages',
      description:
        'Give teams a consistent structure for product, resource, or campaign pages.',
      bestFor: 'Small teams',
    },
  ],
  includedFiles: [
    {
      name: 'Page templates',
      format: '.tsx',
      description:
        'Editable page examples for product, pricing, FAQ, and landing sections.',
      category: 'Source',
    },
    {
      name: 'Component set',
      format: '.tsx',
      description:
        'Reusable cards, section headers, CTAs, product blocks, and layout sections.',
      category: 'Source',
    },
    {
      name: 'Documentation',
      format: '.mdx',
      description:
        'Setup, customization, deletion, and usage instructions.',
      category: 'Docs',
    },
    {
      name: 'Content examples',
      format: '.ts',
      description:
        'Structured data files with realistic copy examples.',
      category: 'Data',
    },
    {
      name: 'License',
      format: '.md',
      description:
        'Plain-language usage rights and redistribution limits.',
      category: 'Legal',
    },
    {
      name: 'Changelog',
      format: '.md',
      description:
        'Version history for product updates.',
      category: 'Docs',
    },
  ],
  license: {
    title: 'Commercial license included',
    note:
      'Adjust this section to match your real license before selling.',
    allowed: [
      'Use in personal projects',
      'Use in client projects',
      'Modify the source',
      'Deploy commercial websites',
      'Use as a starting point for your own product',
    ],
    notAllowed: [
      'Resell the package as-is',
      'Redistribute the source files publicly',
      'Claim the original package as your own',
      'Bundle it into another template marketplace product',
    ],
  },
  pricing: {
    label: 'One-time purchase',
    price: '$49',
    compareAt: '$99',
    description:
      'Get the complete kit, docs, examples, and commercial license.',
    includes: [
      'All source files',
      'All example pages',
      'Documentation',
      'Commercial use',
      'Future minor updates',
    ],
    cta: { label: 'Buy now', href: '#buy' },
    note:
      'No subscription. No account required for static downloads unless your checkout flow requires one.',
    receipt: [
      { label: 'Product', value: 'Launch Kit' },
      { label: 'License', value: 'Commercial' },
      { label: 'Access', value: 'Instant download' },
      { label: 'Updates', value: 'Minor updates included' },
    ],
  },
  faq: [
    {
      question: 'Is this a subscription?',
      answer:
        'No. This example is structured for a one-time digital product purchase.',
    },
    {
      question: 'Can I use it for client work?',
      answer:
        'Yes, if your real license allows it. The example license section includes commercial-use language.',
    },
    {
      question: 'What happens after purchase?',
      answer:
        'Buyers should receive access to the files, documentation, and any update instructions.',
    },
    {
      question: 'Can I edit the files?',
      answer:
        'Yes. The product is positioned as editable source material, not a locked platform.',
    },
    {
      question: 'Can I resell it?',
      answer:
        'Not as-is. The license section should clarify redistribution limits.',
    },
    {
      question: 'Does this work for courses too?',
      answer:
        'Yes. Swap the included files for lessons, worksheets, templates, or downloadable resources.',
    },
  ],
  buyCta: {
    label: 'Ready to ship',
    title:
      'Get the complete launch kit and customize it for your product.',
    description:
      'Use this final section to remove hesitation and repeat the exact purchase action.',
    price: '$49',
    primaryCta: { label: 'Buy the kit', href: '#buy' },
    secondaryCta: { label: 'Review license', href: '#license' },
    checklist: [
      'Instant access',
      'Commercial license',
      'Editable source',
      'Docs included',
    ],
  },
  footer: {
    logoLabel: 'Product Example',
    description:
      'A purchase-first homepage pattern for digital products, kits, courses, and templates.',
    linkGroups: [
      {
        title: 'Page',
        links: [
          { label: 'Preview', href: '#preview' },
          { label: 'Included', href: '#included' },
          { label: 'Buy', href: '#buy' },
        ],
      },
    ],
  },
} as const
