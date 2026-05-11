interface PreviewBlock {
  readonly title: string
  readonly description: string
}

interface PackageContentsPanelProps {
  readonly previewBlocks: readonly PreviewBlock[]
  readonly className?: string
}

const folders = ['/pages', '/components', '/docs', '/data', '/license'] as const

export function PackageContentsPanel({
  previewBlocks,
  className = '',
}: PackageContentsPanelProps) {
  return (
    <div
      className={`rounded-2xl border border-[#E4E4E7] bg-white p-1 shadow-sm ${className}`}
    >
      {/* Fake toolbar */}
      <div className='flex items-center gap-1.5 rounded-t-xl bg-[#F4F4F5] px-3 py-2'>
        <span className='h-2.5 w-2.5 rounded-full bg-[#E4E4E7]' />
        <span className='h-2.5 w-2.5 rounded-full bg-[#E4E4E7]' />
        <span className='h-2.5 w-2.5 rounded-full bg-[#E4E4E7]' />
      </div>

      <div className='grid gap-0 md:grid-cols-3'>
        {/* Folder list */}
        <div className='border-b border-[#E4E4E7] p-4 md:border-b-0 md:border-r'>
          <p
            className='text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground'
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            Folders
          </p>
          <ul className='mt-3 space-y-2'>
            {folders.map((folder) => (
              <li
                key={folder}
                className='flex items-center gap-2 text-sm font-medium text-muted-foreground'
              >
                <svg className='h-4 w-4 shrink-0 text-foreground' viewBox='0 0 16 16' fill='none'>
                  <path d='M2 4H6L8 6H14V12C14 12.5523 13.5523 13 13 13H3C2.44772 13 2 12.5523 2 12V4Z' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
                </svg>
                {folder}
              </li>
            ))}
          </ul>
        </div>

        {/* Preview blocks */}
        <div className='col-span-2 p-4'>
          <div className='grid gap-3 sm:grid-cols-2'>
            {previewBlocks.map((block) => (
              <div
                key={block.title}
                className='rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-4'
              >
                <p className='text-sm font-semibold'>{block.title}</p>
                <p className='mt-1 text-xs leading-5 text-muted-foreground'>
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
