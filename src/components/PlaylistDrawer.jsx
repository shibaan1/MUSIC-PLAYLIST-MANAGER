import React, { useContext, useState } from 'react'
import SongForm from './SongForm'
import { PlaylistContext } from '../context/playlistContext'
import SongItem from './SongItem'

// Import useContext from React and PlaylistContext
// Import SongItem
// Get state from context
// Replace the three hardcoded song-item divs with state.songs.map()
// Pass all required props to SongItem

const PlaylistDrawer = ({ isOpen, onClose }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const { state } = useContext(PlaylistContext)


  return (
    <>
      {isOpen &&
        <div>
          <button onClick={onClose}>close</button>

          <div>
            <input type="search" placeholder='search song...' />

            <button onClick={() => setIsModalOpen(true)}>add song ++++</button>

            {isModalOpen && <SongForm onClose={() => setIsModalOpen(false)} />}
          </div>

          <hr />

          <div className='songList'>

            {state.songs.map((song) => (

              <SongItem
                key={song.id}
                id={song.id}
                title={song.title}
                artist={song.artist}
                url={song.url}
              />
            ))}
          </div>

          <div>
            <img src="" alt="" />
            <p>song name</p>
            <div className='progressbar'></div>
            <button>play/pause</button>
          </div>

        </div>

      }
    </>
  )
}

export default PlaylistDrawer
