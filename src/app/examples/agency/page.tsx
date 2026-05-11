import { ExampleHeader } from '@/components/homepage-examples/shared/example-header'
import { ExampleFooter } from '@/components/homepage-examples/shared/example-footer'
import { ExampleTestimonials } from '@/components/homepage-examples/shared/example-testimonials'
import { ExampleFAQSection } from '@/components/homepage-examples/shared/example-faq-section'
import { ExampleCTASection } from '@/components/homepage-examples/shared/example-cta-section'
import { AgencyHero } from '@/components/homepage-examples/agency/agency-hero'
import { ServicesGrid } from '@/components/homepage-examples/agency/services-grid'
import { ProcessSection } from '@/components/homepage-examples/agency/process-section'
import { ResultsSection } from '@/components/homepage-examples/agency/results-section'
import { agencyHomepageExample } from '@/data/homepage-examples/agency'

export default function AgencyExamplePage() {
  const data = agencyHomepageExample

  return (
    <main className='min-h-screen bg-white'>
      <ExampleHeader
        logoLabel={data.footer.logoLabel}
        navLinks={[...data.navLinks]}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
      />

      <AgencyHero
        headline={data.hero.headline}
        subheadline={data.hero.subheadline}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
      />

      <ServicesGrid
        label={data.services.label}
        title={data.services.title}
        description={data.services.description}
        services={data.services.services}
      />

      <ProcessSection
        label={data.process.label}
        title={data.process.title}
        description={data.process.description}
        steps={data.process.steps}
      />

      <ResultsSection
        label={data.results.label}
        title={data.results.title}
        results={data.results.results}
      />

      <ExampleTestimonials
        label={data.testimonials.label}
        title={data.testimonials.title}
        testimonials={data.testimonials.testimonials}
        background='muted'
      />

      <ExampleFAQSection
        label='FAQ'
        title='Common questions'
        questions={[
          { question: 'What is your typical project timeline?', answer: 'Most brand and web projects take 6–12 weeks depending on scope. We will give you a clear timeline before we start.' },
          { question: 'Do you work with startups?', answer: 'Absolutely. We have built brands and products for companies at every stage.' },
          { question: 'What does a project cost?', answer: 'Every project is different. We will provide a detailed estimate after our initial discovery call.' },
        ]}
        background='white'
      />

      <ExampleCTASection
        label='START A PROJECT'
        title='Ready to build something great?'
        description='Tell us what you are working on and we will get back to you within 24 hours.'
        primaryCta={{ label: 'Start a project', href: '/contact' }}
        background='muted'
      />

      <ExampleFooter
        logoLabel={data.footer.logoLabel}
        description={data.footer.description}
        linkGroups={[...data.footer.linkGroups]}
      />
    </main>
  )
}
