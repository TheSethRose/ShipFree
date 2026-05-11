interface ProductPreviewCardProps {
  readonly title: string
  readonly subtitle: string
  readonly version: string
  readonly meta: readonly string[]
  readonly contents: readonly string[]
  readonly className?: string
}

export function ProductPreviewCard({
  title,
  subtitle,
  version,
  meta,
  contents,
  className = '',
}: ProductPreviewCardProps) {
  return (
    <div
      className={`w-full max-w-sm rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-5 shadow-sm ${className}`}
    >
      {/* Header */}
      <div className='flex items-center justify-between'>
        <span className='text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
          {subtitle}
        </span>
        <span className='rounded-full border border-[#E4E4E7] bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground'>
          {version}
        </span>
      </div>

      {/* Product name */}
      <p className='mt-3 text-xl font-semibold'>{title}</p>

      {/* Meta grid */}
      <div className='mt-4 grid grid-cols-2 gap-2'>
        {meta.map((item) => (
          <div
            key={item}
            className='rounded-lg border border-[#E4E4E7] bg-white px-2.5 py-2 text-center text-xs font-medium shadow-sm'
          >
            {item}
          </div>
        ))}
      </div>

      {/* Contents list */}
      <div className='mt-5 border-t border-[#E4E4E7] pt-4'>
        <p className='text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
          Contents
        </p>
        <div className='mt-2 flex flex-wrap gap-2'>
          {contents.map((item) => (
            <span
              key={item}
              className='rounded-md border border-[#E4E4E7] bg-white px-2 py-1 text-xs font-medium shadow-sm'
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className='mt-4 flex items-center justify-between border-t border-[#E4E4E7] pt-3 text-xs text-muted-foreground'>
        <span className='flex items-center gap-1.5'>
          <span className='relative flex h-1.5 w-1.5'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75' />
            <span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500' />
          </span>
          Instant access
        </span>
        <span className='rounded-full border border-[#E4E4E7] bg-white px-2 py-0.5 text-[10px] font-semibold'>
          One-time purchase
        </span>
      </div>
    </div>
  )
}
