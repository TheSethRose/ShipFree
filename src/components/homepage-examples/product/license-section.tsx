interface LicenseSectionProps {
  readonly title: string
  readonly note: string
  readonly allowed: readonly string[]
  readonly notAllowed: readonly string[]
  readonly className?: string
}

export function LicenseSection({
  title,
  note,
  allowed,
  notAllowed,
  className = '',
}: LicenseSectionProps) {
  return (
    <section id='license' className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-12 lg:grid-cols-12 lg:gap-10'>
          {/* Left */}
          <div className='lg:col-span-4'>
            <h2 className='section-heading'>{title}</h2>
            <p className='mt-4 text-sm leading-6 text-muted-foreground'>
              {note}
            </p>

            {/* License summary card */}
            <div className='mt-6 rounded-2xl border border-[#E4E4E7] bg-white p-5 shadow-sm'>
              {[
                { label: 'License type', value: 'Commercial' },
                { label: 'Projects', value: 'Personal + client' },
                { label: 'Redistribution', value: 'Restricted' },
                { label: 'Modification', value: 'Allowed' },
              ].map((row) => (
                <div
                  key={row.label}
                  className='flex items-center justify-between border-b border-[#E4E4E7] py-2.5 last:border-0'
                >
                  <span className='text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
                    {row.label}
                  </span>
                  <span className='text-sm font-medium'>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className='lg:col-span-8'>
            <div className='grid gap-6 md:grid-cols-2'>
              {/* Allowed */}
              <div className='rounded-2xl border border-[#E4E4E7] bg-white p-6 shadow-sm'>
                <p
                  className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
                  style={{ fontFamily: 'var(--font-geist-mono)' }}
                >
                  Allowed
                </p>
                <div className='mt-4 space-y-2'>
                  {allowed.map((item) => (
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

              {/* Not allowed */}
              <div className='rounded-2xl border border-[#E4E4E7] bg-white p-6 shadow-sm'>
                <p
                  className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
                  style={{ fontFamily: 'var(--font-geist-mono)' }}
                >
                  Not allowed
                </p>
                <div className='mt-4 space-y-2'>
                  {notAllowed.map((item) => (
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
        </div>
      </div>
    </section>
  )
}
