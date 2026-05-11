'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface Service {
  readonly title: string
  readonly description: string
  readonly startingAt: string
  readonly duration: string
  readonly idealFor: string
  readonly cta: { readonly label: string; readonly href: string }
}

interface LocalServicesSectionProps {
  readonly title: string
  readonly description?: string
  readonly services: readonly Service[]
  readonly className?: string
}

export function LocalServicesSection({
  title,
  description,
  services,
  className = '',
}: LocalServicesSectionProps) {
  return (
    <section id='services' className={`section-padding bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        <div className='mt-12 grid gap-6 sm:grid-cols-2'>
          {services.map((service) => (
            <article
              key={service.title}
              className='marketing-card flex flex-col'
            >
              <div className='flex items-start justify-between gap-4'>
                <h3 className='text-lg font-semibold'>{service.title}</h3>
                <span className='shrink-0 rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-2.5 py-0.5 text-xs font-semibold text-muted-foreground'>
                  {service.startingAt}
                </span>
              </div>

              <p className='card-description'>{service.description}</p>

              <div className='mt-4 space-y-2'>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <span
                    className='text-xs font-semibold uppercase tracking-[0.14em]'
                    style={{ fontFamily: 'var(--font-geist-mono)' }}
                  >
                    Duration
                  </span>
                  <span>{service.duration}</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <span
                    className='text-xs font-semibold uppercase tracking-[0.14em]'
                    style={{ fontFamily: 'var(--font-geist-mono)' }}
                  >
                    Ideal for
                  </span>
                  <span>{service.idealFor}</span>
                </div>
              </div>

              <div className='mt-auto pt-5'>
                <Button
                  variant='outline'
                  className='w-full bg-white'
                  render={(props) => (
                    <Link {...props} href={service.cta.href}>
                      {service.cta.label}
                      <ArrowUpRight className='h-4 w-4' />
                    </Link>
                  )}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
