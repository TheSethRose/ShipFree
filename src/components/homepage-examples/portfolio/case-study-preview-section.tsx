interface CaseStudy {
  readonly title: string
  readonly problem: string
  readonly approach: string
  readonly result: string
}

interface CaseStudyPreviewSectionProps {
  readonly title: string
  readonly description?: string
  readonly caseStudies: readonly CaseStudy[]
  readonly className?: string
}

export function CaseStudyPreviewSection({
  title,
  description,
  caseStudies,
  className = '',
}: CaseStudyPreviewSectionProps) {
  return (
    <section id='case-studies' className={`section-padding bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        <div className='mt-12 grid gap-6 lg:grid-cols-3'>
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className='marketing-card flex flex-col'
            >
              <h3 className='text-lg font-semibold leading-snug'>
                {study.title}
              </h3>

              <div className='mt-5 space-y-4'>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                    Problem
                  </p>
                  <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                    {study.problem}
                  </p>
                </div>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                    Approach
                  </p>
                  <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                    {study.approach}
                  </p>
                </div>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                    Result
                  </p>
                  <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                    {study.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
