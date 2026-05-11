import { PackageContentsPanel } from './package-contents-panel'

interface PreviewBlock {
  readonly title: string
  readonly description: string
}

interface ProductShowcaseProps {
  readonly title: string
  readonly description?: string
  readonly highlights: readonly string[]
  readonly previewBlocks: readonly PreviewBlock[]
  readonly className?: string
}

export function ProductShowcase({
  title,
  description,
  highlights,
  previewBlocks,
  className = '',
}: ProductShowcaseProps) {
  return (
    <section id='preview' className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
          {/* Left */}
          <div>
            <p
              className='section-kicker'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              Preview
            </p>
            <h2 className='section-heading'>{title}</h2>
            {description && (
              <p className='section-description'>{description}</p>
            )}

            <ul className='mt-8 space-y-3'>
              {highlights.map((item) => (
                <li
                  key={item}
                  className='flex items-start gap-3 text-sm text-muted-foreground'
                >
                  <svg
                    className='mt-0.5 h-4 w-4 shrink-0 text-foreground'
                    viewBox='0 0 16 16'
                    fill='none'
                  >
                    <path
                      d='M3 8L6.5 11.5L13 4.5'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — file browser */}
          <div className='flex items-center'>
            <PackageContentsPanel previewBlocks={previewBlocks} />
          </div>
        </div>
      </div>
    </section>
  )
}
