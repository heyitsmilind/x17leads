const cases = [
  {
    metric: '98%',
    label: 'Email Deliverability',
    detail:
      'We run a multi-domain sending setup with daily warming routines, so your campaigns consistently land in the primary inbox instead of spam.',
  },
  {
    metric: '100%',
    label: 'ICP Accuracy',
    detail:
      'Every list goes through a hands-on manual data cleaning process, so you only reach verified, in-market decision-makers and never waste a single send.',
  },
  {
    metric: 'Risk-Free',
    label: 'Start',
    detail:
      'We begin with low-friction, high-signal testing to find product-market fit quickly — proving the channel works before you scale.',
  },
]

export function Results() {
  return (
    <section id="results" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Our minimum benchmarks
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          The performance standards every x17 campaign is built to hit before we ever scale.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <div
            key={c.label}
            className="flex flex-col rounded-2xl border border-border bg-card/40 p-8"
          >
            <p className="text-5xl font-bold tracking-tight text-primary">
              {c.metric}
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground">
              {c.label}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {c.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
