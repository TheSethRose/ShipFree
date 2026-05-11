'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface Question {
  readonly question: string
  readonly answer: string
}

interface LocalFAQSectionProps {
  readonly title: string
  readonly questions: readonly Question[]
  readonly className?: string
}

export function LocalFAQSection({
  title,
  questions,
  className = '',
}: LocalFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className={`section-padding bg-white px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-2xl'>
        <h2 className='section-heading'>{title}</h2>

        <div className='mt-12 space-y-3'>
          {questions.map((q, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className='rounded-2xl border border-[#E4E4E7] bg-white transition-all'
              >
                <button
                  type='button'
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className='flex w-full items-center justify-between gap-4 p-5 text-left'
                >
                  <span className='text-base font-semibold'>
                    {q.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className='px-5 pb-5'>
                    <p className='text-base leading-7 text-muted-foreground'>
                      {q.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
