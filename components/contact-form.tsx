'use client'

import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'

const fieldClass =
  'w-full rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'

const labelClass = 'text-sm font-medium text-foreground'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fullName, setFullName] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [targetAudience, setTargetAudience] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const params = new URLSearchParams()
    params.append('form-name', 'strategy-session')
    params.append('Full Name', fullName)
    params.append('Company Email', companyEmail)
    params.append('Company Website URL', websiteUrl)
    params.append('Target Audience', targetAudience)

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })

      if (!response.ok) throw new Error('Form submission failed')
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-primary/30 bg-card/50 p-6 shadow-2xl sm:p-8 md:p-12">
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
                <label htmlFor="full-name" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="full-name"
                  name="Full Name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company-email" className={labelClass}>
                  Company Email
                </label>
                <input
                  id="company-email"
                  name="Company Email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  value={companyEmail}
                  onChange={(event) => setCompanyEmail(event.target.value)}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="website-url" className={labelClass}>
                Company Website URL
              </label>
              <input
                id="website-url"
                name="Company Website URL"
                type="url"
                required
                placeholder="https://company.com"
                value={websiteUrl}
                onChange={(event) => setWebsiteUrl(event.target.value)}
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="target-audience" className={labelClass}>
                Tell us about your target audience
              </label>
              <textarea
                id="target-audience"
                name="Target Audience"
                required
                rows={4}
                placeholder="Who are your ideal buyers? Industries, roles, company size..."
                value={targetAudience}
                onChange={(event) => setTargetAudience(event.target.value)}
                className={`${fieldClass} resize-none`}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-2 h-auto w-full whitespace-normal break-words py-3 text-sm leading-tight font-semibold sm:text-base md:py-2"
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
