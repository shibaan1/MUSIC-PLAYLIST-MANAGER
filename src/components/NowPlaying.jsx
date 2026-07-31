import React, { useContext, useRef } from 'react'
import { PlaylistContext } from '../context/playlistContext'

const NowPlaying = ({ onOpenDrawer }) => {

  const { state, dispatch } = useContext(PlaylistContext)

  const selectedSong = state.songs.find((song) => song.id === state.currentSongId)

  function handleClick() {
    if (state.isPlaying) {

      dispatch({ type: 'PAUSE_SONG'  })
    }
    else {
      dispatch({ type: 'PLAY_SONG', payload: selectedSong.id })
    }

  }

  return (
    <>
      <button onClick={onOpenDrawer}>open playlist</button>
      <img src="" alt="" />

      {!selectedSong ? (<p>no song to display</p>) : (

        <div>
          <div>
            <p>{selectedSong?.title}</p>
            <p> {selectedSong?.artist}</p>
          </div>

          <div>
            <span>0:00</span>
            <div className='progressbar'>
              <div className='progress-fill'></div>
            </div>
            <span>0:00</span>
          </div>

          <div>
            <button>shuffle</button>
            <button>previous</button>
            <button onClick={handleClick}>play/pause</button>
            <button>next</button>
            <button>loop</button>
          </div>
        </div>
      )}
    </>
  )
}

export default NowPlaying
