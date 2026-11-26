import { useState } from 'react'
import { Menu, ToyBrick, X } from 'lucide-react'
import { site } from '../content'
import { bookingLink, bookingProps } from './mail'

// Absolute links, so the header also works on sub-pages such as /bricks/.
const home = import.meta.env.BASE_URL
const links = [
  { name: 'About', href: `${home}#about` },
  { name: 'Services', href: `${home}#services` },
  { name: 'Work', href: `${home}#work` },
  { name: 'How it works', href: `${home}#process` },
  { name: 'Pricing', href: `${home}#pricing` },
  { name: 'FAQ', href: `${home}#faq` },
  { name: 'Bricks', href: `${home}bricks/`, Icon: ToyBrick },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href={home} className="font-display text-xl font-semibold tracking-tight">
          Biodatum<span className="text-glow">.io</span>
          <span className="sr-only"> {site.name} home</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm lg:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="flex items-center gap-1.5 text-white/75 transition hover:text-white">
              {l.Icon && <l.Icon size={17} className="text-glow" aria-hidden="true" />}
              {l.name}
            </a>
          ))}
          <a href={bookingLink} {...bookingProps} className="rounded-md bg-glow px-4 py-2 font-semibold text-ink transition hover:bg-white">
            Book a call
          </a>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-6 py-3 lg:hidden" aria-label="Mobile">
          {[...links, { name: 'Book a call', href: bookingLink }].map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-white/90">
              {l.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
