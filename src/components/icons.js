import { createLucideIcon } from 'lucide-react'

// Biodatum Bricks mark: a toy brick with a DNA double strand. Large mark; small spots use lucide "ToyBrick".
export const BrickDna = createLucideIcon('BrickDna', [
  ['rect', { x: '2.5', y: '7', width: '19', height: '14', rx: '1.5', key: 'body' }],
  ['path', { d: 'M5.5 7V4.5h4V7M14.5 7V4.5h4V7', key: 'studs' }],
  ['path', { d: 'M5.5 11.5c3.25 0 3.25 5 6.5 5s3.25-5 6.5-5M5.5 16.5c3.25 0 3.25-5 6.5-5s3.25 5 6.5 5', key: 'dna' }],
])
