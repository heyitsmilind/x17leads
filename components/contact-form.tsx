'use client'

import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'

const fieldClass =
  'w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'

const labelClass = 'text-sm font-medium text-foreground'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    formData.set('form-name', 'strategy-session')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(
          Array.from(formData.entries()).map(([key, value]) => [
            key,
            String(value),
          ]),
        ).toString(),
      })

      if (!response.ok) throw new Error('Form submission failed')
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-primary/30 bg-card/50 p-8 shadow-2xl sm:p-12">
        {!submitted && (
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to scale your outbound sales?
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Tell us about your target audience and we&apos;ll map out a
              campaign built to book meetings.
            </p>
          </div>
        )}

        <form
          name="strategy-session"
          method="POST"
          action="/"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="mt-10 flex min-h-[384px] flex-col gap-5"
        >
          {submitted ? (
            <div className="flex min-h-[384px] items-center justify-center text-center">
              <p className="max-w-md text-lg font-medium text-foreground">
                Thank you for requesting a strategy session! We will be in touch shortly.
              </p>
            </div>
          ) : (
            <>
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
              {isSubmitting ? 'Sending...' : 'Request a Free Strategy Session'}
            </Button>
            </>
          )}
          </form>
      </div>
    </section>
  )
}
