import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

type UtilityGroup = {
  title: string
  description: string
  utilities: string[]
}

const utilityGroups: UtilityGroup[] = [
  {
    title: 'Spacing',
    description: 'จัดระยะห่างด้วย spacing scale ที่สม่ำเสมอ',
    utilities: ['p-space-16', 'px-space-24', 'py-space-12', 'mt-space-40', 'space-y-space-16', 'gap-space-16'],
  },
  {
    title: 'Typography',
    description: 'กำหนดลำดับชั้นของข้อความด้วย utility classes',
    utilities: ['text-sm', 'text-base', 'text-xl', 'font-bold', 'leading-relaxed'],
  },
  {
    title: 'Color tokens',
    description: 'ใช้สีแบบ semantic ให้สื่อความหมายชัดเจน',
    utilities: ['text-text-accent', 'bg-action-primary-background', 'text-text-secondary', 'bg-decorative-forest'],
  },
]

const colorTokens = [
  { name: 'Lime', className: 'bg-color-lime', token: 'bg-color-lime' },
  { name: 'Cobalt', className: 'bg-decorative-cobalt', token: 'bg-decorative-cobalt' },
  { name: 'Forest', className: 'bg-decorative-forest', token: 'bg-decorative-forest' },
  { name: 'Mustard', className: 'bg-decorative-mustard', token: 'bg-decorative-mustard' },
  { name: 'Lavender', className: 'bg-decorative-lavender', token: 'bg-decorative-lavender' },
  { name: 'Moss', className: 'bg-decorative-moss', token: 'bg-decorative-moss' },
  { name: 'White', className: 'bg-surface-white ring-2 ring-inset ring-border-subtle', token: 'bg-surface-white' },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path d="m10 2 1.55 5.45L17 9l-5.45 1.55L10 16l-1.55-5.45L3 9l5.45-1.55L10 2Z" fill="currentColor" />
    </svg>
  )
}

