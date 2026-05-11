'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  readonly title: string
  readonly type: string
  readonly description: string
  readonly role: string
  readonly stack: readonly string[]
  readonly outcome: string
  readonly href: string
  readonly linkLabel: string
}

interface SelectedWorkSectionProps {
  readonly title: string
  readonly description?: string
  readonly projects: readonly Project[]
  readonly className?: string
}

export function SelectedWorkSection({
  title,
  description,
  projects,
  className = '',
}: SelectedWorkSectionProps) {
  return (
    <section id='work' className={`section-padding bg-[#F4F4F5] px-4 sm:px-6 ${className}`}>
      <div className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <h2 className='section-heading'>{title}</h2>
          {description && (
            <p className='section-description'>{description}</p>
          )}
        </div>

        <div className='mt-12 grid gap-6 lg:grid-cols-3'>
          {projects.map((project) => (
            <article
              key={project.title}
              className='marketing-card flex flex-col'
            >
              <div className='mb-5 aspect-[16/10] rounded-xl bg-[#F4F4F5] border border-[#E4E4E7]' />
              <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                {project.type}
              </p>
              <h3 className='mt-2 text-lg font-semibold'>{project.title}</h3>
              <p className='card-description'>{project.description}</p>

              <div className='mt-4'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  Role
                </p>
                <p className='mt-1 text-sm text-muted-foreground'>
                  {project.role}
                </p>
              </div>

              <div className='mt-4'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  Stack
                </p>
                <div className='mt-2 flex flex-wrap gap-2'>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className='rounded-full border border-[#E4E4E7] bg-[#F4F4F5] px-2.5 py-0.5 text-xs font-medium text-muted-foreground'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='mt-4 border-t border-[#E4E4E7] pt-4'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  Outcome
                </p>
                <p className='mt-1 text-sm text-muted-foreground'>
                  {project.outcome}
                </p>
              </div>

              <div className='mt-auto pt-5'>
                <Link
                  href={project.href}
                  className='inline-flex items-center gap-1 text-sm font-medium text-foreground transition-opacity hover:opacity-70'
                >
                  {project.linkLabel}
                  <ArrowUpRight className='h-4 w-4' />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
