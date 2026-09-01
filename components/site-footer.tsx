import { Globe, Send, Mail } from 'lucide-react'

const socials = [
  { label: 'LinkedIn', href: '#', icon: Globe },
  { label: 'X', href: '#', icon: Send },
  { label: 'Email', href: '#', icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
          <span className="text-base font-semibold tracking-tight text-foreground">
            x17<span className="text-primary"> leads</span>
          </span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} x17 leads. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms
          </a>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
