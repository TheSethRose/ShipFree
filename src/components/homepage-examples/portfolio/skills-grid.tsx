interface Skill {
  readonly name: string
  readonly level?: string
}

interface SkillCategory {
  readonly category: string
  readonly skills: readonly Skill[]
}

interface SkillsGridProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly categories: readonly SkillCategory[]
  readonly className?: string
}

export function SkillsGrid({ label, title, description, categories, className = '' }: SkillsGridProps) {
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
        <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {categories.map((cat) => (
            <div key={cat.category} className='marketing-card'>
              <h3 className='text-lg font-semibold'>{cat.category}</h3>
              <div className='mt-4 flex flex-wrap gap-2'>
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className='rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-3 py-1 text-sm font-medium'
                  >
                    {skill.name}
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
