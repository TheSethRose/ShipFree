'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface ContactCTASectionProps {
  readonly label?: string
  readonly title: string
  readonly description: string
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly secondaryCta?: { readonly label: string; readonly href: string }
  readonly className?: string
}

export function ContactCTASection({
  label,
  title,
  description,
  primaryCta,
  secondaryCta,
  className = '',
}: ContactCTASectionProps) {
  return (
    <section
      id='contact'
      className={`section-padding bg-white px-4 sm:px-6 ${className}`}
    >
      <div className='mx-auto max-w-6xl'>
        <div className='mx-auto max-w-2xl rounded-2xl border border-[#E4E4E7] bg-white p-8 text-center shadow-sm sm:p-12'>
          {label && (
            <p
              className='section-kicker'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              {label}
            </p>
          )}
          <h2 className='section-heading'>{title}</h2>
          <p className='section-description'>{description}</p>

          <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
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
                  </Link>
                )}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
