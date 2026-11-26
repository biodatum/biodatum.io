import { ExternalLink, ToyBrick } from 'lucide-react'
import { bricks } from '../content'
import { BrickDna } from './icons'
import { Section } from './Sections'
import { bookingLink, bookingProps } from './mail'

export default function Bricks() {
  return (
    <>
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between py-20 sm:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-glow">{bricks.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{bricks.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">{bricks.text}</p>
            <p className="mt-5 inline-block rounded-md border border-glow/40 px-3 py-1.5 text-sm text-glow">{bricks.status}</p>
            <div className="mt-8">
              <a
                href={bricks.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-glow px-5 py-3 font-semibold text-ink transition hover:bg-white"
              >
                Follow on GitHub <ExternalLink size={16} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <BrickDna className="size-32 shrink-0 self-center text-glow sm:size-44 lg:size-56" strokeWidth={0.9} aria-hidden="true" />
        </div>
      </div>

      <Section id="principles" eyebrow="How they will be built" title="Small, predictable building blocks.">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bricks.principles.map((p) => (
            <div key={p.title} className="border-t-2 border-accent pt-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="modules"
        tone="tint"
        eyebrow="Modules"
        title="Planned for the first release."
        intro="Each wrapped tool keeps its own licence, shown next to the module."
      >
        <ul className="divide-y divide-line border-y border-line">
          {bricks.modules.map((m) => (
            <li key={m.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-6">
              <span className="flex shrink-0 items-center gap-3 sm:w-72">
                <ToyBrick size={20} className="shrink-0 text-accent" aria-hidden="true" />
                <code className="break-all font-semibold">{m.name}</code>
              </span>
              <span className="grow text-muted">{m.text}</span>
              <span className="shrink-0 text-sm text-accent">Tool licence: {m.licence}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-muted">
          Need a module or a pipeline for your own data?{' '}
          <a href={bookingLink} {...bookingProps} className="font-medium text-accent hover:text-accent-strong">
            Book a call
          </a>
          .
        </p>
      </Section>
    </>
  )
}
