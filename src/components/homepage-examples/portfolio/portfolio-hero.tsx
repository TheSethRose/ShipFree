'use client'

import Link from 'next/link'
import { ArrowDownRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface PortfolioHeroProps {
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly location: string
  readonly role: string
  readonly focus: string
  readonly availability: string
  readonly knownFor: readonly string[]
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly secondaryCta?: { readonly label: string; readonly href: string }
  readonly className?: string
}

export function PortfolioHero({
  eyebrow,
  title,
  description,
  location,
  role,
  focus,
  availability,
  knownFor,
  primaryCta,
  secondaryCta,
  className = '',
}: PortfolioHeroProps) {
  return (
    <section
      className={`section-padding bg-white px-4 pt-28 sm:px-6 ${className}`}
    >
      <div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16'>
        {/* Left column */}
        <div className='flex flex-col justify-center'>
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

          <div className='mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-3 py-1.5'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
            </span>
            <span className='text-sm font-medium text-muted-foreground'>
              {availability}
            </span>
          </div>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <Button
              className='h-12 px-7 text-base font-semibold'
              render={(props) => (
                <Link {...props} href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowDownRight className='h-5 w-5' />
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
        </div>

        {/* Right column — identity card */}
        <div className='flex items-center justify-center lg:justify-end'>
          <div className='w-full max-w-sm rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-6 shadow-sm'>
            <div className='flex items-center gap-4'>
              <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-foreground text-xl font-semibold text-white'>
                PB
              </div>
              <div>
                <p className='text-base font-semibold'>{role}</p>
                <p className='text-sm text-muted-foreground'>{location}</p>
              </div>
            </div>

            <div className='mt-5 border-t border-[#E4E4E7] pt-5'>
              <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                Current focus
              </p>
              <p className='mt-1 text-sm text-muted-foreground'>{focus}</p>
            </div>

            <div className='mt-4'>
              <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                Known for
              </p>
              <ul className='mt-2 space-y-1.5'>
                {knownFor.map((item) => (
                  <li
                    key={item}
                    className='flex items-center gap-2 text-sm text-muted-foreground'
                  >
                    <span className='h-1 w-1 rounded-full bg-foreground' />
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
