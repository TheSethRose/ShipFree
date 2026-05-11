interface ShowcaseFeature {
  readonly title: string
  readonly description: string
}

interface ProductShowcaseProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly features: readonly ShowcaseFeature[]
  readonly className?: string
}

export function ProductShowcase({ label, title, description, features, className = '' }: ProductShowcaseProps) {
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
        <div className='mt-16 grid gap-8 lg:grid-cols-2'>
          <div className='rounded-3xl border border-[#E4E4E7] bg-white p-3 shadow-xl shadow-black/5'>
            <div className='rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-8 flex items-center justify-center min-h-[300px]'>
              <span className='text-sm font-medium text-muted-foreground'>Product detail image</span>
            </div>
          </div>
          <div className='flex flex-col justify-center gap-6'>
            {features.map((feature) => (
              <div key={feature.title}>
                <h3 className='text-lg font-semibold'>{feature.title}</h3>
                <p className='mt-2 text-base leading-7 text-muted-foreground'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
