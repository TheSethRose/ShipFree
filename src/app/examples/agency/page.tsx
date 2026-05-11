import { ExampleHeader } from '@/components/homepage-examples/shared/example-header'
import { ExampleFooter } from '@/components/homepage-examples/shared/example-footer'
import { AgencyHero } from '@/components/homepage-examples/agency/agency-hero'
import { ServicesGrid } from '@/components/homepage-examples/agency/services-grid'
import { EngagementModelsSection } from '@/components/homepage-examples/agency/engagement-models-section'
import { ResultsSection } from '@/components/homepage-examples/agency/results-section'
import { ProcessSection } from '@/components/homepage-examples/agency/process-section'
import { CaseStudiesSection } from '@/components/homepage-examples/agency/case-studies-section'
import { FitSection } from '@/components/homepage-examples/agency/fit-section'
import { AgencyCTASection } from '@/components/homepage-examples/agency/agency-cta-section'
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
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description={data.hero.description}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        bestFor={data.hero.bestFor}
        snapshot={data.hero.snapshot}
      />

      <ServicesGrid
        title='Services'
        description='What we do, what you get, and what it looks like when it works.'
        services={data.services}
      />

      <EngagementModelsSection
        title='Engagement models'
        description='Choose the level of commitment that matches where you are.'
        models={data.engagementModels}
      />

      <ResultsSection
        title='Outcomes'
        description='What the work is designed to produce.'
        results={data.results}
      />

      <ProcessSection
        title='Process'
        description='How we go from problem to shipped tool.'
        steps={data.process}
      />

      <CaseStudiesSection
        title='Case studies'
        description='Real client situations and what we built for them.'
        caseStudies={data.caseStudies}
      />

      <FitSection
        title='Is this a fit?'
        goodFit={data.fit.goodFit}
        badFit={data.fit.badFit}
      />

      <AgencyCTASection
        label={data.cta.label}
        title={data.cta.title}
        description={data.cta.description}
        primaryCta={data.cta.primaryCta}
        secondaryCta={data.cta.secondaryCta}
      />

      <ExampleFooter
        logoLabel={data.footer.logoLabel}
        description={data.footer.description}
        linkGroups={[...data.footer.linkGroups]}
      />
    </main>
  )
}
