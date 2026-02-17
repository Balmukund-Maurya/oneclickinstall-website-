# OneClickInstall Website

A modern, stunning marketing website for the OneClickInstall desktop application.

## 🎨 Features

- **Modern Design**: Glassmorphism effects, smooth animations, and premium aesthetics
- **Responsive**: Works beautifully on mobile, tablet, and desktop
- **Interactive**: Platform-aware download buttons, smooth scrolling navigation
- **Fast**: Vanilla JavaScript, no frameworks, optimized performance
- **SEO Optimized**: Proper meta tags, semantic HTML, social sharing ready

## 📁 Structure

```
oneclick_website/
├── index.html          # Main HTML file
├── index.css           # All styles and design system
├── app.js              # Interactive features
├── assets/             # Images and screenshots
│   ├── hero-mockup.png
│   ├── screenshot-grid.png
│   └── screenshot-list.png
└── README.md           # This file
```

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended)

1. **Create a new repository** on GitHub (or use existing OneClickInstall repo)

2. **Initialize git** (if not already):
```bash
cd /Users/apple/Desktop/oneclick_website
git init
git add .
git commit -m "Initial commit: OneClickInstall website"
```

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/oneclick-website.git
git branch -M main
git push -u origin main
```

4. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: `main` / root
   - Save

5. **Access your site** at: `https://YOUR_USERNAME.github.io/oneclick-website/`

### Option 2: Vercel (Best Performance)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
cd /Users/apple/Desktop/oneclick_website
vercel
```

3. Follow the prompts to deploy

### Option 3: Netlify

1. **Install Netlify CLI**:
```bash
npm i -g netlify-cli
```

2. **Deploy**:
```bash
cd /Users/apple/Desktop/oneclick_website
netlify deploy --prod
```

Or drag and drop the folder to [netlify.com/drop](https://app.netlify.com/drop)

## 🔗 Download Links

Before deploying, update the download URLs in `app.js`:

```javascript
const downloadUrls = {
    'macos': 'https://github.com/YOUR_USERNAME/OneClickInstall/releases/latest/download/OneClickInstall.dmg',
    'windows': 'https://github.com/YOUR_USERNAME/OneClickInstall/releases/latest/download/OneClickInstall-Setup.exe'
};
```

Make sure to:
1. Build your desktop app (`.dmg` for macOS, `.exe` for Windows)
2. Create a GitHub release in the OneClickInstall repository
3. Upload the installers to the release
4. Update the URLs in `app.js`

## 📸 Screenshots

The website includes AI-generated mockups. To replace them with actual app screenshots:

1. Take screenshots of your app:
   - Grid view (1600x1000px recommended)
   - List view (1600x1000px recommended)
   - Full app interface (1600x1000px recommended)

2. Save them in `assets/` folder with the same names:
   - `hero-mockup.png`
   - `screenshot-grid.png`
   - `screenshot-list.png`

## 🎨 Customization

### Colors

Edit CSS variables in `index.css`:

```css
:root {
    --primary: #3b82f6;
    --secondary: #8b5cf6;
    --accent: #06b6d4;
    /* ... */
}
```

### Content

Edit text content directly in `index.html` in these sections:
- Hero section (`.hero-title`, `.hero-subtitle`)
- Features (`.feature-card`)
- Download section (`.download-content`)
- Footer (`.footer`)

## 🌐 Custom Domain

After deploying to GitHub Pages/Vercel/Netlify:

1. Purchase a domain (e.g., `oneclickinstall.dev`)
2. Add DNS records pointing to your hosting provider
3. Configure custom domain in hosting settings

## 📊 Analytics (Optional)

Add Google Analytics or Plausible by adding tracking code to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🧪 Local Testing

Simply open `index.html` in your browser, or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# or Node.js
npx serve

# or PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📝 License

MIT License - Same as OneClickInstall project

---

**Built with ❤️ for OneClickInstall**
