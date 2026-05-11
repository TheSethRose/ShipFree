interface Deliverable {
  readonly title: string
  readonly description: string
  readonly detail: string
}

interface WhatYouGetSectionProps {
  readonly title: string
  readonly description?: string
  readonly items: readonly Deliverable[]
  readonly className?: string
}

export function WhatYouGetSection({
  title,
  description,
  items,
  className = '',
}: WhatYouGetSectionProps) {
  return (
    <section id='included' className={`section-padding bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-12 lg:grid-cols-12 lg:gap-10'>
          {/* Left summary */}
          <div className='lg:col-span-4'>
            <div className='sticky top-24 rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-6 shadow-sm'>
              <h2 className='text-xl font-semibold'>Built to be edited</h2>
              <p className='mt-3 text-sm leading-6 text-muted-foreground'>
                The buyer should understand the package, remove what they do
                not need, and ship the useful parts.
              </p>
              <div className='mt-5 flex flex-wrap gap-2'>
                {['Editable', 'Documented', 'Reusable'].map((tag) => (
                  <span
                    key={tag}
                    className='rounded-full border border-[#E4E4E7] bg-white px-3 py-1 text-xs font-medium shadow-sm'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right rows */}
          <div className='lg:col-span-8'>
            <div className='max-w-2xl'>
              <h2 className='section-heading'>{title}</h2>
              {description && (
                <p className='section-description'>{description}</p>
              )}
            </div>

            <div className='mt-10 space-y-3'>
              {items.map((item, index) => (
                <div
                  key={item.title}
                  className='flex items-start gap-4 rounded-2xl border border-[#E4E4E7] bg-white p-5 shadow-sm'
                >
                  <span
                    className='mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-foreground text-xs font-bold text-white'
                    style={{ fontFamily: 'var(--font-geist-mono)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className='min-w-0 flex-1'>
                    <div className='flex flex-wrap items-center gap-2'>
                      <h3 className='text-base font-semibold'>
                        {item.title}
                      </h3>
                      <span className='rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-2 py-0.5 text-[10px] font-semibold text-muted-foreground'>
                        {item.detail}
                      </span>
                    </div>
                    <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
