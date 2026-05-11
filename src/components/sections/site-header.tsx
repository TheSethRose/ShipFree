'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { siteConfig, navLinks } from '@/data/site-data'

interface SiteHeaderProps {
  readonly className?: string
}

export function SiteHeader({ className = '' }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b border-[#E4E4E7] bg-[#F4F4F5] ${className}`}
    >
      <div className='mx-auto flex h-14 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2'>
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
        </Link>

        {/* Desktop Nav */}
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

        {/* Desktop Actions */}
        <div className='hidden items-center gap-3 md:flex'>
          <Button variant='ghost' size='sm' asChild>
            <Link href='/login'>Sign in</Link>
          </Button>
          <Button size='sm' asChild>
            <Link href='/register'>Get Started</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type='button'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='border-t border-border bg-[#F4F4F5] md:hidden'>
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
              <Button variant='ghost' size='sm' className='justify-start' asChild>
                <Link href='/login'>Sign in</Link>
              </Button>
              <Button size='sm' className='justify-start' asChild>
                <Link href='/register'>Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