function App() {
  const [copiedUtility, setCopiedUtility] = useState('')
  const [notice, setNotice] = useState('')

  const copyUtility = async (utility: string) => {
    try {
      await navigator.clipboard.writeText(utility)
      setCopiedUtility(utility)
      window.setTimeout(() => setCopiedUtility(''), 1600)
    } catch {
      setNotice(`คัดลอก ${utility} ไม่สำเร็จ — ลองเลือกข้อความด้วยตัวเอง`)
    }
  }

  const showNotice = (message: string) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2200)
  }

  return (
    <div className="min-h-screen bg-surface-canvas text-text-primary">
      <header className="sticky top-0 z-10 border-b border-border-subtle bg-surface-card ">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-space-24 px-space-24 py-space-16 lg:px-space-40">
          <a className="shrink-0 text-lg font-bold tracking-heading-sm text-text-primary" href="#top">Utility Lab</a>
          <nav aria-label="Main navigation" className="hidden items-center gap-space-24 text-sm font-bold text-text-secondary md:flex">
            {['Home', 'Components', 'Layout', 'Colors', 'Typography'].map((item, index) => (
              <a className={index === 0 ? 'text-text-accent' : 'transition hover:text-text-primary'} href={index === 0 ? '#top' : `#${item.toLowerCase()}`} key={item}>{item}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-space-8 rounded-radius-12 border border-border-subtle bg-surface-card px-space-12 py-space-8 text-sm text-text-secondary sm:flex">
            <span aria-hidden="true" className="text-base">⌕</span>
            <span>Search utilities</span>
            <kbd className="ml-space-20 rounded-radius-8 bg-surface-subtle px-space-8 py-space-4 text-xs font-bold text-text-secondary">⌘ K</kbd>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-space-24 pb-layout-page-padding pt-layout-page-padding lg:px-space-40 lg:pt-layout-section-gap">
        <section className="mx-auto max-w-3xl text-center">
          <p className="mb-space-16 text-sm font-bold uppercase tracking-caption text-text-accent">Tailwind CSS v4 playground</p>
          <h1 className="text-4xl font-display tracking-heading-sm text-text-primary sm:text-6xl">Tailwind Utility Lab</h1>
          <p className="mx-auto mt-space-20 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">สำรวจ utility classes ที่ใช้บ่อยผ่านตัวอย่างที่อ่านง่าย และนำ class ไปใช้ในโปรเจกต์ของคุณได้ทันที</p>
          <div className="mt-space-40 flex flex-wrap items-center justify-center gap-space-12">
            <Button className="h-auto rounded-radius-12 bg-action-primary-background px-space-20 py-space-12 text-sm font-bold text-action-primary-text hover:bg-color-leaf" onClick={() => showNotice('พร้อมแล้ว — ลองกด utility class ด้านขวาเพื่อคัดลอก')} type="button">Build with utilities <ArrowIcon /></Button>
            <a className="rounded-radius-12 border border-border-subtle bg-action-secondary-background px-space-20 py-space-12 text-sm font-bold text-action-secondary-text transition hover:border-border-neutral hover:bg-surface-subtle" href="#components">View components</a>
            <a className="rounded-radius-12 bg-decorative-cobalt px-space-20 py-space-12 text-sm font-bold text-surface-white   transition hover:bg-decorative-cobalt-deep" href="#utilities">Try the utilities</a>
          </div>
        </section>

        <section className="mt-layout-section-gap grid gap-layout-grid-gap lg:grid-cols-[1.2fr_0.8fr]" id="components">
          <article className="rounded-radius-24 border border-border-subtle bg-surface-card p-layout-card-padding  sm:p-layout-card-padding">
            <div className="mb-space-24"><h2 className="text-xl font-display tracking-heading-sm">Preview</h2><p className="mt-space-4 text-sm text-text-secondary">ตัวอย่าง component ที่ประกอบด้วย Tailwind utilities</p></div>
            <div className="rounded-radius-24 border border-border-subtle bg-surface-canvas p-space-20 sm:p-layout-card-padding">
              <div className="grid items-center gap-layout-grid-gap sm:grid-cols-[1fr_220px]">
                <div>
                  <p className="text-xs font-display uppercase tracking-caption text-text-accent">Featured</p>
                  <h3 className="mt-layout-control-gap text-3xl font-display tracking-heading-sm text-text-primary">Build with utilities</h3>
                  <p className="mt-layout-control-gap max-w-md text-sm leading-6 text-text-secondary">สร้าง interface ได้เร็วด้วย class เล็ก ๆ ที่ composable และนำกลับมาใช้ซ้ำได้</p>
                  <div className="mt-layout-grid-gap flex flex-wrap gap-space-12">
                    <button className="rounded-radius-control bg-action-primary-background px-space-16 py-space-10 text-sm font-bold text-action-primary-text transition hover:bg-color-leaf" onClick={() => showNotice('นี่คือปุ่มตัวอย่างที่ใช้ bg-action-primary-background')} type="button">Try the utilities</button>
                    <button className="rounded-radius-control border border-border-subtle bg-action-secondary-background px-space-16 py-space-10 text-sm font-bold text-action-secondary-text transition hover:bg-surface-subtle" onClick={() => showNotice('Preview card นี้สร้างด้วย utility classes ทั้งหมด')} type="button">View code</button>
                  </div>
                </div>
                <div className="rounded-radius-24 bg-color-moss p-layout-card-padding">
                  <div className="rounded-radius-12 bg-surface-card p-space-16 "><div className="flex items-center gap-space-12"><div className="size-space-40 rounded-radius-control bg-action-primary-background" /><div className="flex-1 space-y-space-8"><div className="h-space-8 rounded-radius-pill bg-color-neutral-300" /><div className="h-space-8 w-2/3 rounded-radius-pill bg-surface-subtle" /></div></div></div>
                  <div className="mt-layout-control-gap flex gap-space-8"><div className="size-space-40 rounded-radius-control bg-color-neutral-300" /><div className="size-space-40 rounded-radius-control bg-decorative-cobalt" /><div className="size-space-40 rounded-radius-control bg-decorative-forest" /></div>
                </div>
              </div>
            </div>
            <div className="mt-layout-grid-gap grid gap-layout-grid-gap border-t border-border-subtle pt-space-24 sm:grid-cols-3">
              {[['Fast to build', 'Small, composable classes'], ['Easy to customize', 'Adapt to your design'], ['Production ready', 'Used by modern teams']].map(([title, description]) => (
                <div className="flex gap-space-12" key={title}><span className="grid size-space-40 shrink-0 place-items-center rounded-radius-pill bg-color-moss text-text-accent"><SparkIcon /></span><div><h3 className="text-sm font-display">{title}</h3><p className="mt-space-4 text-xs text-text-secondary">{description}</p></div></div>
              ))}
            </div>
          </article>

          <article className="rounded-radius-24 border border-border-subtle bg-surface-card p-layout-card-padding  sm:p-layout-card-padding" id="utilities">
            <div className="mb-space-24"><h2 className="text-xl font-display tracking-heading-sm">Utility references</h2><p className="mt-space-4 text-sm text-text-secondary">คลิก class เพื่อคัดลอกไปใช้ในโค้ด</p></div>
            <div className="space-y-space-12">
              {utilityGroups.map((group) => (
                <div className="rounded-radius-12 border border-border-subtle p-space-16" key={group.title}>
                  <div className="flex items-start justify-between gap-space-12"><div><h3 className="font-display">{group.title}</h3><p className="mt-space-4 text-xs leading-5 text-text-secondary">{group.description}</p></div><span aria-hidden="true" className="text-text-secondary">⌄</span></div>
                  <div className="mt-layout-control-gap flex flex-wrap gap-space-8">{group.utilities.map((utility) => <button className="rounded-radius-8 bg-surface-subtle px-space-10 py-space-6 font-technical text-xs font-bold text-text-secondary transition hover:bg-color-leaf hover:text-text-accent" key={utility} onClick={() => copyUtility(utility)} type="button">{copiedUtility === utility ? 'Copied!' : utility}</button>)}</div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-space-20 rounded-radius-24 border border-border-subtle bg-surface-card p-layout-card-padding  sm:p-layout-card-padding" id="colors">
          <div className="mb-space-24"><h2 className="text-xl font-display tracking-heading-sm">Color tokens</h2><p className="mt-space-4 text-sm text-text-secondary">ชุดสีเล็ก ๆ สำหรับเริ่มต้นออกแบบ UI ให้สม่ำเสมอ</p></div>
          <div className="grid grid-cols-2 gap-space-16 sm:grid-cols-4 lg:grid-cols-7">{colorTokens.map((color) => <button className="text-left" key={color.name} onClick={() => copyUtility(color.token)} type="button"><span className={`block h-space-48 rounded-radius-12 ${color.className}`} /><span className="mt-layout-control-gap block text-sm font-display">{color.name}</span><span className="mt-space-4 block font-technical text-xs text-text-secondary">{copiedUtility === color.token ? 'Copied!' : color.token}</span></button>)}</div>
        </section>

        <section className="mt-space-20 grid gap-layout-grid-gap lg:grid-cols-[0.8fr_1.2fr]" id="layout">
          <Card className="border border-border-subtle bg-surface-card ">
            <CardHeader>
              <CardTitle>Input component</CardTitle>
              <CardDescription>รับค่า class ที่คุณอยากทดลอง</CardDescription>
            </CardHeader>
            <CardContent className="space-y-space-12">
              <label className="text-sm font-bold text-action-secondary-text" htmlFor="utility-search">Utility class</label>
              <Input id="utility-search" placeholder="เช่น p-space-16 หรือ text-xl" />
              <Button className="w-full" onClick={() => showNotice('Input และ Button พร้อมใช้งาน')} type="button">Try this component</Button>
            </CardContent>
          </Card>

          <Card className="border border-border-subtle bg-surface-card " size="sm">
            <CardHeader>
              <CardTitle>Card anatomy</CardTitle>
              <CardDescription>ประกอบด้วย CardHeader, CardContent และ reusable slots</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-space-12 sm:grid-cols-3">
                {['Header', 'Content', 'Footer'].map((part) => <div className="rounded-radius-control bg-surface-subtle px-space-12 py-space-16 text-center text-sm font-bold text-text-secondary" key={part}>{part}</div>)}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-space-20 rounded-radius-24 bg-surface-inverse p-layout-card-padding text-surface-white sm:p-layout-card-padding" id="typography">
          <div className="flex flex-col gap-space-24 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-bold text-action-primary-background">Ready to build?</p><h2 className="mt-space-8 text-2xl font-display tracking-heading-sm sm:text-3xl">เล็ก กระชับ และพร้อมต่อยอด</h2></div><a className="inline-flex items-center gap-space-8 self-start rounded-radius-control bg-surface-card px-space-16 py-space-10 text-sm font-bold text-text-primary transition hover:bg-status-info-background sm:self-auto" href="https://tailwindcss.com/docs" rel="noreferrer" target="_blank">Read the docs <ArrowIcon /></a></div>
        </section>
      </main>

      <footer className="border-t border-border-subtle bg-surface-card py-space-24 text-center text-sm text-text-secondary">Built with React, TypeScript, Vite, and Tailwind CSS v4.</footer>
      {notice && <div aria-live="polite" className="fixed bottom-space-20 left-1/2 z-20 -translate-x-1/2 rounded-radius-pill bg-surface-inverse px-space-16 py-space-10 text-sm font-bold text-surface-white ">{notice}</div>}
    </div>
  )
}

export default App
