# Project Memory

## Context

- โปรเจกต์เริ่มจาก Vite `react-ts` template
- Styling ใช้ Tailwind CSS v4 ผ่าน `@tailwindcss/vite`
- จุดเริ่มต้นของ CSS อยู่ที่ `src/index.css` และต้องคง `@import "tailwindcss";`
- หน้า demo หลักอยู่ที่ `src/App.tsx`

## Workflow สำคัญ

1. อ่าน `AGENTS.md`, `DESIGN.md` และตรวจ `git status` ก่อนเริ่มงาน
2. ตรวจ source และ runtime ปัจจุบันก่อนเปลี่ยนแปลง
3. ใช้ Tailwind utilities และ tokens ใน `DESIGN.md` ให้สอดคล้องกัน
4. รัน `npm run build` และตรวจ output จริงก่อนรายงานว่างานสำเร็จ
5. หากเปลี่ยน UI ให้ตรวจ responsive behavior และ keyboard focus

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## ข้อควรระวัง

- ไม่ commit `node_modules`, `dist`, `.env` หรือ secrets
- อย่าเพิ่ม dependency หากไม่จำเป็นกับขอบเขตของงาน
- หากมี design source ใหม่ ให้บันทึกการตัดสินใจและข้อจำกัดไว้ใน `DESIGN.md`
