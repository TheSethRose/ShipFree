import { ExampleHeader } from '@/components/homepage-examples/shared/example-header'
import { ExampleFooter } from '@/components/homepage-examples/shared/example-footer'
import { LocalBusinessHero } from '@/components/homepage-examples/local-business/local-business-hero'
import { QuickContactBar } from '@/components/homepage-examples/local-business/quick-contact-bar'
import { LocalServicesSection } from '@/components/homepage-examples/local-business/local-services-section'
import { ServiceAreaSection } from '@/components/homepage-examples/local-business/service-area-section'
import { BeforeAfterGallery } from '@/components/homepage-examples/local-business/before-after-gallery'
import { ReviewGrid } from '@/components/homepage-examples/local-business/review-grid'
import { HoursContactSection } from '@/components/homepage-examples/local-business/hours-contact-section'
import { EmergencyBookingSection } from '@/components/homepage-examples/local-business/emergency-booking-section'
import { LocalFAQSection } from '@/components/homepage-examples/local-business/local-faq-section'
import { localBusinessHomepageExample } from '@/data/homepage-examples/local-business'

export default function LocalBusinessExamplePage() {
  const data = localBusinessHomepageExample

  return (
    <main className='min-h-screen bg-white'>
      <ExampleHeader
        logoLabel='Local Business Example'
        navLinks={[...data.navLinks]}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
      />

      <LocalBusinessHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description={data.hero.description}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        trustPoints={data.hero.trustPoints}
        availabilityCard={data.hero.availabilityCard}
      />

      <QuickContactBar items={data.quickContact} />

      <LocalServicesSection
        title='Services'
        description='What we offer, how long it takes, and how to book.'
        services={data.services}
      />

      <ServiceAreaSection
        title={data.serviceArea.title}
        description={data.serviceArea.description}
        cities={data.serviceArea.cities}
        note={data.serviceArea.note}
      />

      <BeforeAfterGallery
        title='Work examples'
        description='What customers experience before and after working with us.'
        items={data.gallery}
      />

      <ReviewGrid
        title='Customer reviews'
        description='Recent reviews from people in the service area.'
        reviews={data.reviews}
      />

      <HoursContactSection
        title='Hours and contact'
        phone={data.contact.phone}
        phoneHref={data.contact.phoneHref}
        email={data.contact.email}
        emailHref={data.contact.emailHref}
        address={data.contact.address}
        serviceArea={data.contact.serviceArea}
        hours={data.contact.hours}
        note={data.contact.note}
      />

      <EmergencyBookingSection
        urgent={data.booking.urgent}
        planned={data.booking.planned}
      />

      <LocalFAQSection
        title='Common questions'
        questions={data.faq}
      />

      <ExampleFooter
        logoLabel={data.footer.logoLabel}
        description={data.footer.description}
        linkGroups={[...data.footer.linkGroups]}
      />
    </main>
  )
}
