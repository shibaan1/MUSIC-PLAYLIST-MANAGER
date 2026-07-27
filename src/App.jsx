import { useState } from 'react'
import './App.css'
import PlaylistProvider from './context/playlistContext'
import NowPlaying from './components/NowPlaying'
import PlaylistDrawer from './components/PlaylistDrawer'


function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <PlaylistProvider>
        <NowPlaying onOpenDrawer={() => setIsDrawerOpen(true)} />
        <PlaylistDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      </PlaylistProvider>

    </>
  )
}

export default App
