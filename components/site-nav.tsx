import Link from 'next/link'
import { Button } from '@/components/ui/button'

const links = [
  { label: 'Benchmarks', href: '#benchmarks' },
  { label: 'Our Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
]

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          <span className="text-white">outbound</span>{' '}
          <span className="rounded-md bg-primary px-1.5 py-0.5 font-extrabold text-primary-foreground shadow-sm">
            XP
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          size="lg"
          nativeButton={false}
          render={<a href="#contact" />}
          className="h-10 px-5 text-sm font-semibold"
> Book A Free Call

        </Button>
      </nav>
    </header>
  )
}
