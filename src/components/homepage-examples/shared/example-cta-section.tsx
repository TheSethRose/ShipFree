'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ExampleSectionHeader } from './example-section-header'

interface ExampleCTASectionProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly secondaryCta?: { readonly label: string; readonly href: string }
  readonly background?: 'white' | 'muted'
  readonly className?: string
}

export function ExampleCTASection({
  label,
  title,
  description,
  primaryCta,
  secondaryCta,
  background = 'muted',
  className = '',
}: ExampleCTASectionProps) {
  const bgClass = background === 'muted' ? 'bg-[#F4F4F5]' : 'bg-white'

  return (
    <section className={`section-padding border-t border-b border-[#E4E4E7] ${bgClass} px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-5xl rounded-3xl border border-[#E4E4E7] bg-white px-6 py-14 text-center shadow-xl shadow-black/5 sm:px-10 md:py-16'>
        <ExampleSectionHeader label={label} title={title} description={description} />
        <div className='mx-auto mt-10 flex w-full max-w-sm flex-col items-stretch justify-center gap-4 sm:max-w-none sm:flex-row sm:items-center'>
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
      </div>
    </section>
  )
}
