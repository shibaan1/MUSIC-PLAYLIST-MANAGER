import { useState } from 'react'
import './App.css'
import PlaylistProvider from './context/playlistContext'
import NowPlaying from './components/NowPlaying'
import PlaylistDrawer from './components/PlaylistDrawer'

// Import PlaylistProvider
// Import NowPlaying and PlaylistDrawer
// useState for isDrawerOpen
// Wrap everything in PlaylistProvider
// // Render NowPlaying and PlaylistDrawer



function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
   <PlaylistProvider>
    <NowPlaying onOpenDrawer={() => setIsDrawerOpen(true)}/>
    <PlaylistDrawer isOpen = {isDrawerOpen} onClose={() => setIsDrawerOpen(false)}/>
   </PlaylistProvider>
      

    </>
  )
}

export default App
