'use client'

import { Rocket, Shield, TrendingUp } from 'lucide-react'

import { solutionData } from '@/data/site-data'

interface SolutionSectionProps {
  readonly className?: string
}

const icons = [Rocket, Shield, TrendingUp]

export function SolutionSection({ className = '' }: SolutionSectionProps) {
  return (
    <section id='solution' className={`border-b border-[#E4E4E7] bg-[#F4F4F5] py-24 ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2
            className='mb-8 text-sm font-medium text-muted-foreground'
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            {solutionData.label}
          </h2>
          <h2 className='text-4xl font-semibold tracking-tight'>{solutionData.headline}</h2>
          <p className='mt-4 text-lg text-muted-foreground'>{solutionData.description}</p>
        </div>
        <div className='mt-16 grid gap-8 sm:grid-cols-3'>
          {solutionData.benefits.map((benefit, index) => {
            const Icon = icons[index]
            return (
              <div
                key={benefit.title}
                className='group relative rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md'
              >
                <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F4F4F5]'>
                  <Icon className='h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-foreground' />
                </div>
                <h3 className='text-lg font-semibold'>{benefit.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
