# 🎵 Music Playlist Manager

A React-based music player web app that lets users search, add, and manage songs with real audio playback.

## 🚀 Features

* ✅ Search songs via iTunes API
* ✅ Add songs manually with custom URL
* ✅ Real audio playback using HTML5 Audio API
* ✅ Play / Pause controls
* ✅ Next / Previous controls
* ✅ Shuffle and loop modes
* ✅ Progress bar with time display
* ✅ Playlist management — delete, move to top, play next
* ✅ Album art display
* ✅ Persistent playlist using localStorage
* ✅ Slide-in playlist drawer with mini player

## 🛠️ Built With

* **React 18 + Vite** — frontend framework and development environment
* **useReducer + useContext** — state management
* **HTML5 Audio API** — real audio playback
* **iTunes Search API** — song discovery
* **localStorage** — playlist persistence
* **CSS** — responsive UI and styling

## 💡 Key Concepts Used

* **useReducer** — manages complex playlist and player state
* **useContext** — shares player state across components
* **HTML5 Audio API** — controls audio playback and progress
* **iTunes API** — searches and retrieves song information
* **localStorage + JSON** — saves playlist data across page refreshes
* **Conditional Rendering** — dynamically displays player and playlist states
* **Component-based architecture** — separates UI and functionality into reusable components

## 📁 Project Structure

```text
music-playlist-manager/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🏃 How to Run

Clone the repo:

```bash
git clone https://github.com/shibaan1/MUSIC-PLAYLIST-MANAGER.git
cd MUSIC-PLAYLIST-MANAGER
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

## 🎧 How to Use

1. Click **Open Playlist** to open the playlist drawer.
2. Search for songs using the search bar.
3. Click **ADD** to add a song to the playlist.
4. Click the play button on any song to start playback.
5. Use the main controls to play, pause, skip, shuffle, or loop.
6. Manage songs directly from the playlist drawer.

## 🤖 Development Process

This project was built with AI-assisted guidance. Claude (by Anthropic) was used as a mentor throughout development — asking questions, reviewing code, pointing out mistakes, and pushing for deeper understanding. Every line of code was written by the developer; the AI guided the thinking process, not the implementation.

---

*Built by @shibaan1 — One commit at a time*