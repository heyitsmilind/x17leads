import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { LogoCloud } from '@/components/logo-cloud'
import { Comparison } from '@/components/comparison'
import { Process } from '@/components/process'
import { Results } from '@/components/results'
import { Faq } from '@/components/faq'
import { ContactForm } from '@/components/contact-form'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <LogoCloud />
      <Comparison />
      <Process />
      <Results />
      <Faq />
      <ContactForm />
      <SiteFooter />
    </main>
  )
}
