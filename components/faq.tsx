'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'How do you make sure the leads are actually high quality?',
    a: "We don't rely on static, outdated database exports. We dynamically build target lists based on live buyer intent, run multi-tier verification checks to ensure sub-1% bounce rates, and manually review every single contact to guarantee exact ICP alignment before launching.",
  },
  {
    q: 'Do I need to set up my own email domains?',
    a: 'No. We handle 100% of the technical setup for you. We deploy dedicated secondary sending domains equipped with proper authentication (SPF, DKIM, DMARC) and run multi-week warming cycles. Your main company domain stays 100% safe and completely untouched.',
  },
  {
    q: 'How do you protect deliverability and stay out of spam?',
    a: 'We protect domain health by distributing sending volume across multiple enterprise cloud inboxes, capping daily limits per inbox, and maintaining continuous warm-up sequences so your campaigns land straight in the primary inbox.',
  },
  {
    q: "What happens if you don't book any meetings for us?",
    a: "We operate on a pure pay-per-qualified-lead / performance model. We don't get paid until you get real pipeline results and booked meetings. Zero risk on your end.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faqs" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Everything you need to know before we get started.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="rounded-xl border border-border bg-background"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-foreground">
                    {item.q}
                  </span>
                  <Plus
                    className={`size-5 shrink-0 text-primary transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
