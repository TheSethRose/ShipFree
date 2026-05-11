'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface EngagementModel {
  readonly name: string
  readonly commitmentLabel: string
  readonly priceLabel: string
  readonly timeline: string
  readonly description: string
  readonly includes: readonly string[]
  readonly cta: { readonly label: string; readonly href: string }
  readonly featured?: boolean
}

interface EngagementModelsSectionProps {
  readonly title: string
  readonly description?: string
  readonly models: readonly EngagementModel[]
  readonly className?: string
}

export function EngagementModelsSection({
  title,
  description,
  models,
  className = '',
}: EngagementModelsSectionProps) {
  return (
    <section id='engagements' className={`section-padding bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        <div className='mt-12 grid gap-6 lg:grid-cols-3'>
          {models.map((model) => (
            <article
              key={model.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all ${
                model.featured
                  ? 'border-foreground/30 p-7 shadow-md'
                  : 'border-[#E4E4E7]'
              }`}
            >
              {model.featured && (
                <span className='absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-3 py-0.5 text-xs font-semibold text-white'>
                  Most common
                </span>
              )}

              <div className='flex items-center justify-between gap-3'>
                <p
                  className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
                  style={{ fontFamily: 'var(--font-geist-mono)' }}
                >
                  {model.commitmentLabel}
                </p>
                <span className='shrink-0 rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-2.5 py-0.5 text-xs font-semibold text-muted-foreground'>
                  {model.priceLabel}
                </span>
              </div>

              <h3 className='mt-3 text-xl font-semibold'>{model.name}</h3>

              <div className='mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-3 py-1'>
                <span className='h-1.5 w-1.5 rounded-full bg-foreground' />
                <span className='text-sm font-medium'>{model.timeline}</span>
              </div>

              <p className='mt-4 text-base leading-7 text-muted-foreground'>
                {model.description}
              </p>

              <div className='mt-4'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  Includes
                </p>
                <ul className='mt-2 space-y-1.5'>
                  {model.includes.map((item) => (
                    <li
                      key={item}
                      className='flex items-start gap-2 text-sm text-muted-foreground'
                    >
                      <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-auto pt-5'>
                <Button
                  variant={model.featured ? 'default' : 'outline'}
                  className={`w-full ${model.featured ? '' : 'bg-white'}`}
                  render={(props) => (
                    <Link {...props} href={model.cta.href}>
                      {model.cta.label}
                      <ArrowUpRight className='h-4 w-4' />
                    </Link>
                  )}
                />
              </div>
            </article>
          ))}
        </div>

        <div className='mx-auto mt-10 max-w-2xl rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-5 text-center'>
          <p className='text-sm text-muted-foreground'>
            Not sure where to start? Start with{' '}
            <span className='font-semibold text-foreground'>Audit</span>. Move
            into{' '}
            <span className='font-semibold text-foreground'>Build Sprint</span>{' '}
            only when the workflow is worth building.
          </p>
        </div>
      </div>
    </section>
  )
}
