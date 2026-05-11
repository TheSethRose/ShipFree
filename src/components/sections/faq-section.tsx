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
    <section id='faq' className={`section-padding border-b border-[#E4E4E7] bg-[#F4F4F5] ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid gap-12 md:grid-cols-2 md:gap-16'>
          <div>
            <h2 className='section-kicker' style={{ fontFamily: 'var(--font-geist-mono)' }}>
              {faqData.label}
            </h2>
            <h2 className='section-heading'>{faqData.title}</h2>
            <p className='section-description'>{faqData.description}</p>
          </div>
          <div>
            <Accordion className='space-y-0'>
              {faqData.questions.map((item, index) => (
                <AccordionItem key={index} className='border-b border-[#E4E4E7] last:border-b-0'>
                  <AccordionTrigger className='py-5 text-left text-base font-semibold hover:no-underline'>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionPanel className='pb-5 text-base leading-7 text-muted-foreground'>
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
