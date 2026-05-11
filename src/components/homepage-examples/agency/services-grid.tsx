interface Service {
  readonly title: string
  readonly description: string
}

interface ServicesGridProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly services: readonly Service[]
  readonly className?: string
}

export function ServicesGrid({ label, title, description, services, className = '' }: ServicesGridProps) {
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
        <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <div key={service.title} className='marketing-card'>
              <span className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F4F4F5] text-lg font-bold'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className='text-lg font-semibold'>{service.title}</h3>
              <p className='card-description'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
