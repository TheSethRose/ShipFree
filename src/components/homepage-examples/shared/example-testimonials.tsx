import { ExampleSectionHeader } from './example-section-header'

interface Testimonial {
  readonly quote: string
  readonly name: string
  readonly role?: string
}

interface ExampleTestimonialsProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly testimonials: readonly Testimonial[]
  readonly background?: 'white' | 'muted'
  readonly className?: string
}

export function ExampleTestimonials({
  label,
  title,
  description,
  testimonials,
  background = 'white',
  className = '',
}: ExampleTestimonialsProps) {
  const bgClass = background === 'muted' ? 'bg-[#F4F4F5]' : 'bg-white'

  return (
    <section className={`section-padding border-b border-[#E4E4E7] ${bgClass} ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <ExampleSectionHeader label={label} title={title} description={description} />
        <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((t) => (
            <div key={t.name} className='group marketing-card'>
              <p className='text-base leading-7 text-muted-foreground'>"{t.quote}"</p>
              <div className='mt-6'>
                <div className='text-sm font-semibold'>{t.name}</div>
                {t.role && <div className='text-xs text-muted-foreground'>{t.role}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
