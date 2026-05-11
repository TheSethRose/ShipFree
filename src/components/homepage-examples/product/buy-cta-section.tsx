'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface BuyCTASectionProps {
  readonly label?: string
  readonly title: string
  readonly description: string
  readonly price: string
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly secondaryCta?: { readonly label: string; readonly href: string }
  readonly checklist: readonly string[]
  readonly className?: string
}

export function BuyCTASection({
  label,
  title,
  description,
  price,
  primaryCta,
  secondaryCta,
  checklist,
  className = '',
}: BuyCTASectionProps) {
  return (
    <section
      id='buy'
      className={`section-padding bg-white px-4 sm:px-6 ${className}`}
    >
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-8 rounded-2xl border border-[#E4E4E7] bg-white p-8 shadow-sm lg:grid-cols-2 lg:gap-12 lg:p-12'>
          {/* Left */}
          <div className='flex flex-col justify-center'>
            {label && (
              <p
                className='section-kicker'
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                {label}
              </p>
            )}
            <h2 className='section-heading'>{title}</h2>
            <p className='section-description !mx-0 !text-left'>
              {description}
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
              <Button
                className='h-12 px-8 text-base font-semibold'
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
                  className='h-12 bg-white px-8 text-base font-semibold'
                  render={(props) => (
                    <Link {...props} href={secondaryCta.href}>
                      {secondaryCta.label}
                    </Link>
                  )}
                />
              )}
            </div>
          </div>

          {/* Right — purchase summary */}
          <div className='rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-6'>
            <div className='flex items-baseline justify-between'>
              <p
                className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                Total
              </p>
              <p className='text-3xl font-bold tracking-tight'>{price}</p>
            </div>

            <div className='mt-5 border-t border-[#E4E4E7] pt-5'>
              <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                Included
              </p>
              <ul className='mt-3 space-y-2.5'>
                {checklist.map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-2.5 text-sm text-muted-foreground'
                  >
                    <svg
                      className='mt-0.5 h-4 w-4 shrink-0 text-foreground'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <path
                        d='M3 8L6.5 11.5L13 4.5'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
