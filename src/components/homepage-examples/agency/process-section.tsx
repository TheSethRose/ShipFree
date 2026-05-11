interface ProcessStep {
  readonly step: string
  readonly title: string
  readonly description: string
  readonly output: string
}

interface ProcessSectionProps {
  readonly title: string
  readonly description?: string
  readonly steps: readonly ProcessStep[]
  readonly className?: string
}

export function ProcessSection({
  title,
  description,
  steps,
  className = '',
}: ProcessSectionProps) {
  return (
    <section id='process' className={`section-padding bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        {/* Timeline */}
        <div className='mt-12 relative'>
          {/* Vertical line on desktop */}
          <div className='absolute left-[19px] top-0 hidden h-full w-px bg-[#E4E4E7] lg:block' />

          <div className='space-y-8'>
            {steps.map((step) => (
              <div key={step.step} className='relative flex gap-6 lg:gap-8'>
                {/* Node */}
                <div className='relative z-10 flex shrink-0 flex-col items-center'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E4E7] bg-white shadow-sm'>
                    <span
                      className='text-sm font-bold'
                      style={{ fontFamily: 'var(--font-geist-mono)' }}
                    >
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className='flex-1 rounded-2xl border border-[#E4E4E7] bg-white p-5 shadow-sm sm:p-6'>
                  <h3 className='text-lg font-semibold'>{step.title}</h3>
                  <p className='mt-2 text-base leading-7 text-muted-foreground'>
                    {step.description}
                  </p>
                  <div className='mt-4 inline-flex items-center gap-2 rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-3 py-1'>
                    <span className='text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
                      Output
                    </span>
                    <span className='h-px w-3 bg-[#E4E4E7]' />
                    <span className='text-xs font-medium'>{step.output}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process theater note */}
        <div className='mt-10 rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-6'>
          <p className='text-base font-semibold'>
            The point is not process theater.
          </p>
          <p className='mt-2 text-sm leading-6 text-muted-foreground'>
            Each step produces a concrete artifact or working tool. If a step
            does not reduce uncertainty, it should not exist.
          </p>
        </div>
      </div>
    </section>
  )
}
