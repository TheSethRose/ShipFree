'use client'

import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface ProductHeroProps {
  readonly productName: string
  readonly tagline: string
  readonly description: string
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly secondaryCta?: { readonly label: string; readonly href: string }
  readonly trustPoints?: readonly string[]
  readonly className?: string
}

export function ProductHero({
  productName,
  tagline,
  description,
  primaryCta,
  secondaryCta,
  trustPoints,
  className = '',
}: ProductHeroProps) {
  return (
    <section
      className={`flex min-h-[80vh] flex-col items-center justify-center bg-white px-4 pb-20 pt-32 sm:px-6 md:pb-24 ${className}`}
    >
      <div className='mx-auto w-full max-w-6xl'>
        <div className='mx-auto max-w-4xl text-center'>
          <h1 className='text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl lg:text-7xl'>
            {productName}
          </h1>
          <p className='mt-4 text-lg font-medium text-muted-foreground sm:text-xl'>{tagline}</p>
          <p className='mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground'>
            {description}
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
        <div className='mx-auto mt-16 max-w-5xl rounded-3xl border border-[#E4E4E7] bg-white p-3 shadow-xl shadow-black/5'>
          <div className='rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-8 sm:p-12 flex items-center justify-center min-h-[300px]'>
            <span className='text-sm font-medium text-muted-foreground'>Product image</span>
          </div>
        </div>
      </div>
    </section>
  )
}
