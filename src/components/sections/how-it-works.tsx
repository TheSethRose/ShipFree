'use client'

import { howItWorksData } from '@/data/site-data'

interface HowItWorksProps {
  readonly className?: string
}

export function HowItWorks({ className = '' }: HowItWorksProps) {
  return (
    <section id='how-it-works' className={`section-padding border-b border-[#E4E4E7] bg-[#F4F4F5] ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto mb-16 max-w-2xl text-center'>
          <h2 className='section-kicker' style={{ fontFamily: 'var(--font-geist-mono)' }}>
            {howItWorksData.label}
          </h2>
          <h2 className='section-heading'>{howItWorksData.title}</h2>
        </div>
        <div className='grid gap-8 sm:grid-cols-3'>
          {howItWorksData.steps.map((step) => (
            <div key={step.number} className='relative'>
              <span
                className='mb-4 block text-5xl font-bold text-[#E4E4E7]'
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                {step.number}
              </span>
              <h3 className='text-lg font-semibold'>{step.title}</h3>
              <p className='mt-2 text-base leading-7 text-muted-foreground'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
