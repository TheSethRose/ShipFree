'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from '@/components/ui/accordion'
import { faqData } from '@/data/site-data'

interface FAQSectionProps {
  readonly className?: string
}

export function FAQSection({ className = '' }: FAQSectionProps) {
  return (
    <section id='faq' className={`border-b border-[#E4E4E7] bg-white py-24 ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid gap-12 md:grid-cols-2 md:gap-16'>
          {/* Left: Title */}
          <div>
            <h2
              className='mb-8 text-sm font-medium text-muted-foreground'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              {faqData.label}
            </h2>
            <h2 className='text-4xl font-semibold tracking-tight'>{faqData.title}</h2>
            <p className='mt-4 text-lg text-muted-foreground'>{faqData.description}</p>
          </div>

          {/* Right: Accordion */}
          <div>
            <Accordion className='space-y-0'>
              {faqData.questions.map((item, index) => (
                <AccordionItem key={index} className='border-b border-[#E4E4E7] last:border-b-0'>
                  <AccordionTrigger className='text-left py-4 text-base font-medium hover:no-underline'>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionPanel className='text-muted-foreground text-sm pb-4'>
                    {item.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
