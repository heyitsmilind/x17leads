'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'How do you make sure the leads are actually high quality?',
    a: 'Every list is built around your exact ICP and then verified and enriched, so you only ever reach real, in-market decision-makers — never scraped or outdated contacts.',
  },
  {
    q: 'Do I need to set up my own email domains?',
    a: 'No. We set up and warm dedicated sending domains for you, kept completely separate from your primary domain to protect your main reputation.',
  },
  {
    q: 'How do you protect deliverability and stay out of spam?',
    a: 'We use warmed domains, strict sending volumes, authentication (SPF, DKIM, DMARC), and continuous inbox monitoring to keep your campaigns landing in the primary inbox.',
  },
  {
    q: "What happens if you don't book any meetings for us?",
    a: "We tie our success directly to yours. If we don't generate qualified opportunities that match your Ideal Customer Profile within the first 30 days, we will continue optimization and sending at our own expense until we do. We don't succeed unless your pipeline grows.",
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
