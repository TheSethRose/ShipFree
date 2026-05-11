import Link from 'next/link'

import { siteConfig, footerData } from '@/data/site-data'

interface SiteFooterProps {
  readonly className?: string
}

export function SiteFooter({ className = '' }: SiteFooterProps) {
  return (
    <footer className={`border-t border-[#E4E4E7] bg-[#F4F4F5] py-12 ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Link Columns */}
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          {footerData.columns.map((column) => (
            <div key={column.title}>
              <h3
                className='mb-4 text-sm font-semibold uppercase'
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                {column.title}
              </h3>
              <ul className='space-y-3'>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className='text-sm font-medium text-muted-foreground transition-colors duration-200 ease-in-out hover:text-foreground'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Brand Column */}
          <div>
            <h3
              className='mb-4 text-sm font-semibold uppercase'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              {siteConfig.name}
            </h3>
            <p className='text-sm text-muted-foreground'>{siteConfig.tagline}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-12 border-t border-[#E4E4E7] pt-8'>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex items-center gap-2'>
              <img
                src={siteConfig.logo}
                alt={`${siteConfig.name} Logo`}
                className='h-6 w-6 object-contain'
              />
              <span
                className='text-base font-semibold text-foreground'
                style={{ fontFamily: 'var(--font-bricolage-grotesque)' }}
              >
                {siteConfig.name}
              </span>
            </div>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
