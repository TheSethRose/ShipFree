'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ctaData } from '@/data/site-data'

interface SiteCtaProps {
  readonly className?: string
}

export function SiteCta({ className = '' }: SiteCtaProps) {
  return (
    <section className={`section-padding border-t border-b border-[#E4E4E7] bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-5xl rounded-3xl border border-[#E4E4E7] bg-[#F4F4F5] px-6 py-14 text-center shadow-xl shadow-black/5 sm:px-10 md:py-16'>
        <h2 className='section-kicker' style={{ fontFamily: 'var(--font-geist-mono)' }}>
          {ctaData.label}
        </h2>
        <h2 className='section-heading'>{ctaData.title}</h2>
        <p className='section-description'>{ctaData.description}</p>
        <div className='mx-auto mt-10 flex w-full max-w-sm flex-col items-stretch justify-center gap-4 sm:max-w-none sm:flex-row sm:items-center'>
          <Button
            className='h-12 w-full px-8 text-base font-semibold sm:w-auto'
            render={(props) => (
              <Link {...props} href={ctaData.primaryCta.href}>
                {ctaData.primaryCta.label}
                <ArrowUpRight className='h-5 w-5' />
              </Link>
            )}
          />
          <Button
            variant='outline'
            className='h-12 w-full bg-white px-8 text-base font-semibold sm:w-auto'
            render={(props) => (
              <Link {...props} href={ctaData.secondaryCta.href}>
                {ctaData.secondaryCta.label}
                <ArrowUpRight className='h-5 w-5' />
              </Link>
            )}
          />
        </div>
      </div>
    </section>
  )
}
