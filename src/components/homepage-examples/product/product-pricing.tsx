'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface ProductPriceTier {
  readonly name: string
  readonly price: string
  readonly description: string
  readonly cta: { readonly label: string; readonly href: string }
}

interface ProductPricingProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly tiers: readonly ProductPriceTier[]
  readonly className?: string
}

export function ProductPricing({ label, title, description, tiers, className = '' }: ProductPricingProps) {
  return (
    <section className={`section-padding border-b border-[#E4E4E7] bg-[#F4F4F5] ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center'>
          {label && (
            <h2
              className='mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              {label}
            </h2>
          )}
          <h2 className='text-balance text-3xl font-semibold tracking-tight sm:text-4xl'>{title}</h2>
          {description && (
            <p className='mx-auto mt-4 max-w-2xl text-balance text-base leading-7 text-muted-foreground sm:text-lg'>
              {description}
            </p>
          )}
        </div>
        <div className='mt-16 grid gap-6 md:grid-cols-3'>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className='rounded-3xl border border-[#E4E4E7] bg-white p-8 text-center shadow-xl shadow-black/5'
            >
              <h3 className='text-xl font-semibold'>{tier.name}</h3>
              <div className='mt-4'>
                <span className='text-4xl font-bold tracking-tight'>{tier.price}</span>
              </div>
              <p className='mt-2 text-base leading-7 text-muted-foreground'>{tier.description}</p>
              <div className='mt-8'>
                <Button
                  className='h-12 w-full text-base font-semibold'
                  render={(props) => (
                    <Link {...props} href={tier.cta.href}>
                      {tier.cta.label}
                      <ArrowUpRight className='h-5 w-5' />
                    </Link>
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
