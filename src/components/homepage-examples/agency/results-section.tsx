interface ResultItem {
  readonly metric: string
  readonly label: string
  readonly context: string
}

interface ResultsSectionProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly results: readonly ResultItem[]
  readonly className?: string
}

export function ResultsSection({ label, title, description, results, className = '' }: ResultsSectionProps) {
  return (
    <section className={`section-padding border-b border-[#E4E4E7] bg-[#F4F4F5] ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center'>
          {label && (
            <h2
              className='mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              {label}
            </h2>
          )}
          <h2 className='text-balance text-3xl font-semibold tracking-tight sm:text-4xl'>{title}</h2>
          {description && (
            <p className='mx-auto mt-4 max-w-2xl text-balance text-base leading-7 text-muted-foreground sm:text-lg'>
              {description}
            </p>
          )}
        </div>
        <div className='mt-16 grid gap-8 sm:grid-cols-3'>
          {results.map((result) => (
            <div key={result.label} className='marketing-card text-center'>
              <div className='text-4xl font-bold tracking-tight sm:text-5xl'>{result.metric}</div>
              <div className='mt-2 text-lg font-semibold'>{result.label}</div>
              <p className='mt-2 text-base leading-7 text-muted-foreground'>{result.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
