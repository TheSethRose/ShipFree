import Link from 'next/link'

interface FooterLink {
  readonly label: string
  readonly href: string
}

interface LinkGroup {
  readonly title: string
  readonly links: readonly FooterLink[]
}

interface ExampleFooterProps {
  readonly logoLabel: string
  readonly description: string
  readonly linkGroups: readonly LinkGroup[]
  readonly className?: string
}

export function ExampleFooter({ logoLabel, description, linkGroups, className = '' }: ExampleFooterProps) {
  return (
    <footer className={`border-t border-[#E4E4E7] bg-[#F4F4F5] py-12 ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3
                className='mb-4 text-sm font-semibold uppercase'
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                {group.title}
              </h3>
              <ul className='space-y-3'>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-sm font-medium text-muted-foreground transition-colors duration-200 ease-in-out hover:text-foreground'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3
              className='mb-4 text-sm font-semibold uppercase'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              {logoLabel}
            </h3>
            <p className='text-sm text-muted-foreground'>{description}</p>
          </div>
        </div>
        <div className='mt-12 border-t border-[#E4E4E7] pt-8'>
          <p className='text-sm text-muted-foreground'>
            &copy; {new Date().getFullYear()} {logoLabel}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
