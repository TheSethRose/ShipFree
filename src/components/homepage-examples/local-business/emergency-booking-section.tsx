'use client'

import Link from 'next/link'
import { Phone, FileText } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface BookingOption {
  readonly title: string
  readonly description: string
  readonly cta: { readonly label: string; readonly href: string }
}

interface EmergencyBookingSectionProps {
  readonly title?: string
  readonly description?: string
  readonly urgent: BookingOption
  readonly planned: BookingOption
  readonly className?: string
}

export function EmergencyBookingSection({
  title,
  description,
  urgent,
  planned,
  className = '',
}: EmergencyBookingSectionProps) {
  return (
    <section id='quote' className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        {title && (
          <div className='max-w-2xl'>
            <h2 className='section-heading'>{title}</h2>
            {description && (
              <p className='section-description'>{description}</p>
            )}
          </div>
        )}

        <div className={`grid gap-6 sm:grid-cols-2 ${title ? 'mt-12' : ''}`}>
          <div className='marketing-card'>
            <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
              Urgent
            </p>
            <h3 className='mt-3 text-xl font-semibold'>{urgent.title}</h3>
            <p className='mt-2 text-base leading-7 text-muted-foreground'>
              {urgent.description}
            </p>
            <div className='mt-6'>
              <Button
                className='h-12 w-full text-base font-semibold'
                render={(props) => (
                  <Link {...props} href={urgent.cta.href}>
                    <Phone className='h-4 w-4' />
                    {urgent.cta.label}
                  </Link>
                )}
              />
            </div>
          </div>

          <div className='marketing-card'>
            <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
              Planned
            </p>
            <h3 className='mt-3 text-xl font-semibold'>{planned.title}</h3>
            <p className='mt-2 text-base leading-7 text-muted-foreground'>
              {planned.description}
            </p>
            <div className='mt-6'>
              <Button
                variant='outline'
                className='h-12 w-full bg-white text-base font-semibold'
                render={(props) => (
                  <Link {...props} href={planned.cta.href}>
                    <FileText className='h-4 w-4' />
                    {planned.cta.label}
                  </Link>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
