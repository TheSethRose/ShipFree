'use client'

import Image from 'next/image'

import { featuresData } from '@/data/site-data'

interface SiteFeaturesProps {
  readonly className?: string
}

export function SiteFeatures({ className = '' }: SiteFeaturesProps) {
  return (
    <section
      id='features'
      className={`border-t border-b border-[#E4E4E7] bg-[#F4F4F5] py-24 ${className}`}
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Section Label */}
        <h2
          className='mb-8 text-center text-sm font-medium text-muted-foreground'
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          {featuresData.label}
        </h2>

        {/* Title + Description */}
        <div className='mx-auto mb-16 max-w-2xl text-center'>
          <h2 className='text-4xl font-semibold tracking-tight'>{featuresData.title}</h2>
          <p className='mt-4 text-lg text-muted-foreground'>{featuresData.description}</p>
        </div>

        {/* Feature Grid */}
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {featuresData.features.map((feature) => (
            <div
              key={feature.title}
              className='group rounded-xl bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-sm'
            >
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F4F4F5]'>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={28}
                  height={28}
                  className='opacity-80 transition-opacity duration-200 group-hover:opacity-100'
                />
              </div>
              <h3 className='text-lg font-semibold'>{feature.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
