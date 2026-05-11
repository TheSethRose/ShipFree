'use client'

import { statsData } from '@/data/site-data'

interface StatsSectionProps {
  readonly className?: string
}

export function StatsSection({ className = '' }: StatsSectionProps) {
  return (
    <section className={`section-padding border-b border-[#E4E4E7] bg-white ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <p
          className='mb-12 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          {statsData.label}
        </p>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {statsData.stats.map((stat) => (
            <div
              key={stat.label}
              className='rounded-2xl border border-[#E4E4E7] bg-white p-6 text-center shadow-sm'
            >
              <div className='text-4xl font-bold tracking-tight sm:text-5xl'>{stat.value}</div>
              <div className='mt-2 text-sm font-medium text-muted-foreground'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
