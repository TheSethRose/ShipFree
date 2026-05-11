'use client'

import { statsData } from '@/data/site-data'

interface StatsSectionProps {
  readonly className?: string
}

export function StatsSection({ className = '' }: StatsSectionProps) {
  return (
    <section className={`section-padding border-b border-[#E4E4E7] bg-[#F4F4F5] ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <p
          className='mb-12 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          {statsData.label}
        </p>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          {statsData.stats.map((stat) => (
            <div key={stat.label} className='text-center'>
              <div className='text-4xl font-bold tracking-tight sm:text-5xl'>{stat.value}</div>
              <div className='mt-2 text-sm text-muted-foreground'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
