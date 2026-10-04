# Heswanth H - School Portfolio & BEDEX Science Showcase

A vibrant, modern, mobile-responsive school project & academic showcase website for **Heswanth H**, Fifth Standard (`Std. V - Sec B`, House Rua) student at **St. Bede's Anglo-Indian Higher Secondary School**, Santhome, Chennai.

Built with **React 19**, **Vite 6**, and **Tailwind CSS v4**.

---

## 🚀 Live Hosting on Vercel

This repository is pre-configured for instant zero-config deployment on [Vercel](https://vercel.com).

### Option 1: Automatic Deployment via GitHub (Recommended)
1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Configure project for Vercel deployment"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** > **"Project"**.
4. Import your repository: `Devaprem1996/Heswanth-profile`.
5. Vercel automatically detects **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click **Deploy**. Your site will be live with an automatic HTTPS URL (e.g., `https://heswanth-profile.vercel.app`) and continuous deployment on every git push!

---

### Option 2: Deploy directly via Vercel CLI
If you prefer deploying directly from your terminal:
```bash
# 1. Login to Vercel (if not already logged in)
vercel login

# 2. Deploy preview
vercel

# 3. Deploy to production
vercel --prod
```

---

## 🛠️ Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for production
```bash
npm run build
```
Generates production-optimized static assets inside the `dist/` directory.

### 4. Preview production build locally
```bash
npm run preview
```

### 5. Type-check
```bash
npm run lint
```

---

## 📁 Project Structure

```
├── dist/                # Production build output
├── src/
│   ├── components/      # UI sections, badges, modals, showcase cards
│   ├── data/            # Student info, certificates, timeline data
│   ├── App.tsx          # Root application component
│   ├── main.tsx         # App entry point
│   └── index.css        # Tailwind CSS and doodle design styles
├── vercel.json          # Vercel SPA routing and caching configuration
├── vite.config.ts       # Vite configuration with Tailwind v4
└── package.json         # Scripts and project dependencies
```
