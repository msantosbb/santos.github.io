# 🏄 Central Florida Surf Report — PWA

A Progressive Web App (PWA) providing surf conditions for Central Florida's Space Coast.

## 📁 Project Structure

```
surf_report_pwa/
├── index.html              # Main app (HTML/CSS/JS)
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (offline support)
├── icons/
│   ├── icon-192x192.png    # App icon (192px)
│   ├── icon-512x512.png    # App icon (512px)
│   └── apple-touch-icon.png # iOS icon (180px)
└── README.md               # This file
```

## 🚀 Quick Start — Test Locally

1. **Open a terminal** in the project folder
2. **Start a local server** (required for service workers):

   ```bash
   # Python 3
   python -m http.server 8080

   # OR Node.js
   npx serve .
   ```

3. **Open in your browser**: [http://localhost:8080](http://localhost:8080)

> ⚠️ You **cannot** just double-click `index.html` — service workers require HTTP(S).

---

## 🌐 Deploy Free on GitHub Pages

1. **Create a GitHub repo** (e.g., `surf-report`)
2. **Upload all files** to the repo (keep folder structure)
3. Go to **Settings → Pages**
4. Set Source to **"Deploy from a branch"** → select `main` → `/ (root)`
5. Click **Save**
6. Your app will be live at: `https://yourusername.github.io/surf-report/`

---

## 📱 Install on iPhone (iOS)

1. Open the app URL in **Safari** (must be Safari, not Chrome)
2. Tap the **Share button** (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"**
5. The app icon will appear on your home screen! 🎉

---

## 📱 Install on Android

1. Open the app URL in **Chrome**
2. You should see a banner: **"Add Surf Report to Home screen"**
   - If no banner appears: tap the **⋮ menu** → **"Install app"** or **"Add to Home screen"**
3. Tap **"Install"**
4. The app icon will appear in your app drawer! 🎉

---

## ✨ Features

- 🌊 **Wave Height** with descriptive conditions
- 🌡️ **Water Temperature** with wetsuit recommendations
- 🌅 **Tide Height** with Low/Mid/High labels
- 💨 **Wind Speed & Direction**
- ⭐ **Overall Rating** (0–100 score)
- 🏆 **Best Spot Recommendation** with detailed reasoning
- 📋 **All Spots Comparison Table** ranked by score
- 📱 **Installable on any phone** as a PWA
- 📡 **Works offline** after first load
- 🎨 **Ocean-themed dark UI** with animated waves

### Surf Spots

- Sebastian Inlet
- Cocoa Beach
- Satellite Beach
- Melbourne Beach
- 2nd Light
- Playalinda Beach

---

## 🔧 Customization

### Add/Remove Surf Spots
Edit the `spots` array and `spotBias` object in `index.html`.

### Update Cache
When you make changes, update `CACHE_VERSION` in `sw.js` to bust the old cache:
```js
const CACHE_VERSION = 'surf-report-v1.1';  // bump this
```

---

## 📄 License

Free to use and modify. Surf safe! 🤙
