interface DashboardMetric {
  readonly label: string
  readonly value: string
  readonly change?: string
}

interface SaasDashboardPreviewProps {
  readonly title?: string
  readonly subtitle?: string
  readonly metrics?: readonly DashboardMetric[]
  readonly className?: string
}

export function SaasDashboardPreview({
  title = 'Dashboard overview',
  subtitle = 'Your key metrics at a glance',
  metrics = [
    { label: 'Active users', value: '2,847', change: '+12%' },
    { label: 'Revenue', value: '$14,230', change: '+8%' },
    { label: 'Churn rate', value: '2.1%', change: '-0.4%' },
  ],
  className = '',
}: SaasDashboardPreviewProps) {
  return (
    <section className={`section-padding border-b border-[#E4E4E7] bg-[#F4F4F5] ${className}`}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mx-auto mb-12 max-w-2xl text-center'>
          <h2 className='section-heading'>{title}</h2>
          <p className='section-description'>{subtitle}</p>
        </div>
        <div className='mx-auto max-w-5xl rounded-3xl border border-[#E4E4E7] bg-white p-3 shadow-xl shadow-black/5'>
          <div className='rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] p-4 sm:p-6'>
            <div className='mb-4 flex items-center gap-2'>
              <span className='h-3 w-3 rounded-full bg-[#E4E4E7]' />
              <span className='h-3 w-3 rounded-full bg-[#E4E4E7]' />
              <span className='h-3 w-3 rounded-full bg-[#E4E4E7]' />
            </div>
            <div className='grid gap-4 sm:grid-cols-3'>
              {metrics.map((metric) => (
                <div key={metric.label} className='rounded-xl bg-white p-5 shadow-sm'>
                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                    {metric.label}
                  </p>
                  <div className='mt-2 flex items-baseline gap-2'>
                    <span className='text-2xl font-bold'>{metric.value}</span>
                    {metric.change && (
                      <span className='text-sm font-medium text-muted-foreground'>{metric.change}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-4 h-48 rounded-xl bg-white p-5 shadow-sm'>
              <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                Weekly growth
              </p>
              <div className='mt-4 flex items-end gap-2 h-28'>
                {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
                  <div key={i} className='flex-1 rounded-t-md bg-[#E4E4E7]' style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
