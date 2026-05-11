interface ServiceAreaSectionProps {
  readonly title: string
  readonly description?: string
  readonly cities: readonly string[]
  readonly note?: string
  readonly className?: string
}

export function ServiceAreaSection({
  title,
  description,
  cities,
  note,
  className = '',
}: ServiceAreaSectionProps) {
  return (
    <section id='service-area' className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
          <div>
            <h2 className='section-heading'>{title}</h2>
            {description && (
              <p className='section-description'>{description}</p>
            )}
            {note && (
              <p className='mt-6 text-sm leading-6 text-muted-foreground'>
                {note}
              </p>
            )}
          </div>

          <div className='flex flex-wrap content-start gap-3'>
            {cities.map((city) => (
              <span
                key={city}
                className='rounded-full border border-[#E4E4E7] bg-white px-4 py-2 text-sm font-medium shadow-sm'
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
