interface ExperienceItem {
  readonly role: string
  readonly company: string
  readonly period: string
  readonly description: string
}

interface ExperienceTimelineProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly items: readonly ExperienceItem[]
  readonly className?: string
}

export function ExperienceTimeline({ label, title, description, items, className = '' }: ExperienceTimelineProps) {
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
        <div className='mt-16 mx-auto max-w-2xl space-y-8'>
          {items.map((item, index) => (
            <div key={index} className='relative flex gap-6'>
              <div className='flex flex-col items-center'>
                <div className='h-3 w-3 rounded-full bg-foreground' />
                {index < items.length - 1 && <div className='mt-2 h-full w-px bg-[#E4E4E7]' />}
              </div>
              <div className='pb-8'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  {item.period}
                </p>
                <h3 className='mt-1 text-lg font-semibold'>{item.role}</h3>
                <p className='text-sm font-medium text-muted-foreground'>{item.company}</p>
                <p className='mt-2 text-base leading-7 text-muted-foreground'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
