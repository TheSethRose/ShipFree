'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface AgencyCTASectionProps {
  readonly label?: string
  readonly title: string
  readonly description: string
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly secondaryCta?: { readonly label: string; readonly href: string }
  readonly className?: string
}

const checklist = [
  'The workflow you want fixed',
  'The tools involved',
  'Where work gets stuck',
  'Who owns the process',
  'What a useful first version would do',
] as const

export function AgencyCTASection({
  label,
  title,
  description,
  primaryCta,
  secondaryCta,
  className = '',
}: AgencyCTASectionProps) {
  return (
    <section
      id='contact'
      className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}
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

          {/* Right — checklist */}
          <div className='rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-6'>
            <p
              className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              Bring this to the call
            </p>
            <ul className='mt-4 space-y-3'>
              {checklist.map((item) => (
                <li
                  key={item}
                  className='flex items-start gap-3 text-sm leading-6 text-muted-foreground'
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
    </section>
  )
}
