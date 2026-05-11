import { ExampleHeader } from '@/components/homepage-examples/shared/example-header'
import { ExampleFooter } from '@/components/homepage-examples/shared/example-footer'
import { ProductHero } from '@/components/homepage-examples/product/product-hero'
import { ProductShowcase } from '@/components/homepage-examples/product/product-showcase'
import { WhatYouGetSection } from '@/components/homepage-examples/product/what-you-get-section'
import { UseCasesSection } from '@/components/homepage-examples/product/use-cases-section'
import { IncludedFilesSection } from '@/components/homepage-examples/product/included-files-section'
import { LicenseSection } from '@/components/homepage-examples/product/license-section'
import { ProductPricing } from '@/components/homepage-examples/product/product-pricing'
import { ProductFAQSection } from '@/components/homepage-examples/product/product-faq-section'
import { BuyCTASection } from '@/components/homepage-examples/product/buy-cta-section'
import { productHomepageExample } from '@/data/homepage-examples/product'

export default function ProductExamplePage() {
  const data = productHomepageExample

  return (
    <main className='min-h-screen bg-white'>
      <ExampleHeader
        logoLabel={data.footer.logoLabel}
        navLinks={[...data.navLinks]}
        primaryCta={data.hero.primaryCta}
      />

      <ProductHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description={data.hero.description}
        priceLine={data.hero.priceLine}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        note={data.hero.note}
        preview={data.hero.preview}
      />

      <ProductShowcase
        title={data.showcase.title}
        description={data.showcase.description}
        highlights={data.showcase.highlights}
        previewBlocks={data.showcase.previewBlocks}
      />

      <WhatYouGetSection
        title='What you get'
        items={data.whatYouGet}
      />

      <UseCasesSection
        title='Who this is for'
        description='Four common ways buyers use this product.'
        cases={data.useCases}
      />

      <IncludedFilesSection
        title='Included files'
        description='Exactly what is in the package.'
        files={data.includedFiles}
      />

      <LicenseSection
        title={data.license.title}
        note={data.license.note}
        allowed={data.license.allowed}
        notAllowed={data.license.notAllowed}
      />

      <ProductPricing
        label={data.pricing.label}
        price={data.pricing.price}
        compareAt={data.pricing.compareAt}
        description={data.pricing.description}
        includes={data.pricing.includes}
        cta={data.pricing.cta}
        note={data.pricing.note}
        receipt={data.pricing.receipt}
      />

      <ProductFAQSection
        title='Questions'
        questions={data.faq}
      />

      <BuyCTASection
        label={data.buyCta.label}
        title={data.buyCta.title}
        description={data.buyCta.description}
        price={data.buyCta.price}
        primaryCta={data.buyCta.primaryCta}
        secondaryCta={data.buyCta.secondaryCta}
        checklist={data.buyCta.checklist}
      />

      <ExampleFooter
        logoLabel={data.footer.logoLabel}
        description={data.footer.description}
        linkGroups={[...data.footer.linkGroups]}
      />
    </main>
  )
}
