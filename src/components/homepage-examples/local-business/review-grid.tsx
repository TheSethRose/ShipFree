interface Review {
  readonly rating: string
  readonly quote: string
  readonly name: string
  readonly location: string
  readonly service: string
}

interface ReviewGridProps {
  readonly title: string
  readonly description?: string
  readonly reviews: readonly Review[]
  readonly className?: string
}

export function ReviewGrid({
  title,
  description,
  reviews,
  className = '',
}: ReviewGridProps) {
  return (
    <section id='reviews' className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        <div className='mt-12 grid gap-6 lg:grid-cols-3'>
          {reviews.map((review) => (
            <article key={review.name} className='marketing-card'>
              <p className='text-sm tracking-wider text-foreground'>
                {review.rating}
              </p>
              <p className='mt-3 text-base leading-7 text-muted-foreground'>
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className='mt-5 border-t border-[#E4E4E7] pt-4'>
                <p className='text-sm font-semibold'>{review.name}</p>
                <p className='text-sm text-muted-foreground'>
                  {review.location} &middot; {review.service}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
