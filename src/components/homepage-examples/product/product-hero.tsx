'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ProductPreviewCard } from './product-preview-card'

interface HeroPreview {
  readonly title: string
  readonly subtitle: string
  readonly version: string
  readonly meta: readonly string[]
  readonly contents: readonly string[]
}

interface ProductHeroProps {
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly priceLine: string
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly secondaryCta?: { readonly label: string; readonly href: string }
  readonly note: string
  readonly preview: HeroPreview
  readonly className?: string
}

export function ProductHero({
  eyebrow,
  title,
  description,
  priceLine,
  primaryCta,
  secondaryCta,
  note,
  preview,
  className = '',
}: ProductHeroProps) {
  return (
    <section className={`section-padding bg-white px-4 pt-28 sm:px-6 ${className}`}>
      <div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-10'>
        {/* Left ~55% */}
        <div className='flex flex-col justify-center lg:col-span-7'>
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

          <div className='mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-3 py-1.5'>
            <span className='text-sm font-semibold'>{priceLine}</span>
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
                    {secondaryCta.label}
                  </Link>
                )}
              />
            )}
          </div>

          <p className='mt-4 text-xs text-muted-foreground'>{note}</p>
        </div>

        {/* Right ~45% */}
        <div className='flex items-start justify-center lg:col-span-5 lg:justify-end'>
          <ProductPreviewCard
            title={preview.title}
            subtitle={preview.subtitle}
            version={preview.version}
            meta={preview.meta}
            contents={preview.contents}
          />
        </div>
      </div>
    </section>
  )
}
