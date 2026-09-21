import { Button } from '@/components/ui/button'

const fieldClass =
  'w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'

const labelClass = 'text-sm font-medium text-foreground'

export function ContactForm() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-primary/30 bg-card/50 p-8 shadow-2xl sm:p-12">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to scale your outbound sales?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Tell us about your target audience and we&apos;ll map out a
            campaign built to book meetings.
          </p>
        </div>

        <form
          name="strategy-session"
          method="POST"
          action="/"
          data-netlify="true"
          className="mt-10 flex flex-col gap-5"
        >
          <input type="hidden" name="form-name" value="strategy-session" />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>
                  Company Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="website" className={labelClass}>
                Company Website URL
              </label>
              <input
                id="website"
                name="website"
                type="url"
                required
                placeholder="https://company.com"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="audience" className={labelClass}>
                Tell us about your target audience
              </label>
              <textarea
                id="audience"
                name="audience"
                required
                rows={4}
                placeholder="Who are your ideal buyers? Industries, roles, company size..."
                className={`${fieldClass} resize-none`}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-2 h-12 w-full text-base font-semibold"
            >
              Request a Free Strategy Session
            </Button>
          </form>
      </div>
    </section>
  )
}
