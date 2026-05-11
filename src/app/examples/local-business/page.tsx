import { ExampleHeader } from '@/components/homepage-examples/shared/example-header'
import { ExampleFooter } from '@/components/homepage-examples/shared/example-footer'
import { ExampleFeatureGrid } from '@/components/homepage-examples/shared/example-feature-grid'
import { ExampleFAQSection } from '@/components/homepage-examples/shared/example-faq-section'
import { ExampleCTASection } from '@/components/homepage-examples/shared/example-cta-section'
import { LocalBusinessHero } from '@/components/homepage-examples/local-business/local-business-hero'
import { ServiceAreaSection } from '@/components/homepage-examples/local-business/service-area-section'
import { HoursContactSection } from '@/components/homepage-examples/local-business/hours-contact-section'
import { ReviewGrid } from '@/components/homepage-examples/local-business/review-grid'
import { GalleryPreview } from '@/components/homepage-examples/local-business/gallery-preview'
import { localBusinessHomepageExample } from '@/data/homepage-examples/local-business'

export default function LocalBusinessExamplePage() {
  const data = localBusinessHomepageExample

  return (
    <main className='min-h-screen bg-white'>
      <ExampleHeader
        logoLabel={data.hero.businessName}
        navLinks={[...data.navLinks]}
        primaryCta={data.hero.primaryCta}
      />

      <LocalBusinessHero
        businessName={data.hero.businessName}
        tagline={data.hero.tagline}
        description={data.hero.description}
        address={data.hero.address}
        phone={data.hero.phone}
        primaryCta={data.hero.primaryCta}
      />

      <ExampleFeatureGrid
        label='MENU'
        title='What we serve'
        description='Fresh, seasonal, and made with care every day.'
        features={[
          { title: 'Espresso drinks', description: 'Single-origin and house blends, pulled fresh to order.' },
          { title: 'Fresh pastries', description: 'Baked in-house every morning. Croissants, muffins, and seasonal specials.' },
          { title: 'Light meals', description: 'Sandwiches, salads, and soups made with local ingredients.' },
          { title: 'Retail beans', description: 'Take home a bag of our house roast or a seasonal single origin.' },
        ]}
        background='muted'
        columns={2}
      />

      <ServiceAreaSection
        label={data.serviceAreas.label}
        title={data.serviceAreas.title}
        description={data.serviceAreas.description}
        areas={data.serviceAreas.areas}
      />

      <GalleryPreview
        label={data.gallery.label}
        title={data.gallery.title}
        items={data.gallery.items}
      />

      <ReviewGrid
        label={data.reviews.label}
        title={data.reviews.title}
        reviews={data.reviews.reviews}
      />

      <HoursContactSection
        label={data.hours.label}
        title={data.hours.title}
        hours={data.hours.hours}
        address={data.hours.address}
        phone={data.hours.phone}
        email={data.hours.email}
      />

      <ExampleFAQSection
        label='FAQ'
        title='Questions & answers'
        questions={[
          { question: 'Do you take reservations?', answer: 'We do not take reservations, but seating is usually available. Peak times are 9–11 AM on weekends.' },
          { question: 'Do you have vegan or gluten-free options?', answer: 'Yes. We always have vegan pastries and gluten-free options available. Ask our staff for today\'s selection.' },
          { question: 'Is there wifi?', answer: 'Free wifi for all guests. Password is printed on your receipt.' },
        ]}
        background='white'
      />

      <ExampleCTASection
        label='VISIT US'
        title='Come by this week.'
        description='We would love to see you. Order ahead for pickup or stop in and stay a while.'
        primaryCta={{ label: 'Order online', href: '/order' }}
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
