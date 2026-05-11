interface GalleryItem {
  readonly alt: string
}

interface GalleryPreviewProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly items: readonly GalleryItem[]
  readonly className?: string
}

export function GalleryPreview({ label, title, description, items, className = '' }: GalleryPreviewProps) {
  return (
    <section className={`section-padding border-b border-[#E4E4E7] bg-white ${className}`}>
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
        <div className='mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {items.map((item, index) => (
            <div
              key={index}
              className='group aspect-square overflow-hidden rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] transition-all duration-200 hover:border-foreground/20 hover:shadow-md'
            >
              <div className='flex h-full items-center justify-center'>
                <span className='text-xs font-medium text-muted-foreground'>{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
