import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { productHomepageExample } from '@/data/homepage-examples/product'

export default function ProductExamplePage() {
  const { name, description, sections } = productHomepageExample

  return (
    <main className='min-h-screen bg-white'>
      <div className='h-16 border-b border-[#E4E4E7] bg-[#F4F4F5]/90 backdrop-blur-xl' />

      <section className='section-padding px-4 sm:px-6'>
        <div className='mx-auto max-w-6xl'>
          <Link
            href='/examples'
            className='mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            <ArrowLeft className='h-4 w-4' />
            Back to examples
          </Link>

          <div className='mx-auto max-w-2xl'>
            <h1 className='section-heading'>{name} homepage</h1>
            <p className='section-description text-left'>{description}</p>

            <div className='mt-12 rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-6'>
              <h2 className='mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
                Planned sections
              </h2>
              <ol className='space-y-2'>
                {sections.map((section, index) => (
                  <li
                    key={section}
                    className='flex items-center gap-3 text-base text-muted-foreground'
                  >
                    <span className='flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-semibold shadow-sm'>
                      {index + 1}
                    </span>
                    {section}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
