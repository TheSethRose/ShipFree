import { Clock, MapPin, Phone, Mail } from 'lucide-react'

interface HoursEntry {
  readonly day: string
  readonly hours: string
}

interface HoursContactSectionProps {
  readonly label?: string
  readonly title: string
  readonly hours: readonly HoursEntry[]
  readonly address: string
  readonly phone: string
  readonly email?: string
  readonly className?: string
}

export function HoursContactSection({
  label,
  title,
  hours,
  address,
  phone,
  email,
  className = '',
}: HoursContactSectionProps) {
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
        </div>
        <div className='mt-16 grid gap-8 md:grid-cols-2'>
          <div className='rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-6'>
            <div className='mb-4 flex items-center gap-2'>
              <Clock className='h-5 w-5 text-muted-foreground' />
              <h3 className='text-lg font-semibold'>Hours</h3>
            </div>
            <div className='space-y-2'>
              {hours.map((entry) => (
                <div key={entry.day} className='flex justify-between text-base'>
                  <span className='font-medium'>{entry.day}</span>
                  <span className='text-muted-foreground'>{entry.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-6'>
            <div className='mb-4 flex items-center gap-2'>
              <MapPin className='h-5 w-5 text-muted-foreground' />
              <h3 className='text-lg font-semibold'>Contact</h3>
            </div>
            <div className='space-y-3'>
              <div className='flex items-center gap-2 text-base text-muted-foreground'>
                <MapPin className='h-4 w-4 shrink-0' />
                {address}
              </div>
              <div className='flex items-center gap-2 text-base text-muted-foreground'>
                <Phone className='h-4 w-4 shrink-0' />
                {phone}
              </div>
              {email && (
                <div className='flex items-center gap-2 text-base text-muted-foreground'>
                  <Mail className='h-4 w-4 shrink-0' />
                  {email}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
