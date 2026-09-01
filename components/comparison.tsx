import { Check, X } from 'lucide-react'

const oldWay = [
  'Manual scraping and messy, outdated lists',
  'Emails landing straight in spam folders',
  'Generic blasts that get zero responses',
  'Hours wasted with nothing booked',
]

const x17Way = [
  'Verified, enriched data on real decision-makers',
  'Custom multi-step sequencing that lands in the inbox',
  'Ready-to-buy prospects matched to your ICP',
  'Qualified meetings booked on your calendar',
]

export function Comparison() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Outbound is broken. We fixed it.
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          Stop burning your team&apos;s time on outbound that doesn&apos;t
          convert.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card/40 p-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            The Old Way
          </h3>
          <ul className="mt-6 flex flex-col gap-4">
            {oldWay.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <X className="size-3.5" />
                </span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-primary/40 bg-primary/[0.06] p-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            The x17 Way
          </h3>
          <ul className="mt-6 flex flex-col gap-4">
            {x17Way.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" />
                </span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
