import { Target, PenLine, CalendarCheck } from 'lucide-react'

const steps = [
  {
    icon: Target,
    title: 'Precision Targeting & Verification',
    description:
      'We map your exact ideal buyer parameters and pull live, intent-driven prospect data. Every lead goes through multi-tier verification checks to guarantee sub-1% bounce rates before outreach.',
  },
  {
    icon: PenLine,
    title: 'Conversational Copywriting',
    description:
      'We craft highly personalised, human-sounding email sequences focused on your unique offer. Every script is engineered to start sales conversations with high-level decision-makers.',
  },
  {
    icon: CalendarCheck,
    title: 'Primary Delivery & Booked Calls',
    description:
      'We launch campaigns through isolated secondary domains straight into primary inboxes. Positive replies turn into qualified meetings on your calendar — and you only pay per qualified booked meeting.',
  },
]

export function Process() {
  return (
    <section id="process" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A proven process, done entirely for you
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Three steps from cold list to booked calls — no lifting required
            from your team.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col rounded-2xl border border-border bg-background p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="size-6" />
                </span>
                <span className="text-sm font-semibold text-muted-foreground/50">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
