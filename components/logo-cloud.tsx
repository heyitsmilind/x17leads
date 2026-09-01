const tools = [
  { name: 'Instantly.ai', role: 'Sending' },
  { name: 'Smartlead', role: 'Sending' },
  { name: 'Clay', role: 'Data Enrichment' },
  { name: 'Apollo', role: 'Prospecting' },
  { name: 'MillionVerifier', role: 'List Hygiene' },
  { name: 'Google Workspace', role: 'Infrastructure' },
]

export function LogoCloud() {
  // duplicated once so the -50% translate loop is seamless
  const marqueeItems = [...tools, ...tools]

  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-primary/80">
          Built on Enterprise Outbound Infrastructure
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-balance text-center text-sm leading-relaxed text-muted-foreground">
          A professional stack engineered for deliverability, precision targeting, and clean data
          at every step of the campaign.
        </p>

        <div className="marquee-mask relative mt-10 overflow-hidden">
          <ul className="animate-marquee flex w-max items-stretch gap-4">
            {marqueeItems.map((tool, i) => (
              <li
                key={`${tool.name}-${i}`}
                aria-hidden={i >= tools.length}
                className="flex min-w-[220px] flex-col gap-1 rounded-xl border border-border bg-background/60 px-6 py-4"
              >
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  {tool.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {tool.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
