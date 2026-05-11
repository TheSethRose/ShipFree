import Link from 'next/link'

import { ExampleHeader } from '@/components/homepage-examples/shared/example-header'
import { ExampleFooter } from '@/components/homepage-examples/shared/example-footer'
import { portfolioHomepageExample } from '@/data/homepage-examples/portfolio'
import { agencyHomepageExample } from '@/data/homepage-examples/agency'
import { localBusinessHomepageExample } from '@/data/homepage-examples/local-business'
import { productHomepageExample } from '@/data/homepage-examples/product'

const examples = [
  {
    slug: 'portfolio',
    data: portfolioHomepageExample,
    bestFor: 'Designers, developers, creatives',
  },
  {
    slug: 'agency',
    data: agencyHomepageExample,
    bestFor: 'Creative studios, consultancies',
  },
  {
    slug: 'local-business',
    data: localBusinessHomepageExample,
    bestFor: 'Shops, restaurants, clinics',
  },
  {
    slug: 'product',
    data: productHomepageExample,
    bestFor: 'Physical products, gadgets, launches',
  },
]

export default function ExamplesPage() {
  return (
    <main className='min-h-screen bg-white'>
      <ExampleHeader
        logoLabel='ShipFree'
        navLinks={[
          { label: 'Home', href: '/' },
          { label: 'Examples', href: '/examples' },
        ]}
        primaryCta={{ label: 'Get started', href: '/register' }}
      />

      <section className='section-padding px-4 pt-32 sm:px-6'>
        <div className='mx-auto max-w-6xl'>
          <div className='mx-auto max-w-2xl text-center'>
            <h1 className='section-heading'>Homepage examples</h1>
            <p className='section-description'>
              Alternate homepage patterns for different site types. Pick one, customize the data, and make it yours.
            </p>
          </div>

          <div className='mx-auto mt-12 max-w-2xl rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-5 text-center'>
            <p className='text-sm text-muted-foreground'>
              The main homepage at <code className='rounded bg-white px-1.5 py-0.5 text-xs font-mono'>/</code> is already the SaaS/starter-kit example. These examples cover other site types.
            </p>
          </div>

          <div className='mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {examples.map((example) => (
              <Link
                key={example.slug}
                href={`/examples/${example.slug}`}
                className='group marketing-card'
              >
                <h2 className='text-lg font-semibold'>{example.data.name}</h2>
                <p className='card-description'>{example.data.description}</p>
                <p className='mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  Best for: {example.bestFor}
                </p>
                <div className='mt-4 flex items-center gap-1 text-sm font-medium text-muted-foreground transition-opacity group-hover:opacity-100'>
                  <span>Preview homepage</span>
                  <span aria-hidden='true'>→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className='mx-auto mt-20 max-w-2xl rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-6 text-center'>
            <p className='text-sm text-muted-foreground'>
              These examples are completely isolated. Delete{' '}
              <code className='rounded bg-white px-1.5 py-0.5 text-xs font-mono'>src/app/examples</code>,{' '}
              <code className='rounded bg-white px-1.5 py-0.5 text-xs font-mono'>src/components/homepage-examples</code>, and{' '}
              <code className='rounded bg-white px-1.5 py-0.5 text-xs font-mono'>src/data/homepage-examples</code>{' '}
              to remove them without affecting your main homepage.
            </p>
          </div>
        </div>
      </section>

      <ExampleFooter
        logoLabel='ShipFree'
        description='A production-ready Next.js starter for shipping fast.'
        linkGroups={[
          {
            title: 'Product',
            links: [
              { label: 'Home', href: '/' },
              { label: 'Examples', href: '/examples' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'Docs', href: '/docs' },
              { label: 'GitHub', href: 'https://github.com' },
            ],
          },
        ]}
      />
    </main>
  )
}
