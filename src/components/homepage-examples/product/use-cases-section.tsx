interface UseCase {
  readonly title: string
  readonly description: string
  readonly bestFor: string
}

interface UseCasesSectionProps {
  readonly title: string
  readonly description?: string
  readonly cases: readonly UseCase[]
  readonly className?: string
}

const badges = ['Founder', 'Freelancer', 'Creator', 'Team'] as const
const staticLines: Record<string, string> = {
  'Launch a new offer':
    'Use this when the offer is ready but the page is not.',
  'Package client work':
    'Use this when repeated delivery needs a reusable base.',
  'Sell a resource':
    'Use this when the buyer needs to understand what is included.',
  'Standardize internal pages':
    'Use this when teams need consistent product pages.',
}

export function UseCasesSection({
  title,
  description,
  cases,
  className = '',
}: UseCasesSectionProps) {
  return (
    <section id='use-cases' className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {cases.map((useCase, index) => (
            <article key={useCase.title} className='marketing-card'>
              <span className='inline-block rounded-full border border-[#E4E4E7] bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground'>
                {badges[index]}
              </span>
              <h3 className='mt-3 text-base font-semibold'>
                {useCase.title}
              </h3>
              <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                {useCase.description}
              </p>
              <div className='mt-4 border-t border-[#E4E4E7] pt-3'>
                <p className='text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
                  Best for
                </p>
                <p className='mt-1 text-sm font-medium'>
                  {useCase.bestFor}
                </p>
                <p className='mt-2 text-xs leading-5 text-muted-foreground'>
                  {staticLines[useCase.title]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
