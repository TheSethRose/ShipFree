import Link from 'next/link'

import { saasHomepageExample } from '@/data/homepage-examples/saas'
import { portfolioHomepageExample } from '@/data/homepage-examples/portfolio'
import { agencyHomepageExample } from '@/data/homepage-examples/agency'
import { localBusinessHomepageExample } from '@/data/homepage-examples/local-business'
import { productHomepageExample } from '@/data/homepage-examples/product'

const examples = [
  { slug: 'saas', data: saasHomepageExample },
  { slug: 'portfolio', data: portfolioHomepageExample },
  { slug: 'agency', data: agencyHomepageExample },
  { slug: 'local-business', data: localBusinessHomepageExample },
  { slug: 'product', data: productHomepageExample },
]

export default function ExamplesPage() {
  return (
    <main className='min-h-screen bg-white'>
      {/* Header placeholder */}
      <div className='h-16 border-b border-[#E4E4E7] bg-[#F4F4F5]/90 backdrop-blur-xl' />

      <section className='section-padding px-4 sm:px-6'>
        <div className='mx-auto max-w-6xl'>
          <div className='mx-auto max-w-2xl text-center'>
            <h1 className='section-heading'>Homepage examples</h1>
            <p className='section-description'>
              Alternate homepage patterns for different site types. Each example is a scaffold — full sections will be built in later phases.
            </p>
          </div>

          <div className='mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {examples.map((example) => (
              <Link
                key={example.slug}
                href={`/examples/${example.slug}`}
                className='group marketing-card'
              >
                <h2 className='text-lg font-semibold'>{example.data.name}</h2>
                <p className='card-description'>{example.data.description}</p>
                <div className='mt-4 flex items-center gap-1 text-sm font-medium text-muted-foreground transition-opacity group-hover:opacity-100'>
                  <span>View scaffold</span>
                  <span aria-hidden='true'>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
