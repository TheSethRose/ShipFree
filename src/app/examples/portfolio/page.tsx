import { ExampleHeader } from '@/components/homepage-examples/shared/example-header'
import { ExampleFooter } from '@/components/homepage-examples/shared/example-footer'
import { PortfolioHero } from '@/components/homepage-examples/portfolio/portfolio-hero'
import { SelectedWorkSection } from '@/components/homepage-examples/portfolio/selected-work-section'
import { CaseStudyPreviewSection } from '@/components/homepage-examples/portfolio/case-study-preview-section'
import { SkillsGrid } from '@/components/homepage-examples/portfolio/skills-grid'
import { ExperienceTimeline } from '@/components/homepage-examples/portfolio/experience-timeline'
import { NowAvailableSection } from '@/components/homepage-examples/portfolio/now-available-section'
import { ContactCTASection } from '@/components/homepage-examples/portfolio/contact-cta-section'
import { portfolioHomepageExample } from '@/data/homepage-examples/portfolio'

export default function PortfolioExamplePage() {
  const data = portfolioHomepageExample

  return (
    <main className='min-h-screen bg-white'>
      <ExampleHeader
        logoLabel='Portfolio'
        navLinks={[...data.navLinks]}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
      />

      <PortfolioHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description={data.hero.description}
        location={data.hero.location}
        role={data.hero.role}
        focus={data.hero.focus}
        availability={data.hero.availability}
        knownFor={data.hero.knownFor}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
      />

      <SelectedWorkSection
        title='Selected work'
        description='Recent projects with role, stack, and outcomes.'
        projects={data.projects}
      />

      <CaseStudyPreviewSection
        title='How the work gets solved'
        caseStudies={data.caseStudies}
      />

      <SkillsGrid
        title='Skills and capabilities'
        categories={data.skills}
      />

      <ExperienceTimeline
        title='Experience'
        items={data.experience}
      />

      <NowAvailableSection
        title={data.now.title}
        focus={data.now.focus}
        availableFor={data.now.availableFor}
        notAvailableFor={data.now.notAvailableFor}
      />

      <ContactCTASection
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
