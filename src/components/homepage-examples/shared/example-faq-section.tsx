import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from '@/components/ui/accordion'
import { ExampleSectionHeader } from './example-section-header'

interface FAQItem {
  readonly question: string
  readonly answer: string
}

interface ExampleFAQSectionProps {
  readonly label?: string
  readonly title: string
  readonly description?: string
  readonly questions: readonly FAQItem[]
  readonly background?: 'white' | 'muted'
  readonly className?: string
}

export function ExampleFAQSection({
  label,
  title,
  description,
  questions,
  background = 'white',
  className = '',
}: ExampleFAQSectionProps) {
  const bgClass = background === 'muted' ? 'bg-[#F4F4F5]' : 'bg-white'

  return (
    <section className={`section-padding border-b border-[#E4E4E7] ${bgClass} ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid gap-12 md:grid-cols-2 md:gap-16'>
          <div>
            <ExampleSectionHeader label={label} title={title} description={description} align='left' />
          </div>
          <div>
            <Accordion className='space-y-0'>
              {questions.map((item, index) => (
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
