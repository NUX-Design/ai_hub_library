# Repository Working Agreement

## ขอบเขตและ source of truth

- Repository นี้เป็น React + TypeScript + Vite + Tailwind CSS v4
- แก้ไขเฉพาะไฟล์ภายใน repository นี้ และห้ามสร้าง secret หรือ token จริงลงใน Git
- เริ่มงานทุกครั้งด้วยการอ่าน `AGENTS.md`, `README.md`, `MEMORY.md`, ตรวจ `git status` และดู source/runtime ปัจจุบัน
- `DESIGN.md` เป็น source of truth สำหรับ design tokens, color themes, typography, spacing, radius และ component behavior
- หาก design source มีความกำกวม ให้คงข้อจำกัดไว้และระบุ assumption ในเอกสารหรือผลสรุป แทนการเดาค่าใหม่โดยไม่มีหลักฐาน

## โครงสร้างหลัก

- `src/App.tsx` คือหน้า demo และจุดรวมตัวอย่าง UI หลัก
- `src/index.css` คือจุดโหลด Tailwind และ mapping design tokens ผ่าน `@theme inline`
- `src/components/ui/` เก็บ shadcn/ui components ที่ใช้งานจริง เช่น `button.tsx`, `input.tsx` และ `card.tsx`
- `src/lib/utils.ts` เก็บ utility ที่ใช้ร่วมกัน เช่น `cn`
- `components.json` เป็น configuration ของ shadcn/ui และต้องคง alias ให้ชี้เข้า `src/`

## มาตรฐานการพัฒนา

- ใช้ TypeScript ที่มี type ชัดเจน และแยก component เมื่อมีหน้าที่หรือ state ต่างกัน
- ใช้ Tailwind utility classes เป็นหลัก; เพิ่ม CSS แบบ global เฉพาะ reset, accessibility, shared behavior และ token mapping
- ใช้ semantic token utilities จาก `DESIGN.md` เช่น `bg-surface-card`, `text-text-primary`, `bg-action-primary-background`, `rounded-radius-card` และ `p-space-24` แทนการ hard-code สีหรือ spacing ในหน้า UI
- รักษา `@import "tailwindcss";` และ `@tailwindcss/vite` plugin ใน `vite.config.ts`
- ใช้ฟอนต์ตาม design system คือ Inter สำหรับ brand/body และ Noto Sans สำหรับ technical content
- เมื่อเพิ่มหรือแก้ shadcn component ให้ตรวจ variant, focus ring, disabled state, invalid state, color contrast และการใช้ token ให้สอดคล้องกับ `DESIGN.md`
- รักษา semantic HTML, keyboard focus, color contrast และ responsive layout ตั้งแต่ mobile ถึง desktop
- ห้ามใส่ค่า credential, API key, `.env` หรือข้อมูลส่วนตัวใน source, commit, screenshot หรือเอกสาร

## คำสั่งมาตรฐาน

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
npm run storybook
npm run build-storybook
npm run test:storybook
```

เพิ่ม shadcn component ผ่าน configuration/registry ที่กำหนดไว้ และตรวจไฟล์ที่ถูกสร้างให้อยู่ใต้ `src/components/ui/` เสมอ ห้ามปล่อย path แบบ literal `@/components/...` เป็น directory ที่ repository root

## การตรวจสอบก่อนส่งมอบ

- รัน `npm run lint` และ `npm run build` หลังแก้ไขโค้ดทุกครั้ง
- ตรวจ `git diff --check` และทบทวนไฟล์ที่เปลี่ยนก่อนส่งมอบ
- เมื่อแก้ UI ให้ตรวจ desktop และ mobile viewport รวมถึง interaction หลักใน browser
- ตรวจว่า `src/main.tsx` import `src/index.css` และไม่มี runtime error ในหน้า demo
- รายงานผลจากคำสั่งจริง หากมี warning, ข้อจำกัด หรือจุดที่ยังไม่ได้ตรวจให้ระบุอย่างตรงไปตรงมา
