'use client'

import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { heroData } from '@/data/site-data'

interface SiteHeroProps {
  readonly className?: string
}

export function SiteHero({ className = '' }: SiteHeroProps) {
  return (
    <section
      id='hero'
      className={`flex min-h-[86vh] flex-col items-center justify-center bg-white px-4 pb-20 pt-32 sm:px-6 md:pb-24 ${className}`}
    >
      <div className='mx-auto w-full max-w-6xl'>
        <div className='mx-auto max-w-4xl text-center'>
          <div
            className='mx-auto mb-6 inline-flex items-center rounded-full border border-[#E4E4E7] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-sm'
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            Open-source SaaS starter kit
          </div>

          <h1 className='mx-auto max-w-4xl text-balance text-center text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl lg:text-7xl'>
            {heroData.headline}
          </h1>

          <p className='mx-auto mt-6 max-w-2xl text-balance text-center text-lg leading-8 text-muted-foreground sm:text-xl'>
            {heroData.subheadline}
          </p>

          <div className='mx-auto mt-10 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center'>
            <Button
              className='h-12 w-full px-8 text-base font-semibold sm:w-auto'
              render={(props) => (
                <Link {...props} href={heroData.primaryCta.href}>
                  {heroData.primaryCta.label}
                  <ArrowUpRight className='h-5 w-5' />
                </Link>
              )}
            />
            <Button
              variant='outline'
              className='h-12 w-full bg-white px-8 text-base font-semibold sm:w-auto'
              render={(props) => (
                <Link {...props} href={heroData.secondaryCta.href}>
                  {heroData.secondaryCta.label}
                  <ArrowUpRight className='h-5 w-5' />
                </Link>
              )}
            />
          </div>

          <div className='mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground'>
            <span className='inline-flex items-center gap-1.5'>
              <CheckCircle2 className='h-4 w-4' />
              No credit card
            </span>
            <span className='inline-flex items-center gap-1.5'>
              <CheckCircle2 className='h-4 w-4' />
              MIT licensed
            </span>
            <span className='inline-flex items-center gap-1.5'>
              <CheckCircle2 className='h-4 w-4' />
              Deploy in minutes
            </span>
          </div>
        </div>

        <div className='mx-auto mt-16 max-w-5xl rounded-3xl border border-[#E4E4E7] bg-white p-3 shadow-xl shadow-black/5'>
          <div className='rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-4 sm:p-6'>
            <div className='mb-4 flex items-center gap-2'>
              <span className='h-3 w-3 rounded-full bg-[#E4E4E7]' />
              <span className='h-3 w-3 rounded-full bg-[#E4E4E7]' />
              <span className='h-3 w-3 rounded-full bg-[#E4E4E7]' />
            </div>

            <div className='grid gap-4 md:grid-cols-[1.1fr_0.9fr]'>
              <div className='rounded-2xl bg-white p-6 shadow-sm'>
                <div className='mb-6'>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                    Product dashboard
                  </p>
                  <h3 className='mt-2 text-2xl font-semibold tracking-tight'>
                    Launch checklist
                  </h3>
                </div>
                <div className='space-y-3'>
                  <div className='h-8 w-3/4 rounded-lg bg-[#E4E4E7]' />
                  <div className='h-4 w-full rounded-lg bg-[#E4E4E7]' />
                  <div className='h-4 w-5/6 rounded-lg bg-[#E4E4E7]' />
                </div>
                <div className='mt-8 grid gap-3 sm:grid-cols-3'>
                  {['Auth', 'Billing', 'Deploy'].map((label) => (
                    <div key={label} className='rounded-xl bg-[#F4F4F5] p-4'>
                      <div className='mb-3 h-2 w-10 rounded-full bg-[#E4E4E7]' />
                      <p className='text-sm font-semibold'>{label}</p>
                      <p className='mt-1 text-xs text-muted-foreground'>Ready</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='space-y-4'>
                {['Auth configured', 'Payments connected', 'Database migrated', 'Emails ready'].map((item) => (
                  <div key={item} className='flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm'>
                    <CheckCircle2 className='h-5 w-5 text-foreground' />
                    <span className='text-sm font-semibold'>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
