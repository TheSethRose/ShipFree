'use client'

import { testimonialsData } from '@/data/site-data'

interface TestimonialsProps {
  readonly className?: string
}

export function Testimonials({ className = '' }: TestimonialsProps) {
  return (
    <section id='testimonials' className={`section-padding border-b border-[#E4E4E7] bg-[#F4F4F5] ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto mb-16 max-w-2xl text-center'>
          <h2 className='section-kicker' style={{ fontFamily: 'var(--font-geist-mono)' }}>
            {testimonialsData.label}
          </h2>
          <h2 className='section-heading'>{testimonialsData.title}</h2>
        </div>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {testimonialsData.testimonials.map((t) => (
            <div key={t.author} className='group marketing-card'>
              <p className='text-base leading-7 text-muted-foreground'>"{t.quote}"</p>
              <div className='mt-6 flex items-center gap-3'>
                <img src={t.avatar} alt={t.author} className='h-10 w-10 rounded-full object-cover' />
                <div>
                  <div className='text-sm font-semibold'>{t.author}</div>
                  <div className='text-xs text-muted-foreground'>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
