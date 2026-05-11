interface SkillCategory {
  readonly category: string
  readonly items: readonly string[]
}

interface SkillsGridProps {
  readonly title: string
  readonly description?: string
  readonly categories: readonly SkillCategory[]
  readonly className?: string
}

export function SkillsGrid({
  title,
  description,
  categories,
  className = '',
}: SkillsGridProps) {
  return (
    <section id='skills' className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {categories.map((cat) => (
            <div key={cat.category} className='marketing-card'>
              <h3 className='text-sm font-semibold'>{cat.category}</h3>
              <div className='mt-4 flex flex-wrap gap-2'>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className='rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-3 py-1 text-sm font-medium'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
