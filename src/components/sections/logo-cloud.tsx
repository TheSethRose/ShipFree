'use client'

import { logoCloudData } from '@/data/site-data'

interface LogoCloudProps {
  readonly className?: string
}

export function LogoCloud({ className = '' }: LogoCloudProps) {
  return (
    <section className={`border-t border-b border-[#E4E4E7] bg-[#F4F4F5] py-12 ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <p
          className='mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          {logoCloudData.label}
        </p>
        <div className='flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12'>
          {logoCloudData.logos.map((logo) => (
            <div key={logo.name} className='flex items-center gap-2 opacity-50 grayscale transition-opacity duration-200 hover:opacity-80'>
              <img src={logo.src} alt={logo.name} className='h-6 w-auto' />
              <span className='text-sm font-medium text-muted-foreground'>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
