import { Check } from 'lucide-react'

interface LicenseTier {
  readonly name: string
  readonly description: string
  readonly rights: readonly string[]
}

interface LicenseSectionProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly tiers: readonly LicenseTier[]
  readonly className?: string
}

export function LicenseSection({ label, title, description, tiers, className = '' }: LicenseSectionProps) {
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
          {tiers.map((tier) => (
            <div key={tier.name} className='marketing-card'>
              <h3 className='text-lg font-semibold'>{tier.name}</h3>
              <p className='card-description'>{tier.description}</p>
              <ul className='mt-4 space-y-2'>
                {tier.rights.map((right) => (
                  <li key={right} className='flex items-start gap-2 text-sm'>
                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-foreground' />
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
