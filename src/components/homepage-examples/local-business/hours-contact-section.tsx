import { Clock, MapPin, Phone, Mail } from 'lucide-react'

interface HoursEntry {
  readonly label: string
  readonly value: string
}

interface HoursContactSectionProps {
  readonly title: string
  readonly phone: string
  readonly phoneHref: string
  readonly email: string
  readonly emailHref: string
  readonly address: string
  readonly serviceArea: string
  readonly hours: readonly HoursEntry[]
  readonly note?: string
  readonly className?: string
}

export function HoursContactSection({
  title,
  phone,
  phoneHref,
  email,
  emailHref,
  address,
  serviceArea,
  hours,
  note,
  className = '',
}: HoursContactSectionProps) {
  return (
    <section id='hours' className={`section-padding bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2'>
          <div className='marketing-card'>
            <div className='mb-4 flex items-center gap-2'>
              <MapPin className='h-5 w-5 text-muted-foreground' />
              <h3 className='text-lg font-semibold'>Contact</h3>
            </div>
            <div className='space-y-3'>
              <a
                href={phoneHref}
                className='flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-foreground'
              >
                <Phone className='h-4 w-4 shrink-0' />
                {phone}
              </a>
              <a
                href={emailHref}
                className='flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-foreground'
              >
                <Mail className='h-4 w-4 shrink-0' />
                {email}
              </a>
              <div className='flex items-center gap-2 text-base text-muted-foreground'>
                <MapPin className='h-4 w-4 shrink-0' />
                {address}
              </div>
              <div className='flex items-center gap-2 text-base text-muted-foreground'>
                <MapPin className='h-4 w-4 shrink-0' />
                {serviceArea}
              </div>
            </div>
          </div>

          <div className='marketing-card'>
            <div className='mb-4 flex items-center gap-2'>
              <Clock className='h-5 w-5 text-muted-foreground' />
              <h3 className='text-lg font-semibold'>Hours</h3>
            </div>
            <div className='space-y-2'>
              {hours.map((entry) => (
                <div
                  key={entry.label}
                  className='flex justify-between text-base'
                >
                  <span className='font-medium'>{entry.label}</span>
                  <span className='text-muted-foreground'>{entry.value}</span>
                </div>
              ))}
            </div>
            {note && (
              <p className='mt-4 border-t border-[#E4E4E7] pt-3 text-sm text-muted-foreground'>
                {note}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
