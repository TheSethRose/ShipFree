import { SiteHeader } from '@/components/sections/site-header'
import { SiteHero } from '@/components/sections/site-hero'
import { SiteFeatures } from '@/components/sections/site-features'
import { SiteCta } from '@/components/sections/site-cta'
import { SiteFooter } from '@/components/sections/site-footer'
import { GridLayout, SectionDivider } from './(site)/grid-layout'

export default function Page() {
  return (
    <GridLayout>
      <SiteHeader />
      <SiteHero />
      <SectionDivider />
      <SiteFeatures />
      <SectionDivider />
      <SiteCta />
      <SiteFooter />
    </GridLayout>
  )
}
