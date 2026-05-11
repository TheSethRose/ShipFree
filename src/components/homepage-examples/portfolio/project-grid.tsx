interface Project {
  readonly title: string
  readonly category: string
  readonly description: string
}

interface ProjectGridProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly projects: readonly Project[]
  readonly className?: string
}

export function ProjectGrid({ label, title, description, projects, className = '' }: ProjectGridProps) {
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
        <div className='mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <div key={project.title} className='group marketing-card cursor-pointer'>
              <div className='mb-4 aspect-[4/3] rounded-xl bg-[#F4F4F5]' />
              <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                {project.category}
              </p>
              <h3 className='mt-2 text-lg font-semibold'>{project.title}</h3>
              <p className='card-description'>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
