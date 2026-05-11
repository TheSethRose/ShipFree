'use client'

import { featuresData } from '@/data/site-data'

interface SiteFeaturesProps {
  readonly className?: string
}

export function SiteFeatures({ className = '' }: SiteFeaturesProps) {
  return (
    <section
      id='features'
      className={`section-padding border-t border-b border-[#E4E4E7] bg-[#F4F4F5] ${className}`}
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='section-kicker' style={{ fontFamily: 'var(--font-geist-mono)' }}>
            {featuresData.label}
          </h2>
          <h2 className='section-heading'>{featuresData.title}</h2>
          <p className='section-description'>{featuresData.description}</p>
        </div>
        <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {featuresData.features.map((feature) => (
            <div key={feature.title} className='marketing-card'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F4F4F5]'>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className='h-7 w-7 opacity-80 transition-opacity duration-200 group-hover:opacity-100'
                />
              </div>
              <h3 className='text-lg font-semibold'>{feature.title}</h3>
              <p className='card-description'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
