interface Integration {
  readonly name: string
  readonly category: string
}

interface SaasIntegrationsProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly integrations: readonly Integration[]
  readonly className?: string
}

export function SaasIntegrations({
  label,
  title,
  description,
  integrations,
  className = '',
}: SaasIntegrationsProps) {
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
        <div className='mt-16 flex flex-wrap items-center justify-center gap-4'>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className='flex items-center gap-3 rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] px-5 py-3 shadow-sm'
            >
              <span className='text-sm font-semibold'>{integration.name}</span>
              <span className='text-xs text-muted-foreground'>{integration.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
