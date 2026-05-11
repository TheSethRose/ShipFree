'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface PortfolioHeroProps {
  readonly name: string
  readonly role: string
  readonly tagline: string
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly secondaryCta?: { readonly label: string; readonly href: string }
  readonly className?: string
}

export function PortfolioHero({
  name,
  role,
  tagline,
  primaryCta,
  secondaryCta,
  className = '',
}: PortfolioHeroProps) {
  return (
    <section
      className={`flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 pb-20 pt-32 sm:px-6 md:pb-24 ${className}`}
    >
      <div className='mx-auto w-full max-w-6xl text-center'>
        <h1 className='text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl lg:text-7xl'>
          {name}
        </h1>
        <p className='mt-4 text-lg font-medium text-muted-foreground sm:text-xl'>{role}</p>
        <p className='mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground'>
          {tagline}
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
      </div>
    </section>
  )
}
