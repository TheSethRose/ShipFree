interface GalleryItem {
  readonly title: string
  readonly before: string
  readonly after: string
}

interface BeforeAfterGalleryProps {
  readonly title: string
  readonly description?: string
  readonly items: readonly GalleryItem[]
  readonly className?: string
}

export function BeforeAfterGallery({
  title,
  description,
  items,
  className = '',
}: BeforeAfterGalleryProps) {
  return (
    <section className={`section-padding bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        <div className='mt-12 grid gap-6 lg:grid-cols-3'>
          {items.map((item) => (
            <article key={item.title} className='marketing-card'>
              <h3 className='text-lg font-semibold'>{item.title}</h3>

              <div className='mt-5'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  Before
                </p>
                <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                  {item.before}
                </p>
              </div>

              <div className='mt-4 border-t border-[#E4E4E7] pt-4'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600'>
                  After
                </p>
                <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                  {item.after}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
