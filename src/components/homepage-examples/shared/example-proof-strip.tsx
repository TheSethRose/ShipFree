import { ExampleSectionHeader } from './example-section-header'

interface ProofItem {
  readonly name: string
  readonly value?: string
}

interface ExampleProofStripProps {
  readonly label?: string
  readonly items: readonly ProofItem[]
  readonly background?: 'white' | 'muted'
  readonly className?: string
}

export function ExampleProofStrip({ label, items, background = 'muted', className = '' }: ExampleProofStripProps) {
  const bgClass = background === 'muted' ? 'bg-[#F4F4F5]' : 'bg-white'

  return (
    <section className={`section-padding border-b border-[#E4E4E7] ${bgClass} ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {label && (
          <p
            className='mb-12 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            {label}
          </p>
        )}
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {items.map((item) => (
            <div
              key={item.name}
              className='rounded-2xl border border-[#E4E4E7] bg-white p-6 text-center shadow-sm'
            >
              {item.value && (
                <div className='text-4xl font-bold tracking-tight sm:text-5xl'>{item.value}</div>
              )}
              <div className={`text-sm font-medium text-muted-foreground ${item.value ? 'mt-2' : ''}`}>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
