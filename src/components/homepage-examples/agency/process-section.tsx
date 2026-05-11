interface ProcessStep {
  readonly step: string
  readonly title: string
  readonly description: string
}

interface ProcessSectionProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly steps: readonly ProcessStep[]
  readonly className?: string
}

export function ProcessSection({ label, title, description, steps, className = '' }: ProcessSectionProps) {
  return (
    <section className={`section-padding border-b border-[#E4E4E7] bg-white ${className}`}>
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
        <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {steps.map((step) => (
            <div key={step.step} className='relative'>
              <span
                className='mb-4 block text-5xl font-bold text-[#E4E4E7]'
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                {step.step}
              </span>
              <h3 className='text-lg font-semibold'>{step.title}</h3>
              <p className='mt-2 text-base leading-7 text-muted-foreground'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
