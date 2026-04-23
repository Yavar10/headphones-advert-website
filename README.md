# Aurora - Premium Audio Landing Page 🎧

![Aurora Hero Section](preview-hero.png)

A modern, responsive, and visually striking landing page built for the fictional premium audio brand, **Aurora**. Designed with a minimalist brutalist-adjacent aesthetic, it relies on deep blacks, crisp whites, and vibrant red accents to deliver a premium user experience. 

The project leverages Framer Motion to provide buttery-smooth, scroll-linked animations that guide the user through the narrative of the product.

## ✨ Features

- **Dynamic Scroll Animations:** Elements react naturally to scroll depth using `framer-motion` (`useScroll`, `useTransform`).
- **Responsive Design:** Completely adaptive layout that looks stunning on mobile, tablet, and desktop devices.
- **Glassmorphism Header:** A sleek, sticky navigation bar built with backdrop blurs.
- **Minimalist Aesthetic:** High-contrast design language that focuses on content and product imagery.
- **Custom Assets:** High-quality generated 3D headphone assets integrated seamlessly with atmospheric CSS glows.

## 📸 Screenshots

| Hero Section | Feature Grid |
|:---:|:---:|
| ![Hero Section](preview-hero.png) | ![Features Section](preview-features.png) |
| **Technical Specifications** | **Call to Action** |
| ![Specs Section](preview-specs.png) | ![CTA Section](preview-cta.png) |

*(Note: Replace the `preview-*.png` placeholder paths with your actual screenshot image locations when pushing to GitHub)*

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) via [Vite](https://vitejs.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Styling:** Custom Vanilla CSS (`index.css`)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd intern
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## 🎨 Design Decisions
- **Color Palette**: `#050505` (Deep Black), `#FFFFFF` (Crisp White), `#FF2A2A` (Aurora Red).
- **Typography**: `Inter` Google font for modern, legible, and striking headings.
- **Performance**: Scrollbars are hidden via `::-webkit-scrollbar { display: none; }` for a cleaner app-like feel.

---

*Designed and developed as a beautiful UI conceptualization project.*
