interface IncludedFile {
  readonly name: string
  readonly format: string
  readonly description: string
  readonly category: string
}

interface IncludedFilesSectionProps {
  readonly title: string
  readonly description?: string
  readonly files: readonly IncludedFile[]
  readonly className?: string
}

export function IncludedFilesSection({
  title,
  description,
  files,
  className = '',
}: IncludedFilesSectionProps) {
  return (
    <section id='included' className={`section-padding bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        {/* Table-like manifest */}
        <div className='mt-12 overflow-hidden rounded-2xl border border-[#E4E4E7] bg-white shadow-sm'>
          {/* Header row */}
          <div className='hidden grid-cols-12 gap-4 border-b border-[#E4E4E7] bg-[#F4F4F5] px-6 py-3 sm:grid'>
            <span className='col-span-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
              File
            </span>
            <span className='col-span-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
              Description
            </span>
            <span className='col-span-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
              Format
            </span>
            <span className='col-span-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
              Category
            </span>
          </div>

          <div className='divide-y divide-[#E4E4E7]'>
            {files.map((file) => (
              <div
                key={file.name}
                className='grid gap-2 px-6 py-4 sm:grid-cols-12 sm:gap-4 sm:items-center'
              >
                <div className='sm:col-span-4'>
                  <p className='text-sm font-semibold'>{file.name}</p>
                </div>
                <div className='sm:col-span-5'>
                  <p className='text-sm text-muted-foreground'>
                    {file.description}
                  </p>
                </div>
                <div className='sm:col-span-1'>
                  <span
                    className='inline-block rounded-md border border-[#E4E4E7] bg-[#F4F4F5] px-2 py-0.5 text-xs font-mono font-medium'
                  >
                    {file.format}
                  </span>
                </div>
                <div className='sm:col-span-2'>
                  <span className='inline-block rounded-full border border-[#E4E4E7] bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground'>
                    {file.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
