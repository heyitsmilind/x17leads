'use client'

import { useState } from 'react'
import { Globe, Send, Mail } from 'lucide-react'

const socials = [
  { label: 'LinkedIn', href: '#', icon: Globe },
  { label: 'X', href: '#', icon: Send },
  { label: 'Email', href: '#', icon: Mail },
]

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    body: 'We respect your privacy. Information submitted through this website is used only to respond to your inquiry, provide requested services, and improve our communications. We do not sell your personal information. You may contact us to request access to or deletion of your information.',
  },
  terms: {
    title: 'Terms of Service',
    body: 'By using this website, you agree to provide accurate information and use our services lawfully. Service scope, performance terms, and fees are agreed in writing before work begins. We may update these terms from time to time, with the current version available on this website.',
  },
} as const

export function SiteFooter() {
  const [activeLegal, setActiveLegal] = useState<keyof typeof legalContent | null>(null)
  const legal = activeLegal ? legalContent[activeLegal] : null

  return (
    <>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <span className="text-base font-semibold tracking-tight text-foreground">
              x17<span className="text-primary"> leads</span>
            </span>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} x17 leads. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <button type="button" onClick={() => setActiveLegal('privacy')} className="text-sm text-muted-foreground transition-colors hover:text-foreground">Privacy</button>
            <button type="button" onClick={() => setActiveLegal('terms')} className="text-sm text-muted-foreground transition-colors hover:text-foreground">Terms</button>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {legal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="legal-title" onClick={() => setActiveLegal(null)}>
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <h2 id="legal-title" className="text-xl font-semibold text-foreground">{legal.title}</h2>
              <button type="button" onClick={() => setActiveLegal(null)} aria-label="Close dialog" className="text-2xl leading-none text-muted-foreground hover:text-foreground">×</button>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">{legal.body}</p>
          </div>
        </div>
      )}
    </>
  )
}

 export default SiteFooter
