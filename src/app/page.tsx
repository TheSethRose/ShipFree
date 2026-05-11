import { SiteHeader } from '@/components/sections/site-header'
import { SiteHero } from '@/components/sections/site-hero'
import { LogoCloud } from '@/components/sections/logo-cloud'
import { ProblemSection } from '@/components/sections/problem-section'
import { SolutionSection } from '@/components/sections/solution-section'
import { SiteFeatures } from '@/components/sections/site-features'
import { FeatureShowcase } from '@/components/sections/feature-showcase'
import { HowItWorks } from '@/components/sections/how-it-works'
import { UseCases } from '@/components/sections/use-cases'
import { StatsSection } from '@/components/sections/stats-section'
import { Testimonials } from '@/components/sections/testimonials'
import { PricingSection } from '@/components/sections/pricing-section'
import { FAQSection } from '@/components/sections/faq-section'
import { SiteCta } from '@/components/sections/site-cta'
import { SiteFooter } from '@/components/sections/site-footer'
import { GridLayout } from './(site)/grid-layout'

export default function Page() {
  return (
    <GridLayout>
      <SiteHeader />
      <SiteHero />
      <LogoCloud />
      <StatsSection />
      <ProblemSection />
      <SolutionSection />
      <SiteFeatures />
      <FeatureShowcase />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <SiteCta />
      <SiteFooter />
    </GridLayout>
  )
}
