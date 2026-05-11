'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface PricingPlan {
  readonly name: string
  readonly price: string
  readonly period?: string
  readonly description: string
  readonly features: readonly string[]
  readonly cta: { readonly label: string; readonly href: string }
  readonly highlighted?: boolean
}

interface SaasPricingPreviewProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly plans: readonly PricingPlan[]
  readonly className?: string
}

export function SaasPricingPreview({
  label,
  title,
  description,
  plans,
  className = '',
}: SaasPricingPreviewProps) {
  return (
    <section className={`section-padding border-b border-[#E4E4E7] bg-[#F4F4F5] ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto mb-16 max-w-2xl text-center'>
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
        <div className='grid gap-6 md:grid-cols-3'>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border bg-white p-8 shadow-xl shadow-black/5 ${plan.highlighted ? 'border-foreground' : 'border-[#E4E4E7]'}`}
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-semibold'>{plan.name}</h3>
                {plan.highlighted && <Badge variant='outline'>Popular</Badge>}
              </div>
              <div className='mt-4 flex items-baseline gap-1'>
                <span className='text-4xl font-bold tracking-tight'>{plan.price}</span>
                {plan.period && <span className='text-sm text-muted-foreground'>/{plan.period}</span>}
              </div>
              <p className='mt-2 text-base leading-7 text-muted-foreground'>{plan.description}</p>
              <ul className='mt-6 space-y-3'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-start gap-3 text-base leading-7'>
                    <Check className='mt-1 h-5 w-5 shrink-0 text-foreground' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className='mt-8'>
                <Button
                  className='h-12 w-full text-base font-semibold'
                  variant={plan.highlighted ? 'default' : 'outline'}
                  render={(props) => <Link {...props} href={plan.cta.href} />}
                >
                  {plan.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
