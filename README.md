# YouTube Keyword Filter & Shorts Blocker Extension

This Chrome extension helps you **focus on relevant YouTube content** by:
- ✅ Blocking YouTube Shorts
- ✅ Blurring videos that don't match your keywords
- ✅ Disabling all sidebar buttons like "Subscriptions", "History", etc.
- ✅ Asking for keywords via a popup to control what you see

---

## 📦 Features
- 🔍 Blur all videos except those containing your keywords
- ⛔ Block Shorts completely (links, videos, navigation)
- 🚫 Disable clickable sidebar items
- 💬 Easy keyword input from the popup
- 🔄 Automatically applies filters on YouTube page changes

---

## 🚀 Installation
1. Clone or download this repo.
2. Open Chrome and go to: `chrome://extensions`
3. Enable **Developer Mode** (top right).
4. Click **"Load unpacked"** and select the extension folder.
5. Go to [YouTube](https://youtube.com) — the extension activates automatically.

---

## 🧪 Usage
1. Click the extension icon.
2. Enter **comma-separated keywords** (e.g. `tech, science, news`) into the popup.
3. Click **Save & Apply**.
4. YouTube will reload, and:
   - Videos without those keywords will be blurred and unclickable.
   - Shorts will be completely removed or blocked.

---

## 📁 File Structure
shortsblocker/
├── manifest.json # Extension config
├── content.js # Logic that runs on YouTube pages
├── popup.html # Extension popup UI
├── popup.css # Popup styling
├── popup.js # Popup behavior and storage
└── icon.png # Extension icon

---

## ⚙️ Permissions Used
- `storage` – Saves your keyword preferences
- `scripting` – Injects filtering logic into YouTube
- `tabs` – Reloads page after keyword updates

---

## 🧼 Notes
- Works best with English titles
- Will not block embedded YouTube videos on other websites
- If YouTube changes their HTML structure, the extension may need updates
  
---

## 🛠 Future Improvements (optional)
- 🔘 Toggle extension on/off
- 🌙 Dark mode popup
- 📁 Save/load multiple keyword sets
- 🎯 Channel or tag-specific filters

---

## 📄 License
MIT – Feel free to use, modify, and share!

---

## 🙌 Credits
Built with ❤️ using JavaScript and Chrome Extension APIs.

