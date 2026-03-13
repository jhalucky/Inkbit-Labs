# ✦ Inkbit Labs — Next.js + TypeScript

Premium print studio landing page built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**. The contact form backend is a Next.js API Route using **Nodemailer** — no separate Express server needed.

---

## Project Structure

```
inkbit-labs-next/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        ← POST /api/contact (Nodemailer)
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── useReveal.ts        ← IntersectionObserver hook
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   └── Contact.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_char_app_password
EMAIL_TO=hello@inkbitlabs.com
```

> **Gmail**: You need a [Gmail App Password](https://support.google.com/accounts/answer/185833).  
> Google Account → Security → 2-Step Verification → App Passwords → Generate.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

---

## API Reference

### `POST /api/contact`

**Request body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "I'd like a quote for 500 business cards."
}
```

**Success:**
```json
{ "success": true, "message": "Message sent successfully!" }
```

**Error (400):**
```json
{ "success": false, "message": "All fields are required." }
```

---

## Tech Stack

| Layer      | Technology                     |
|------------|-------------------------------|
| Framework  | Next.js 14 (App Router)        |
| Language   | TypeScript                     |
| Styling    | Tailwind CSS + global CSS      |
| Fonts      | Cormorant Garamond + DM Sans   |
| Email      | Nodemailer                     |
| Animations | CSS keyframes + IntersectionObserver |

---

## Other SMTP Providers

Edit `app/api/contact/route.ts` — replace the Gmail transport:

```typescript
// Outlook / Hotmail
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

// Custom SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.yourdomain.com",
  port: 587,
  secure: false,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});
```

---

© 2024 Inkbit Labs · MIT License
