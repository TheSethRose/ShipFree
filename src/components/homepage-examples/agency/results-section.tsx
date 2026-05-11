interface ResultItem {
  readonly metric: string
  readonly label: string
  readonly description: string
}

interface ResultsSectionProps {
  readonly title: string
  readonly description?: string
  readonly results: readonly ResultItem[]
  readonly className?: string
}

const statusPills = ['Ops', 'Queue', 'Control', 'Delivery'] as const

export function ResultsSection({
  title,
  description,
  results,
  className = '',
}: ResultsSectionProps) {
  return (
    <section id='results' className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {results.map((result, index) => (
            <article
              key={result.label}
              className='marketing-card relative overflow-hidden'
            >
              <span className='absolute right-4 top-4 rounded-full border border-[#E4E4E7] bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground'>
                {statusPills[index]}
              </span>

              <p className='mt-1 text-2xl font-bold tracking-tight'>
                {result.metric}
              </p>

              <h3 className='mt-2 text-base font-semibold'>{result.label}</h3>

              <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                {result.description}
              </p>

              {/* Faux mini progress bar */}
              <div className='mt-4'>
                <div className='h-1.5 w-full rounded-full bg-[#E4E4E7]'>
                  <div
                    className='h-1.5 rounded-full bg-foreground'
                    style={{
                      width: `${60 + (index % 3) * 15}%`,
                    }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
