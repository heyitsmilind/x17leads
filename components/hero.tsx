'use client'

import { useState } from 'react'
import { ArrowRight, Check, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const workflowSteps = [
  {
    number: '01',
    title: 'Precision ICP Sourcing',
    summary: 'Live intent signals, multi-tier data verification, sub-1% bounce guarantee',
  },
  {
    number: '02',
    title: 'Scalable Domain Infrastructure',
    summary: 'Isolated secondary domains, enterprise warm-up, primary inbox delivery',
  },
  {
    number: '03',
    title: 'High-Converting Conversational Copy',
    summary: 'Tailored multi-touch messaging landing directly in decision-makers primary inbox',
  },
]

export function Hero() {
  const [activeStep, setActiveStep] = useState(0)
  const step = workflowSteps[activeStep]

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-72 w-[36rem] rounded-full bg-primary/20 blur-[120px]" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            B2B Cold Email Lead Generation
          </span>
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We Fill Your Pipeline With Qualified B2B Sales Meetings.
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Done-for-you cold email campaigns that target your exact ideal
            buyers and book meetings directly into your sales team&apos;s
            calendar.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href="#contact" />}
              className="h-12 px-6 text-base font-semibold"
> Get Qualified Meetings

              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#process" />}
              className="h-12 px-6 text-base font-semibold"
            >
              <Play className="size-4" />
              Explore Our Process
            </Button>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Check className="size-3.5 text-primary" />
            Zero-Risk Pay-Per-Booked-Meeting Model
          </span>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" />
          <div className="relative rounded-2xl border border-border bg-card p-5 shadow-2xl sm:p-7">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Outbound engine preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                  A repeatable path to pipeline
                </h2>
              </div>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs font-semibold text-primary">
                {step.number}
              </span>
            </div>

            <div className="flex flex-col gap-2" role="tablist" aria-label="Outbound engine steps">
              {workflowSteps.map((workflowStep, index) => (
                <button
                  key={workflowStep.number}
                  type="button"
                  role="tab"
                  aria-selected={activeStep === index}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-colors ${
                    activeStep === index
                      ? 'border-primary/40 bg-primary/10'
                      : 'border-border/60 bg-background/40 hover:border-primary/25 hover:bg-primary/5'
                  }`}
                >
                  <span className="text-xs font-semibold text-primary">{workflowStep.number}</span>
                  <span className="text-sm font-medium text-foreground">{workflowStep.title}</span>
                  <span className="ml-auto text-muted-foreground">→</span>
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-border/60 bg-background/60 p-5" role="tabpanel">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Step {step.number} outcome
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                {step.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
