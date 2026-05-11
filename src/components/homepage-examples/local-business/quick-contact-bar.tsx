import Link from 'next/link'
import { Phone, Clock, MapPin, FileText } from 'lucide-react'

interface QuickContactItem {
  readonly label: string
  readonly value: string
  readonly href?: string
}

interface QuickContactBarProps {
  readonly items: readonly QuickContactItem[]
  readonly className?: string
}

const iconMap: Record<string, React.ReactNode> = {
  Call: <Phone className='h-4 w-4' />,
  Hours: <Clock className='h-4 w-4' />,
  'Service area': <MapPin className='h-4 w-4' />,
  Quotes: <FileText className='h-4 w-4' />,
}

export function QuickContactBar({
  items,
  className = '',
}: QuickContactBarProps) {
  return (
    <section className={`bg-[#F4F4F5] px-4 py-6 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {items.map((item) => {
            const content = (
              <div className='flex items-center gap-3 rounded-xl border border-[#E4E4E7] bg-white p-4 shadow-sm transition-all hover:border-foreground/20 hover:shadow-md'>
                <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F4F4F5] text-muted-foreground'>
                  {iconMap[item.label] ?? <FileText className='h-4 w-4' />}
                </span>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
                    {item.label}
                  </p>
                  <p className='mt-0.5 text-sm font-medium'>{item.value}</p>
                </div>
              </div>
            )

            if (item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className='block'
                >
                  {content}
                </Link>
              )
            }

            return <div key={item.label}>{content}</div>
          })}
        </div>
      </div>
    </section>
  )
}
