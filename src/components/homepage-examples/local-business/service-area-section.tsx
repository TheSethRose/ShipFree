interface ServiceArea {
  readonly name: string
  readonly distance?: string
}

interface ServiceAreaSectionProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly areas: readonly ServiceArea[]
  readonly className?: string
}

export function ServiceAreaSection({ label, title, description, areas, className = '' }: ServiceAreaSectionProps) {
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
        <div className='mt-12 flex flex-wrap justify-center gap-3'>
          {areas.map((area) => (
            <div
              key={area.name}
              className='flex items-center gap-2 rounded-full border border-[#E4E4E7] bg-white px-5 py-2.5 shadow-sm'
            >
              <span className='text-sm font-medium'>{area.name}</span>
              {area.distance && (
                <span className='text-xs text-muted-foreground'>{area.distance}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
