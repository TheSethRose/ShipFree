'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

interface NavLink {
  readonly label: string
  readonly href: string
}

interface ExampleHeaderProps {
  readonly logoLabel: string
  readonly navLinks: readonly NavLink[]
  readonly primaryCta: { readonly label: string; readonly href: string }
  readonly secondaryCta?: { readonly label: string; readonly href: string }
  readonly className?: string
}

export function ExampleHeader({
  logoLabel,
  navLinks,
  primaryCta,
  secondaryCta,
  className = '',
}: ExampleHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b border-[#E4E4E7] bg-white/90 backdrop-blur-xl ${className}`}
    >
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6'>
        <Link href='/' className='flex items-center gap-2'>
          <span
            className='text-base font-semibold text-foreground'
            style={{ fontFamily: 'var(--font-bricolage-grotesque)' }}
          >
            {logoLabel}
          </span>
        </Link>

        <nav className='hidden items-center gap-6 md:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-medium text-muted-foreground transition-colors duration-200 ease-in-out hover:text-foreground'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='hidden items-center gap-3 md:flex'>
          {secondaryCta && (
            <Button variant='ghost' size='sm' render={(props) => <Link {...props} href={secondaryCta.href} />}>
              {secondaryCta.label}
            </Button>
          )}
          <Button size='sm' render={(props) => <Link {...props} href={primaryCta.href} />}>
            {primaryCta.label}
          </Button>
        </div>

        <button
          type='button'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </button>
      </div>

      {isMenuOpen && (
        <div className='border-t border-border bg-white md:hidden'>
          <nav className='mx-auto max-w-6xl space-y-1 px-4 pb-3 pt-2'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className='mt-2 flex flex-col gap-2 border-t border-border pt-2'>
              {secondaryCta && (
                <Button
                  variant='ghost'
                  size='sm'
                  className='justify-start'
                  render={(props) => <Link {...props} href={secondaryCta.href} onClick={() => setIsMenuOpen(false)} />}
                >
                  {secondaryCta.label}
                </Button>
              )}
              <Button
                size='sm'
                className='justify-start'
                render={(props) => <Link {...props} href={primaryCta.href} onClick={() => setIsMenuOpen(false)} />}
              >
                {primaryCta.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
