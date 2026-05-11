interface Service {
  readonly title: string
  readonly description: string
  readonly deliverables: readonly string[]
  readonly typicalOutput: string
}

interface ServicesGridProps {
  readonly title: string
  readonly description?: string
  readonly services: readonly Service[]
  readonly className?: string
}

export function ServicesGrid({
  title,
  description,
  services,
  className = '',
}: ServicesGridProps) {
  return (
    <section id='services' className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        <div className='mt-12 space-y-4'>
          {services.map((service, index) => {
            const isAlt = index === 1
            return (
              <article
                key={service.title}
                className='grid gap-6 rounded-2xl border border-[#E4E4E7] bg-white p-6 shadow-sm lg:grid-cols-12 lg:gap-8 lg:p-8'
              >
                {/* Left: number + title */}
                <div className='lg:col-span-3'>
                  <span
                    className='text-3xl font-bold text-[#E4E4E7]'
                    style={{ fontFamily: 'var(--font-geist-mono)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className='mt-2 text-lg font-semibold'>{service.title}</h3>
                </div>

                {/* Middle: description + typical output */}
                <div className='lg:col-span-5'>
                  <p className='text-base leading-7 text-muted-foreground'>
                    {service.description}
                  </p>
                  <div className='mt-5 border-l-2 border-foreground pl-4'>
                    <p className='text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
                      Typical output
                    </p>
                    <p className='mt-1 text-sm font-medium'>
                      {service.typicalOutput}
                    </p>
                  </div>
                </div>

                {/* Right: deliverables in nested panel */}
                <div className={`rounded-xl border border-[#E4E4E7] p-5 lg:col-span-4 ${isAlt ? 'bg-[#FAFAFA]' : 'bg-[#F4F4F5]'}`}>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                    Deliverables
                  </p>
                  <ul className='mt-3 space-y-2'>
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className='flex items-start gap-2 text-sm text-muted-foreground'
                      >
                        <svg className='mt-0.5 h-4 w-4 shrink-0 text-foreground' viewBox='0 0 16 16' fill='none'>
                          <path d='M3 8L6.5 11.5L13 4.5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
