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
    <section className={`border-t border-b border-[#E4E4E7] bg-[#F4F4F5] py-24 px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-4xl text-center'>
        {/* Section Label */}
        <h2
          className='mb-8 text-sm font-medium text-muted-foreground'
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          {ctaData.label}
        </h2>

        {/* Title + Description */}
        <h2 className='text-4xl font-semibold tracking-tight'>{ctaData.title}</h2>
        <p className='mt-4 text-lg text-muted-foreground'>{ctaData.description}</p>

        {/* Buttons */}
        <div className='mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <Button className='h-12 px-8 text-base font-semibold' asChild>
            <Link href={ctaData.primaryCta.href}>
              {ctaData.primaryCta.label}
              <ArrowUpRight className='h-8 w-8' />
            </Link>
          </Button>
          <Button variant='outline' className='h-12 px-8 text-base font-semibold' asChild>
            <Link href={ctaData.secondaryCta.href}>
              {ctaData.secondaryCta.label}
              <ArrowUpRight className='h-8 w-8' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
