'use client'

import Link from 'next/link'
import { ArrowUpRight, MapPin, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface LocalBusinessHeroProps {
  readonly businessName: string
  readonly tagline: string
  readonly description: string
  readonly address: string
  readonly phone: string
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly className?: string
}

export function LocalBusinessHero({
  businessName,
  tagline,
  description,
  address,
  phone,
  primaryCta,
  className = '',
}: LocalBusinessHeroProps) {
  return (
    <section
      className={`flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 pb-20 pt-32 sm:px-6 md:pb-24 ${className}`}
    >
      <div className='mx-auto w-full max-w-6xl'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl lg:text-7xl'>
            {businessName}
          </h1>
          <p className='mt-4 text-lg font-medium text-muted-foreground sm:text-xl'>{tagline}</p>
          <p className='mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground'>
            {description}
          </p>
          <div className='mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground'>
            <span className='inline-flex items-center gap-1.5'>
              <MapPin className='h-4 w-4' />
              {address}
            </span>
            <span className='inline-flex items-center gap-1.5'>
              <Phone className='h-4 w-4' />
              {phone}
            </span>
          </div>
          <div className='mx-auto mt-10'>
            <Button
              className='h-12 px-8 text-base font-semibold'
              render={(props) => (
                <Link {...props} href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowUpRight className='h-5 w-5' />
                </Link>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
