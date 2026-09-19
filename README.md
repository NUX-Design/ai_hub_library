# AI Hub Library

โปรเจกต์ตัวอย่างสำหรับทดลองสร้าง UI ด้วย React, TypeScript, Vite และ Tailwind CSS v4

## เริ่มต้นใช้งาน

ต้องใช้ Node.js เวอร์ชันที่รองรับ Vite และ npm

```bash
npm install
npm run dev
```

จากนั้นเปิด URL ที่ Vite แสดงใน terminal โดยปกติคือ `http://localhost:5173`

## คำสั่งที่ใช้บ่อย

```bash
npm run build    # ตรวจ type และสร้าง production build
npm run preview  # preview ไฟล์จาก dist
npm run lint     # ตรวจโค้ดด้วย oxlint
```

## Tailwind CSS v4

โปรเจกต์นี้ใช้ `@tailwindcss/vite` plugin ใน `vite.config.ts` และโหลด Tailwind ใน `src/index.css` ด้วย:

```css
@import "tailwindcss";
```

หน้า demo อยู่ที่ `src/App.tsx` และแสดง utility classes สำหรับ spacing, typography, color และ component states

## shadcn/ui

โปรเจกต์นี้ตั้งค่า `components.json` สำหรับ shadcn/ui แบบ Radix Nova แล้ว โดยมี Button, Input และ Card components อยู่ที่:

```text
src/components/ui/button.tsx
src/components/ui/input.tsx
src/components/ui/card.tsx
src/lib/utils.ts
```

เพิ่ม component อื่นจาก registry ได้ด้วยคำสั่งที่ได้จาก shadcn MCP เช่น:

```bash
npx shadcn@latest add @shadcn/button
npx shadcn@latest add @shadcn/input @shadcn/card
```

## Storybook

Storybook ใช้ `@storybook/react-vite` และโหลด provider ที่มีอยู่เดิมผ่าน `.storybook/preview.tsx` โดย import global CSS จาก `src/index.css` และคง `StrictMode` ไว้

Stories ของ public UI components อยู่ที่:

```text
src/components/ui/button.stories.tsx
src/components/ui/input.stories.tsx
src/components/ui/card.stories.tsx
```

รัน Storybook และตรวจสอบ stories ด้วย Vitest ได้ด้วยคำสั่ง:

```bash
npm run storybook          # เปิด Storybook ที่ http://localhost:6006
npm run build-storybook   # สร้าง static Storybook build
npm run test:storybook    # รัน play tests ผ่าน Vitest + Playwright
```

เปิดใช้ `@storybook/addon-mcp` และ `@storybook/addon-vitest` ใน `.storybook/main.ts` แล้ว
