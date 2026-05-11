interface FitSectionProps {
  readonly title: string
  readonly description?: string
  readonly goodFit: readonly string[]
  readonly badFit: readonly string[]
  readonly className?: string
}

export function FitSection({
  title,
  description,
  goodFit,
  badFit,
  className = '',
}: FitSectionProps) {
  return (
    <section id='fit' className={`section-padding bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        {/* Decision rule card */}
        <div className='mx-auto mt-10 max-w-xl rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-5 text-center'>
          <p className='text-sm leading-6 text-muted-foreground'>
            <span className='font-semibold text-foreground'>Decision rule:</span>{' '}
            if there is no owner, no recurring pain, or no clear next action, do
            not book the call yet.
          </p>
        </div>

        {/* Two columns */}
        <div className='mt-10 grid gap-6 md:grid-cols-2'>
          {/* Good fit */}
          <div className='rounded-2xl border border-[#E4E4E7] bg-white p-6 shadow-sm'>
            <p
              className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              Good fit
            </p>
            <div className='mt-4 space-y-2'>
              {goodFit.map((item) => (
                <div
                  key={item}
                  className='flex items-start gap-3 rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-3'
                >
                  <svg
                    className='mt-0.5 h-4 w-4 shrink-0 text-foreground'
                    viewBox='0 0 16 16'
                    fill='none'
                  >
                    <path
                      d='M3 8L6.5 11.5L13 4.5'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <span className='text-sm leading-6 text-muted-foreground'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Not a fit */}
          <div className='rounded-2xl border border-[#E4E4E7] bg-white p-6 shadow-sm'>
            <p
              className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              Not a fit for
            </p>
            <div className='mt-4 space-y-2'>
              {badFit.map((item) => (
                <div
                  key={item}
                  className='flex items-start gap-3 rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-3'
                >
                  <svg
                    className='mt-0.5 h-4 w-4 shrink-0 text-muted-foreground'
                    viewBox='0 0 16 16'
                    fill='none'
                  >
                    <path
                      d='M4 4L12 12M12 4L4 12'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                    />
                  </svg>
                  <span className='text-sm leading-6 text-muted-foreground'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
