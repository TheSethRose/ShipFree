'use client'

import { featureShowcaseData } from '@/data/site-data'

interface FeatureShowcaseProps {
  readonly className?: string
}

export function FeatureShowcase({ className = '' }: FeatureShowcaseProps) {
  return (
    <section className={`section-padding border-b border-[#E4E4E7] bg-white ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto mb-16 max-w-2xl text-center'>
          <h2 className='section-kicker' style={{ fontFamily: 'var(--font-geist-mono)' }}>
            {featureShowcaseData.label}
          </h2>
          <h2 className='section-heading'>{featureShowcaseData.title}</h2>
          <p className='section-description'>{featureShowcaseData.description}</p>
        </div>
        <div className='grid gap-8 lg:grid-cols-3'>
          {featureShowcaseData.showcases.map((item, index) => (
            <div
              key={item.title}
              className={`group marketing-card ${index === 0 ? 'lg:col-span-2 bg-foreground text-background' : ''}`}
            >
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F4F4F5]'>
                <img src={item.icon} alt={item.title} className='h-6 w-6' />
              </div>
              <h3 className='text-xl font-semibold'>{item.title}</h3>
              <p className={`card-description ${index === 0 ? 'text-background/75' : ''}`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
