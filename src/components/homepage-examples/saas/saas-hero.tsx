'use client'

import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface SaasHeroProps {
  readonly headline: string
  readonly subheadline: string
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly secondaryCta?: { readonly label: string; readonly href: string }
  readonly kicker?: string
  readonly trustPoints?: readonly string[]
  readonly className?: string
}

export function SaasHero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  kicker,
  trustPoints,
  className = '',
}: SaasHeroProps) {
  return (
    <section
      className={`flex min-h-[80vh] flex-col items-center justify-center bg-white px-4 pb-20 pt-32 sm:px-6 md:pb-24 ${className}`}
    >
      <div className='mx-auto w-full max-w-6xl'>
        <div className='mx-auto max-w-4xl text-center'>
          {kicker && (
            <div
              className='mx-auto mb-6 inline-flex items-center rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              {kicker}
            </div>
          )}
          <h1 className='mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl lg:text-7xl'>
            {headline}
          </h1>
          <p className='mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground sm:text-xl'>
            {subheadline}
          </p>
          <div className='mx-auto mt-10 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center'>
            <Button
              className='h-12 w-full px-8 text-base font-semibold sm:w-auto'
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
                className='h-12 w-full bg-white px-8 text-base font-semibold sm:w-auto'
                render={(props) => (
                  <Link {...props} href={secondaryCta.href}>
                    {secondaryCta.label}
                    <ArrowUpRight className='h-5 w-5' />
                  </Link>
                )}
              />
            )}
          </div>
          {trustPoints && trustPoints.length > 0 && (
            <div className='mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground'>
              {trustPoints.map((point) => (
                <span key={point} className='inline-flex items-center gap-1.5'>
                  <CheckCircle2 className='h-4 w-4' />
                  {point}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
