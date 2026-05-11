import { Star } from 'lucide-react'

interface Review {
  readonly name: string
  readonly rating: number
  readonly text: string
  readonly date?: string
}

interface ReviewGridProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly reviews: readonly Review[]
  readonly className?: string
}

export function ReviewGrid({ label, title, description, reviews, className = '' }: ReviewGridProps) {
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
          {reviews.map((review) => (
            <div key={review.name} className='marketing-card'>
              <div className='mb-3 flex gap-0.5'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? 'fill-foreground text-foreground' : 'text-[#E4E4E7]'}`}
                  />
                ))}
              </div>
              <p className='text-base leading-7 text-muted-foreground'>"{review.text}"</p>
              <div className='mt-4 flex items-center justify-between'>
                <span className='text-sm font-semibold'>{review.name}</span>
                {review.date && <span className='text-xs text-muted-foreground'>{review.date}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
