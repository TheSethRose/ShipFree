'use client'

import { Clock, BrainCircuit, RotateCcw } from 'lucide-react'

import { problemData } from '@/data/site-data'

interface ProblemSectionProps {
  readonly className?: string
}

const icons = [Clock, BrainCircuit, RotateCcw]

export function ProblemSection({ className = '' }: ProblemSectionProps) {
  return (
    <section id='problem' className={`section-padding border-b border-[#E4E4E7] bg-[#F4F4F5] ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='section-kicker' style={{ fontFamily: 'var(--font-geist-mono)' }}>
            {problemData.label}
          </h2>
          <h2 className='section-heading'>{problemData.headline}</h2>
          <p className='section-description'>{problemData.description}</p>
        </div>
        <div className='mt-16 grid gap-8 sm:grid-cols-3'>
          {problemData.painPoints.map((point, index) => {
            const Icon = icons[index]
            return (
              <div key={point.title} className='marketing-card'>
                <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F4F4F5]'>
                  <Icon className='h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-foreground' />
                </div>
                <h3 className='text-lg font-semibold'>{point.title}</h3>
                <p className='card-description'>{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
