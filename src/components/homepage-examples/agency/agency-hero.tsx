'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface SnapshotItem {
  readonly label: string
  readonly description: string
}

interface AgencyHeroProps {
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly secondaryCta?: { readonly label: string; readonly href: string }
  readonly bestFor: string
  readonly snapshot: readonly SnapshotItem[]
  readonly className?: string
}

const workflowSteps = ['Intake', 'Review', 'Automate', 'Handoff'] as const
const summaryRows = [
  { label: 'First output', value: 'Workflow map' },
  { label: 'Build target', value: 'Smallest useful version' },
  { label: 'Decision point', value: 'Ship, pause, or expand' },
] as const
const snapshotBadges = ['A', 'B', 'R'] as const

export function AgencyHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  bestFor,
  snapshot,
  className = '',
}: AgencyHeroProps) {
  return (
    <section className={`section-padding bg-white px-4 pt-28 sm:px-6 ${className}`}>
      <div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-10'>
        {/* Left column ~55% */}
        <div className='flex flex-col justify-center lg:col-span-7'>
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

          <div className='mt-6 inline-flex w-fit items-start gap-2 rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-4'>
            <span className='mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground' />
            <p className='text-sm leading-6 text-muted-foreground'>{bestFor}</p>
          </div>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <Button
              className='h-12 px-7 text-base font-semibold'
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

        {/* Right column ~45% — Workflow diagnostic panel */}
        <div className='flex items-start justify-center lg:col-span-5 lg:justify-end'>
          <div className='w-full max-w-md rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-5 shadow-sm'>
            {/* Top row */}
            <div className='flex items-center justify-between'>
              <p
                className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                Workflow diagnostic
              </p>
              <span className='rounded-full border border-[#E4E4E7] bg-white px-2.5 py-0.5 text-xs font-semibold text-muted-foreground'>
                Ready to scope
              </span>
            </div>

            {/* Faux workflow map */}
            <div className='mt-5'>
              <div className='flex flex-wrap items-center gap-2'>
                {workflowSteps.map((step, i) => (
                  <div key={step} className='flex items-center gap-2'>
                    <span className='rounded-lg border border-[#E4E4E7] bg-white px-3 py-1.5 text-sm font-medium shadow-sm'>
                      {step}
                    </span>
                    {i < workflowSteps.length - 1 && (
                      <span className='hidden h-px w-4 bg-[#E4E4E7] sm:inline-block' />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Summary rows */}
            <div className='mt-5 space-y-2 border-t border-[#E4E4E7] pt-4'>
              {summaryRows.map((row) => (
                <div key={row.label} className='flex items-center justify-between gap-3'>
                  <span className='text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground'>
                    {row.label}
                  </span>
                  <span className='text-sm font-medium'>{row.value}</span>
                </div>
              ))}
            </div>

            {/* Snapshot rows with badges */}
            <div className='mt-5 space-y-3 border-t border-[#E4E4E7] pt-4'>
              {snapshot.map((item, i) => (
                <div key={item.label} className='flex items-start gap-3'>
                  <span
                    className='flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-foreground text-xs font-bold text-white'
                    style={{ fontFamily: 'var(--font-geist-mono)' }}
                  >
                    {snapshotBadges[i]}
                  </span>
                  <div>
                    <p className='text-sm font-semibold'>{item.label}</p>
                    <p className='text-xs text-muted-foreground'>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
