'use client'

import { Clock, BrainCircuit, RotateCcw } from 'lucide-react'

import { problemData } from '@/data/site-data'

interface ProblemSectionProps {
  readonly className?: string
}

const icons = [Clock, BrainCircuit, RotateCcw]

export function ProblemSection({ className = '' }: ProblemSectionProps) {
  return (
    <section id='problem' className={`border-b border-[#E4E4E7] bg-white py-24 ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2
            className='mb-8 text-sm font-medium text-muted-foreground'
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            {problemData.label}
          </h2>
          <h2 className='text-4xl font-semibold tracking-tight'>{problemData.headline}</h2>
          <p className='mt-4 text-lg text-muted-foreground'>{problemData.description}</p>
        </div>
        <div className='mt-16 grid gap-8 sm:grid-cols-3'>
          {problemData.painPoints.map((point, index) => {
            const Icon = icons[index]
            return (
              <div
                key={point.title}
                className='group relative rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-6 transition-all duration-200 hover:border-muted-foreground/20 hover:shadow-sm'
              >
                <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm'>
                  <Icon className='h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-foreground' />
                </div>
                <h3 className='text-lg font-semibold'>{point.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
