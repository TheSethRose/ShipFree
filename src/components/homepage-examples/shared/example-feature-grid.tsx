import { ExampleSectionHeader } from './example-section-header'

interface Feature {
  readonly title: string
  readonly description: string
}

interface ExampleFeatureGridProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly features: readonly Feature[]
  readonly background?: 'white' | 'muted'
  readonly columns?: 2 | 3
  readonly className?: string
}

export function ExampleFeatureGrid({
  label,
  title,
  description,
  features,
  background = 'white',
  columns = 3,
  className = '',
}: ExampleFeatureGridProps) {
  const bgClass = background === 'muted' ? 'bg-[#F4F4F5]' : 'bg-white'
  const gridCols = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section className={`section-padding border-b border-[#E4E4E7] ${bgClass} ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <ExampleSectionHeader label={label} title={title} description={description} />
        <div className={`mt-16 grid gap-8 ${gridCols}`}>
          {features.map((feature) => (
            <div key={feature.title} className='group marketing-card'>
              <h3 className='text-lg font-semibold'>{feature.title}</h3>
              <p className='card-description'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
