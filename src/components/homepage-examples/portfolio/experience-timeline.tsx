interface ExperienceItem {
  readonly period: string
  readonly role: string
  readonly company: string
  readonly description: string
}

interface ExperienceTimelineProps {
  readonly title: string
  readonly description?: string
  readonly items: readonly ExperienceItem[]
  readonly className?: string
}

export function ExperienceTimeline({
  title,
  description,
  items,
  className = '',
}: ExperienceTimelineProps) {
  return (
    <section id='experience' className={`section-padding bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        <div className='mt-12 mx-auto max-w-2xl space-y-0'>
          {items.map((item, index) => (
            <div key={index} className='relative flex gap-6'>
              <div className='flex flex-col items-center pt-1'>
                <div className='h-2.5 w-2.5 rounded-full bg-foreground' />
                {index < items.length - 1 && (
                  <div className='mt-2 h-full min-h-[4rem] w-px bg-[#E4E4E7]' />
                )}
              </div>
              <div className={`pb-10 ${index === items.length - 1 ? '' : ''}`}>
                <p
                  className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
                  style={{ fontFamily: 'var(--font-geist-mono)' }}
                >
                  {item.period}
                </p>
                <h3 className='mt-1.5 text-lg font-semibold'>{item.role}</h3>
                <p className='text-sm font-medium text-muted-foreground'>
                  {item.company}
                </p>
                <p className='mt-2 text-base leading-7 text-muted-foreground'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
