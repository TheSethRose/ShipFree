interface NowAvailableSectionProps {
  readonly title: string
  readonly focus: readonly string[]
  readonly availableFor: readonly string[]
  readonly notAvailableFor: readonly string[]
  readonly className?: string
}

export function NowAvailableSection({
  title,
  focus,
  availableFor,
  notAvailableFor,
  className = '',
}: NowAvailableSectionProps) {
  return (
    <section className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <h2 className='section-heading max-w-2xl'>{title}</h2>

        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          <div className='marketing-card'>
            <p
              className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              Now
            </p>
            <ul className='mt-4 space-y-3'>
              {focus.map((item) => (
                <li
                  key={item}
                  className='flex items-start gap-2.5 text-sm leading-6 text-muted-foreground'
                >
                  <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground' />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='marketing-card'>
            <p
              className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              Available for
            </p>
            <ul className='mt-4 space-y-3'>
              {availableFor.map((item) => (
                <li
                  key={item}
                  className='flex items-start gap-2.5 text-sm leading-6 text-muted-foreground'
                >
                  <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500' />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='marketing-card'>
            <p
              className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              Not a fit for
            </p>
            <ul className='mt-4 space-y-3'>
              {notAvailableFor.map((item) => (
                <li
                  key={item}
                  className='flex items-start gap-2.5 text-sm leading-6 text-muted-foreground'
                >
                  <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#E4E4E7]' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
