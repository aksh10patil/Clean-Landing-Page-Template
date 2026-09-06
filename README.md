# Clean Minimal Landing Page Template

A clean, modern, and high-performance landing page template built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Motion**. Designed with rich micro-interactions, dark mode support, and interactive feature showcases.

![Clean Landing Page Preview](https://raw.githubusercontent.com/aksh10patil/Clean-Landing-Page-Template/main/public/images/landing-page-macbook.webp)

---

## ✨ Features

- ⚡ **Next.js 16 & React 19** – Built on the latest App Router architecture.
- 🎨 **Tailwind CSS v4** – Styled using modern Tailwind v4 utilities, custom theme variables, and radial masks.
- 🎭 **Smooth Motion Animations** – Dynamic micro-interactions, 3D perspective loops, sequential tag cascades, and exit transitions powered by `motion/react`.
- 🌓 **Dark & Light Mode** – Flawless theme transitions with `next-themes` and system theme detection.
- 🧩 **Interactive Feature Showcases**:
  - **Audit Trail**: Animated sequential status stream with custom badges and submerged card styling.
  - **Access Control Grid**: User management role badges with interactive transitions.
  - **Guardrail Engine**: Interactive tags cloud with dynamic context switching (Brand & Style, Compliance & Policy, Content Safety, Approval Triggers, and Output Quality Checks).
  - **Approval Queue**: 3D mirrored perspective workflow visualizer.
- 📱 **Fully Responsive** – Pixel-perfect on mobile, tablet, and widescreen desktop displays.
- 🔤 **Modern Typography** – Configured with Geist, Manrope, and Inter font pairings.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Motion](https://motion.dev/) (`motion/react`)
- **Icons:** [Tabler Icons](https://tabler.io/icons) & [Lucide Icons](https://lucide.dev/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+ installed
- npm, pnpm, yarn, or bun

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aksh10patil/Clean-Landing-Page-Template.git
   cd Clean-Landing-Page-Template
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css         # Global styles & Tailwind v4 theme definitions
│   ├── layout.tsx          # Root layout, metadata & theme provider
│   └── page.tsx            # Main landing page composition
├── components/
│   ├── features/           # Core feature cards and skeletons
│   ├── featuresThird/      # Interactive feature showcases
│   │   ├── first.tsx       # Audit Trail component
│   │   ├── second-test.tsx # Access Control component
│   │   ├── third.tsx       # Approval Queue 3D animation
│   │   └── fourth.tsx      # Guardrail Engine with interactive tags
│   ├── ui/                 # Reusable UI primitives (Container, Navbar, etc.)
│   └── mode-toggle.tsx     # Theme toggle component
└── public/                 # Static assets, logos, and images
```

---

## 🧪 Scripts

- `npm run dev` – Starts the local development server with Turbopack.
- `npm run build` – Creates an optimized production build.
- `npm run start` – Starts the production server.
- `npm run lint` – Runs ESLint across all TypeScript and TSX files.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
