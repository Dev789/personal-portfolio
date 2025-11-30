# DevOps Engineer Portfolio

> A high-performance, terminal-themed portfolio built for the modern DevOps engineer.

![Vibe Check](https://img.shields.io/badge/Vibe-Coding-4af626?style=for-the-badge&logo=terminal&logoColor=0c0c0c&labelColor=0c0c0c)
![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 🚀 Tech Stack

- **Core:** [Astro](https://astro.build) (Zero-JS frontend architecture)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) (Utility-first)
- **Deployment:** Docker & Nginx (Multi-stage build)
- **Design:** "Terminal Green" aesthetic with monospace typography.

## 🛠️ Quick Start

### Docker (Recommended)

Build and run the containerized application:

```bash
# Build the image
docker build -t portfolio .

# Run on port 8080
docker run -p 8080:80 portfolio
```

Visit `http://localhost:8080` to see it in action.

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📂 Project Structure

```
.
├── public/             # Static assets (favicon, etc.)
├── src/
│   ├── components/     # Reusable UI components (Navbar, Hero, etc.)
│   ├── data/           # Structured resume data (resume.ts)
│   ├── layouts/        # Base page layouts
│   └── pages/          # File-based routing
├── Dockerfile          # Multi-stage production build
├── nginx.conf          # Custom Nginx configuration
└── astro.config.mjs    # Astro configuration
```

## 🐳 Docker Configuration

The project uses a multi-stage Docker build:
1.  **Builder:** Node.js Alpine image to build the static assets.
2.  **Runner:** Nginx Alpine image to serve the `dist` folder.

Custom `nginx.conf` handles routing and ensures clean URLs.

---

*Built with <3 by Anti-Gravity*
