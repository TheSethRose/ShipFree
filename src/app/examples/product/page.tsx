import { ExampleHeader } from '@/components/homepage-examples/shared/example-header'
import { ExampleFooter } from '@/components/homepage-examples/shared/example-footer'
import { ExampleFeatureGrid } from '@/components/homepage-examples/shared/example-feature-grid'
import { ExampleTestimonials } from '@/components/homepage-examples/shared/example-testimonials'
import { ExampleFAQSection } from '@/components/homepage-examples/shared/example-faq-section'
import { ExampleCTASection } from '@/components/homepage-examples/shared/example-cta-section'
import { ProductHero } from '@/components/homepage-examples/product/product-hero'
import { ProductShowcase } from '@/components/homepage-examples/product/product-showcase'
import { LicenseSection } from '@/components/homepage-examples/product/license-section'
import { ProductPricing } from '@/components/homepage-examples/product/product-pricing'
import { productHomepageExample } from '@/data/homepage-examples/product'

export default function ProductExamplePage() {
  const data = productHomepageExample

  return (
    <main className='min-h-screen bg-white'>
      <ExampleHeader
        logoLabel={data.footer.logoLabel}
        navLinks={[...data.navLinks]}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
      />

      <ProductHero
        productName={data.hero.productName}
        tagline={data.hero.tagline}
        description={data.hero.description}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        trustPoints={data.hero.trustPoints}
      />

      <ProductShowcase
        label={data.showcase.label}
        title={data.showcase.title}
        description={data.showcase.description}
        features={data.showcase.features}
      />

      <ExampleFeatureGrid
        label={data.features.label}
        title={data.features.title}
        features={data.features.features}
        background='muted'
      />

      <LicenseSection
        label={data.license.label}
        title={data.license.title}
        tiers={data.license.tiers}
      />

      <ProductPricing
        label={data.pricing.label}
        title={data.pricing.title}
        tiers={data.pricing.tiers}
      />

      <ExampleTestimonials
        label={data.reviews.label}
        title={data.reviews.title}
        testimonials={data.reviews.testimonials}
        background='muted'
      />

      <ExampleFAQSection
        label={data.faq.label}
        title={data.faq.title}
        questions={data.faq.questions}
        background='white'
      />

      <ExampleCTASection
        label={data.cta.label}
        title={data.cta.title}
        description={data.cta.description}
        primaryCta={data.cta.primaryCta}
        secondaryCta={data.cta.secondaryCta}
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
