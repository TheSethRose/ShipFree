'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { pricingData } from '@/data/site-data'

interface PricingSectionProps {
  readonly className?: string
}

export function PricingSection({ className = '' }: PricingSectionProps) {
  return (
    <section id='pricing' className={`section-padding border-b border-[#E4E4E7] bg-white ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto mb-16 max-w-2xl text-center'>
          <h2 className='section-kicker' style={{ fontFamily: 'var(--font-geist-mono)' }}>
            {pricingData.label}
          </h2>
          <h2 className='section-heading'>{pricingData.title}</h2>
          <p className='section-description'>{pricingData.description}</p>
        </div>
        <div className='mx-auto max-w-md'>
          {pricingData.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl border bg-white p-8 shadow-xl shadow-black/5 ${tier.highlighted ? 'border-foreground' : 'border-[#E4E4E7]'}`}
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-semibold'>{tier.name}</h3>
                {tier.highlighted && <Badge variant='outline'>Popular</Badge>}
              </div>
              <div className='mt-4 flex items-baseline gap-1'>
                <span className='text-5xl font-bold tracking-tight'>{tier.price}</span>
              </div>
              <p className='mt-2 text-base leading-7 text-muted-foreground'>{tier.description}</p>
              <ul className='mt-6 space-y-3'>
                {tier.features.map((feature) => (
                  <li key={feature} className='flex items-start gap-3 text-base leading-7'>
                    <Check className='mt-1 h-5 w-5 shrink-0 text-foreground' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className='mt-8'>
                <Button
                  className='w-full'
                  variant={tier.highlighted ? 'default' : 'outline'}
                  render={(props) => <Link {...props} href={tier.cta.href} />}
                >
                  {tier.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
