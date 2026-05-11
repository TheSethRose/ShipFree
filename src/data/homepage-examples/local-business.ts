export const localBusinessHomepageExample = {
  name: 'Local Business',
  description: 'A homepage pattern for shops, restaurants, clinics, and service-based locals.',
  sections: [
    'Hero',
    'About',
    'Services',
    'Location & hours',
    'Gallery',
    'Reviews',
    'Contact',
  ],
  hero: {
    businessName: 'The Corner Cafe',
    tagline: 'Fresh coffee, homemade pastries, and a place to slow down.',
    description:
      'A neighborhood cafe serving ethically sourced coffee, seasonal pastries, and light meals since 2015. Come in for the brew, stay for the atmosphere.',
    address: '123 Main Street, Portland, OR',
    phone: '(503) 555-0123',
    primaryCta: { label: 'Order online', href: '/order' },
  },
  navLinks: [
    { label: 'Menu', href: '/#menu' },
    { label: 'Hours', href: '/#hours' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/contact' },
  ],
  serviceAreas: {
    label: 'SERVICE AREAS',
    title: 'We serve these neighborhoods',
    description: 'Free delivery within 3 miles. Pickup always available.',
    areas: [
      { name: 'Downtown', distance: '0.5 mi' },
      { name: 'Pearl District', distance: '1.2 mi' },
      { name: 'Alberta Arts', distance: '2.1 mi' },
      { name: 'Mississippi', distance: '2.8 mi' },
      { name: 'Sellwood', distance: '3.0 mi' },
    ],
  },
  hours: {
    label: 'VISIT US',
    title: 'Hours & contact',
    hours: [
      { day: 'Monday–Friday', hours: '7:00 AM – 6:00 PM' },
      { day: 'Saturday', hours: '8:00 AM – 5:00 PM' },
      { day: 'Sunday', hours: '8:00 AM – 4:00 PM' },
    ],
    address: '123 Main Street, Portland, OR 97201',
    phone: '(503) 555-0123',
    email: 'hello@cornercafe.com',
  },
  reviews: {
    label: 'REVIEWS',
    title: 'What our guests say',
    reviews: [
      { name: 'Sarah M.', rating: 5, text: 'Best latte in Portland. The staff remembers your name and order.', date: '2 weeks ago' },
      { name: 'David K.', rating: 5, text: 'The pastries are made fresh every morning. The almond croissant is a must.', date: '1 month ago' },
      { name: 'Emily R.', rating: 4, text: 'Great atmosphere for working remotely. Reliable wifi and plenty of outlets.', date: '3 weeks ago' },
    ],
  },
  gallery: {
    label: 'GALLERY',
    title: 'A peek inside',
    items: [
      { alt: 'Interior seating' },
      { alt: 'Coffee bar' },
      { alt: 'Pastry display' },
      { alt: 'Outdoor patio' },
    ],
  },
  footer: {
    logoLabel: 'The Corner Cafe',
    description: 'Fresh coffee and homemade pastries since 2015.',
    linkGroups: [
      { title: 'Visit', links: [{ label: 'Menu', href: '/#menu' }, { label: 'Hours', href: '/#hours' }, { label: 'Location', href: '/#location' }] },
      { title: 'Connect', links: [{ label: 'Instagram', href: 'https://instagram.com' }, { label: 'Facebook', href: 'https://facebook.com' }] },
      { title: 'Legal', links: [{ label: 'Terms', href: '/terms' }, { label: 'Privacy', href: '/privacy' }] },
    ],
  },
} as const
