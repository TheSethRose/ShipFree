interface ExampleSectionHeaderProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly align?: 'left' | 'center'
}

export function ExampleSectionHeader({ label, title, description, align = 'center' }: ExampleSectionHeaderProps) {
  return (
    <div className={`mx-auto max-w-2xl ${align === 'center' ? 'text-center' : ''}`}>
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
  )
}
