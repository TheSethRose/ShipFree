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
      <div className='mx-auto max-w-4xl text-center'>
        <h2 className='section-kicker' style={{ fontFamily: 'var(--font-geist-mono)' }}>
          {ctaData.label}
        </h2>
        <h2 className='section-heading'>{ctaData.title}</h2>
        <p className='section-description'>{ctaData.description}</p>
        <div className='mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <Button
            className='h-12 px-8 text-base font-semibold'
            render={(props) => (
              <Link {...props} href={ctaData.primaryCta.href}>
                {ctaData.primaryCta.label}
                <ArrowUpRight className='h-5 w-5' />
              </Link>
            )}
          />
          <Button
            variant='outline'
            className='h-12 bg-white px-8 text-base font-semibold'
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
