'use client'

import { featureShowcaseData } from '@/data/site-data'

interface FeatureShowcaseProps {
  readonly className?: string
}

export function FeatureShowcase({ className = '' }: FeatureShowcaseProps) {
  return (
    <section className={`border-b border-[#E4E4E7] bg-white py-24 ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto mb-16 max-w-2xl text-center'>
          <h2
            className='mb-8 text-sm font-medium text-muted-foreground'
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            {featureShowcaseData.label}
          </h2>
          <h2 className='text-4xl font-semibold tracking-tight'>{featureShowcaseData.title}</h2>
          <p className='mt-4 text-lg text-muted-foreground'>{featureShowcaseData.description}</p>
        </div>
        <div className='grid gap-8 lg:grid-cols-3'>
          {featureShowcaseData.showcases.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-xl bg-[#F4F4F5] p-8 transition-shadow duration-200 hover:shadow-sm ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white'>
                <img src={item.icon} alt={item.title} className='h-6 w-6' />
              </div>
              <h3 className='text-xl font-semibold'>{item.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
