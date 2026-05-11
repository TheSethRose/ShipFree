'use client'

import { Terminal, ShoppingCart, BookOpen, Bot, ArrowUpRight } from 'lucide-react'

import { useCasesData } from '@/data/site-data'

interface UseCasesProps {
  readonly className?: string
}

const icons = [Terminal, ShoppingCart, BookOpen, Bot]

export function UseCases({ className = '' }: UseCasesProps) {
  return (
    <section className={`border-b border-[#E4E4E7] bg-white py-24 ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto mb-16 max-w-2xl text-center'>
          <h2
            className='mb-8 text-sm font-medium text-muted-foreground'
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            {useCasesData.label}
          </h2>
          <h2 className='text-4xl font-semibold tracking-tight'>{useCasesData.title}</h2>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {useCasesData.cases.map((item, index) => {
            const Icon = icons[index]
            return (
              <div
                key={item.title}
                className='group relative rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-6 transition-all duration-200 hover:border-muted-foreground/20 hover:shadow-sm'
              >
                <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm'>
                  <Icon className='h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-foreground' />
                </div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                  {item.description}
                </p>
                <div className='mt-4 flex items-center gap-1 text-sm font-medium text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                  <span>Learn more</span>
                  <ArrowUpRight className='h-4 w-4' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
