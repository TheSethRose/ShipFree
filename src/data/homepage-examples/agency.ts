export const agencyHomepageExample = {
  name: 'Agency',
  description:
    'A service-business homepage focused on offers, process, results, and fit.',
  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'Engagements', href: '#engagements' },
    { label: 'Results', href: '#results' },
    { label: 'Process', href: '#process' },
    { label: 'Fit', href: '#fit' },
  ],
  hero: {
    eyebrow: 'Specialist implementation studio',
    title:
      'We turn messy workflows into shipped automation and internal tools.',
    description:
      'An agency homepage pattern for teams selling strategy, implementation, and operational improvement without sounding like a generic SaaS product.',
    primaryCta: { label: 'Book a strategy call', href: '#contact' },
    secondaryCta: { label: 'View services', href: '#services' },
    bestFor:
      'Best for teams with a clear operational bottleneck and an owner ready to fix it.',
    snapshot: [
      {
        label: 'Audit',
        description:
          'Map the workflow, identify the bottleneck, leave with a build plan.',
      },
      {
        label: 'Build Sprint',
        description:
          'Design and ship the first working version.',
      },
      {
        label: 'Retainer',
        description:
          'Improve, maintain, and expand after launch.',
      },
    ],
  },
  services: [
    {
      title: 'Automation Audit',
      description:
        'Find where manual work, handoffs, and tool sprawl are slowing the business down.',
      deliverables: [
        'Workflow map',
        'Bottleneck analysis',
        'Automation opportunities',
        'Prioritized build plan',
      ],
      typicalOutput: 'A clear plan for what to automate first.',
    },
    {
      title: 'Internal Tool Build',
      description:
        'Turn a recurring operational workflow into a usable dashboard, queue, portal, or admin tool.',
      deliverables: [
        'UX flow',
        'Database model',
        'Working app',
        'Role-aware screens',
        'Handoff docs',
      ],
      typicalOutput: 'A working tool your team can use.',
    },
    {
      title: 'AI Workflow Implementation',
      description:
        'Add AI where it removes review work, triage, summarization, routing, or repetitive drafting.',
      deliverables: [
        'Use-case selection',
        'Prompt/workflow design',
        'Human review points',
        'Logging and fallback behavior',
      ],
      typicalOutput: 'AI support inside a controlled workflow.',
    },
  ],
  engagementModels: [
    {
      name: 'Audit',
      commitmentLabel: 'Clarify',
      priceLabel: 'Fixed-scope',
      timeline: '1 to 2 weeks',
      description:
        'For teams that need clarity before committing to a build.',
      includes: [
        'Discovery call',
        'Workflow review',
        'Bottleneck map',
        'Recommendation report',
      ],
      cta: { label: 'Start with an audit', href: '#contact' },
    },
    {
      name: 'Build Sprint',
      commitmentLabel: 'Ship',
      featured: true,
      priceLabel: 'Project-based',
      timeline: '2 to 6 weeks',
      description:
        'For teams ready to ship a focused workflow, dashboard, or automation.',
      includes: [
        'Build plan',
        'Implementation',
        'Testing pass',
        'Launch handoff',
      ],
      cta: { label: 'Scope a sprint', href: '#contact' },
    },
    {
      name: 'Retainer',
      commitmentLabel: 'Scale',
      priceLabel: 'Monthly',
      timeline: 'Ongoing',
      description:
        'For teams that need iteration, maintenance, and workflow expansion.',
      includes: [
        'Backlog management',
        'Monthly improvements',
        'Monitoring',
        'Advisory support',
      ],
      cta: { label: 'Discuss retainer', href: '#contact' },
    },
  ],
  results: [
    {
      metric: 'Fewer handoffs',
      label: 'Centralize the work',
      description:
        'Move repeated decisions out of chat threads and into a clear operating flow.',
    },
    {
      metric: 'Cleaner queues',
      label: 'Know what needs attention',
      description:
        'Give teams a single place to see stuck work, errors, and next actions.',
    },
    {
      metric: 'Safer automation',
      label: 'Keep humans in control',
      description:
        'Use AI and automation with review points, logs, and fallback paths.',
    },
    {
      metric: 'Faster delivery',
      label: 'Ship the smallest useful tool',
      description:
        'Start with a scoped workflow instead of boiling the ocean.',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Diagnose',
      description:
        'Review the current workflow, systems, handoffs, and failure points.',
      output: 'Workflow map',
    },
    {
      step: '02',
      title: 'Scope',
      description:
        'Choose the smallest valuable version and define what should not be built yet.',
      output: 'Sprint plan',
    },
    {
      step: '03',
      title: 'Build',
      description:
        'Design, implement, and test the workflow with real operating constraints.',
      output: 'Working tool',
    },
    {
      step: '04',
      title: 'Handoff',
      description:
        'Document how it works, what to monitor, and what to improve next.',
      output: 'Launch notes',
    },
  ],
  caseStudies: [
    {
      clientType: 'Field service company',
      problem:
        'Job requests were spread across calls, texts, and spreadsheets.',
      delivered:
        'A request intake flow with dispatch dashboard and status tracking.',
      result:
        'The team got one source of truth for new work.',
    },
    {
      clientType: 'B2B operations team',
      problem:
        'Approvals stalled because no one knew what was waiting on whom.',
      delivered:
        'A review queue with assignment, status, notes, and reminders.',
      result:
        'Managers could see bottlenecks without asking for manual updates.',
    },
    {
      clientType: 'Small SaaS team',
      problem:
        'Support requests required repetitive triage and summary writing.',
      delivered:
        'AI-assisted categorization with human review and audit logs.',
      result:
        'The team reduced repetitive review without losing oversight.',
    },
  ],
  fit: {
    goodFit: [
      'You have a real workflow owner.',
      'The problem happens every week.',
      'The current process is costing time, money, or trust.',
      'You want a useful first version, not a giant transformation deck.',
    ],
    badFit: [
      'You want AI added because it sounds trendy.',
      'No one owns the process.',
      'The scope changes every meeting.',
      'You need a full enterprise implementation team.',
    ],
  },
  cta: {
    label: 'Next step',
    title:
      'Start with the workflow that is costing you the most time.',
    description:
      'Bring the messy process, the tools involved, and the point where work gets stuck. The first call is about deciding whether it is worth fixing.',
    primaryCta: { label: 'Book a strategy call', href: '#contact' },
    secondaryCta: { label: 'View engagement models', href: '#engagements' },
  },
  footer: {
    logoLabel: 'Agency Example',
    description:
      'A service-led homepage pattern for agencies, studios, and consultants.',
    linkGroups: [
      {
        title: 'Page',
        links: [
          { label: 'Services', href: '#services' },
          { label: 'Engagements', href: '#engagements' },
          { label: 'Process', href: '#process' },
        ],
      },
    ],
  },
} as const
