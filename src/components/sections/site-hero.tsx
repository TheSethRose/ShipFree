'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { heroData } from '@/data/site-data'

interface SiteHeroProps {
  readonly className?: string
}

export function SiteHero({ className = '' }: SiteHeroProps) {
  return (
    <section
      id='hero'
      className={`flex min-h-screen flex-col items-center justify-start bg-[#F4F4F5] pb-24 pt-40 ${className}`}
    >
      <div className='mx-auto w-full max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto max-w-4xl text-center'>
          <h1 className='mx-auto max-w-3xl text-balance text-center text-4xl font-semibold leading-tight tracking-tighter sm:text-5xl md:max-w-4xl md:text-6xl lg:leading-[1.1]'>
            {heroData.headline}
          </h1>
          <p className='mx-auto mt-6 max-w-xl text-balance text-center text-lg text-muted-foreground md:max-w-2xl'>
            {heroData.subheadline}
          </p>
          <div className='mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Button
              className='h-12 px-8 text-base font-semibold'
              render={(props) => (
                <Link {...props} href={heroData.primaryCta.href}>
                  {heroData.primaryCta.label}
                  <ArrowUpRight className='h-8 w-8' />
                </Link>
              )}
            />
            <Button
              variant='outline'
              className='h-12 px-8 text-base font-semibold'
              render={(props) => (
                <Link {...props} href={heroData.secondaryCta.href}>
                  {heroData.secondaryCta.label}
                  <ArrowUpRight className='h-8 w-8' />
                </Link>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
