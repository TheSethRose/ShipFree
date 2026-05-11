'use client'

import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface AvailabilityCard {
  readonly title: string
  readonly status: string
  readonly phone: string
  readonly hours: string
  readonly responseTime: string
  readonly serviceArea: string
}

interface LocalBusinessHeroProps {
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly secondaryCta?: { readonly label: string; readonly href: string }
  readonly trustPoints: readonly string[]
  readonly availabilityCard: AvailabilityCard
  readonly className?: string
}

export function LocalBusinessHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  trustPoints,
  availabilityCard,
  className = '',
}: LocalBusinessHeroProps) {
  return (
    <section
      className={`section-padding bg-white px-4 pt-28 sm:px-6 ${className}`}
    >
      <div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16'>
        <div className='flex flex-col justify-center'>
          <p
            className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            {eyebrow}
          </p>
          <h1 className='mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]'>
            {title}
          </h1>
          <p className='mt-5 max-w-lg text-base leading-7 text-muted-foreground'>
            {description}
          </p>

          <div className='mt-5 flex flex-wrap gap-2'>
            {trustPoints.map((point) => (
              <span
                key={point}
                className='inline-flex items-center gap-1.5 rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-3 py-1 text-sm font-medium text-muted-foreground'
              >
                <span className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
                {point}
              </span>
            ))}
          </div>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <Button
              className='h-12 px-7 text-base font-semibold'
              render={(props) => (
                <Link {...props} href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowUpRight className='h-5 w-5' />
                </Link>
              )}
            />
            {secondaryCta && (
              <Button
                variant='outline'
                className='h-12 bg-white px-7 text-base font-semibold'
                render={(props) => (
                  <Link {...props} href={secondaryCta.href}>
                    <Phone className='h-4 w-4' />
                    {secondaryCta.label}
                  </Link>
                )}
              />
            )}
          </div>
        </div>

        <div className='flex items-center justify-center lg:justify-end'>
          <div className='w-full max-w-sm rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-6 shadow-sm'>
            <p className='text-sm font-semibold'>{availabilityCard.title}</p>

            <div className='mt-4 space-y-3'>
              <div className='flex items-center gap-2'>
                <span className='relative flex h-2 w-2'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75' />
                  <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
                </span>
                <span className='text-sm text-muted-foreground'>
                  {availabilityCard.status}
                </span>
              </div>

              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Phone className='h-4 w-4 shrink-0' />
                {availabilityCard.phone}
              </div>

              <div className='text-sm text-muted-foreground'>
                {availabilityCard.hours}
              </div>

              <div className='text-sm text-muted-foreground'>
                {availabilityCard.responseTime}
              </div>

              <div className='text-sm text-muted-foreground'>
                {availabilityCard.serviceArea}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
