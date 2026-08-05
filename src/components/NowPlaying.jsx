import React, { useContext, useRef } from 'react'
import { PlaylistContext } from '../context/playlistContext'
import './NowPlaying.css'

const NowPlaying = ({ onOpenDrawer }) => {

  const { state, dispatch } = useContext(PlaylistContext)

  const selectedSong = state.songs.find((song) => song.id === state.currentSongId)
  const progressPercent = (state.currentTime / state.duration) * 100

  function handlePrevious() {

    const currSongInd = state.songs.findIndex((song) => song.id === state.currentSongId)

    if (currSongInd === 0) { return }

    const prevSong = state.songs[currSongInd - 1].id

    dispatch({ type: 'PLAY_SONG', payload: prevSong })
  }

  function handleNext() {
    let nxtSong
    const currSongInd = state.songs.findIndex((song) => song.id === state.currentSongId)

    if (currSongInd === state.songs.length - 1) { return }

    if (state.shuffle) {
      const songCount = state.songs.length

      nxtSong = state.songs[Math.floor(Math.random() * songCount)].id
    }

    else {
      nxtSong = state.songs[currSongInd + 1].id
    }

    dispatch({ type: 'PLAY_SONG', payload: nxtSong })

  }

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

  function handleShuffle() {

    dispatch({ type: 'TOGGLE_SHUFFLE' })

  }

  function handleLoop() {
    dispatch({ type: 'TOGGLE_LOOP' })
  }
  return (
    <div className='now-playing'>
      <button className='playlist-btn' onClick={onOpenDrawer}>open playlist</button>
      <img src="" alt="" className='now-playing-img' />

      {!selectedSong ? (<p>no song to display</p>) : (

        <div className='song-info'>
          <div>
            <p className='song-title'>{selectedSong?.title}</p>
            <p className='song-artist'> {selectedSong?.artist}</p>
          </div>

          <div className='progress-container'>
            <span>{timeConvert(state.currentTime)}</span>
            <div className='progressbar'>
              <div className='progressbar-fill' style={{ width: `${progressPercent}%` }}></div>
            </div>
            <span>{timeConvert(state.duration)}</span>
          </div>

          <div className='controls'>
            <button className={`shuffle-btn ${state.shuffle ? 'active' : ''}`} onClick={handleShuffle}>{state.shuffle === true ? ('SHUFFLE ON') : ('SHUFFLE OFF')}</button>
            <div className='main-ctrl-btn'>
              <button className='previous-btn' onClick={handlePrevious}>previous</button>
              <button className='play-btn' onClick={handleClick}>{state.isPlaying ? '⏸' : '▶'}</button>
              <button className='next-btn' onClick={handleNext}>next</button>
            </div>
            <button className={`loop-btn ${state.loop ? 'active' : ''}`} onClick={handleLoop}>{state.loop === true ? ('LOOP ON') : ('LOOP OFF')}</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NowPlaying
