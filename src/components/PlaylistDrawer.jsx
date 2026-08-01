import React, { useContext, useState } from 'react'
import SongForm from './SongForm'
import { PlaylistContext } from '../context/playlistContext'
import SongItem from './SongItem'

const PlaylistDrawer = ({ isOpen, onClose }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const { state, dispatch } = useContext(PlaylistContext)
  const currSong = state.songs.find((song) => song.id === state.currentSongId)
  const progressPercent = (state.currentTime / state.duration) * 100


  function handleclick() {
    if (state.isPlaying) {
      dispatch({ type: 'PAUSE_SONG' })
    }

    else {
      dispatch({ type: 'PLAY_SONG', payload: state.currentSongId })
    }
  }

  function timeConvert(inpTime) {
    const minutes = Math.floor(inpTime / 60)
    const seconds = Math.floor(inpTime % 60)

    const frmtSec = String(seconds).padStart(2, '0')

    return `${minutes}:${frmtSec}`
  }

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
            <p>{currSong?.title}</p>
            <div className='progressbar'>
              <div className='progress-fill' style={{ width: `${progressPercent}%` }}></div>
            </div>
            <button onClick={handleclick}>play/pause</button>
          </div>
        </div>
      }
    </>
  )
}

export default PlaylistDrawer
