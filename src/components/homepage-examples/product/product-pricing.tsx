'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface PricingReceiptItem {
  readonly label: string
  readonly value: string
}

interface ProductPricingProps {
  readonly label: string
  readonly price: string
  readonly compareAt?: string
  readonly description: string
  readonly includes: readonly string[]
  readonly cta: { readonly label: string; readonly href: string }
  readonly note: string
  readonly receipt: readonly PricingReceiptItem[]
  readonly className?: string
}

export function ProductPricing({
  label,
  price,
  compareAt,
  description,
  includes,
  cta,
  note,
  receipt,
  className = '',
}: ProductPricingProps) {
  return (
    <section className={`section-padding bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
          {/* Left */}
          <div>
            <h2 className='section-heading'>Purchase</h2>
            <p className='section-description'>
              One-time payment. No recurring charges.
            </p>

            <div className='mt-8 space-y-3'>
              {[
                'One-time purchase',
                'Instant access',
                'Commercial license',
                'Editable source files',
              ].map((item) => (
                <div
                  key={item}
                  className='flex items-center gap-3 text-sm text-muted-foreground'
                >
                  <svg
                    className='h-4 w-4 shrink-0 text-foreground'
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
                </div>
              ))}
            </div>
          </div>

          {/* Right — receipt card */}
          <div className='flex items-start justify-center lg:justify-end'>
            <div className='w-full max-w-md rounded-2xl border border-[#E4E4E7] bg-white p-6 shadow-sm'>
              <div className='flex items-center justify-between'>
                <span
                  className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
                  style={{ fontFamily: 'var(--font-geist-mono)' }}
                >
                  {label}
                </span>
              </div>

              <div className='mt-4 flex items-baseline gap-3'>
                <span className='text-4xl font-bold tracking-tight'>
                  {price}
                </span>
                {compareAt && (
                  <span className='text-lg text-muted-foreground line-through'>
                    {compareAt}
                  </span>
                )}
              </div>

              <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                {description}
              </p>

              {/* Receipt rows */}
              <div className='mt-5 space-y-2 border-t border-[#E4E4E7] pt-4'>
                {receipt.map((row) => (
                  <div
                    key={row.label}
                    className='flex items-center justify-between text-sm'
                  >
                    <span className='text-muted-foreground'>{row.label}</span>
                    <span className='font-medium'>{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Includes */}
              <div className='mt-5 border-t border-[#E4E4E7] pt-4'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  Includes
                </p>
                <ul className='mt-2 space-y-1.5'>
                  {includes.map((item) => (
                    <li
                      key={item}
                      className='flex items-start gap-2 text-sm text-muted-foreground'
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

              {/* CTA */}
              <div className='mt-6'>
                <Button
                  className='h-12 w-full text-base font-semibold'
                  render={(props) => (
                    <Link {...props} href={cta.href}>
                      {cta.label}
                      <ArrowUpRight className='h-5 w-5' />
                    </Link>
                  )}
                />
              </div>

              <p className='mt-3 text-center text-xs text-muted-foreground'>
                {note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
