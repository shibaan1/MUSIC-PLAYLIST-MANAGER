import React, { useContext, useRef } from 'react'
import { PlaylistContext } from '../context/playlistContext'

// NowPlaying.jsx to display the progress bar using state.currentTime and state.duration.

// Two things needed:

// Display formatted time — convert seconds to 0:00 format for both current time and duration
// Update the progress bar fill width — the fill div should have a width percentage based on how far through the song you are

// For the width calculation think about this: if currentTime is 30 seconds and duration is 180 seconds, what percentage is that?

// And for formatting time — 90 seconds should display as 1:30. How do you calculate minutes and seconds from a total seconds number?

const NowPlaying = ({ onOpenDrawer }) => {

  const { state, dispatch } = useContext(PlaylistContext)

  const selectedSong = state.songs.find((song) => song.id === state.currentSongId)

  const progressPercent = (state.currentTime / state.duration) * 100

  function handleClick() {
    if (state.isPlaying) {

      dispatch({ type: 'PAUSE_SONG' })
    }
    else {
      dispatch({ type: 'PLAY_SONG', payload: selectedSong.id })
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
      <button onClick={onOpenDrawer}>open playlist</button>
      <img src="" alt="" />

      {!selectedSong ? (<p>no song to display</p>) : (

        <div>
          <div>
            <p>{selectedSong?.title}</p>
            <p> {selectedSong?.artist}</p>
          </div>

          <div>
            <span>{timeConvert(state.currentTime)}</span>
            <div className='progressbar'>
              <div className='progress-fill' style={{ width: `${progressPercent}%` }}></div>
            </div>
            <span>{timeConvert(state.duration)}</span>
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
