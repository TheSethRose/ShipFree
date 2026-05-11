interface CaseStudy {
  readonly clientType: string
  readonly problem: string
  readonly delivered: string
  readonly result: string
}

interface CaseStudiesSectionProps {
  readonly title: string
  readonly description?: string
  readonly caseStudies: readonly CaseStudy[]
  readonly className?: string
}

export function CaseStudiesSection({
  title,
  description,
  caseStudies,
  className = '',
}: CaseStudiesSectionProps) {
  return (
    <section className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        <div className='mt-12 space-y-6'>
          {caseStudies.map((study) => (
            <article
              key={study.clientType}
              className='rounded-2xl border border-[#E4E4E7] bg-white p-6 shadow-sm sm:p-8'
            >
              {/* Client type tag */}
              <span
                className='inline-block rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                {study.clientType}
              </span>

              {/* Before / Intervention / After flow */}
              <div className='mt-6 grid gap-6 md:grid-cols-3'>
                {/* Before */}
                <div className='relative'>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                    Before
                  </p>
                  <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                    {study.problem}
                  </p>
                </div>

                {/* Intervention */}
                <div className='relative rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-5'>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                    Intervention
                  </p>
                  <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                    {study.delivered}
                  </p>
                  {/* Arrow on desktop */}
                  <div className='absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[#E4E4E7] md:block'>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                      <path
                        d='M3 8H13M13 8L9 4M13 8L9 12'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>

                {/* After */}
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                    After
                  </p>
                  <p className='mt-2 text-sm font-medium leading-6 text-foreground'>
                    {study.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
